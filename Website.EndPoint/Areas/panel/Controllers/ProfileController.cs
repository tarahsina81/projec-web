using Common.Dto;
using Domain.User;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using Website.EndPoint.Areas.panel.Models.Dto;

namespace Website.EndPoint.Areas.panel.Controllers
{
    [Area("panel")]
    [Authorize(Roles = "Admin,User")]
    public class ProfileController : Controller
    {
        #region Fields
        private readonly UserManager<User> _userManager;
        #endregion

        #region Ctor
        public ProfileController(UserManager<User> userManager)
        {
            _userManager = userManager;
        }
        #endregion

        #region Methods

        public IActionResult Index()
        {
            return View();
        }
        #region Edit
        public IActionResult Edit()
        {
            var userId = _userManager.GetUserId(User);
            var user = _userManager.FindByIdAsync(userId).Result;

            UserEditDto userEdit = new UserEditDto()
            {
                Email = user.Email,
                FirstName = user.FirstName,
                Id = user.Id,
                LastName = user.LastName,
                PhoneNumber = user.PhoneNumber,
                UserName = user.UserName,
                UserStatus = user.UserStatus,
            };
            return View(userEdit);

        }
        [HttpPost]
        public IActionResult Edit(UserEditDto userEdit)
        {
            var userId = _userManager.GetUserId(User);
            var user = _userManager.FindByIdAsync(userId).Result;
            user.FirstName = userEdit.FirstName;
            user.LastName = userEdit.LastName;
            user.PhoneNumber = userEdit.PhoneNumber;
            user.Email = userEdit.Email;
            user.UserName = userEdit.UserName;
            user.UserStatus = userEdit.UserStatus;

			if (user.UserStatus == 0)
            {
				if (userEdit.FirstName == null || userEdit.LastName == null || userEdit.Email == null)
				{
					return Json(new ReslutDto
					{
						IsSuccess = false,
						Message = "فیلد ها نمی تواند خالی باشد, لطفا اطلاعات خود کامل را تکمیل کنید",
					});
				}
                else
                {
					user.UserStatus = 1;

				}
			}

				if (user.UserStatus == 1)
                {

				var result = _userManager.UpdateAsync(user).Result;

				if (result.Succeeded)
				{
					user.UserStatus = 1;
					return Json(new ReslutDto
					{
						IsSuccess = true,
						Message = "اطلاعات جهت بررسی به کارشناس مربوطه ارسال گردید",
					});
				}
				string message = "";
				foreach (var item in result.Errors.ToList())
				{
					message += item.Description + Environment.NewLine;
				}
				TempData["Message"] = message;
				return Json(new ReslutDto
				{
					IsSuccess = false,
					Message = "اطلاعات بروزرسانی نشد",
				});
		}
            else if(user.UserStatus == 2)
            {
				var result = _userManager.UpdateAsync(user).Result;

                if (result.Succeeded)
                {
                    return Json(new ReslutDto
                    {
                        IsSuccess = true,
                        Message = "اطلاعات با موفقیت بروزرسانی شد",
                    });
                }
                string message = "";
                foreach (var item in result.Errors.ToList())
                {
                    message += item.Description + Environment.NewLine;
                }
                TempData["Message"] = message;
                return Json(new ReslutDto
                {
                    IsSuccess = false,
                    Message = "اطلاعات بروزرسانی نشد",
                });
            }
            else
            {
				return Json(new ReslutDto
				{
					IsSuccess = false,
					Message = "اطلاعات بروزرسانی نشد",
				});
			}
		}

        #endregion

        #endregion
    }
}

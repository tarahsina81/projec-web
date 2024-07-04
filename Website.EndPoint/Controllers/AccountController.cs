using Application.Authentication;
using Common.Dto;
using Domain.Roles;
using Domain.User;
using Domain.Users;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Win32;
using NuGet.Protocol.Plugins;
using System.Drawing.Text;
using System.Security.Claims;

namespace Website.EndPoint.Controllers
{
    public class AccountController : Controller
    {
        #region Fields
        private readonly UserManager<User> _userManager;
        private readonly SignInManager<User> _signInManager;
        private readonly IConfiguration _configuration;
        private readonly UserRepository _userRepository;
        private IList<string>? UserRoles { get; set; }
        #endregion Fields

        #region Ctor
        public AccountController(UserManager<User> userManager, SignInManager<User> signInManager, IConfiguration configuration, UserRepository userRepository)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _configuration = configuration;
            _userRepository = userRepository;
        }
        #endregion Ctor

        #region Methods
        public IActionResult Index()
        {
            return View();
        }
        #endregion

        #region Login
        [HttpGet]
        public IActionResult Login()
        {
            if (User.Identity.IsAuthenticated)
            {
				return RedirectToAction("Index", "Home", new { area = "Panel" });
			}
			return View();
        }

        [HttpPost]
        public IActionResult Login(LoginDto login)
        {
            var result = _userRepository.GetCode(login.PhoneNumber);
            if (result != null)
            {
                TempData["PhoneNumber"] = login.PhoneNumber;
                return RedirectToAction("LoginGetCode", "Account");

            }

            return View();
        }
        #endregion Login

        #region LoinGetCode

        [HttpGet]
        public IActionResult LoginGetCode(string returnUrl = "/panel")
        {
            if (TempData.ContainsKey("PhoneNumber"))
            {
                return View(new LoginDto
                {
                    PhoneNumber = TempData["PhoneNumber"].ToString(),
                    ReturnUrl = returnUrl,
                });

            }
            else
            {
                return RedirectToAction("Login", "Account");
            }

        }

        [HttpPost]
        public async Task<IActionResult> LoginGetCode(LoginDto login)
        {
            var loginResult = await _userRepository
                .LoginTwo(login.PhoneNumber, login.SmsCode);

            if (loginResult.IsSuccess)
            {
                var user = await _userManager.Users
                    .FirstOrDefaultAsync(p => p.PhoneNumber
                    .Equals(login.PhoneNumber));

                if (user != null)
                {
                    await _signInManager
                        .SignOutAsync();

                    try
                    {
                        await _signInManager
                        .SignInAsync(user, false);

                        UserRoles = await _userManager
                       .GetRolesAsync(user);

                        return Redirect(login.ReturnUrl);
                    }
                    catch(Exception ex)
                    {
                        //handle singin issue's
                    }

                }

                else
                {
                    User userregister = new User()
                    {
                        Email = null,
                        SecurityStamp = Guid.NewGuid().ToString(),
                        UserName = login.PhoneNumber,
                        PhoneNumber = login.PhoneNumber,
                    };

                    var result = await _userManager
                        .CreateAsync(userregister);

                    if (result.Succeeded)
                    {
                        await _userManager
                            .AddToRoleAsync(userregister, "User");

                        await _signInManager
                            .SignInAsync(userregister, false);

						return RedirectToAction("Index", "Home", new { area = "Panel" });
					}
					string message = "";
                    foreach (var item in result.Errors.ToList())
                    {
                        message += item.Description + Environment.NewLine;
                    }
                    TempData["Message"] = message;
                    return View(login);
                }
            }
            return View("Error Invlid Code !");
        }
        #endregion LoinGetCode

        #region Logout


        public IActionResult LogOut()
        {
            {
                _signInManager.SignOutAsync();
                return RedirectToAction("Login", "Account");
            }

        }
        #endregion Logout

    }
}

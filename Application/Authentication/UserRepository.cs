using Application.Interfaces.Contexts;
using Domain.User;
using Domain.Users;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Authentication
{
    public class UserRepository
    {
        #region Fields

        private readonly IDataBaseContext _databasecontext;

        #endregion Fields

        #region Ctor

        public UserRepository( IDataBaseContext databasecontext)
        {
            _databasecontext = databasecontext;
        }

        #endregion


        #region Authetication Methods
        public string GetCode(string PhoneNumber)
        {
            Random random = new Random();
            string code = random.Next(1000000, 9999999).ToString();

            SmsService smsService = new SmsService();
            //smsService.SendAsync(PhoneNumber, code);

            SmsCode smsCode = new SmsCode()
            {
                Code = code,
                InsertDate = DateTime.Now,
                PhoneNumber = PhoneNumber,
                RequestCount = 0,
                Used = false,
            };
            _databasecontext.SmsCodes.Add(smsCode);
            _databasecontext.SaveChanges();

            return code;
        }
        public async Task<LoginDto> LoginTwo(string phoneNumber, string Code)
        {
            var smsCode = _databasecontext.SmsCodes.Where(p => p.PhoneNumber == phoneNumber
              && p.Code == Code).FirstOrDefault();
            if (smsCode == null)
            {
                return new LoginDto
                {
                    IsSuccess = false,
                    Message = "کد وارد شده صحیح نیست!",

                };
            }
            else
            {
                if (smsCode.Used == true)
                {
                    return new LoginDto
                    {
                        IsSuccess = false,
                        Message = "کد وارد شده صحیح نیست!",

                    };
                }

                smsCode.RequestCount++;

                smsCode.Used = true;
                _databasecontext.SaveChanges();
                return new LoginDto
                {
                    IsSuccess = true,
                };

            }

        }

        #endregion Authetication Methods


        #region Dto
        public class LoginDto
        {
            public bool IsSuccess { get; set; }
            public string? Message { get; set; }
            public User? User { get; set; }
        }
        #endregion Dto
    }
}

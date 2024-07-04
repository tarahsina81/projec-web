using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Common.Dto
{
    public class VerifyPhoneNumberDto
    {
        public string Password { get; set; }
        public string PhoneNumber { get; set; }
        [Required(ErrorMessage = "کد را وارد کنید")]
        [Display(Name = "کد تایید")]
        [MinLength(6, ErrorMessage = "کد ۶ رقم است")]
        [MaxLength(6, ErrorMessage = "کد ۶ رقم است")]
        public string Code { get; set; }
        public string ReturnUrl { get; set; }
    }
}

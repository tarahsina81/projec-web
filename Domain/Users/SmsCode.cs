using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Users
{
    public class SmsCode
    {
        public int Id { get; set; }
        public string PhoneNumber { get; set; }
        public string Code { get; set; }
        public bool Used { get; set; }
        public int RequestCount { get; set; }
        public DateTime InsertDate { get; set; }
    }
}

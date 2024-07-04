using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.Net;

namespace Application.Authentication
{
    public class SmsService
    {
        public void SendAsync(string PhoneNumber, string Code)
        {
            var Client = new WebClient();
            string url = $""; //Sms Panel Area
            var content = Client.DownloadString(url);
        }
    }
}

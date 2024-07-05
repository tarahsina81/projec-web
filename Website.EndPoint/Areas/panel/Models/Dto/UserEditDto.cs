using static Domain.User.User;

namespace Website.EndPoint.Areas.panel.Models.Dto
{
    public class UserEditDto
    {
        public string Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string UserName { get; set; }
        public string PhoneNumber { get; set; }
        public int UserStatus { get; set; } = 0;

    }
}

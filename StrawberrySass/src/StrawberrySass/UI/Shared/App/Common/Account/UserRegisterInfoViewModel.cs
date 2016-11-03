using System.ComponentModel.DataAnnotations;

namespace StrawberrySass.UI.Shared.App.Common.Account
{
    public class UserRegisterInfoViewModel
    {
        [Required]
        [RegularExpression("[\\w\\.\\-]+@[\\w\\-]+\\.\\w{2,4}")]
        public string Email { get; set; }

        [Required]
        [StringLength(100, MinimumLength = 4)]
        public string UserName { get; set; }

        [Required]
        [StringLength(100, MinimumLength = 6)]
        [RegularExpression("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*]).*")]
        public string Password { get; set; }
    }
}

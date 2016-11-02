using System.ComponentModel.DataAnnotations;

namespace StrawberrySass.UI.Shared.App.Common.Account
{
    public class RegisterViewModel
    {
        [Required]
        [RegularExpression("[\\w\\.\\-]+@[\\w\\-]+\\.\\w{2,4}")]
        public string Email { get; set; }

        [Required]
        [StringLength(100, MinimumLength = 6)]
        public string Password { get; set; }
    }
}

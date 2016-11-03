using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

namespace StrawberrySass.UI.Shared.App.Common.Account
{
    public class UserViewModel
    {
        [Required]
        [RegularExpression("[\\w\\.\\-]+@[\\w\\-]+\\.\\w{2,4}")]
        public string Email { get; set; }

        [Required]
        [StringLength(100, MinimumLength = 6)]
        [RegularExpression("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*]).*")]
        public string Password { get; set; }

        public IEnumerable<string> Roles { get; set; }
    }
}

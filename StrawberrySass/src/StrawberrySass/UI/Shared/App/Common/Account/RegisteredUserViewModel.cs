using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace StrawberrySass.UI.Shared.App.Common.Account
{
    public class RegisteredUserViewModel
    {
        public string UserName { get; set; }

        public IEnumerable<string> Roles { get; set; }
    }
}

using System.Collections.Generic;

namespace StrawberrySass.UI.Home.App.Members
{
    public class MemberViewModel
    {
        public string Email { get; set; }

        public string UserName { get; set; }

        public IEnumerable<IDictionary<string, bool>> Roles { get; set; }
    }
}

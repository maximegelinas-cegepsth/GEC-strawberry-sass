using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using StrawberrySass.Models;
using StrawberrySass.UI.Shared.App.Common.Account;

namespace StrawberrySass.UI.Home.App.Members
{
    public class MembersController : Controller
    {
        private readonly UserManager<ApplicationUser> _userManager;

        public MembersController(UserManager<ApplicationUser> userManager)
        {
            _userManager = userManager;
        }

        [Route("templates/home/members")]
        [Authorize(Roles = "Administrator")]
        public IActionResult MembersComponent() => PartialView("~/UI/Home/App/Members/MembersComponent.cshtml");

        [Route("api/members")]
        [Authorize(Roles = "Administrator")]
        public IActionResult GetAll()
        {
            //var users = new List<UserViewModel>();

            //foreach (var user in _userManager.Users.ToList())
            //{
            //    users.Add(new UserViewModel()
            //    {
            //        Email = user.Email,
            //        Roles = await _userManager.GetRolesAsync(user)
            //    });
            //}

            return Json(_userManager.Users.Select(u => new MemberViewModel()
            {
                UserName = u.UserName
            }));
        }

    }
}

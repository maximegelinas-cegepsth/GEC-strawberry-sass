using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using NuGet.Versioning;
using StrawberrySass.Models;

namespace StrawberrySass.UI.Home.App.Members
{
    public class MembersController : Controller
    {
        private readonly RoleManager<IdentityRole> _roleManager;
        private readonly UserManager<ApplicationUser> _userManager;

        public MembersController(
            UserManager<ApplicationUser> userManager,
            RoleManager<IdentityRole> roleManager)
        {
            _roleManager = roleManager;
            _userManager = userManager;
        }

        [HttpGet]
        [Route("templates/home/member")]
        [Authorize(Roles = "Administrator")]
        public IActionResult MemberComponent() => PartialView("~/UI/Home/App/Members/MemberComponent.cshtml");

        [HttpGet]
        [Route("templates/home/members")]
        [Authorize(Roles = "Administrator")]
        public IActionResult MembersComponent() => PartialView("~/UI/Home/App/Members/MembersComponent.cshtml");

        [HttpDelete]
        [Route("api/members/{key}")]
        [Authorize(Roles = "Administrator")]
        public async Task<IActionResult> Delete(string key)
        {
            var user = _userManager.Users.Single(u => u.UserName == key);

            var result = await _userManager.DeleteAsync(user);

            if (!result.Succeeded) return BadRequest();

            return Json(true);
        }

        [HttpGet]
        [Route("api/members/{key}")]
        [Authorize(Roles = "Administrator")]
        public async Task<IActionResult> Get(string key)
        {
            var user = _userManager.Users.Single(u => u.UserName == key);
            var roles = _roleManager.Roles.ToList().Select(r => r.Name);
            var userRoles = await _userManager.GetRolesAsync(user);

            return Json(new MemberViewModel()
            {
                UserName = user.UserName,
                Email = user.Email,
                Roles = roles.Select(r => new Dictionary<string, bool>()
                {
                    { r, userRoles.Any(ur => ur == r) }
                })
            });
        }

        [HttpGet]
        [Route("api/members")]
        [Authorize(Roles = "Administrator")]
        public IActionResult GetAll()
        {
            return Json(_userManager.Users.Select(u => new MemberViewModel()
            {
                UserName = u.UserName
            }));
        }

        [HttpPut]
        [Route("api/members/{key}")]
        [Authorize(Roles = "Administrator")]
        public async Task<IActionResult> Update(string key)
        {
            var user = _userManager.Users.Single(u => u.UserName == key);

            var result = await _userManager.UpdateAsync(user);

            if (!result.Succeeded) return BadRequest();

            return await Get(key);
        }

    }
}

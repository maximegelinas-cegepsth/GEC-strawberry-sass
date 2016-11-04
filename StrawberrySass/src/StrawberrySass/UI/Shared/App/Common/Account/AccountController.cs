using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using StrawberrySass.Models;

namespace StrawberrySass.UI.Shared.App.Common.Account
{
    public class AccountController : Controller
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly SignInManager<ApplicationUser> _signInManager;

        public AccountController(
            UserManager<ApplicationUser> userManager,
            SignInManager<ApplicationUser> signInManager)
        {
            _userManager = userManager;
            _signInManager = signInManager;
        }

        [HttpGet]
        [Route("templates/shared/login")]
        public IActionResult LoginComponent() => PartialView("~/UI/Shared/App/Common/Account/LoginComponent.cshtml");

        [HttpGet]
        [Route("templates/shared/register")]
        public IActionResult RegisterComponent() => PartialView("~/UI/Shared/App/Common/Account/RegisterComponent.cshtml");

        [HttpPost]
        [Route("api/account/login")]
        public async Task<IActionResult> Login([FromBody] UserLoginInfoViewModel model)
        {
            if (!ModelState.IsValid) return BadRequest();

            var result = await _signInManager.PasswordSignInAsync(model.UserName, model.Password, isPersistent: false, lockoutOnFailure: false);

            if (!result.Succeeded) return BadRequest();

            var user = _userManager.Users.SingleOrDefault(u => u.UserName == model.UserName);

            return Json(new RegisteredUserViewModel()
            {
                UserName = user.UserName,
                Roles = await _userManager.GetRolesAsync(user)
            });
        }

        [HttpPost]
        [Route("api/account/register")]
        public async Task<IActionResult> Register([FromBody] UserRegisterInfoViewModel model)
        {
            if (!ModelState.IsValid) return BadRequest();

            var user = new ApplicationUser { UserName = model.UserName, Email = model.Email };
            var result = await _userManager.CreateAsync(user, model.Password);

            if (!result.Succeeded) return BadRequest();

            result = await _userManager.AddToRoleAsync(user, "Member");

            if (!result.Succeeded) return BadRequest();

            await _signInManager.SignInAsync(user, isPersistent: false);

            return Json(new RegisteredUserViewModel()
            {
                UserName = user.UserName,
                Roles = new[] { "Member" }
            });
        }
    }
}

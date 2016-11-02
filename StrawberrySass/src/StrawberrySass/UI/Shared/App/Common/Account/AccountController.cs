using Microsoft.AspNetCore.Mvc;

namespace StrawberrySass.UI.Home.App.Account
{
    public class AccountController : Controller
    {
        [Route("templates/home/register")]
        public IActionResult RegisterComponent() => PartialView("~/UI/Home/App/Account/RegisterComponent.cshtml");
    }
}

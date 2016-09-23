using Microsoft.AspNetCore.Mvc;

namespace StrawberrySass.UI.Home.App.About
{
    public class AboutController : Controller
    {
        [Route("template/home/about")]
        public IActionResult AboutComponent() => PartialView("~/UI/Home/App/About/AboutComponent.cshtml");
    }
}

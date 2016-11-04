using Microsoft.AspNetCore.Mvc;

namespace StrawberrySass.UI.Home.App.ContactUs
{
    public class ContactUsController : Controller
    {
        [HttpGet]
        [Route("templates/home/contact-us")]
        public IActionResult ContactUsComponent() => PartialView("~/UI/Home/App/ContactUs/ContactUsComponent.cshtml");
    }
}
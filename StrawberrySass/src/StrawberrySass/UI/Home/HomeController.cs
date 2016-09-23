using Microsoft.AspNetCore.Mvc;

namespace StrawberrySass.UI.Home
{
    public class HomeController : Controller
    {
        public IActionResult Index() => View();
    }
}

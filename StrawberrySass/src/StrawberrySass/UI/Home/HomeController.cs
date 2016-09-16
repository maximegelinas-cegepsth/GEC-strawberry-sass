using Microsoft.AspNetCore.Mvc;

namespace AspNetCoreAngular2WebpackApp.UI.Home
{
    public class HomeController : Controller
    {
        public IActionResult Index() => View();
    }
}

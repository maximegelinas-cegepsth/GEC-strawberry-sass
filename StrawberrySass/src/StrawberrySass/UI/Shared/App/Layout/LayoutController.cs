using Microsoft.AspNetCore.Mvc;

namespace StrawberrySass.UI.Shared.App.Layout
{
    public class LayoutController : Controller
    {
        [HttpGet]
        [Route("templates/shared/layout")]
        public IActionResult LayoutComponent() => PartialView("~/UI/Shared/App/Layout/LayoutComponent.cshtml");

    }
}

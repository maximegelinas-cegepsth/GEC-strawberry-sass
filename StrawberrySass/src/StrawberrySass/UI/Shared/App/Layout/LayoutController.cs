using Microsoft.AspNetCore.Mvc;

namespace StrawberrySass.UI.Shared.App.Layout
{
    public class Hyperlink
    {
        public string DisplayedText { get; set; }
        public string NavigationUrl { get; set; }
    }

    public class LayoutController : Controller
    {
        [Route("templates/shared/layout")]
        public IActionResult LayoutComponent()
        {
            ViewBag.MenuLinks = new[]
            {
                new Hyperlink { NavigationUrl = "/welcome", DisplayedText = "Accueil" },
                new Hyperlink { NavigationUrl = "/about", DisplayedText = "À propos" },
                new Hyperlink { NavigationUrl = "/contact-us", DisplayedText = "Nous joindre" },
                new Hyperlink { NavigationUrl = "/forum", DisplayedText = "Forum" },
                new Hyperlink { NavigationUrl = "/members", DisplayedText = "Membres" }
            };

            return PartialView("~/UI/Shared/App/Layout/LayoutComponent.cshtml");
        }

        [Route("templates/shared/login")]
        public IActionResult LoginComponent() => PartialView("~/UI/Shared/App/Layout/LoginComponent.cshtml");
    }
}
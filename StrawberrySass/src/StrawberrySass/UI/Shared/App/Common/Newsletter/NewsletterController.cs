using Microsoft.AspNetCore.Mvc;

namespace StrawberrySass.UI.Shared.App.Common.Newsletter
{
    public class NewsletterController : Controller
    {
        [HttpGet]
        [Route("templates/shared/news-subscription")]
        public IActionResult NewsSubscriptionComponent() => PartialView("~/UI/Shared/App/Common/Newsletter/NewsSubscriptionComponent.cshtml");

        [HttpPost]
        [Route("api/newsletter/subscribers")]
        public IActionResult AddSubscriber([FromBody] object model)
        {
            return Json(true);
        }
    }
}

using System.Linq;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using StrawberrySass.Data;
using StrawberrySass.Models.Newsletter;
using StrawberrySass.Services;

namespace StrawberrySass.UI.Home.App.Newsletter
{
    public class NewsletterController : Controller
    {
        private readonly ApplicationDbContext _context;
        private readonly IEmailSender _emailSender;

        public NewsletterController(ApplicationDbContext context, IEmailSender emailSender)
        {
            _context = context;
            _emailSender = emailSender;
        }

        [HttpGet]
        [Route("templates/home/news-subscription")]
        public IActionResult NewsSubscriptionComponent() => PartialView("~/UI/Home/App/Newsletter/NewsSubscriptionComponent.cshtml");

        [HttpGet]
        [Route("templates/home/letter-editor")]
        public IActionResult LetterEditorComponent() => PartialView("~/UI/Home/App/Newsletter/LetterEditorComponent.cshtml");

        [HttpPost]
        [Route("api/newsletter/subscribers")]
        public IActionResult AddSubscriber([FromBody] SubscriberViewModel model)
        {
            if (!ModelState.IsValid || _context.Subscribers.Any(s => s.Email == model.Email)) return BadRequest();

            var subscriber = new Subscriber()
            {
                Email = model.Email
            };

            _context.Subscribers.Add(subscriber);
            _context.SaveChanges();

            return Json(subscriber);
        }

        [HttpPost]
        [Route("api/newsletter/letters")]
        [Authorize(Roles = "Administrator")]
        public IActionResult SendLetter([FromBody] LetterViewModel model)
        {
            if (!ModelState.IsValid) return BadRequest();

            foreach (var subscriber in _context.Subscribers.ToList())
                _emailSender.SendEmailAsync(subscriber.Email, "Strawberry Sass", model.Body);

            return Json(model);
        }
    }
}

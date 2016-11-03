using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace StrawberrySass.UI.Home.App.Forum
{
    public class ForumController : Controller
    {
        [Route("templates/home/forum")]
        [Authorize(Roles = "Administrator,Moderator,Member")]
        public IActionResult ForumComponent() => PartialView("~/UI/Home/App/Forum/ForumComponent.cshtml");
    }
}
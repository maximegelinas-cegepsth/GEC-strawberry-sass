﻿using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace StrawberrySass.UI.Home.App.Members
{
    public class MembersController : Controller
    {
        [Route("templates/home/members")]
        [Authorize(Roles = "Administrator")]
        public IActionResult MembersComponent() => PartialView("~/UI/Home/App/Members/MembersComponent.cshtml");
    }
}

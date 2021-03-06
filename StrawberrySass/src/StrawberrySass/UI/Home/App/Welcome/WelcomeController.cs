﻿using Microsoft.AspNetCore.Mvc;

namespace StrawberrySass.UI.Home.App.Welcome
{
    public class WelcomeController : Controller
    {
        [HttpGet]
        [Route("templates/home/welcome")]
        public IActionResult WelcomeComponent() => PartialView("~/UI/Home/App/Welcome/WelcomeComponent.cshtml");
    }
}
using Microsoft.AspNetCore.Mvc;

namespace StrawberrySass.UI.Shared.App.Common.Surveys
{
    public class SurveysController : Controller
    {
        [HttpGet]
        [Route("templates/shared/survey")]
        public IActionResult SurveyComponent() => PartialView("~/UI/Shared/App/Common/Surveys/SurveyComponent.cshtml");
    }
}

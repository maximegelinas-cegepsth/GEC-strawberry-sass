using System;
using System.Globalization;
using System.Linq;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Localization;
using Microsoft.AspNetCore.Mvc;

namespace StrawberrySass.UI.Shared.App.Common.Culture
{
    public class CultureController : Controller
    {
        [HttpGet]
        [Route("api/cultures")]
        public IActionResult GetAll()
        {
            var cultures = UIRequestLocalizationOptions.Instance.SupportedUICultures
                .Select(c => new CultureInfoViewModel()
                {
                    Code = c.Name,
                    Name = c.DisplayName
                });

            return Json(cultures);
        }

        [HttpPost]
        [Route("api/culture")]
        public IActionResult Set([FromBody] CultureRequestViewModel model)
        {
            Response.Cookies.Append(
                CookieRequestCultureProvider.DefaultCookieName,
                CookieRequestCultureProvider.MakeCookieValue(new RequestCulture(model.Culture)),
                new CookieOptions { Expires = DateTimeOffset.UtcNow.AddYears(1) }
            );

            CultureInfo.CurrentCulture = new CultureInfo(model.Culture);
            CultureInfo.CurrentUICulture = CultureInfo.CurrentCulture;

            return Json(true);
        }
    }
}

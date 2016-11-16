using System.Collections.Generic;
using System.Globalization;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Localization;

namespace StrawberrySass.UI
{
    public class UIRequestLocalizationOptions : RequestLocalizationOptions
    {
        public static UIRequestLocalizationOptions Instance { get; } = new UIRequestLocalizationOptions();

        public new RequestCulture DefaultRequestCulture => new RequestCulture("en");

        public new IList<CultureInfo> SupportedCultures => new[]
        {
            new CultureInfo("en"),
            new CultureInfo("fr")
        };           

        public new IList<CultureInfo> SupportedUICultures => SupportedCultures;

        private UIRequestLocalizationOptions()
        {            
        }
    }
}

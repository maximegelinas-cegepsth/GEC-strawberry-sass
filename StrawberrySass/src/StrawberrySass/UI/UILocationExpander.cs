using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc.Razor;

namespace StrawberrySass.UI
{
    public class UILocationExpander : IViewLocationExpander
    {
        public void PopulateValues(ViewLocationExpanderContext context) { }

        public IEnumerable<string> ExpandViewLocations(ViewLocationExpanderContext context, IEnumerable<string> viewLocations)
        {
            return new[]
            {
                "~/UI/{1}/{0}.cshtml",
                "~/UI/Shared/{0}.cshtml"
            };
        }
    }
}

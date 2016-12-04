using System.ComponentModel.DataAnnotations;

namespace StrawberrySass.UI.Shared.App.Common.Newsletter
{
    public class LetterViewModel
    {
        [Required]
        public string Body { get; set; }
    }
}

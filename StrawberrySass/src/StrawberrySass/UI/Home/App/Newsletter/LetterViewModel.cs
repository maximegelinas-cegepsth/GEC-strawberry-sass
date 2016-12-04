using System.ComponentModel.DataAnnotations;

namespace StrawberrySass.UI.Home.App.Newsletter
{
    public class LetterViewModel
    {
        [Required]
        public string Body { get; set; }
    }
}

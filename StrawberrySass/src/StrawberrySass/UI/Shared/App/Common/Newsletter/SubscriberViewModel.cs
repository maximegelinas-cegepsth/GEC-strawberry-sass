using System.ComponentModel.DataAnnotations;

namespace StrawberrySass.UI.Shared.App.Common.Newsletter
{
    public class SubscriberViewModel
    {
        [Required]
        [RegularExpression("[\\w\\.\\-]+@[\\w\\-]+\\.\\w{2,4}")]
        public string Email { get; set; }
    }
}

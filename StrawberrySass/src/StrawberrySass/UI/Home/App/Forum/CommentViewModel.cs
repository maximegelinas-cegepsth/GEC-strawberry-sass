using System;

namespace StrawberrySass.UI.Home.App.Forum
{
    public class CommentViewModel
    {
        public string Message { get; set; }

        public DateTime AddedDate { get; set; }

        public MemberViewModel Author { get; set; }
    }
}

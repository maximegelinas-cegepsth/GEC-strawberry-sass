using System;
using System.Collections.Generic;

namespace StrawberrySass.UI.Home.App.Forum
{
    public class SubjectViewModel
    {
        public int Id { get; set; }

        public string Title { get; set; }

        public string Description { get; set; }

        public string Content { get; set; }

        public DateTime AddedDate { get; set; }

        public MemberViewModel Author { get; set; }

        public IEnumerable<CommentViewModel> Comments { get; set; }

        public CommentViewModel LastComment { get; set; }

        public int? CommentCount { get; set; }
    }
}

using System;
using System.Collections.Generic;

namespace StrawberrySass.Models.Forum
{
    public class Subject
    {
        public Subject()
        {
            AddedDate = DateTime.Now;
        }

        public int Id { get; set; }

        public string Title { get; set; }

        public string Description { get; set; }

        public string Content { get; set; }

        public DateTime AddedDate { get; private set; }

        public ApplicationUser Author { get; set; }

        public ICollection<Comment> Comments { get; set; }
    }
}

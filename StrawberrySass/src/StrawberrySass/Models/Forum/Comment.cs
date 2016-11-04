using System;

namespace StrawberrySass.Models.Forum
{
    public class Comment
    {
        public Comment()
        {
            AddedDate = DateTime.Now;
        }

        public int Id { get; set; }

        public string Message { get; set; }

        public DateTime AddedDate { get; private set; }

        public ApplicationUser Author { get; set; }
    }
}

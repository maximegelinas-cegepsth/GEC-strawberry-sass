using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using StrawberrySass.Models;
using StrawberrySass.Models.Forum;
using StrawberrySass.Models.Newsletter;

namespace StrawberrySass.Data
{
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        public DbSet<Subscriber> Subscribers { get; set; }

        public DbSet<Subject> Subjects { get; set; }

        public DbSet<Comment> Comments { get; set; }

        public DbSet<AspNetUsersInfoSup> AspNetUsersInfoSup { get; set; }

        public ApplicationDbContext(DbContextOptions options) : base(options)
        {            
        }
    }
}
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using StrawberrySass.Models;
using StrawberrySass.Models.Forum;

namespace StrawberrySass.Data
{
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        public DbSet<Subject> Subjects { get; set; }

        public DbSet<Comment> Comments { get; set; }

        public ApplicationDbContext(DbContextOptions options) : base(options)
        {
            
        }
    }
}
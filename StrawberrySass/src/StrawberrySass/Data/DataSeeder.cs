using Microsoft.AspNetCore.Builder;
using StrawberrySass.Models;

namespace StrawberrySass.Data
{
    public static class DataSeeder
    {
        public static void SeedData(this IApplicationBuilder app)
        {
            var context = app.ApplicationServices.GetService(typeof(ApplicationDbContext)) as ApplicationDbContext;

            if (context == null) return;

            context.Users.Add(new ApplicationUser()
            {
                Email = "maxime.gelinas@idmobiles.com",
                
            });

            context.SaveChanges();
        }
    }
}

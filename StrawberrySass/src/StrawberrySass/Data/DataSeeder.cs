using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using StrawberrySass.Models;
using Microsoft.EntityFrameworkCore;

namespace StrawberrySass.Data
{
    public static class DataSeeder
    {
        public static void SeedData(this IApplicationBuilder app)
        {
            var context = app.ApplicationServices.GetService(typeof(ApplicationDbContext)) as ApplicationDbContext;
            var roleManager = app.ApplicationServices.GetService(typeof(RoleManager<IdentityRole>)) as RoleManager<IdentityRole>;
            var userManager = app.ApplicationServices.GetService(typeof(UserManager<ApplicationUser>)) as UserManager<ApplicationUser>;

            SeedUserRoles(roleManager, new[]
            {
                "Administrator",
                "Moderator",
                "Member",
                "ForumBanned"
            });

            SeedUsers(userManager, new[]
            {
                new []
                {
                    "admin@strawberrysass.com",
                    "Str=123!",
                    "Administrator"
                }
            });
        }

        private static async void SeedUserRoles(RoleManager<IdentityRole> roleManager, IEnumerable<string> roles)
        {
            foreach (var role in roles)
                if (!await roleManager.RoleExistsAsync(role))
                    await roleManager.CreateAsync(new IdentityRole(role));
        }

        private static async void SeedUsers(UserManager<ApplicationUser> userManager, IEnumerable<string[]> users)
        {
            var existingUsers = await userManager.Users.ToListAsync();

            foreach (var user in users)
            {
                if (existingUsers.Any(u => u.Email == user[0])) continue;

                var newUser = new ApplicationUser() { Email = user[0], UserName = user[0]};
                await userManager.CreateAsync(newUser, user[1]);
                await userManager.AddToRoleAsync(newUser, user[2]);
            }
        }
    }
}

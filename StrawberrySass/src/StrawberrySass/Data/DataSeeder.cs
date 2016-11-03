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
                new Dictionary<string, string>()
                {
                    { "Email", "admin@strawberrysass.com" },
                    { "UserName", "AdminUser" },
                    { "Password", "Qwert123!" },
                    { "Role", "Administrator" }
                },
                new Dictionary<string, string>()
                {
                    { "Email", "moderator@strawberrysass.com" },
                    { "UserName", "ModeratorUser" },
                    { "Password", "Qwert123!" },
                    { "Role", "Moderator" }
                },
                new Dictionary<string, string>()
                {
                    { "Email", "member@strawberrysass.com" },
                    { "UserName", "MemberUser" },
                    { "Password", "Qwert123!" },
                    { "Role", "Member" }
                },
                new Dictionary<string, string>()
                {
                    { "Email", "forumBanned@strawberrysass.com" },
                    { "UserName", "ForumBannedUser" },
                    { "Password", "Qwert123!" },
                    { "Role", "ForumBanned" }
                }
            });
        }

        private static async void SeedUserRoles(RoleManager<IdentityRole> roleManager, IEnumerable<string> roles)
        {
            foreach (var role in roles)
                if (!await roleManager.RoleExistsAsync(role))
                    await roleManager.CreateAsync(new IdentityRole(role));
        }

        private static async void SeedUsers(UserManager<ApplicationUser> userManager, IEnumerable<IDictionary<string, string>> users)
        {
            var existingUsers = await userManager.Users.ToListAsync();

            foreach (var user in users)
            {

                if (existingUsers.Any(u => u.Email == user["Email"])) continue;

                var newUser = new ApplicationUser() { Email = user["Email"], UserName = user["UserName"] };
                await userManager.CreateAsync(newUser, user["Password"]);
                await userManager.AddToRoleAsync(newUser, user["Role"]);
            }
        }
    }
}

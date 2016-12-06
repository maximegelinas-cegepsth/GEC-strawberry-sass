using System.Globalization;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using StrawberrySass.Data;
using StrawberrySass.Models;
using Microsoft.AspNetCore.Mvc.Razor;
using Microsoft.Extensions.Options;
using StrawberrySass.Services;
using StrawberrySass.UI;

namespace StrawberrySass
{
    public class Startup
    {
        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true);

            if (env.IsDevelopment())
            {
                builder.AddUserSecrets();

                builder.AddApplicationInsightsSettings(developerMode: true);
            }

            builder.AddEnvironmentVariables();
            Configuration = builder.Build();
        }

        public IConfigurationRoot Configuration { get; }

        /// <summary>
        /// Gets called by the runtime to add services to the container.
        /// </summary>
        /// <param name="services"></param>
        public void ConfigureServices(IServiceCollection services)
        {
            // == Localization (1/2) ==

            services.AddLocalization(options => options.ResourcesPath = "Resources");

            // == Telemetry ==

            services.AddApplicationInsightsTelemetry(Configuration);

            // == Database contexts ==

            services.AddDbContext<ApplicationDbContext>(options =>
                    options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));

            // == Identity ==

            services.AddIdentity<ApplicationUser, IdentityRole>()
                .AddEntityFrameworkStores<ApplicationDbContext>()
                .AddDefaultTokenProviders();

            // == Mvc ==

            services.AddMvc()
                .AddViewLocalization(LanguageViewLocationExpanderFormat.Suffix)
                .AddDataAnnotationsLocalization();

            // == Localization (2/2) ==

            services.Configure<RequestLocalizationOptions>(options =>
            {
                var supportedCultures = new[]
                {
                    new CultureInfo("en"),
                    new CultureInfo("fr")
                };

                options.SupportedUICultures = supportedCultures;
                options.SupportedCultures = supportedCultures;
            });

            services.Configure<RazorViewEngineOptions>(options =>
            {
                options.ViewLocationExpanders.Add(new UILocationExpander());
            });

            // == Messaging ==

            services.AddTransient<IEmailSender, MessageService>();
        }

        /// <summary>
        /// Gets called by the runtime to configure the HTTP request pipeline.
        /// </summary>
        /// <param name="app"></param>
        /// <param name="env"></param>
        /// <param name="loggerFactory"></param>
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            // == Loggers ==

            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();

            // == Localization ==

            var localizationOptions = app.ApplicationServices.GetService<IOptions<RequestLocalizationOptions>>();
            app.UseRequestLocalization(localizationOptions.Value);

            // == Telemetry (1/2) ==

            app.UseApplicationInsightsRequestTelemetry();

            // == Exceptions ==

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseDatabaseErrorPage();
                app.UseBrowserLink();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
            }

            // == Telemetry (2/2) ==

            app.UseApplicationInsightsExceptionTelemetry();

            // == Static files ==

            app.UseStaticFiles();

            // == Identity ==

            app.UseIdentity();

            // == Database ==

            app.ApplicationServices.GetService<ApplicationDbContext>().Database.Migrate();
            app.SeedData();

            // == Routes ==

            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller=Home}/{action=Index}/{id?}");

                // Allows Angular to render his routes.
                routes.MapRoute(
                    name: "spa-fallback",
                    template: "{controller}/{*anyting}",
                    defaults: new { action = "Index" });
            });
        }
    }
}
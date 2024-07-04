using Domain.User;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Persistence.Contexts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.IdentityConfig
{
    public static class IdentityConfig
    {
        public static IServiceCollection AddIdentityService(this IServiceCollection Services, IConfiguration Configuration)
        {
            string Connection = Configuration["ConnectionString:SqlServer"];
            Services.AddDbContext<IdentityDataBaseContext>(options => options.UseSqlServer(Connection));
            Services.AddIdentity<User, IdentityRole>()
            .AddEntityFrameworkStores<IdentityDataBaseContext>()
            .AddDefaultTokenProviders()
            .AddRoles<IdentityRole>()
            .AddErrorDescriber<CustomIdentityError>();

			Services.Configure<IdentityOptions>(options =>
            {
                options.Password.RequireDigit = false;
                options.Password.RequiredLength = 8;
                options.Password.RequireLowercase = false;
                options.Password.RequireNonAlphanumeric = false;
                options.Password.RequireUppercase = false;
                options.Password.RequiredUniqueChars = 1;
                options.Password.RequireNonAlphanumeric = false;
                options.User.RequireUniqueEmail = true;
                options.Lockout.MaxFailedAccessAttempts = 5;
                options.Lockout.DefaultLockoutTimeSpan = TimeSpan.FromMinutes(30);
            });

            return Services;
        }
    }
}

using Application.Authentication;
using Application.Interfaces.Contexts;
using Domain.User;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using Persistence.Contexts;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllersWithViews();
string Connection = builder.Configuration["ConnectionString:SqlServer"];
builder.Services.AddDbContext<DataBaseContext>(option => option.UseSqlServer(Connection));
builder.Services.AddDbContext<IdentityDataBaseContext>(options => options.UseSqlServer(Connection));
builder.Services.AddScoped<IDataBaseContext, DataBaseContext>();
builder.Services.AddScoped<UserRepository, UserRepository>();
builder.Services.AddIdentity<User, IdentityRole>()
.AddEntityFrameworkStores<IdentityDataBaseContext>()
.AddDefaultTokenProviders();
builder.Services.AddAuthorization(options =>
{
    options.AddPolicy("AdminRoles", policy =>
    {
        policy.RequireRole("Admin");
    });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthentication();
app.UseAuthorization();

app.UseEndpoints(endpoints =>
{
    endpoints.MapControllerRoute(
      name: "areas",
      pattern: "{area:exists}/{controller=Home}/{action=Index}/{id?}"
    );
});

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Account}/{action=Login}/{id?}");

app.Run();

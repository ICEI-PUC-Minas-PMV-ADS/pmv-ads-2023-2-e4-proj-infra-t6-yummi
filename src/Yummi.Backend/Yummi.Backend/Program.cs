using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using System.Text;
using Yummi.Backend.Data;
using Serilog;
using Microsoft.EntityFrameworkCore;
using System.Text.Json.Serialization;
using Yummi.Backend.Models;
using Yummi.Backend.Data.Interfaces;

try
{
    var builder = WebApplication.CreateBuilder(args);

    var logger = new LoggerConfiguration()
                        .ReadFrom.Configuration(builder.Configuration)
                        .Enrich.FromLogContext()
                        .MinimumLevel.Debug()
                        .WriteTo.Console()
                        .CreateLogger();
    builder.Host.UseSerilog(logger);
    builder.Logging.ClearProviders();
    builder.Logging.AddSerilog(logger);

    // Add services to the container.

    builder.Services.AddControllers()
        .AddJsonOptions(x => x.JsonSerializerOptions.ReferenceHandler = ReferenceHandler.IgnoreCycles);

    builder.Services.AddDbContext<AppDbContext>(options =>
        options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));


    // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
    builder.Services.AddEndpointsApiExplorer();
    builder.Services.AddSwaggerGen(e =>
    {

        e.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme()
        {
            Name = "Authorization",
            Type = SecuritySchemeType.ApiKey,
            Scheme = "Beare",
            BearerFormat = "JWT",
            In = ParameterLocation.Header,
            Description = "JWT Authorization Header"
        });
        e.AddSecurityRequirement(new OpenApiSecurityRequirement
        {
        {
            new OpenApiSecurityScheme
            {
                Reference = new OpenApiReference
                {
                    Type = ReferenceType.SecurityScheme,
                    Id = "Bearer"
                }
            },
            new string[] {}
        }
        });
    });

    builder.Services.Configure<DatabaseConfiguration>(builder.Configuration.GetSection("DatabaseConfiguration"));

    builder.Services.AddSingleton<IUserRepository, UserRepository>();
    builder.Services.AddSingleton<ICategoriaRepository, CategoriaRepository>();
    builder.Services.AddSingleton<IProductRepository, ProductRepository>();

    var key = Encoding.ASCII.GetBytes(builder.Configuration.GetValue<string>("JWT_Secret"));

    builder.Services.AddAuthentication(option =>
    {
        option.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
        option.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
    }).AddJwtBearer(option =>
    {
        option.RequireHttpsMetadata = false;
        option.SaveToken = true;
        option.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuerSigningKey = true,
            IssuerSigningKey = new SymmetricSecurityKey(key),
            ValidateIssuer = false,
            ValidateAudience = false
        };
    });

    builder.Services.AddCors(options => options.AddDefaultPolicy(policy => policy.WithOrigins("*")
                                                                                 .AllowAnyMethod()
                                                                                 .AllowAnyHeader()));

    var app = builder.Build();

    // Configure the HTTP request pipeline.
    // if (app.Environment.IsDevelopment())
    //{
    app.UseSwagger();
    app.UseSwaggerUI();
    //}

    app.UseSerilogRequestLogging();

    app.UseAuthentication();
    app.UseAuthorization();
    app.UseStaticFiles();
    app.UseCors();

    app.MapControllers();

    app.Run();
}
catch (Exception ex)
{
    Log.Fatal(ex, "Host terminated unexpectedly");
}
finally
{
    Log.Information("Server Shutting down...");
    Log.CloseAndFlush();
}

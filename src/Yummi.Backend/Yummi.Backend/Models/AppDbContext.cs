using Microsoft.EntityFrameworkCore;

namespace Yummi.Backend.Models
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions options) : base(options)
        {

        }

        public DbSet<User> Usuarios { get; set; }

    }
}
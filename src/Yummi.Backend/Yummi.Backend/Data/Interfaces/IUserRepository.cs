using MongoDB.Driver.Linq;
using Yummi.Backend.Models;

namespace Yummi.Backend.Data.Interfaces
{
    public interface IUserRepository
    {
        Task<User> LoginAsync(string login, string password);
        Task CreateUserAsync(User user);
        Task UpdateUserAsync(User user);
        Task DeleteUserAsync(string id);
        Task<User> GetUserByIdAsync(string id);
        IMongoQueryable<User> GetAllUsers();
    }
}

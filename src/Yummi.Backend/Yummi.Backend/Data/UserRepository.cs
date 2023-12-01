using Microsoft.Extensions.Options;
using MongoDB.Driver;
using MongoDB.Driver.Linq;
using Yummi.Backend.Data.Interfaces;
using Yummi.Backend.Models;

namespace Yummi.Backend.Data
{
    public class UserRepository : IUserRepository
    {
        private readonly IMongoCollection<User> _usersCollection;

        public UserRepository(IOptions<DatabaseConfiguration> databaseConfiguration)
        {
            var mongoClient = new MongoClient(databaseConfiguration.Value.ConnectionString);
            var mongoDatabase = mongoClient.GetDatabase(databaseConfiguration.Value.DatabaseName);
            _usersCollection = mongoDatabase.GetCollection<User>("User");
        }

        public async Task CreateUserAsync(User user)
        {
            await _usersCollection.InsertOneAsync(user);
        }

        public async Task DeleteUserAsync(string id)
        {
            var user = await _usersCollection.FindAsync(x => x.Id == id).Result.FirstAsync();
            user.Active = false;
            await _usersCollection.ReplaceOneAsync(x => x.Id == id, user);
        }

        public IMongoQueryable<User> GetAllUsers()
        {
            return _usersCollection.AsQueryable();
        }

        public async Task<User> GetUserByIdAsync(string id)
        {
            return await _usersCollection.FindAsync(x => x.Id == id).Result.FirstAsync();
        }

        public async Task<User> LoginAsync(string login, string password)
        {
            return await _usersCollection.FindAsync(x => x.Login == login && x.Password == password).Result.FirstOrDefaultAsync();
        }

        public async Task UpdateUserAsync(User user)
        {
            await _usersCollection.ReplaceOneAsync(x => x.Id == user.Id, user);
        }
    }
}

﻿using MongoDB.Driver.Linq;
using Yummi.Backend.Models;

namespace Yummi.Backend.Data
{
    public interface IUserRepository
    {
        Task<User> LoginAsync(string email, string password);
        Task CreateUserAsync(User user);
        Task UpdateUserAsync(User user);
        Task DeleteUserAsync(string id);
        Task<User> GetUserByIdAsync(string id);
        IMongoQueryable<User> GetAllUsers();
    }
}
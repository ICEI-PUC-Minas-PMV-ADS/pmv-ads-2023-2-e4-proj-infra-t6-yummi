using MongoDB.Driver.Linq;
using Yummi.Backend.Models;

namespace Yummi.Backend.Data.Interfaces
{
    public interface IProductRepository
    {
        Task<Product> GetProductByIdAsync(string id);
        Task CreateProductAsync(Product product);
        Task UpdateProductAsync(Product product);
        Task DeleteProductAsync(string id);
        IMongoQueryable<Product> GetAllProducts();
    }
}

using Microsoft.Extensions.Options;
using MongoDB.Driver;
using MongoDB.Driver.Linq;
using Yummi.Backend.Data.Interfaces;
using Yummi.Backend.Models;

namespace Yummi.Backend.Data
{
    public class ProductRepository : IProductRepository
    {
        private readonly IMongoCollection<Product> _productsCollection;

        public ProductRepository(IOptions<DatabaseConfiguration> databaseConfiguration)
        {
            var mongoClient = new MongoClient(databaseConfiguration.Value.ConnectionString);
            var mongoDatabase = mongoClient.GetDatabase(databaseConfiguration.Value.DatabaseName);
            _productsCollection = mongoDatabase.GetCollection<Product>("Product");
        }

        public async Task CreateProductAsync(Product product)
        {
            await _productsCollection.InsertOneAsync(product);
        }

        public async Task DeleteProductAsync(string id)
        {
            var product = await _productsCollection.FindAsync(x => x.Id == id).Result.FirstAsync();
            product.Active = false;
            await _productsCollection.ReplaceOneAsync(x => x.Id == id, product);
        }

        public IMongoQueryable<Product> GetAllProducts()
        {
            return _productsCollection.AsQueryable().Where(x => x.Active);
        }

        public async Task<Product> GetProductByIdAsync(string id)
        {
            return await _productsCollection.FindAsync(x => x.Id == id && x.Active).Result.FirstAsync();
        }

        public async Task UpdateProductAsync(Product product)
        {
            await _productsCollection.ReplaceOneAsync(x => x.Id == product.Id, product);
        }
    }
}

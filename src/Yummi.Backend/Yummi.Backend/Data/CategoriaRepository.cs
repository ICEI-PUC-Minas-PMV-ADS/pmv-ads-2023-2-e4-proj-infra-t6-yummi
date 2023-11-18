using Microsoft.Extensions.Options;
using MongoDB.Driver;
using MongoDB.Driver.Linq;
using Yummi.Backend.Data.Interfaces;
using Yummi.Backend.Models;

namespace Yummi.Backend.Data
{
    public class CategoriaRepository : ICategoriaRepository
    {
        private readonly IMongoCollection<Categoria> _categoriaCollection;

        public CategoriaRepository(IOptions<DatabaseConfiguration> databaseConfiguration)
        {
            var mongoClient = new MongoClient(databaseConfiguration.Value.ConnectionString);
            var mongoDatabase = mongoClient.GetDatabase(databaseConfiguration.Value.DatabaseName);
            _categoriaCollection = mongoDatabase.GetCollection<Categoria>("Categoria");
        }

        public async Task CreateCategoriaAsync(Categoria categoria)
        {
            await _categoriaCollection.InsertOneAsync(categoria);
        }

        public async Task DeleteCategoriaAsync(string id)
        {
            var categoria = await _categoriaCollection.FindAsync(x => x.Id == id).Result.FirstAsync();
            categoria.Active = false;
            await _categoriaCollection.ReplaceOneAsync(x => x.Id == id, categoria);
        }

        public IMongoQueryable<Categoria> GetAllCategoria()
        {
            return _categoriaCollection.AsQueryable();
        }

        public async Task<Categoria> GetCategoriaByIdAsync(string id)
        {
            return await _categoriaCollection.FindAsync(x => x.Id == id).Result.FirstAsync();
        }

        public async Task UpdateCategoriaAsync(Categoria categoria)
        {
            await _categoriaCollection.ReplaceOneAsync(x => x.Id == categoria.Id, categoria);
        }
    }
}

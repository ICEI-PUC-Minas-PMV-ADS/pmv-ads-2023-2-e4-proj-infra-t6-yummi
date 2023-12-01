using MongoDB.Driver.Linq;
using Yummi.Backend.Models;

namespace Yummi.Backend.Data.Interfaces
{
    public interface ICategoriaRepository
    {
        Task CreateCategoriaAsync(Categoria categoria);
        Task UpdateCategoriaAsync(Categoria categoria);
        Task DeleteCategoriaAsync(string id);
        Task<Categoria> GetCategoriaByIdAsync(string id);
        IMongoQueryable<Categoria> GetAllCategoria();
    }
}

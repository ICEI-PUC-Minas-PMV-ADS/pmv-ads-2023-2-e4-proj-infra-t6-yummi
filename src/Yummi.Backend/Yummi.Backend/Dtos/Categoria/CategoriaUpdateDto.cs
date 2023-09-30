using System.ComponentModel.DataAnnotations;
using Yummi.Backend.Enum;

namespace Yummi.Backend.Dtos.Categoria
{
    public class CategoriaUpdateDto :  CategoriaCreateDto
    {
        public bool Active { get; set; } = true;
    }
}
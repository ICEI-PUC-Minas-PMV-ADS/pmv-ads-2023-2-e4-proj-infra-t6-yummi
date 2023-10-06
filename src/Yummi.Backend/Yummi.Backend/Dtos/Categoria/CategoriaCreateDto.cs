using System.ComponentModel.DataAnnotations;
using Yummi.Backend.Enum;

namespace Yummi.Backend.Dtos.Categoria
{
    public class CategoriaCreateDto
    {
        [Required]
        public string Name { get; set; } = string.Empty;
    }
}

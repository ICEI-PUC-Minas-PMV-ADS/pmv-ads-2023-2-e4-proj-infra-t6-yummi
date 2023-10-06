using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Yummi.Backend.Enum;

namespace Yummi.Backend.Models
{
    public class Categoria : Entity
    {
        [Required]
        public string Name { get; set; } = string.Empty;
    }
}

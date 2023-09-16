using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Yummi.Backend.Enum;

namespace Yummi.Backend.Models
{
    public class User : Entity
    {
        [Required]
        public string Name { get; set; } = string.Empty;

        [Required]
        [JsonIgnore]
        public string Password { get; set; } = string.Empty;
        
        [Required]
        public string Login { get; set; } = string.Empty;
        
        public string Email { get; set; } = string.Empty;

        public PerfilEnum? Perfil { get; set; } = PerfilEnum.ADMINISTRADOR;

    }
}

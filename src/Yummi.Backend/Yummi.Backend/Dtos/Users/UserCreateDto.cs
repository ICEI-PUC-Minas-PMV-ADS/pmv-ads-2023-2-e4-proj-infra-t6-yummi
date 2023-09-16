using System.ComponentModel.DataAnnotations;
using Yummi.Backend.Enum;

namespace Yummi.Backend.Dtos.Users
{
    public class UserCreateDto
    {
        [Required]
        public string Name { get; set; } = string.Empty;
        [Required]
        public string Login { get; set; } = string.Empty;
        [Required]
        public string Password { get; set; } =string.Empty;
        public PerfilEnum? Perfil { get; set; } = PerfilEnum.ADMINISTRADOR;
    }
}

using System.ComponentModel.DataAnnotations;

namespace Yummi.Backend.Dtos.Users
{
    public class UserUpdateDto
    {
        [Required]
        public string Name { get; set; } = string.Empty;
        [Required]
        public string Email { get; set; } = string.Empty;
        [Required]
        public string Password { get; set; } = string.Empty;
    }
}

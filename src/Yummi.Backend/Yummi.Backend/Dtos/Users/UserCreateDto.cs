using System.ComponentModel.DataAnnotations;

namespace Yummi.Backend.Dtos.Users
{
    public class UserCreateDto
    {
        [Required]
        public string Name { get; set; }
        [Required]
        public string Email { get; set; }
        [Required]
        public string Password { get; set; }
    }
}

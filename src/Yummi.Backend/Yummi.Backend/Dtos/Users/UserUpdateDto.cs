using System.ComponentModel.DataAnnotations;

namespace Yummi.Backend.Dtos.Users
{
    public class UserUpdateDto
    {
        [Required]
        public string Name { get; set; }
        [Required]
        public string Email { get; set; }
        [Required]
        public string Password { get; set; }
    }
}

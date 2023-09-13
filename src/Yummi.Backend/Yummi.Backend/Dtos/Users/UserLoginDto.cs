using System.ComponentModel.DataAnnotations;

namespace Yummi.Backend.Dtos.Users
{
    public class UserLoginDto
    {
        [Required]
        public string Email { get; set; }
        [Required]
        public string Password { get; set; }
    }
}

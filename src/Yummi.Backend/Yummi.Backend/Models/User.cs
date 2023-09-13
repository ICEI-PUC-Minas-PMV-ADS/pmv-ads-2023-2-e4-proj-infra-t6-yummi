using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace Yummi.Backend.Models
{
    public class User : Entity
    {
        [Required]
        public string Name { get; set; }

        [Required]
        [JsonIgnore]
        public string Password { get; set; }

        [Required]
        public string Email { get; set; }

    }
}

using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System.ComponentModel.DataAnnotations;

namespace Yummi.Backend.Models
{
    public class Product : Entity
    {
        [Required]
        public string Name { get; set; }

        [Required]
        public string Category { get; set; }

        [Required]
        public string Description { get; set; }

        [Required]
        [BsonRepresentation(BsonType.Decimal128)]
        public decimal Price { get; set; }

        [Required]
        public string ImagePath { get; set; }
    }
}

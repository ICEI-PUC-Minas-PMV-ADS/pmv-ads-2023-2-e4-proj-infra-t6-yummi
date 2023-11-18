using System.ComponentModel.DataAnnotations;

namespace Yummi.Backend.Dtos.Products
{
    public class ProductUpdateDto
    {
        public string Name { get; set; }

        public string Category { get; set; }

        public string Description { get; set; }

        public decimal Price { get; set; }

        public IFormFile Image { get; set; }
    }   
}

using Microsoft.AspNetCore.Mvc;
using Yummi.Backend.Dtos.Products;



namespace Yummi.Backend.Controllers
{
    [Route("api/products")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly List<ProductCreateDto> products = new List<ProductCreateDto>();
        private int nextProductId = 1;

        // Rota: GET /api/products
        [HttpGet]
        public ActionResult<IEnumerable<ProductCreateDto>> GetProducts()
        {
            return Ok(products);
        }

        // Rota: GET /api/products/{id}
        [HttpGet("{id}")]
        public ActionResult<ProductCreateDto> GetProduct(int id)
        {
            var product = products.Find(p => p.Id == id);
            if (product == null)
            {
                return NotFound();
            }
            return Ok(product);
        }

        // Rota: POST /api/products
        [HttpPost]
        public ActionResult<ProductCreateDto> CreateProduct(ProductCreateDto productDto)
        {
            if (productDto == null)
            {
                return BadRequest("Dados inválidos");
            }

            productDto.Id = nextProductId++;
            products.Add(productDto);

            return CreatedAtAction(nameof(GetProduct), new { id = productDto.Id }, productDto);
        }

        // Rota: PUT /api/products/{id}
        [HttpPut("{id}")]
        public ActionResult UpdateProduct(int id, ProductCreateDto updatedProduct)
        {
            var existingProduct = products.Find(p => p.Id == id);
            if (existingProduct == null)
            {
                return NotFound();
            }

            // Atualize os campos do produto existente com os valores do produto atualizado.
            existingProduct.Nome = updatedProduct.Nome;
            existingProduct.Preco = updatedProduct.Preco;

            return NoContent();
        }

        // Rota: DELETE /api/products/{id}
        [HttpDelete("{id}")]
        public ActionResult DeleteProduct(int id)
        {
            var product = products.Find(p => p.Id == id);
            if (product == null)
            {
                return NotFound();
            }

            products.Remove(product);

            return NoContent();
        }
    }
}

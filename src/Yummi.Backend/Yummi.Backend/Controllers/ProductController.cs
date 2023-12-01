using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Yummi.Backend.Data.Interfaces;
using Yummi.Backend.Dtos.Products;
using Yummi.Backend.Models;

namespace Yummi.Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly IProductRepository _productRepository;
        private readonly ILogger<UserController> _logger;

        private readonly string FilePath = $"{Directory.GetCurrentDirectory()}\\wwwroot\\images\\";

        public ProductController(IProductRepository productRepository, ILogger<UserController> logger)
        {
            _productRepository = productRepository;
            _logger = logger;
        }

        [HttpPost]
        [AllowAnonymous]
        public async Task<ActionResult> CreateProduct([FromForm]ProductCreateDto productDto)
        {
            try
            {
                if (!IsImage(productDto.Image))
                    return BadRequest("O arquivo enviado não é uma imagem.");

                var imagePath = await SaveImageAsync(productDto.Image);

                var product = new Product
                {
                    Name = productDto.Name,
                    Category = productDto.Category,
                    Description = productDto.Description,
                    Price = productDto.Price,
                    ImagePath = imagePath
                };

                await _productRepository.CreateProductAsync(product);

                _logger.LogInformation("Produto cadastrado com sucesso", product);
                return Created(string.Empty, product);
            }
            catch (Exception e)
            {
                _logger.LogError(e, "Erro ao cadastrar o produto");
                return BadRequest(e.Message);
            }
        }

        [HttpGet]
        public ActionResult GetAllProducts(string name, string category, int page = 0, int pageSize = 10) 
        {
            try
            {
                var products = _productRepository.GetAllProducts().AsQueryable();

                if (!string.IsNullOrEmpty(name))
                    products = products.Where(e => e.Name.ToLower().StartsWith(name.Trim().ToLower()));

                if (!string.IsNullOrEmpty(category))
                    products = products.Where(e => e.Category.ToLower().Equals(category.Trim().ToLower()));

                return Ok(products.OrderBy(e => e.Name).Skip(page * pageSize).Take(pageSize).ToList());
            }
            catch (Exception e)
            {
                _logger.LogError(e, "Erro ao buscar todos os produtos");
                return BadRequest(e.Message);
            }
        }

        [HttpGet("{id}")]
        public async Task<ActionResult> GetProductById(string id)
        {
            try
            {
                var product = await _productRepository.GetProductByIdAsync(id);

                if (product is null)
                    return NotFound("Produto não encontrado");

                return Ok(product);
            }
            catch (Exception e)
            {
                _logger.LogError(e, "Erro ao buscar produto por id");
                return BadRequest(e.Message);
            }
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> UpdateProduct(string id, [FromForm]ProductUpdateDto productUpdate)
        {
            try
            {
                var product = await _productRepository.GetProductByIdAsync(id);

                if (product is null)
                    return NotFound("Produto não encontrado");

                var productChange = new Product
                {
                    Id = id,
                    Name = productUpdate.Name ?? product.Name,
                    Category = productUpdate.Category ?? product.Category,
                    Description = productUpdate.Description ?? product.Description,
                    Price = productUpdate.Price != 0 ? productUpdate.Price : product.Price,
                    ImagePath = product.ImagePath
                };

                if (productUpdate.Image != null)
                {
                    if (!IsImage(productUpdate.Image))
                        return BadRequest("O arquivo enviado não é uma imagem.");

                    RemoveImage(product.ImagePath);
                    productChange.ImagePath = await SaveImageAsync(productUpdate.Image);
                }

                await _productRepository.UpdateProductAsync(productChange);
                return Ok(productChange);
            }
            catch (Exception e)
            {
                _logger.LogError(e, "Erro ao alterar o produto");
                return BadRequest(e.Message);
            }
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteProduct(string id)
        {
            try
            {
                await _productRepository.DeleteProductAsync(id);
                return Ok($"Produto deletado com sucesso");
            }
            catch (Exception e)
            {
                _logger.LogError(e, "Erro ao deletar o produto");
                return BadRequest(e.Message);
            }
        }

        private static bool IsImage(IFormFile formFile) => Path.GetExtension(formFile.FileName).Trim().ToLower() switch 
        { 
            ".jpeg" => true,
            ".jpg" => true,
            ".png" => true,
            _ => false
        };

        private async Task<string> SaveImageAsync(IFormFile formFile)
        {
            var fileName = DateTime.Now.Ticks + Path.GetExtension(formFile.FileName);
            using var stream = System.IO.File.Create(FilePath + fileName);
            await formFile.CopyToAsync(stream);
            return $"~/images/{fileName}";
        }

        private void RemoveImage(string pathFile)
        {
            var fileName = Path.GetFileName(pathFile);
            var path = FilePath + fileName;
            if (System.IO.File.Exists(path)) 
                System.IO.File.Delete(path);
        }
    }
}

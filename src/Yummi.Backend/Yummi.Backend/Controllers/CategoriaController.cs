using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Yummi.Backend.Data.Interfaces;
using Yummi.Backend.Dtos.Categoria;
using Yummi.Backend.Models;
using Yummi.Backend.Service;

namespace Yummi.Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoriaController : ControllerBase
    {
        private readonly ICategoriaRepository _categoriaRepository;
        private readonly IConfiguration _configuration;
        private readonly ILogger<CategoriaController> _logger;

        public CategoriaController(ICategoriaRepository categoriaRepository, IConfiguration configuration, ILogger<CategoriaController> logger)
        {
            _categoriaRepository = categoriaRepository;
            _configuration = configuration;
            _logger = logger;
        }

        [HttpPost]
        [AllowAnonymous]
        public async Task<ActionResult<Categoria>> CreateCategoria([FromBody] CategoriaCreateDto categoriaCreateDto)
        {
            try
            {
                var existCategoria = _categoriaRepository.GetAllCategoria().FirstOrDefault(e => e.Name.ToUpper() == categoriaCreateDto.Name.ToUpper());

                if (existCategoria != null)
                {
                    string logMessage = "Essa Categoria já está cadastrada!";
                    _logger.LogDebug(message: logMessage);
                    return Conflict(logMessage);
                }

                var categoria = new Categoria
                {
                    Name = categoriaCreateDto.Name
                };

                await _categoriaRepository.CreateCategoriaAsync(categoria);
                return Ok(categoria);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpGet("{id}")]
        [Authorize]
        public async Task<ActionResult<Categoria>> GetCategoria(string id)
        {
            var categoriaResult = await _categoriaRepository.GetCategoriaByIdAsync(id);
            return Ok(categoriaResult);
        }

        [HttpPut("{id}")]
        [Authorize]
        public async Task<ActionResult<Categoria>> UpdateCategoria([FromBody] CategoriaUpdateDto categoriaUpdateDto, string id)
        {
            try
            {
                var existCategoria = _categoriaRepository.GetAllCategoria().FirstOrDefault(e => e.Id == id);

                if (existCategoria == null)
                    return NotFound("Essa categoria não foi encontrada!");

                var categoria = new Categoria
                {
                    Id = id,
                    Active = categoriaUpdateDto.Active
                };

                await _categoriaRepository.UpdateCategoriaAsync(existCategoria);
                return Ok(categoria);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpDelete("{id}")]
        [Authorize]
        public async Task<ActionResult<Categoria>> DeleteCategoria(string id)
        {
            try
            {
                var existCategoria = _categoriaRepository.GetAllCategoria().FirstOrDefault(e => e.Id == id);

                if (existCategoria == null)
                    return NotFound("Essa categoria não foi encontrado!");

                await _categoriaRepository.DeleteCategoriaAsync(id);
                return Ok(id);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }
}

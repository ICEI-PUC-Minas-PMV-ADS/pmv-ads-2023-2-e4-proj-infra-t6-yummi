using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Yummi.Backend.Models;

namespace Yummi.Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PedidosController : ControllerBase
    {
        private readonly AppDbContext _context;

        public PedidosController(AppDbContext context)
        {
            _context = context;
        }

//        [Authorize(Roles = "Usuario")]
        [HttpGet]
        public async Task<ActionResult> GetAll()
        {
            var model = await _context.Pedidos.ToListAsync();
            return Ok(model);
        }

//        [Authorize(Roles = "Administrador, Usuario")]
        [HttpPost]
        public async Task<ActionResult> Create(Pedido model)
        {

            _context.Pedidos.Add(model);
            await _context.SaveChangesAsync();

            return Ok(model);
        }

//        [Authorize(Roles = "Administrador")]
        [HttpGet("{id}")]
        public async Task<ActionResult> GetByID(int id)
        {
            var model = await _context.Pedidos
//                .Include(t => t.Usuarios).ThenInclude(t => t.Usuario)
//                .Include(t => t.Consumos)
                .FirstOrDefaultAsync(c => c.Id == id);

            if (model == null) return NotFound();

//            GerarLinks(model);
            return Ok(model);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> Update(int id, Pedido model)
        {
            if (id != model.Id) return BadRequest();

            var modeloDb = await _context.Pedidos.AsNoTracking()
                .FirstOrDefaultAsync(c => c.Id == id);

            if (modeloDb == null) return NotFound();

            _context.Pedidos.Update(model);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            var model = await _context.Pedidos.FindAsync(id);

            if (model == null) return NotFound();

            _context.Pedidos.Remove(model);
            await _context.SaveChangesAsync();

            return NoContent();
        }

/*        private void GerarLinks(Pedido model)
        {
            model.Links.Add(new LinkDto(model.Id, Url.ActionLink(), rel: "self", metodo: "GET"));
            model.Links.Add(new LinkDto(model.Id, Url.ActionLink(), rel: "update", metodo: "PUT"));
            model.Links.Add(new LinkDto(model.Id, Url.ActionLink(), rel: "delete", metodo: "Delete"));

        }*/
    }
}


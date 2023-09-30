using System.ComponentModel.DataAnnotations;
using Yummi.Backend.Enum;
using Yummi.Backend.Models;

namespace Yummi.Backend.Dtos.Products
{
    public class ProductCreateDto
    {
        [Required]
        public string? Nome { get; set; }
        [Required]
        public string? Descricao { get; set; }
        [Required]
        public decimal Preco { get; set; }        
        [Required]
        public TipoRefeicao TipoRefeicao { get; set; }

        [Required]
        public TipoCozinha TipoCozinha { get; set; }

        [Required]
        public Categoria? Categoria { get; set; }

        [Required]
        public TipoBebida TipoBebida { get; set; }

        [Required]
        public EstiloCulinaria Estilo { get; set; }

        public RestricaoAlimentar? Restricao { get; set; }

        public Temporada? Temporada { get; set; }
    }   
}
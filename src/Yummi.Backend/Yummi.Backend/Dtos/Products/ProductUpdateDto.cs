using System.ComponentModel.DataAnnotations;
using Yummi.Backend.Enum;

namespace Yummi.Backend.Dtos.Products
{
    public class ProductUpdateDto
    {
        [Required]
        public int Id { get; set; }
        
        public string Nome { get; set; }
        
        public string Descricao { get; set; }
        
        public decimal Preco { get; set; }
        
        public TipoRefeicao TipoRefeicao { get; set; }

        public TipoCozinha TipoCozinha { get; set; }

        public Models.Categoria Categoria { get; set; }

        public TipoBebida TipoBebida { get; set; }

        public EstiloCulinaria Estilo { get; set; }

        public RestricaoAlimentar? Restricao { get; set; }

        public Temporada? Temporada { get; set; }
    }   
}

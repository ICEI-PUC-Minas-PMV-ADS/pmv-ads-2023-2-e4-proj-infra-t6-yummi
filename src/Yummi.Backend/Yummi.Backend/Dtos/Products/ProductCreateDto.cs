using Yummi.Backend.Enum;

namespace Yummi.Backend.Dtos.Products
{
    public class ProductCreateDto
    {
        [Required]
        public string Nome { get; set; }
        [Required]
        public string Descricao { get; set; }
        [Required]
        public decimal Preco { get; set; }        
        [Required]
        public TipoRefeicao TipoRefeicao { get; set; }

        [Required]
        public TipoCozinha TipoCozinha { get; set; }

        [Required]
        public CategoriaPrato Categoria { get; set; }

        [Required]
        public TipoBebida TipoBebida { get; set; }

        [Required]
        public EstiloCulinaria Estilo { get; set; }

        public RestricaoAlimentar? Restricao { get; set; }

        public Temporada? Temporada { get; set; }
    }   
}
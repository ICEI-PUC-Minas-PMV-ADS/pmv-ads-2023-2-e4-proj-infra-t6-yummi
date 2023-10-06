using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Yummi.Backend.Models
{
    [Table("Pedidos")]
    public class Pedido 
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Categoria { get; set; }
        [Required]
        public string NomeProduto { get; set; }
        [Required]
        public string Quantidade { get; set; }
        [Required]
        public int NumeroMesa { get; set; }
        [Required]
        public TipoCategoria Tipo { get; set; }

    }

    public enum TipoCategoria
    {
        Entrada,
        Prato_Principal,
        Porção,
        Sobremesa,
        Bebida
    }
}

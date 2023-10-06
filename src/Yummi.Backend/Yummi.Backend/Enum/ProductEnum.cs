namespace Yummi.Backend.Enum
{
    public enum TipoRefeicao
    {
        CafeDaManha,
        Almoco,
        Jantar,
        Sobremesas,
        Bebidas,
        HappyHour,
        MenuInfantil
    }

    public enum TipoCozinha
    {
        Brasileira,
        Italiana,
        Chinesa,
        Japonesa,
        Indiana,
        Mexicana,
        Mediterranea,
        Vegetariana,
        Churrascaria
    }

    public enum TipoBebida
    {
        Refrigerantes,
        SucosNaturais,
        Cafes,
        Chas,
        Vinhos,
        Cervejas,
        Coqueteis,
        BebidasAlcoolicas
    }

    public enum EstiloCulinaria
    {
        Gourmet,
        FastFood,
        ComidaDeRua,
        Saudavel,
        Caseira,
        Fusion
    }

    public enum RestricaoAlimentar
    {
        SemGluten,
        SemLactose,
        Vegan,
        Vegetariano,
        SemNozes,
        BaixoTeorDeSodio
    }

    public enum Temporada
    {
        EspecialDeVerao,
        EspecialDeInverno,
        PromocoesDeFimDeAno
    }
}
import { ImageProps } from "react-native";

export interface Pratos {
  name: string;
  image: ImageProps["source"];
  preco: number;
  categoria: string;
  description: string;
}

const acai = require("../ImgPratos/acai.png");
const vinho = require("../ImgPratos/bodega-argento.png");
const comida = require("../ImgPratos/img_prato.png");
const arroz = require("../ImgPratos/arroz.png");
const feijao = require("../ImgPratos/feijao.png");
const picole_magnun = require("../ImgPratos/picole_magnun.webp");
const pudim = require("../ImgPratos/pudim.webp");
const mousse = require("../ImgPratos/mousse.webp");
const salada_fruta = require("../ImgPratos/salada-de-frutas.webp");
const coca_cola = require("../ImgPratos/coca-cola.webp");
const agua = require("../ImgPratos/agua.webp");
const jack_daniels = require("../ImgPratos/Jack-Daniels.webp");
const suco_natural = require("../ImgPratos/suco_natural.webp");
const feijoada = require("../ImgPratos/Feijoada.webp");
const tropeiro = require("../ImgPratos/tropeiro.webp");
const sushi = require("../ImgPratos/sushi.webp");

export const pratosList: Pratos[] = [

  {
    name: "Sushi e Sashimi",
    image: sushi,
    preco:  55.00,
    categoria: "Pratos Principais",
    description: "Esse Delicioso prato japones você só encontra aqui."
  },
  {
    name: "Tropeiro",
    image: tropeiro,
    preco:  23.99,
    categoria: "Pratos Principais",
    description: "Tropeiro Completo."
  },
  {
    name: "Feijoada",
    image: feijoada,
    preco:  25.70,
    categoria: "Pratos Principais",
    description: "Prova nossa deliciosa Feijoada Completa."
  },
  {
    name: "Suco Natural",
    image: suco_natural,
    preco :  12.50,
    categoria: "Drinks e Bebidas",
    description: "Sucos Naturais de Diversos Sabores."
  },
  {
    name: "Jack Daniels",
    image: jack_daniels,
    preco:  190.99,
    categoria: "Drinks e Bebidas",
    description: "Esperiências que ficam é com o Whisky Jack Daniels."
  },
  {
    name: "Água Voss Sem Gás",
    image: agua,
    preco:  39.90,
    categoria: "Drinks e Bebidas",
    description: "Uma água de qualidade Água Voss."
  },
  {
    name: "Coca-Cola",
    image: coca_cola,
    preco:  13.50,
    categoria: "Drinks e Bebidas",
    description: "Coca-Cola de 2L bem gelada."
  },
  {
    name: "Salada de Fruta",
    image: salada_fruta,
    preco: 8.00,
    categoria: "Sobremesas",
    description: "Delicioso Copo de Salada de Frutas."
  },
  {
    name: "Mousse de Maracujá",
    image: mousse,
    preco: 13.00,
    categoria: "Sobremesas",
    description: "Delicioso Mousse de Maracujá."
  },
  {
    name: "Pudim de Leite",
    image: pudim,
    preco: 30.00,
    categoria: "Sobremesas",
    description: "Delicioso Pudim de Leite"
  },
  {
    name: "Picole Magnum",
    image: picole_magnun,
    preco:  15.50,
    categoria: "Sobremesas",
    description: "Delicioso Picolé Magnum."
  },
  {
    name: "Açaí",
    image: acai,
    preco:  12.50,
    categoria: "Sobremesas",
    description: "Delicioso creme de açaí de 500ml."
  },
  {
    name: "Vinho Argento",
    image: vinho,
    preco:  79.43,
    categoria: "Drinks e Bebidas",
    description: "Vinho de ótima qualidade com sabor imcomparável."
  },
  {
    name: "Comida",
    image: comida,
    preco:  17.90,
    categoria: "Entradas",
    description: "Uma refeição caseira com um gostinho de quero mais."
  },
  {
    name: "Arroz",
    image: arroz,
    preco:  12.90,
    categoria: "Entradas",
    description: "Venha provar esse nosso deliciosos arroz, especialidade da casa!"
  },
  {
    name: "Feijão",
    image: feijao,
    preco:  10.80,
    categoria: "Entradas",
    description: "Prove o nosso feijão saboroso, você verá que não tem igual!"
  },
];
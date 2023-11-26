import { ImageProps } from "react-native";

export interface Pratos {
  name: string;
  image: ImageProps["source"];
  preco: string;
  description: string;
}

const acai = require("../ImgPratos/acai.png");
const vinho = require("../ImgPratos/bodega-argento.png");
const comida = require("../ImgPratos/img_prato.png");
const arroz = require("../ImgPratos/arroz.png");
const feijao = require("../ImgPratos/feijao.png");

export const pratosList: Pratos[] = [
  {
    name: "Açaí",
    image: acai,
    preco: "R$ 12,50",
    description: "Delicioso creme de açaí de 500ml."
  },
  {
    name: "Vinho Argento",
    image: vinho,
    preco: "R$ 79,43",
    description: "Vinho de ótima qualidade com sabor imcomparável."
  },
  {
    name: "Comida",
    image: comida,
    preco: "R$ 17,90",
    description: "Uma refeição caseira com um gostinho de quero mais."
  },
  {
    name: "Arroz",
    image: arroz,
    preco: "R$ 12,90",
    description: "Venha provar esse nosso deliciosos arroz, especialidade da casa!"
  },
  {
    name: "Feijão",
    image: feijao,
    preco: "R$ 10,80",
    description: "Prove o nosso feijão saboroso, você verá que não tem igual!"
  },
];
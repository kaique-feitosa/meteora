import { createStore } from "vuex";
import camiseta from "../assets/img/produtos/camiseta-conforto.png";
import calca from "../assets/img/produtos/calca-alfaiataria.png";
import tenis from "../assets/img/produtos/tenis-chuncky.png";
import jaqueta from "../assets/img/produtos/jaqueta-jeans.png";
import oculos from "../assets/img/produtos/oculos-redondo.png";
import bolsa from "../assets/img/produtos/bolsa-coringa.png";

const store = createStore({
  state: {
    produtos: [
      {
        id: 1,
        nome: "Camiseta Conforto",
        descricao:
          "Multicores e tamanhos. Tecido de algodão 100%, fresquinho para o verão. Modelagem unissex.",
        preco: "70,00",
        imagem: camiseta,
        cores: [
          {
            idCor: "amarelo",
            nome: "Amarelo",
            cor: "#F0E95A",
          },
          {
            idCor: "rosa",
            nome: "Rosa",
            cor: "#F075AE",
          },
          {
            idCor: "preto",
            nome: "Preto",
            cor: "#000000",
          },
          {
            idCor: "azul",
            nome: "Azul",
            cor: "#2D44EF",
          },
        ],
        tamanhos: ["pp", "p", "m", "g", "gg"],
        vendedor: "Meteora",
      },
      {
        id: 2,
        nome: "Calça Alfaiataria",
        descricao:
          "Modelo Wide Leg alfaiataria em linho. Uma peça pra vida toda!",
        preco: "180,00",
        imagem: calca,
        cores: [
          {
            idCor: "creme",
            nome: "Creme",
            cor: "#FFFDD0",
          },
          {
            idCor: "marrom",
            nome: "Marrom",
            cor: "#6e350d",
          },
          {
            idCor: "branca",
            nome: "Branca",
            cor: "#ffffff",
          },
          {
            idCor: "preta",
            nome: "Preta",
            cor: "#000000",
          },
        ],
        tamanhos: ["pp", "p", "m", "g", "gg"],
        vendedor: "Meteora",
      },
      {
        id: 3,
        nome: "Tênis Chunky",
        descricao:
          "Snicker casual com solado mais alto e modelagem robusta. Modelo unissex.",
        preco: "250,00",
        imagem: tenis,
        cores: [
          {
            idCor: "branco",
            nome: "Branco",
            cor: "#ffffff",
          },
        ],
        tamanhos: ["38", "39", "40", "41", "42"],
        vendedor: "Meteora",
      },
      {
        id: 4,
        nome: "Jaqueta Jeans",
        descricao:
          "Modelo unissex oversized com gola de camurça. Atemporal e autêntica!",
        preco: "150,00",
        imagem: jaqueta,
        cores: [
          {
            idCor: "azul-claro",
            nome: "Azul claro",
            cor: "#75D7F0",
          },
          {
            idCor: "preto",
            nome: "Preto",
            cor: "#000000",
          },
        ],
        tamanhos: ["pp", "p", "m", "g", "gg"],
        vendedor: "Meteora",
      },
      {
        id: 5,
        nome: "Óculos Redondo",
        descricao:
          "Armação metálica em grafite com lentes arredondadas. Sem erro!",
        preco: "120,00",
        imagem: oculos,
        cores: [],
        tamanhos: [],
        vendedor: "Meteora",
      },
      {
        id: 6,
        nome: "Bolsa coringa",
        descricao:
          "Bolsa camel em couro sintético de alta duração. Ideal para acompanhar você por uma vida!",
        preco: "120,00",
        imagem: bolsa,
        cores: [],
        tamanhos: [],
        vendedor: "Meteora",
      },
    ],
    produtoSelecionado: null,
  },
  mutations: {
    setProdutoSelecionado(state, produto) {
      state.produtoSelecionado = produto;
    },
  },
});

export default store;

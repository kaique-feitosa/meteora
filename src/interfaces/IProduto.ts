interface ICores {
  idCor: string;
  nome: string;
  cor: string;
}

export default interface IProduto {
  id: number;
  nome: string;
  descricao: string;
  preco: string;
  imagem: string;
  cores: ICores[];
  tamanhos: string[];
  vendedor: string;
}

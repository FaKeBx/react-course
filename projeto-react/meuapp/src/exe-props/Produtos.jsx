import React from "react";
import Title from "./Title";
import Produto from "./Produto";

const produtos = [
  { nome: "Notebook", propriedades: ["16gb ram", "512gb"] },
  { nome: "Smartphone", propriedades: ["2gb ram", "128gb"] },
  { nome: "Tablet", propriedades: ["4gb ram", "256gb"] },
  { nome: "Ebook", propriedades: ["1gb ram", "32gb"] },
];

const Produtos = () => {
  return (
    <>
      <Title texto="Produtos" />
      {produtos.map((produto) => {
        return <Produto key={produto} {...produto} />;
      })}
    </>
  );
};

export default Produtos;

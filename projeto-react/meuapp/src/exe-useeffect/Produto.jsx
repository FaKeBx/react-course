import React from "react";

const Produto = ({ dado }) => {
  return (
    <>
      <h1>{dado.nome}</h1>
      <p>{`R$ ${dado.preco}`}</p>
    </>
  );
};

export default Produto;

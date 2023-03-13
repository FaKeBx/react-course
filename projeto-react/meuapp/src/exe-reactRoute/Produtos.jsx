import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ProdutosContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

const ProdutoContainer = styled.div`
  display: grid;
  grid-column: 1fr;
  justify-items: start;
`;

const Img = styled.img`
  width: 200px;
  height: 300px;
  border-radius: 0.4rem;
`;

const TextImg = styled.p`
  color: black;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.2rem;
  font-weight: bold;
`;

const Produtos = ({ data }) => {
  if (data)
    return (
      <>
        <ProdutosContainer>
          {data &&
            data.map(({ nome, fotos, id }) => {
              return (
                <Link to={`produto/${id}`} key={id} style={{ textDecoration: "none" }}>
                  <ProdutoContainer>
                    <Img src={fotos[0].src} alt="" />
                    <TextImg>{nome}</TextImg>
                  </ProdutoContainer>
                </Link>
              );
            })}
        </ProdutosContainer>
      </>
    );
};

export default Produtos;

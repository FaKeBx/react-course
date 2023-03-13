import React, { useEffect } from "react";
import styled from "styled-components";

const ProdutoContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
`;

const DescricaoContainer = styled.div`
  display: grid;
  padding: 0 1rem;
  align-content: flex-start;
`;

const Img = styled.img`
  max-width: 100%;
  border-radius: 0.4rem;
`;

const Name = styled.p`
  color: black;
  margin-top: 0;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 2rem;
  font-weight: bold;
`;

const Describe = styled.p`
  color: black;
  font-family: Arial, Helvetica, sans-serif;
  text-align: start;
  font-size: 1.5rem;
  font-weight: normal;
`;

const Price = styled.p`
  padding: 0.8rem 1.2rem;
  margin: 0 1rem 1rem 0;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.2rem;
  border: none;
  border-radius: 4px;
  color: #5b8324;
  background: #9eeb47;
  justify-self: start;
`;

const Produto = ({ data }) => {
  console.log("🚀 ~ file: Produto.jsx:51 ~ Produto ~ data:", data);
  useEffect(() => {
    fetch(`https://ranekapi.origamid.dev/json/api/produto`)
      .then((response) => response.json())
      .then((json) => console.log(json));
  }, []);

  return (
    <>
      {data &&
        data.map(({ id, fotos, nome, preco, descricao }) => {
          return (
            <ProdutoContainer key={id}>
              <Img src={fotos[0].src} />
              <DescricaoContainer>
                <Name>{nome}</Name>
                <Price>R$ {preco}</Price>
                <Describe>{descricao}</Describe>
              </DescricaoContainer>
            </ProdutoContainer>
          );
        })}
    </>
  );
};

export default Produto;

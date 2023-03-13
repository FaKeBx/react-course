import { type } from "@testing-library/user-event/dist/type";
import React, { useEffect, useState } from "react";
import { json, useParams } from "react-router-dom";
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

const Produto = () => {
  const { id } = useParams();
  const [produto, setProduto] = useState(null);

  useEffect(() => {
    async function fetching(url) {
      await fetch(url)
        .then((response) => response.json())
        .then((json) => setProduto(json));
    }
    fetching(`https://ranekapi.origamid.dev/json/api/produto/${id}`);
  }, [id]);

  // useEffect(() => {
  //   fetch(`https://ranekapi.origamid.dev/json/api/produto/${id}`)
  //     .then((response) => response.json())
  //     .then((json) => setProduto(json));
  // }, [id]);

  if (produto !== null)
    return (
      <>
        <ProdutoContainer>
          <Img src={produto.fotos[0].src} />
          <DescricaoContainer>
            <Name>{produto.nome}</Name>
            <Price>R$ {produto.preco}</Price>
            <Describe>{produto.descricao}</Describe>
          </DescricaoContainer>
        </ProdutoContainer>
      </>
    );
};

export default Produto;

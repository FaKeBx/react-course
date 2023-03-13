import React from "react";
import styled from "styled-components";
import foto from "./img/contato.jpg";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  justify-items: center;
  align-items: flex-start;
`;

const ContainerText = styled.div`
  display: block;
`;

const Img = styled.img`
  max-width: 100%;
  border-radius: 0.4rem;
`;

const ListItems = styled.li`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.2rem;
  color: black;
  list-style: none;
  margin-bottom: 1rem;
  &::before {
    display: block;
    content: "";
    width: 1rem;
    height: 2px;
    background: #e1e1e1;
    position: relative;
    top: 15px;
    right: 20px;
  }
`;

const Contato = () => {
  return (
    <>
      <Container>
        <Img src={foto} />
        <ContainerText>
          <h2 style={{ fontFamily: "Arial" }}>Entre em contato.</h2>
          <ul style={{ paddingLeft: "20px" }}>
            <ListItems>felipekb2000@gmail.com</ListItems>
            <ListItems>(21) 99999-9999</ListItems>
            <ListItems>Rua do Conde, 123</ListItems>
          </ul>
        </ContainerText>
      </Container>
    </>
  );
};

export default Contato;

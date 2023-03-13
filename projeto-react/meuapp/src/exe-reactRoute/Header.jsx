import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
`;

const Button = styled.button`
  padding: 0.8rem 1.2rem;
  margin: 0 1rem 1rem 0;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.2rem;
  border: none;
  border-radius: 4px;
  color: black;
  background: #eee;

  ${({ ativo }) =>
    ativo &&
    `
    background: #84e;
  `}
`;

const Header = () => {
  return (
    <>
      <Nav>
        <Link to="/">
          <Button ativo>Produtos</Button>
        </Link>
        <Link to="contato">
          <Button>Contato</Button>
        </Link>
      </Nav>
    </>
  );
};

export default Header;

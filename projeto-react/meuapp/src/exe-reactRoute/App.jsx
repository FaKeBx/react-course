import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Contato from "./Contato";
import Produtos from "./Produtos";
import styled from "styled-components";
import Produto from "./Produto";
// Utilize a API abaixo para puxar a lista de produto
// https://ranekapi.origamid.dev/json/api/produto
// Cada produto possui o id, o mesmo pode ser passado na api para retornar os dados desse produto específico
// https://ranekapi.origamid.dev/json/api/produto/notebook

const ContainerCenter = styled.div`
  margin: 0 auto;
`;

document.body.style.margin = "4rem 16rem";

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://ranekapi.origamid.dev/json/api/produto`)
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  return (
    <BrowserRouter>
      <ContainerCenter>
        <Header />
        <Routes>
          <Route path="produtos" element={<Produtos data={data} />} />
          <Route path="produtos/:id/*" element={<Produto data={data} />} />
          <Route path="contato" element={<Contato />} />
        </Routes>
      </ContainerCenter>
    </BrowserRouter>
  );
};

export default App;

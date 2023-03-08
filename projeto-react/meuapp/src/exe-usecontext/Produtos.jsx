import React from "react";
import { GlobalContext } from "./GlobalContext";

function Produtos() {
  const { dados } = React.useContext(GlobalContext);

  return (
    <>
      Produtos:{" "}
      {dados &&
        dados.map((produto) => {
          return <li key={produto.id}>{produto.nome}</li>;
        })}
    </>
  );
}

export default Produtos;

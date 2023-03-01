import React from "react";

function Produto({ nome, propriedades }) {
  return (
    <>
      <div style={{ border: "3px solid", margin: "1rem 0", padding: "1rem" }}>
        <p key={nome}>{nome}</p>
        <ul>
          {propriedades.map((espec) => {
            return <li key={espec}>{espec}</li>;
          })}
        </ul>
      </div>
    </>
  );
}

export default Produto;

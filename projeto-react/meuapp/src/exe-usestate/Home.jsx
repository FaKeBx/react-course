import React from "react";
import Produtos from "./Produtos";
// Os links abaixo puxam dados de um produto em formato JSON
// https://ranekapi.origamid.dev/json/api/produto/tablet
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// https://ranekapi.origamid.dev/json/api/produto/notebook
// Crie uma interface com 3 botões, um para cada produto.
// Ao clicar no botão faça um fetch a api e mostre os dados do produto na tela.
// Mostre apenas um produto por vez
// Mostre a mensagem carregando... enquanto o fetch é realizado

function Home() {
  const [dados, setDados] = React.useState(null);
  const [carregando, setCarregando] = React.useState(null);

  async function pushData(event) {
    setCarregando(true);
    await fetch(`https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`)
      .then((resp) => resp.json())
      .then((json) => setDados(json));
    setCarregando(false);
  }

  return (
    <>
      <button style={{ margin: "1rem" }} onClick={pushData}>
        notebook
      </button>
      <button style={{ margin: "1rem" }} onClick={pushData}>
        tablet
      </button>
      <button style={{ margin: "1rem" }} onClick={pushData}>
        smartphone
      </button>
      {carregando && <p>Carregando...</p>}
      {!carregando && dados && <Produtos dados={dados} />}
    </>
  );
}

export default Home;

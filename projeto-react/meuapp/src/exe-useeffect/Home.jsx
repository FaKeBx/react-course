import React from "react";
import Produto from "./Produto";
// Quando o usuário clicar em um dos botões, faça um fetch do produto clicado utilizando a api abaixo
// https://ranekapi.origamid.dev/json/api/produto/notebook
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// Mostre o nome e preço na tela (separe essa informação em um componente Produto.js)
// Defina o produto clicado como uma preferência do usuário no localStorage
// Quando o usuário entrar no site, se existe um produto no localStorage, faça o fetch do mesmo

function Home() {
  const [dados, setDados] = React.useState(null);

  React.useEffect(() => {
    if (dados == null) {
      fetch(`https://ranekapi.origamid.dev/json/api/produto/${localStorage.getItem("Produto")}`)
        .then((response) => response.json())
        .then((json) => setDados(json));
    }
  }, []);

  async function pushData(event) {
    await fetch(`https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`)
      .then((response) => response.json())
      .then((json) => setDados(json));

    localStorage.setItem("Produto", event.target.innerText);
  }

  return (
    <>
      <h1>Preferência: {dados && dados.id}</h1>
      <button onClick={pushData}>notebook</button>
      <button onClick={pushData} style={{ marginLeft: "20px" }}>
        smartphone
      </button>
      {dados && <Produto dado={dados} />}
    </>
  );
}

export default Home;

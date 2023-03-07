import React from "react";
import Produto from "./Produto";
// Quando o usuário clicar em um dos botões, faça um fetch do produto clicado utilizando a api abaixo
// https://ranekapi.origamid.dev/json/api/produto/notebook
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// Mostre o nome e preço na tela (separe essa informação em um componente Produto.js)
// Defina o produto clicado como uma preferência do usuário no localStorage
// Quando o usuário entrar no site, se existe um produto no localStorage, faça o fetch do mesmo

function Home() {
  const [preference, setPreference] = React.useState(null);

  // criei uma constante para que eu possa verificar se o
  // localStorage esta vazio ou nao, caso nao esteja, ele
  // vai alterar o estado de preference e mudar o valor dentro
  // do h1. Lmebrando que esse efeito so ocorre uma vez quando
  // o site e aberto
  React.useEffect(() => {
    const localPreference = localStorage.getItem("produto");
    if (localPreference !== null) setPreference(localPreference);
  }, []);

  // sempre que preference mudar o useEffect vai salvar o
  // valor do texto de dentro do button e colocar esse valor
  // no localStorage
  React.useEffect(() => {
    if (preference !== null) localStorage.setItem("produto", preference);
  }, [preference]);

  // sempre que o usuario clicar em qualquer um dos buttons,
  // a funcao vai pegar o texto de dentro do button e mudar o
  // estado da preference. Alterando o texto do h1
  function pushPreference({ target }) {
    setPreference(target.innerText);
  }

  return (
    <>
      <h1>Preferência: {preference}</h1>
      <button onClick={pushPreference} style={{ marginRight: "1rem" }}>
        notebook
      </button>
      <button onClick={pushPreference}>smartphone</button>
      {preference && <Produto chosenPreference={preference} />}
    </>
  );
}

export default Home;

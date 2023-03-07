import React from "react";

// produto tem uma prop chamada chosenPreference que
// recebe um objeto vindo do useState de preference
// o qual traz uma string com dois possiveis valores
const Produto = ({ chosenPreference }) => {
  const [dados, setDados] = React.useState(null);

  // o useEffect atualiza sempre que o valor de preference
  // muda. O fetch puxa os dados da api e transforma a resposta
  // em json, depois pega o json e seta ele em dados, mudando o useState
  // de dados
  React.useEffect(() => {
    if (chosenPreference !== null)
      fetch(`https://ranekapi.origamid.dev/json/api/produto/${chosenPreference}`)
        .then((response) => response.json())
        .then((json) => {
          return setDados(json);
        });
  }, [chosenPreference]);

  // se dados nao forem nulos o retorno abaixo ocorre
  if (dados !== null)
    return (
      <>
        <h1>{dados.nome}</h1>
        <p>{`R$ ${dados.preco}`}</p>
      </>
    );
};

export default Produto;

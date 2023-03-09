// Mostre os dados da aplicação, como aprensetado no vídeo
// Não utilize CSS externo, use o style para mudar as cores
// Se a situação estiver ativa pinte de verde, inativa vermelho
// Se o gasto for maior que 10000 mostre uma mensagem
const luana = {
  cliente: "Luana",
  idade: 27,
  compras: [
    { nome: "Notebook", preco: "R$ 2500" },
    { nome: "Geladeira", preco: "R$ 3000" },
    { nome: "Smartphone", preco: "R$ 1500" },
  ],
  ativa: true,
};

const mario = {
  cliente: "Mario",
  idade: 31,
  compras: [
    { nome: "Notebook", preco: "R$ 2500" },
    { nome: "Geladeira", preco: "R$ 3000" },
    { nome: "Smartphone", preco: "R$ 1500" },
    { nome: "Guitarra", preco: "R$ 3500" },
  ],
  ativa: false,
};

const Exercicio1 = () => {
  const dados = mario;

  const gastoTotal = dados.compras
    .map((element) => +element.preco.replace("R$ ", ""))
    .reduce((ant, next) => ant + next);

  return (
    <div>
      <p>Nome: {dados.cliente}</p>
      <p>Idade: {dados.idade}</p>
      <p>
        Situação:{" "}
        <span style={dados.ativa ? { color: "green" } : { color: "red" }}>{dados.ativa ? "Ativa" : "Inativa"}</span>
      </p>
      <p>Total gasto: {gastoTotal}</p>
      {gastoTotal > 10000 && <p>Cuidado!!! Gastos elevados</p>}
    </div>
  );
};

export default Exercicio1;

import React, { useEffect, useState } from "react";
import Radio from "./Radio";

const perguntas = [
  {
    pergunta: "Qual método é utilizado para criar componentes?",
    options: ["React.makeComponent()", "React.createComponent()", "React.createElement()"],
    resposta: "React.createElement()",
    id: "p1",
  },
  {
    pergunta: "Como importamos um componente externo?",
    options: ['import Component from "./Component"', 'require("./Component")', 'import "./Component"'],
    resposta: 'import Component from "./Component"',
    id: "p2",
  },
  {
    pergunta: "Qual hook não é nativo?",
    options: ["useEffect()", "useFetch()", "useCallback()"],
    resposta: "useFetch()",
    id: "p3",
  },
  {
    pergunta: "Qual palavra deve ser utilizada para criarmos um hook?",
    options: ["set", "get", "use"],
    resposta: "use",
    id: "p4",
  },
  {
    pergunta: "Qual o hook usado para definir o estado de um componente?",
    options: ["useState()", "useRef()", "useEffect()", "useContext()"],
    resposta: "useState()",
    id: "p5",
  },
];

const App = () => {
  const [contador, setContador] = useState(1);
  const [pergunta, setPergunta] = useState(`p${contador}`);
  const [resposta, setResposta] = useState(null);
  const [acerto, setAcerto] = useState(0);

  useEffect(() => {
    setPergunta(`p${contador}`);
  }, [contador]);

  useEffect(() => {
    perguntas.map((pergunta) => {
      if (pergunta.resposta === resposta) {
        setAcerto(acerto + 1);
      } else {
        return;
      }
    });
  }, [resposta]);

  function handleSubmit(event) {
    event.preventDefault();
    if (resposta !== null) {
      setContador(contador + 1);
      setResposta(null);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      {perguntas
        .map(({ pergunta, options, id }) => (
          <Radio key={id} options={options} value={resposta} setValue={setResposta} pergunta={pergunta} />
        ))
        .filter(({ key }) => key === pergunta)}
      {contador > perguntas.length ? (
        `Você acertou: ${acerto} de ${perguntas.length}`
      ) : (
        <button style={{ display: "block", marginTop: "1rem" }}>Próxima</button>
      )}
    </form>
  );
};

export default App;

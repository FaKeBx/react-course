import React, { useContext } from "react";
import { GlobalContext } from "./GlobalContext";

const LimparDados = () => {
  const { limparDados } = useContext(GlobalContext);
  return <button onClick={() => limparDados()}>Limpar dados</button>;
};

export default LimparDados;

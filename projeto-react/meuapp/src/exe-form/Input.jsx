import React, { useState } from "react";
// Faça um fetch (POST) para a API abaixo
// Para a criação ser aceita é necessário enviar dados de:
// nome, email, senha, cep, rua, numero, bairro, cidade e estado

// Essa é a função utilizado para realizar o POST
// fetch("https://ranekapi.origamid.dev/json/api/usuario", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   // form é o objeto com os dados do formulário
//   body: JSON.stringify(form),
// });

// Mostre uma mensagem na tela, caso a resposta da API seja positiva

const formFields = [
  {
    id: "nome",
    type: "text",
    label: "Nome",
  },
  {
    id: "email",
    type: "email",
    label: "Email",
  },
  {
    id: "senha",
    type: "password",
    label: "Senha",
  },
  {
    id: "cep",
    type: "text",
    label: "CEP",
  },
  {
    id: "rua",
    type: "text",
    label: "Rua",
  },
  {
    id: "numero",
    type: "text",
    label: "Número",
  },
  {
    id: "bairro",
    type: "text",
    label: "Bairro",
  },
  {
    id: "cidade",
    type: "text",
    label: "Cidade",
  },
  {
    id: "estado",
    type: "text",
    label: "Estado",
  },
];

const Input = () => {
  const [form, setForm] = React.useState(
    formFields.reduce((ant, field) => {
      return { ...ant, [field.id]: "" };
    }, {})
  );

  const [response, setResponse] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    fetch("https://ranekapi.origamid.dev/json/api/usuario", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    }).then((response) => setResponse(response));
  }

  function whoInput({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
    console.log(form);
  }

  return (
    <form onSubmit={handleSubmit}>
      {formFields.map(({ id, type, label }) => {
        return (
          <div key={id}>
            <label htmlFor={id}>{label}</label>
            <input type={type} id={id} value={form[id]} onChange={whoInput} />
          </div>
        );
      })}
      {response && response.ok && "Formulário enviado!"}

      <button style={{ display: "block", marginTop: "1rem" }}>Enviar</button>
    </form>
  );
};

export default Input;

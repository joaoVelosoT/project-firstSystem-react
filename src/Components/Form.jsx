import { useState } from "react";
import "./form.css";
const Form = (props) => {
  // Estado inicial do formulario
  const initilForm = {
    nome: "",
    email : "",
    senha : "",
  };

  // Estado do formulario
  const [formState, setFormState] = useState(initilForm);
  // Função para lidar com a alteração dos campos de entrada
  const handleInput = (event) => {
    //  Obter o valor e o nome do campo de entrada
    const target = event.currentTarget;
    // Extrair o valor e nome do campo de entrada
    const { value, name, email, senha } = target;

    // Atualizar o estado do formulario com os novos valores
    setFormState({ ...formState, [name]: value , [email] : value, [senha] : value}); // ... => espalhando informações
  };

  // Função para lidar com a submissão do formulario
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formState.nome);
    console.log(formState.email);
    console.log(formState.senha);
    setFormState({...initilForm})
  };

  return (
    <div className="containerForm">
      <div>
        <form onSubmit={handleSubmit}>
            <h1>Cadastro</h1>
          <div className="form-control">

            <div className="container-input">
            <label htmlFor="nome">Nome</label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={formState.nome}
              onChange={handleInput}
            />
            </div>
            <div className="container-input">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              value={formState.email}
              onChange={handleInput}
            />
            </div>
            <div className="container-input">
            <label htmlFor="senha">Senha</label>
            <input
              type="text"
              id="senha"
              name="senha"
              value={formState.senha}
              onChange={handleInput}
            />
                
            </div>
            
          </div>
          <div className="form-control">
            <button type="submit">Enviar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;

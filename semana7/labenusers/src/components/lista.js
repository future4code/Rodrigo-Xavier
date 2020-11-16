import React from 'react';
import styled from "styled-components";
import axios from "axios";

const BotaoDelete = styled.span`
  color: red;
  margin-left:10px;
`
const urlPadrao = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

const configAxios = {
  headers: {
    Authorization: "rodrigo-xavier-dumont"
  }
};

class Lista extends React.Component {
  state = {
    listaDeUsuario: []
  };

  componentDidMount = () => {
    this.pegarTodosUsuarios();
  }

  pegarTodosUsuarios = () => {
    axios.get(urlPadrao , configAxios).then(response => {
      this.setState({listaDeUsuario: response.data})
    }).catch(error => {
      console.log(error.message)
    });
  };

  deletarUsuario = (idUsuario) => {
  console.log(idUsuario)

  }
  

  render() {
    const rendListaUsuario = this.state.listaDeUsuario.map(usuario => {
      return (
      <p key={usuario.id}>{usuario.name}
      <BotaoDelete onCLick={() => this.deletarUsuario(usuario.id)} >X</BotaoDelete>
      </p>
      );
    });

  return (
    <div>
      <h2>Usuários Cadastrados:</h2>
      {rendListaUsuario}
    
    </div>
  );
}
}

export default Lista;
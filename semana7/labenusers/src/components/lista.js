import React from 'react';
import styled from "styled-components";

const BotaoDelete = styled.span`
  color: red;
  margin-left:10px;
`

class Lista extends React.Component {
  state = {
    listaDeUsuario: [
      {
        id: "1",
        name: "joao"
      },
      {
        id: "2",
        name: "Mamao"
      }
    ]
  }

  render() {
    const rendListaUsuario = this.state.listaDeUsuario.map(usuario => {
      return (
      <p key={usuario.id}>{usuario.name}
      <BotaoDelete>X</BotaoDelete>
      </p>
      )
    })

  return (
    <div>
      <h2>Usuários Cadastrados:</h2>
      {rendListaUsuario}
    
    </div>
  );
}
}

export default Lista;
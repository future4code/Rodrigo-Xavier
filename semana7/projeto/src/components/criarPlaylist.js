import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const BotaoCriar = styled.button`
&:hover {
  cursor: pointer;
}
  border: 1px solid red;
  border-radius: 10px;
  color: red;
  margin-left: 10px;
  background-color: white;
  
`;

const Input = styled.input`
  border: 1px solid red;
  border-radius: 10px;
`;

class CriarPlaylist extends React.Component {
  state = {
    nomePlaylist: ""
  }

  criarPlaylist = () => {
    const body = {
      name: this.state.nomePlaylist
    };

    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists', body, {
      headers: {
        Authorization: 'rodrigo-xavier-dumont'
      }
    }).then((response) => {
      alert("Playlist criada com sucesso!");
      this.setState({ nomePlaylist: "" })
    }).catch((error) => {
      console.log(error.message);
    })
  }

  onChangeNomePlaylist = (event) => {
    this.setState({ nomePlaylist: event.target.value })
  };

  render() {

    return (
      <div className="App">
        <Input value={this.state.nomePlaylist} onChange={this.onChangeNomePlaylist} placeholder="Nome da Playlist" />
        <BotaoCriar onClick={this.criarPlaylist} >Criar Playlist</BotaoCriar>
      </div>
    );
  }
}

export default CriarPlaylist;
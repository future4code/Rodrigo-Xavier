import React from 'react';
import axios from 'axios';

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
        <input value={this.state.nomePlaylist} onChange={this.onChangeNomePlaylist} placeholder="Inserir nome da Playlist" />
        <button onClick={this.criarPlaylist} >Criar Playlist</button>
      </div>
    );
  }
}

export default CriarPlaylist;
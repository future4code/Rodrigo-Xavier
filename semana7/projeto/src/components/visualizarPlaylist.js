import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const DeletePlaylist = styled.button`
&:hover {
  cursor: pointer;
}
  border: 1px solid red;
  border-radius: 10px;
  color: red;
  margin-left: 10px;
  background-color: white;
  font-size: 12px;
`;

class VisualizarPlaylist extends React.Component {

  state = {
    lista: []
  }

  componentDidMount = () => {
    this.mostrarPlaylist()
  }

  componentDidUpdate = () => {
    this.mostrarPlaylist()
  }

  mostrarPlaylist = () => {
    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists', {
      headers: {
        Authorization: 'rodrigo-xavier-dumont'
      }
    }).then(response => {
      this.setState({ lista: response.data.result.list })
    }).catch(error => {
      console.log(error.message)
    })
  }

  deletarPlaylist = (playlistId) => {
    axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}`, {
      headers: {
        Authorization: 'rodrigo-xavier-dumont'
      }
    }).then(response => {
      alert("Playlist excluída!")
    }).catch(error => {
      console.log(error.message)
    })
  }
  

  render() {
    const renderizarLista = this.state.lista.map(playlist => {
      return <p key={playlist.id}>{playlist.name}
      <DeletePlaylist onClick={() => this.deletarPlaylist(playlist.id)} >Excluir</DeletePlaylist>
      </p>
    })

    return (
      <div className="App">

        <h1>Visualizar playlist:</h1>
        {renderizarLista}

      </div>
    );
  }
}

export default VisualizarPlaylist;
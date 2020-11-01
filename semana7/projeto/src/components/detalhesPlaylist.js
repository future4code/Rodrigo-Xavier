
import axios from 'axios';
import React from 'react';

class DetalhesPlaylist extends React.Component {
  state = {
    detalhesPlaylist: []
  }

  componentDidMount = () => {
    this.mostrarDetalhesPlaylist()
  }

  mostrarDetalhesPlaylist = (playlistId) => {
    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/$playlistId/tracks`, {
      headers: {
        Authorization: 'rodrigo-xavier-dumont'
      }
    }).then(response => {
      console.log(response.data)
      // this.setState({ detalhesPlaylist: response})
    }).catch(error => {
      console.log(error.message)
    })
  }
  




  render() {
    const renderizarPlaylit = this.state.detalhesPlaylist.map(playlist => {
      return < p key = { playlist.id } > {playlist.name} </p>
    })

    return (
      <div className="App">
        <h1>
          Detalhes playlist:
          {renderizarPlaylit}
        </h1>
      </div>
    );
  }
}

export default DetalhesPlaylist;
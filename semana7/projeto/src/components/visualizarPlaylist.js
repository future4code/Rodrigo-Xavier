import React from 'react';
import axios from 'axios';

class VisualizarPlaylist extends React.Component {

    state={
        lista: [
            {
                id: "1",
                name: "teste 1"
            },
            {
                id: "2",
                name: "teste 2"
            }
              ]
    }

    mostrarPlaylist = () => {
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists', {
        headers: {
            Authorization: 'rodrigo-xavier-dumont'
        }
        }).then((response) => {
            console.log(response.data)
        }).catch((error) => {
            console.log(error.message)
        })
    }

  render(){
    const renderizarLista = this.state.lista.map(playlist => {
    return <p key={playlist.id}>{playlist.name}</p>
    })

  return (
    <div className="App">
     
     <h1>visualizar playlist:</h1>
      {renderizarLista}

    </div>
  );
}
}

export default VisualizarPlaylist;
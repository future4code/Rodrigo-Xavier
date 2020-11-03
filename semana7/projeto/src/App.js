
import React from 'react';
import CriarPlaylist from './components/criarPlaylist';
import VisualizarPlaylist from './components/visualizarPlaylist';
import DetalhesPlaylist from './components/detalhesPlaylist';
import './App.css'


class App extends React.Component {
  render(){
  return (
    <div>
     <CriarPlaylist />
     <VisualizarPlaylist />
     <DetalhesPlaylist />
    </div>
  );
}
}

export default App;
import React from 'react';
import Login from './components/login';
import Lista from './components/lista';
import styled from "styled-components";
import axios from 'axios'


class App extends React.Component {
state = {
  pagFormulario : true,
};

mudarPag = () => {
  this.setState({pagFormulario: !this.state.pagFormulario});
}


  render() {
    const paginaAtual = this.state.pagFormulario ? <Login /> : <Lista />;

  return (
    <div>
    {paginaAtual}
    <button onClick={this.mudarPag}>Mudar de Página</button>
    </div>
  );
  }
}

export default App;
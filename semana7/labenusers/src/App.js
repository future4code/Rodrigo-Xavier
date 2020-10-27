import React from 'react';
import Login from './components/login';
import Lista from './components/lista';
import styled from "styled-components";
import axios from 'axios'





class App extends React.Component {
state = {
  estaLogada : false,
};

  onClickLogin = () => {
    this.setState({ estaLogada: true});
    //essa função muda o estado estaLogada para verdadeiro
  };

  onCLickLogout = () => {
    this.setState({ estaLogada: false});
  };


  render() {
    const paginaRenderizada = () => {
      if(this.state.estaLogada) {
        return (
          <div>
          <Lista /> 
          <button onCLick={this.onCLickLogout}>VOLTAR</button>
          </div>
        )
      } else {
      return ( 
        <div>
        <Login />
        <button onCLick={this.onClickLogin}>VOLTAR</button>
        </div>
        )
    }
  }

  return (
    <div>
    {paginaRenderizada()}
    </div>
  );
}
}

export default App;
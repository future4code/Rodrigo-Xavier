import React from 'react';
import './App.css';
import {DadosGerais} from './components/Etapa1';
import {InformacoesEnsinoSuperior} from './components/Etapa2';
import {InformacoesGeraisDeEnsino} from './components/Etapa3';
import {FimFormulario} from './components/Final';



class App extends React.Component {

  state={
    etapa: 1,
  }

  renderizaEtapa = () => {
    switch(this.state.etapa){
      case 1:
        return <DadosGerais />;
      case 2:
        return <InformacoesEnsinoSuperior />;
      case 3:
        return <InformacoesGeraisDeEnsino />;
      case 4:
        return <FimFormulario />;
    }
  }

  irParaProximaEtapa = () =>{
     this.setState({etapa: this.state.etapa + 1})
  }

  render () {
      if (this.state.etapa === 4) {
        return <FimFormulario />
      } else {

      return (
        <div>
          {this.renderizaEtapa()}
          <button onClick={this.irParaProximaEtapa}>Próxima Etapa</button>
        </div>
      );
    }
}
}

export default App;

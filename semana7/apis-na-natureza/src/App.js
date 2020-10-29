import React from 'react';
import axios from 'axios';


class App extends React.Component {

  state = {
    activityData: ''

  }

  //funcao que e executada qdo o botao é clicado
  onClickButton = () => {
    axios.get('http://www.boredapi.com/api/activity/').then((response) => {
    this.setState({activityData: response.data}) //atualizando o estado, com os dados do .data
    
    })
  };
  
  
  render(){
    console.log('Atividade: ', this.state.activity)
  return (
    <div>
      <button onClick={this.onClickButton}>Próxima atividade</button>
      {}

      <div>
        <p>Nome:{this.state.activityData.activity} </p>
        <p>Tipo: </p>
        <p>Número de participantes: </p>
        <p>Preço: </p>

      </div>  

    </div>
  );
};
}

export default App;
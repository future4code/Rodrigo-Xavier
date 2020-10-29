import React from 'react';
import axios from 'axios';


class App extends React.Component {

  state = {
    activityData: null

  }

  componentDidMount(){
    this.getActivity()
  }
  
  getActivity = () => {
    axios.get('http://www.boredapi.com/api/activity/').then((response) => {
    this.setState({activityData: response.data}) //atualizando o estado, com os dados do .data
    })
  };
  
  render(){
    console.log('Atividade: ', this.state.activity)
  return (
    <div>
      <button onClick={this.getActivity}>Próxima atividade</button>
      {this.state.activityData && <div>
        <p>Nome: {this.state.activityData.activity} </p>
        <p>Tipo: {this.state.activityData.type} </p>
        <p>Número de participantes: {this.state.activityData.participants}</p>
        <p>Preço: {this.state.activityData.price}</p>
      </div>  
      }
    
  </div>
  );
};
}



export default App;
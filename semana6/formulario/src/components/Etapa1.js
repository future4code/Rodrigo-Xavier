import React from 'react';


export class DadosGerais extends React.Component{

    render(){
        return(
        <div>
        <h2>Etapa 01 - DADOS GERAIS</h2>

        <p>1. Qual o seu nome? </p>
        <input></input>

        <p>2. Qual sua idade? </p>
        <input></input>

        <p>3. Qual seu email? </p>
        <input></input>

        <p>4. Qual a sua escolaridade? </p>
        <select>
            <option value= 'Ensino médio incompleto'>Ensino médio incompleto</option>
            <option value= 'Ensino médio completo'>Ensino médio completo</option>
            <option value= 'Ensino supeior incompleto'>Ensino superior incompleto</option>
            <option value= 'Ensino médio incompleto'>Ensino médio incompleto</option>
        </select>

        
        
        </div>
    )
    }
}
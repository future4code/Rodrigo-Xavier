import React from 'react';


export class InformacoesGeraisDeEnsino extends React.Component{

    render(){
        return(
        <div>
        <h2>Etapa 3 - INFORMAÇÕES GERAIS DE ENSINO</h2>

        <p>5. Por que você não terminou um curso de graduação? </p>
        <input></input>

        <p>6. Você fez algum curso complementar? </p>
        <select> 
            <option value='Nenhum'>Nenhum</option>
            <option value='Curso técnico'>Curso técnico</option>
            <option value='Curso de inglês'>Curso de inglês</option>
        </select>
        

        
        </div>
    )
    }
}
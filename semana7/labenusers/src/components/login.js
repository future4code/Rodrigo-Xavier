import React from 'react';
import styled from "styled-components";


class Login extends React.Component {

    state = {
        nome: "",
        email: ""
    }

    mudarNome = (evento) => {
        this.setState ({nome: evento.target.value})
    }

    mudarEmail = (evento) => {
        this.setState ({email: evento.target.value})
    }

    criarUsuario = () => {
        const body {
        name: this.state.nome,
        email: this.state.email
    }

    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users")
    
    }

    render() {
    
    return (
        <div>
        <p>Nome:</p>
        <input value={this.state.nome} onChange={this.mudarNome} />

        <p>E-mail:</p>
        <input value={this.state.email} onChange={this.mudarEmail} />
        
        <button onClick={this.criarUsuario} >Criar Usuário</button>
        </div>
    );
    }
    }

export default Login;
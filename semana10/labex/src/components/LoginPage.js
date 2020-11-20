import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import styled from 'styled-components';
import Logo from '../img/labex.svg'

const ContainerLogin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 250px;
`;

const LoginButton = styled.button`
 background-color: black;
  border: 1px solid black;
  color: white;
  padding: 10px 30px;
  text-align: center;
  text-decoration: none;
  font-size: 15px;
  margin: 10px 2px;
  cursor: pointer;
`;

const BackButton = styled.button`
  background-color: white;
  border: 1px solid black;
  color: black;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  font-size: 18px;
  margin: 4px 2px;
  margin-top: 100px;
  cursor: pointer;
`;

function  LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")  
  const history = useHistory()

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      history.push("/adm-user");
    }
    
  }, [history]);

  const goToAdmUser = () => {
  history.push("/adm-user")
  }

  const goToHomePage = () => {
    history.push("/")
    }

  const handleEmail = (event) => {
    setEmail(event.target.value)
  }

  const handlePassword = (event) => {
    setPassword(event.target.value)
  }

  const login = () => {
  const body= {
    email: email,
    password: password
  }
  axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/rodrigo-xavier-dumont/login", body)
  .then((res) => {
    localStorage.setItem("token", res.data.token);
    history.push("/adm-user")
  }) 
  .catch(error => {
    console.log(error)
  })
}

  return(
    <ContainerLogin>
        <input value={email} onChange={handleEmail} placeholder="E-mail"/>
        <input value={password} onChange={handlePassword} placeholder="Senha" type="password" />
        <LoginButton onClick={login}>Logar</LoginButton>
        <BackButton onClick={goToHomePage}>Voltar</BackButton>
    </ContainerLogin>
  )
}

export default  LoginPage;
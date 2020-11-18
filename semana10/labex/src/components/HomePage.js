import axios from 'axios';
import React from 'react';
import { useHistory } from "react-router-dom";
import styled from 'styled-components';
import Logo from '../img/labex.svg'

const ContainerHome = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 80vh;
`;

const LoginButton = styled.button`
 background-color: black;
  border: 1px solid black;
  color: white;
  padding: 15px 43px;
  text-align: center;
  text-decoration: none;
  font-size: 18px;
  margin: 4px 2px;
  cursor: pointer;
`;

const TravelButton = styled.button`
 background-color: black;
  border: none;
  color: white;
  padding: 15px 27px;
  text-align: center;
  text-decoration: none;
  font-size: 18px;
  margin: 4px 2px;
  cursor: pointer;
`;

const Logo1 = styled.img`
 margin-bottom: 70px;
 width: 200px;
`;

function  HomePage() {
const history = useHistory()

const goToLoginPage = () => {
  history.push("/login")
}
const goToListTripsPage = () => {
  history.push("/trips/list")
}

return (
    <ContainerHome>
      <Logo1 src= {Logo}/>
      <h1>Área Restrita</h1>
      <LoginButton onClick={goToLoginPage}> Login </LoginButton>
      <h1>Quer viajar conosco?</h1>
      <TravelButton onClick={goToListTripsPage}> Eu quero! </TravelButton>
  
    </ContainerHome>
)
}


export default  HomePage;
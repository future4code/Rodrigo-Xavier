
import React from 'react';
import { useHistory } from "react-router-dom";
import styled from 'styled-components';

const ContainerHome = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 300px;
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

function  HomePage() {
const history = useHistory()

const goToLoginPage = () => {
  history.push("/login")
}
const goToListTripsPage = () => {
  history.push("/trips/list")
}

return (
  
  <div>
    
    <ContainerHome>
      <h2>Área Restrita</h2>
      <LoginButton onClick={goToLoginPage}> Login </LoginButton>
      <h2>Quer viajar conosco?</h2>
      <TravelButton onClick={goToListTripsPage}> Eu quero! </TravelButton>
    </ContainerHome>
    </div>
)
}


export default  HomePage;
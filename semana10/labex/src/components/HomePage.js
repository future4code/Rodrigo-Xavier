import axios from 'axios';
import React from 'react';
import { useHistory } from "react-router-dom";
import styled from 'styled-components';

const ContainerHome = styled.div`
  background-color: lightgrey;
  width: 100vw;
  height: 100vh;
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

      <button onClick={goToLoginPage}> Login </button>
      <button onClick={goToListTripsPage}> Ir paraviagens </button>
      
    </ContainerHome>
)
}


export default  HomePage;
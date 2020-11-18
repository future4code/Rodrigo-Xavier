import React from 'react';
import { useHistory } from "react-router-dom";
import styled from 'styled-components';
import Logo from '../img/labex.svg'

const ContainerUser = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 80vh;
`;

const Logo1 = styled.img`
 margin-bottom: 70px;
 width: 200px;
 cursor: pointer;
`;

const ListTravelButton = styled.button`
 background-color: black;
  border: 1px solid black;
  color: white;
  padding: 15px 38px;
  text-align: center;
  text-decoration: none;
  font-size: 18px;
  margin: 4px 2px;
  cursor: pointer;
`;

const CreateTravelButton = styled.button`
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

const DetailTripButton = styled.button`
  background-color: black;
  border: 1px solid black;
  color: white;
  padding: 15px 15px;
  text-align: center;
  text-decoration: none;
  font-size: 18px;
  margin: 4px 2px;
  cursor: pointer;
`;


function  AdmUser() {
    const history = useHistory()

    const goToHomePage = () => {
        history.push("/")
        }
    
    const goToCreateTripPage = () => {
        history.push("/trips/create")
        }

    const goToListTripPage = () => {
        history.push("/trips/list")
        }

    const goToTripsPage = () => {
        history.push("/trips/details")
        }

    return (
    <ContainerUser>
      <Logo1 src= {Logo}/>
      <CreateTravelButton onClick={goToCreateTripPage}>Criar Viagem</CreateTravelButton>
      <ListTravelButton onClick={goToListTripPage}>Exibir Viagens</ListTravelButton>
      <DetailTripButton onClick={goToTripsPage} >Detalhes da viagem</DetailTripButton>
      <BackButton onClick={goToHomePage}>Voltar</BackButton>
    </ContainerUser>
  )
}

export default AdmUser;
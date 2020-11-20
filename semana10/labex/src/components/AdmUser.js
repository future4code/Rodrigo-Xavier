import React from 'react';
import { useHistory } from "react-router-dom";
import styled from 'styled-components';
import ButtonBackHome from './buttons/ButtonBackHome';

const ContainerUser = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 40vh;
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
    
    const goToCreateTripPage = () => {
        history.push("/trips/create")
        }

    const goToListTripPage = () => {
        history.push("/trips/adm/list")
        }

    const goToTripsPage = () => {
        history.push("/trips/details")
        }

    return (
    <ContainerUser>
      <CreateTravelButton onClick={goToCreateTripPage}>Criar Viagem</CreateTravelButton>
      <ListTravelButton onClick={goToListTripPage}>Exibir Viagens</ListTravelButton>
      <DetailTripButton onClick={goToTripsPage} >Detalhes da viagem</DetailTripButton>
      <ButtonBackHome />
    </ContainerUser>
  )
}

export default AdmUser;
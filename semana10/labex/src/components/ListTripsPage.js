import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import styled from 'styled-components';
import ButtonBackHome from './buttons/ButtonBackHome';

const ContainerListTrips = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width:100%;
`;

const TripCard = styled.div`
  text-align: center;
  width: 420px;
`;

const ButtonApply = styled.button`
 background-color: black;
  border: 1px solid black;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  font-size: 14px;
  margin-top: 10px;
  cursor: pointer;
`;

function  ListTripsPage() {
  const history = useHistory()
  const [trips, setTrips] = useState([])

  const goToApplicationFormPage = () => {
    history.push("/application-form")
  }

  useEffect(() => {
  axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/rodrigo-xavier-dumont/trips")
  .then((res) => {
    console.log(res.data.trips)
    setTrips(res.data.trips)
  }).catch ((err) =>{
    console.log(err.message)
  })
}, [])

  return (
    <ContainerListTrips>
      <TripCard>
        {trips.map((trip) => {
          return <p key={trip.id}> {trip.name} - {trip.date} - {trip.planet} - {trip.durationInDays} dias {trip.description} <ButtonApply onClick={goToApplicationFormPage} >Candidatar</ButtonApply></p>
        })}
        
        <ButtonBackHome />
      </TripCard>
    </ContainerListTrips>
  )
}

export default  ListTripsPage;
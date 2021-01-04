import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useProtectedPage } from '../components/hooks/UseProtectedPage'
import styled from 'styled-components';
import ButtonBackAdm from './buttons/ButtonBackAdm';

const ContainerTrioDetailsPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 50vh;
`;

function  TripDetailsPage() {
  const [trip, setTrip] = useState({});
  useProtectedPage();

  useEffect(() => {
    getTripDetail();
  }, []);

  const getTripDetail = () => {
    axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/rodrigo-xavier-dumont/trip/IhmRdsOAwikSJiW36Mtj",
        {
          headers: {
            auth: localStorage.getItem("token")
          }
        })
      .then((res) => {
        setTrip(res.data.trip);
        console.log(res)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <ContainerTrioDetailsPage>
      <div>
      <h4>Detalhes</h4>
      <p> <b>Nome:</b> {trip.name}</p>
      <p><b>Planeta:</b> {trip.planet}</p>
      <p><b>Data:</b> {trip.date}</p>
      <p><b>Duração:</b> {trip.durationInDays} dias</p>
      </div>
      <ButtonBackAdm />
    </ContainerTrioDetailsPage>
  )
}

export default TripDetailsPage;
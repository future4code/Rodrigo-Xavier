import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useProtectedPage } from '../components/hooks/UseProtectedPage' 

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
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <p>Detalhes</p>
      <p>{trip.name}</p>
      <p>{trip.planet}</p>
    </div>
  )
}

export default TripDetailsPage;
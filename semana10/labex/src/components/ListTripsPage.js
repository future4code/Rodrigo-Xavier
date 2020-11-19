import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import ButtonBackHome from './buttons/ButtonBackHome';

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
    <div>
        {trips.map((trip) => {
          return <p key={trip.id}>{trip.nome}</p>
        })}
        <button onClick={goToApplicationFormPage} >Candidatar</button>
        <ButtonBackHome />
    </div>
  )
}

export default  ListTripsPage;
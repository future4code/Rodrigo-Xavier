import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import logoLike from '../img/like1.svg';
import logoCancel from '../img/cancel1.svg';

const CardInfo = styled.main`
  padding: 5px;
  background-color: #ffff;
  border-radius: 5px;
`;

const Frame = styled.div`
  width: 350px;
  height: 450px;
  box-shadow: rgba(117, 117, 117, 0.77) 0px 2px 10px 0px;
  border-radius: 5px;
`;

const Photo = styled.img`
    height: 300px;
    width: 350px;
    object-fit: contain;
    `;

const Info = styled.div`
    margin-left: 15px;
    `;

const CancelButton = styled.img`
width: 12%;
margin-left: 6.5rem;
margin-top: 10px;
cursor: pointer;
&:hover {
      width: 11%;
`;

const HeartButton = styled.img`
width: 12%;
margin-left: 5rem;
cursor: pointer;
&:hover {
      width: 11%;
`;

function Card() {
    const [profile, setProfile] = useState({});

    const getProfile =()=>{
        axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/rodrigo-xavier-dumont/person")
                .then((response) => {
                    setProfile(response.data.profile)
                }).catch((error) => {
                    console.log(error)
                })
            }

        useEffect(() => {
            getProfile();
        }, [])

       const choosePerson = (response) =>{
         const body = {
             id: profile.id,
             choice: response
         }

         axios.post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/rodrigo-xavier-dumont/choose-person",body)
         .then(() => {
            getProfile();
         }).catch((error) => {
             console.log(error)
         })
       }

    return (
        <div>
            <CardInfo>
                <Frame>
                    <Photo
                        src={profile.photo}
                        alt="Fotos de pessoas"
                    />
                    <Info>
                    <h3>{profile.name}, {profile.age}</h3>
                    <p>{profile.bio}</p>
                    </Info>
                </Frame>
            </CardInfo>

        <div>
        <CancelButton
        src={logoCancel}
        alt="cancel button"
        onClick = {()=>choosePerson(false)}
        />
        <HeartButton
        src={logoLike}
        alt="heart button"
        onClick = {()=>choosePerson(true)}
      />
        </div>
        
        </div>
    );
}

export default Card;

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const MatchImg = styled.img`
  height: 100%;
  width: 30px;
  border-radius: 50px;
  margin-right: 10px;
`;

const Name = styled.span`
    color: #752e93;
`;

const CardInfo = styled.main`
    margin: 0 2.4em;
    border-radius: 5px;
    height: 470px;
  `;

const ClearButton = styled.button`
    border: 1px solid #752e93;
    margin:9px 40px;
    color: #752e93;
    background-color: white;
    padding: 7px;
    cursor: pointer;
     &:hover{
        background-color: #752e93;
        color: white;
     }
  `;

function MatchScreen(props) {
    const [match, setMatch] = useState([]);
    const clear = () => {
        axios.put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/rodrigo-xavier-dumont/clear")
            .then(() => {
                getMatch()
                window.alert('Clear OK')
            }).catch((error) => {
                console.log(error)
            })
    }
    useEffect(() => {
        getMatch();
    }, []);
    const getMatch = () => {
        axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/rodrigo-xavier-dumont/matches")
            .then((response) => {
                setMatch(response.data.matches)
            }).catch((error) => {
                console.log(error)
            })
    }
    const viewMatch = match.map((user) => {
        return <div key={user.id}>
            <MatchImg src={user.photo} /> <Name> {user.name} </Name>
        </div>
    })
    return (
        <div>
            <CardInfo>
                {viewMatch}
            </CardInfo>
            <ClearButton onClick={clear}>Limpar swipes e matches</ClearButton>
        </div>
    );
}

export default MatchScreen;
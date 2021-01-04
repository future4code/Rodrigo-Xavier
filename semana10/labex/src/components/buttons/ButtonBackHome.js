import React from 'react';
import styled from 'styled-components';
import { useHistory } from "react-router-dom";

const BackButton = styled.button`
  background-color: white;
  border: 1px solid black;
  color: black;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  font-size: 14px;
  margin: 4px 2px;
  margin-top: 100px;
  cursor: pointer;
`;

function ButtonBackHome() {
    const history = useHistory()

    const goToHomePage = () => {
        history.push("/")
        }

  return <div>
         <BackButton onClick={goToHomePage}>Voltar</BackButton>
         </div>
}

export default ButtonBackHome;
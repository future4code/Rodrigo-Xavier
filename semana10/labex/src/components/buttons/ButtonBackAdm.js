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
  font-size: 18px;
  margin: 4px 2px;
  margin-top: 100px;
  cursor: pointer;
`;

function ButtonBackAdm() {
    const history = useHistory()

    const goToAmdUser = () => {
        history.push("/adm-user")
        }

  return <div>
         <BackButton onClick={goToAmdUser}>Voltar</BackButton>
         </div>
}

export default ButtonBackAdm;
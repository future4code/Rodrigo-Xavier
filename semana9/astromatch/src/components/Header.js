import React from 'react';
import styled from 'styled-components';
import matchUser from '../img/matchUser.svg'
import left from '../img/left.svg'

const TituloBotoes = styled.div`
  color:purple;
  border-radius:10px;
  display: flex;
  justify-content:space-around;
  align-items:center;
`;

const Title1 = styled.span`
    color: #59aca1;
    margin-left: 30%;
`;

const Title2 = styled.span`
    color: #752e93;
`;

const ButtonUser = styled.img`
  width: 30px;
  height: auto;
  cursor: pointer;
    &:hover {
      width: 25px;
`;

function Header(props) {
  return (
    <TituloBotoes>
    
      <h1><Title1>astro</Title1><Title2>match</Title2></h1>

      {props.currentScreen ? 
      <ButtonUser src={matchUser} onClick={props.changePage} alt='user icon'/>
      : 
      <ButtonUser src={left} onClick={props.changePage} alt='icon back'/>
      }
      
    </TituloBotoes>
  );
}

export default Header;
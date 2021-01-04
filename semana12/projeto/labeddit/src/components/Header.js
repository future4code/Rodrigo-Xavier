import React from 'react';
import * as S from './styled';
import logoHome from '../assets/home.png';
import { useHistory } from 'react-router-dom';
import { goToLoginPage } from '../routes/coordinator';

function Header() {
  const history = useHistory();

  return (
  <S.HeaderContainer>
      <h1>Labeddit</h1>
      <img src={logoHome} alt={"logo-home"} 
      onClick={()=> goToLoginPage(history)}/>
  </S.HeaderContainer>
  )
}

export default Header;
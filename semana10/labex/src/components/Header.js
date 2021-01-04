import React from 'react';
import Logo from '../img/labex.svg'
import styled from 'styled-components';

const Logo1 = styled.img`
 width: 200px;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 30vh;
`;

function HeaderPublic() {
  return(
    <HeaderContainer>
        <Logo1 src= {Logo}/>
    </HeaderContainer>

  )
}

export default HeaderPublic;
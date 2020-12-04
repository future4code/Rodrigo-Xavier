import styled from 'styled-components';

export const HeaderContainer = styled.div`
  background-color: #4aa9eb;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
    img{
      width: 25px;
      height: 25px;
      padding-right: 10vw;
      cursor: pointer;
        &:hover{
          width: 23px;
          height: 23px;
        }
    }
    h1{
      padding-left: 10vw;
    }
`;

import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Card from './components/Card'
import MatchScreen from './components/MatchScreen'
import Header from './components/Header'

const Container = styled.div`
  width: 360px;
  height: 600px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 2px solid #752e93;
  border-radius: 7px;
  background: white;
  box-shadow: rgba(0, 0, 0, 0.06) 0px 0px 5px;
`;

function App() {
const [currentPage, setCurrentPage] = useState(true);

const setPage = () => {
  setCurrentPage (!currentPage)
} 

  return (
    <Container>

      <Header changePage={setPage} currentScreen={currentPage}/>
      {currentPage ? <Card /> : <MatchScreen />}

    </Container>
  );
}

export default App;

import React from 'react';
import styled from 'styled-components';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import CardsList from './components/CardList';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-grow: 1;
  padding: 20px;
`;

const MainContent = styled.main`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const App: React.FC = () => {
  return (
    <AppContainer>
      <ContentContainer>
        <Sidebar />
        <MainContent>
          <CardsList />
        </MainContent>
      </ContentContainer>
      <Footer />
    </AppContainer>
  );
};

export default App;

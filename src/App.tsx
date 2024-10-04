import React from "react";
import styled from "styled-components";
import Sidebar from "./components/Sidebar";
import CardsList from "./components/CardList";
import Footer from "./components/Footer";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const MainContent = styled.main`
  flex-grow: 1;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const App: React.FC = () => {
  return (
    <AppContainer>
      <Sidebar />
      <MainContent>
        <CardsList />
      </MainContent>
      <Footer />
    </AppContainer>
  );
};

export default App;

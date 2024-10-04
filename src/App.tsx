import React from "react";
import styled from "styled-components";
import PageLayout from "./components/PageLayout";

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
      <PageLayout />
    </AppContainer>
  );
};

export default App;

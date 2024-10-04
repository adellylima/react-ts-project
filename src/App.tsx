import React from "react";
import styled from "styled-components";
import PageLayout from "./components/PageLayout";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const App: React.FC = () => {
  return (
    <AppContainer>
      <PageLayout />
    </AppContainer>
  );
};

export default App;

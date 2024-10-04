import React from "react";
import styled from "styled-components";
import Sidebar from "./Sidebar";
import CardsList from "./CardList";

const PageContainer = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

const MainContent = styled.div`
  display: flex;
  flex: 1;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Footer = styled.footer`
  background-color: #333;
  color: white;
  padding: 20px;
  text-align: center;
  font-size: 0.9em;

  p {
    margin: 0;
  }

  a {
    color: #fff;
    text-decoration: underline;

    &:hover {
      color: #f9f9f9;
    }
  }
`;

const PageLayout: React.FC = () => {
  return (
    <PageContainer>
      <MainContent>
        <Sidebar />
        <CardsList />
      </MainContent>
      <Footer>
        <p>Made by Adelly Lima with ❤️</p>
      </Footer>
    </PageContainer>
  );
};

export default PageLayout;

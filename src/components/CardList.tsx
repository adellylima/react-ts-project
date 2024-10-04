import React from 'react';
import styled from 'styled-components';

const CardsListContainer = styled.section`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const CardsList: React.FC = () => {
  return (
    <CardsListContainer>
      <h2>Cards List</h2>
    </CardsListContainer>
  );
};

export default CardsList;

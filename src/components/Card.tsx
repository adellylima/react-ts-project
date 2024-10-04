import React, { useState } from 'react';
import styled from 'styled-components';

interface CardProps {
  name: string;
  subject: string;
}

const CardContainer = styled.div`
  padding: 20px;
  margin-bottom: 20px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  cursor: pointer;
  transition: box-shadow 0.3s ease-in-out;
  
  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

const CardTitle = styled.h3`
  margin: 0;
  font-size: 1.5em;
  color: #333;
`;

const CardSubject = styled.p`
  margin: 10px 0;
  font-size: 1em;
  color: #666;
`;

const Card: React.FC<CardProps> = ({ name, subject }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <CardContainer onClick={toggleExpand}>
      <CardTitle>{name}</CardTitle>
      {isExpanded && <CardSubject>{subject}</CardSubject>}
    </CardContainer>
  );
};

export default Card;

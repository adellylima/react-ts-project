import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

interface CardProps {
  name: string;
  subject: string;
  onRemove: () => void;
}

const CardContainer = styled.div`
  padding: 20px;
  margin-bottom: 20px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  position: relative;
  cursor: pointer;
  transition: box-shadow 0.3s ease-in-out, transform 0.2s;

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transform: translateY(-5px);
  }
`;

const CardTitle = styled.h3`
  margin: 0;
  font-size: 18px;
  color: #333;
`;

const CardSubject = styled.p`
  margin: 10px 0;
  font-size: 14px;
  color: #666;
`;

const RemoveButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: none;
  color: #ff4d4d;
  cursor: pointer;
  font-size: 14px;
  transition: color 0.3s ease, transform 0.2s ease;

  &:hover {
    color: #ff1a1a;
    transform: scale(1.3);
  }
`;

const Card: React.FC<CardProps> = ({ name, subject, onRemove }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <CardContainer onClick={toggleExpand}>
      <CardTitle>{name}</CardTitle>
      {isExpanded && <CardSubject>{subject}</CardSubject>}
      <RemoveButton
        onClick={(e) => {
          e.stopPropagation();
          onRemove();
        }}
      >
        <FontAwesomeIcon icon={faTrash} />
      </RemoveButton>
    </CardContainer>
  );
};

export default Card;

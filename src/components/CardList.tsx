import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "./Card";

const CardListContainer = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const PageButton = styled.button`
  margin: 0 5px;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const PageNumber = styled.button<{ active: boolean }>`
  margin: 0 5px;
  padding: 10px;
  background-color: ${({ active }) => (active ? "#0056b3" : "#007bff")};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

interface CardData {
  id: number;
  name: string;
  subject: string;
}

const CardList: React.FC = () => {
  const [cards, setCards] = useState<CardData[]>([]);
  const [page, setPage] = useState(0); // Começa em 0 para a primeira página
  const [totalPages, setTotalPages] = useState(0);
  const itemsPerPage = 10;

  const fetchCards = async (currentPage: number) => {
    const response = await fetch(
      `https://hn.algolia.com/api/v1/search?tags=front_page&page=${currentPage}&hitsPerPage=${itemsPerPage}`
    );
    const data = await response.json();

    const newCards = data.hits.map((hit: any) => ({
      id: hit.objectID,
      name: hit.title,
      subject: hit.url,
    }));

    setCards(newCards);
    setTotalPages(data.nbPages);
  };

  const removeCard = (id: number) => {
    setCards(cards.filter((card) => card.id !== id));
  };

  const goToPage = (pageNumber: number) => {
    setPage(pageNumber);
  };

  const goToNextPage = () => {
    if (page < totalPages - 1) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (page > 0) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  useEffect(() => {
    fetchCards(page);
  }, [page]);

  return (
    <CardListContainer>
      <h2>HackerNews List</h2>
      {cards.map((card) => (
        <Card
          key={card.id}
          name={card.name}
          subject={card.subject}
          onRemove={() => removeCard(card.id)}
        />
      ))}
      <PaginationContainer>
        <PageButton onClick={goToPreviousPage} disabled={page === 0}>
          Previous
        </PageButton>

        {Array.from({ length: totalPages }, (_, index) => (
          <PageNumber
            key={index}
            active={index === page}
            onClick={() => goToPage(index)}
          >
            {index + 1}
          </PageNumber>
        ))}

        <PageButton onClick={goToNextPage} disabled={page >= totalPages - 1}>
          Next
        </PageButton>
      </PaginationContainer>
    </CardListContainer>
  );
};

export default CardList;

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Card from './Card';

interface NewsItem {
  title: string;
  author: string;
  objectID: string;
}

const CardsListContainer = styled.section`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const LoadMoreButton = styled.button`
  margin: 20px auto;
  display: block;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const CardsList: React.FC = () => {
  const [items, setItems] = useState<NewsItem[]>([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://hn.algolia.com/api/v1/search?tags=front_page&page=${page}`);
      const data = await response.json();
      setItems(prevItems => [...prevItems, ...data.hits.slice(0, 10)]);
    };

    fetchData();
  }, [page]);

  const loadMore = () => {
    setPage(page + 1);
  };

  const removeCard = (id: string) => {
    setItems(items.filter(item => item.objectID !== id));
  };

  return (
    <CardsListContainer>
      <h2>Cards List</h2>
      {items.map((item) => (
        <Card
          key={item.objectID}
          name={item.author}
          subject={item.title}
          onRemove={() => removeCard(item.objectID)}
        />
      ))}
      <LoadMoreButton onClick={loadMore}>Load More</LoadMoreButton>
    </CardsListContainer>
  );
};

export default CardsList;

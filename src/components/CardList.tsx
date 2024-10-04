import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Card from './Card';

interface NewsItem {
  title: string;
  author: string;
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

const CardsList: React.FC = () => {
  const [items, setItems] = useState<NewsItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://hn.algolia.com/api/v1/search?tags=front_page');
      const data = await response.json();
      setItems(data.hits.slice(0, 10));
    };

    fetchData();
  }, []);

  return (
    <CardsListContainer>
      <h2>Cards List</h2>
      {items.map((item, index) => (
        <Card key={index} name={item.author} subject={item.title} />
      ))}
    </CardsListContainer>
  );
};

export default CardsList;

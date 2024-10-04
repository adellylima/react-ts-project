import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  padding: 10px;
  background-color: #f4f4f4;
  text-align: center;
  border-top: 1px solid #ddd;
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <p>Footer Content</p>
    </FooterContainer>
  );
};

export default Footer;

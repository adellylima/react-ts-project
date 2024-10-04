import React from 'react';
import styled from 'styled-components';

const SidebarContainer = styled.aside`
  width: 250px;  
  padding: 20px;
  background-color: #f4f4f4;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Sidebar: React.FC = () => {
  return (
    <SidebarContainer>
      <h2>Menu</h2>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </SidebarContainer>
  );
};

export default Sidebar;

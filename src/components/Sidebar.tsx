import React from "react";
import styled from "styled-components";

const SidebarContainer = styled.aside`
  width: 250px;
  padding: 20px;
  background-color: #f4f4f4;
  display: flex;
  flex-direction: column;
  align-items: center;
  place-items: center;
  justify-content: space-between;
  height: 96vh;
  position: sticky;
  top: 0;
  border-right: 1px solid #ddd;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    position: static;
    border-right: none;
    border-bottom: 1px solid #ddd;
  }
`;

const MenuItems = styled.div`
  display: flex;
  flex-direction: column;
`;

const MenuItem = styled.div`
  margin-bottom: 10px;
  font-size: 1.2em;
  color: #333;
  cursor: pointer;

  &:hover {
    color: #007bff;
  }
`;

const LogoutButton = styled.button`
  margin-top: auto;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1em;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e60000;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Sidebar: React.FC = () => {
  return (
    <SidebarContainer>
      <MenuItems>
        <h2>Menu</h2>
        <MenuItem>Home</MenuItem>
        <MenuItem>Profile</MenuItem>
        <MenuItem>Settings</MenuItem>
      </MenuItems>
      <LogoutButton>Logout</LogoutButton>
    </SidebarContainer>
  );
};

export default Sidebar;

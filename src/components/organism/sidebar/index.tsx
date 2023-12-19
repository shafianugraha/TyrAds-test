import React from 'react';

import Image from 'next/image';

import styled from 'styled-components';

import Avatar from '../../atoms/avatar';

interface SidebarProps {
  items: {label: string; icon: string; onClick: () => void}[];
}

const SidebarContainer = styled.div`
  width: 250px;
  min-height: 100vh;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
`;

const SidebarItemContainer = styled.div`
  background-color: #f7f6fc;
  margin-bottom: 5px;
  border-radius: 45px;
`;

const SidebarItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  cursor: pointer;
  border-radius: 100%;
  transition: background-color 0.3s;

  &:hover {
    background-color: #545de4;
  }
`;

const SidebarIcon = styled.div`
  margin: 10px;
`;

const Sidebar: React.FC<SidebarProps> = ({items}) => {
  return (
    <SidebarContainer>
      <SidebarItemContainer>
        {items.map((item, index) => (
          <SidebarItem
            key={index}
            onClick={item.onClick}
          >
            <SidebarIcon>
              <Avatar
                src={item.icon}
                alt='nav-icon'
                size={50}
              />
            </SidebarIcon>
          </SidebarItem>
        ))}
      </SidebarItemContainer>
    </SidebarContainer>
  );
};

export default Sidebar;

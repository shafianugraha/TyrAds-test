import React, {useState} from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import FeatureNotAvailable from '../not-available-modal';

const Sidebar: React.FC = () => {
  const [openModal, setOpenModal] = useState(false);
  const [activeItem, setActiveItem] = useState<string | null>('Home');

  const handleModal = () => {
    setOpenModal(!openModal);
  };

  const handleItemClick = (label: string) => {
    if (label !== 'Home') {
      handleModal();
      return;
    }

    setActiveItem(label);
  };

  const sidebarItems = [
    {label: 'Home', icon: '/assets/svg/home.svg'},
    {label: 'Users', icon: '/assets/svg/bell.svg'},
    {label: 'Settings', icon: '/assets/svg/clock.svg'},
  ];

  return (
    <SidebarContainer>
      <FeatureNotAvailable
        isOpen={openModal}
        onClose={handleModal}
      />
      <CompanyLogo>
        <Image
          src='/assets/images/black-logo.png'
          alt='company-logo'
          width={30}
          height={30}
        />
      </CompanyLogo>
      <SidebarItemContainer>
        {sidebarItems.map((item, index) => (
          <SidebarItem
            key={index}
            onClick={() => handleItemClick(item.label)}
            active={activeItem === item.label}
          >
            <SidebarIcon>
              <Image
                src={item.icon}
                alt='nav-icon'
                width={16}
                height={16}
              />
            </SidebarIcon>
          </SidebarItem>
        ))}
      </SidebarItemContainer>
      <Logout onClick={handleModal}>
        <Image
          src='/assets/svg/logout.svg'
          alt='logout-icon'
          width={24}
          height={24}
        />
      </Logout>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.div`
  width: 10%;
  min-height: 100vh;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
  position: relative;
`;

const CompanyLogo = styled.div`
  margin-bottom: 20px;
  position: absolute;
  top: 24px;
  left: 50%;
  transform: translateX(-50%);
`;

const Logout = styled.div`
  margin-bottom: 20px;
  position: absolute;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
`;

const SidebarItemContainer = styled.div`
  margin-bottom: 5px;
  border-radius: 45px;
`;

const SidebarItem = styled.div<{active?: boolean}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  cursor: pointer;
  border-radius: 100%;
  transition: background-color 0.3s;
  background-color: ${(props) => (props.active ? '#545de4' : '#f7f6fc')};

  &:hover {
    background-color: #545de4;
  }
`;

const SidebarIcon = styled.div`
  margin: 10px;
`;

export default Sidebar;

import React, {useState} from 'react';

import Image from 'next/image';

import styled from 'styled-components';

import Typography from '@/components/atoms/typography';
import Button from '@/components/atoms/button';
import FeatureNotAvailable from '@/components/organism/not-available-modal';

const Header: React.FC = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <Wrapper>
      <FeatureNotAvailable
        isOpen={openModal}
        onClose={handleModal}
      />
      <Wording>
        <Typography variant='h1'>Hello, John .D</Typography>
        <Typography variant='subtitle1'>View and control your finances here</Typography>
      </Wording>
      <Button
        tertiary
        onClick={handleModal}
      >
        <Image
          src='/assets/svg/search.svg'
          alt='search'
          width={24}
          height={24}
        />
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const Wording = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  text-align: left;
`;

export default Header;

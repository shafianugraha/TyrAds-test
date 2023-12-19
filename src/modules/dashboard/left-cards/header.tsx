import React from 'react';

import Image from 'next/image';

import styled from 'styled-components';

import Typography from '@/components/atoms/typography';

const Header: React.FC = () => {
  return (
    <Wrapper>
      <Wording>
        <Typography variant='h1'>Hello, John .D</Typography>
        <Typography variant='subtitle1'>View and control your finances here</Typography>
      </Wording>
      <Image
        src='/assets/svg/search.svg'
        alt='search'
        width={24}
        height={24}
      />
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

import React from 'react';

import Image from 'next/image';

import styled from 'styled-components';

import List from '@/components/atoms/list';
import Card from '@/components/molecules/card';
import Typography from '@/components/atoms/typography';
import AvatarCard from '@/components/molecules/avatar-card';

const items = [
  <AvatarCard
    key={1}
    src='/assets/images/online-store.png'
    alt='online-store'
    size={64}
    title='Online store'
    subtitle='May 30, 2023 at 08:00 pm'
  />,
  <AvatarCard
    key={2}
    src='/assets/images/online-store.png'
    alt='online-store'
    size={64}
    title='Pay the hospital'
    subtitle='May 30, 2023 at 08:00 pm'
  />,
  <AvatarCard
    key={3}
    src='/assets/images/online-store.png'
    alt='online-store'
    size={64}
    title='Tickets'
    subtitle='May 30, 2023 at 08:00 pm'
  />,
];

const LatestSpending: React.FC = () => {
  return (
    <Card outlined>
      <CardContent>
        <Header>
          <Typography variant='h5'>Latest spending</Typography>
          <Image
            src='/assets/svg/ellipsis.svg'
            alt='ellipsis'
            width={16}
            height={16}
          />
        </Header>
        <List listItems={items} />
      </CardContent>
    </Card>
  );
};

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export default LatestSpending;

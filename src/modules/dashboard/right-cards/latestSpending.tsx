import React, {useState} from 'react';

import Image from 'next/image';

import styled from 'styled-components';

import List from '@/components/atoms/list';
import Card from '@/components/molecules/card';
import Typography from '@/components/atoms/typography';
import AvatarCard from '@/components/molecules/avatar-card';
import FeatureNotAvailable from '@/components/organism/not-available-modal';
import Button from '@/components/atoms/button';

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
    src='/assets/images/hospital.png'
    alt='online-store'
    size={64}
    title='Pay the hospital'
    subtitle='May 30, 2023 at 08:00 pm'
  />,
  <AvatarCard
    key={3}
    src='/assets/images/ticket.png'
    alt='online-store'
    size={64}
    title='Tickets'
    subtitle='May 30, 2023 at 08:00 pm'
  />,
];

const LatestSpending: React.FC = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <Card outlined>
      <FeatureNotAvailable
        isOpen={openModal}
        onClose={handleModal}
      />
      <CardContent>
        <Header>
          <Typography variant='h5'>Latest spending</Typography>
          <Button
            tertiary
            onClick={handleModal}
          >
            <Image
              src='/assets/svg/ellipsis.svg'
              alt='ellipsis'
              width={16}
              height={16}
            />
          </Button>
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

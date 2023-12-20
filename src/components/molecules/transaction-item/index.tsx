import React, {useState} from 'react';

import Image from 'next/image';

import styled from 'styled-components';

import AvatarCard from '../avatar-card';
import Button from '@/components/atoms/button';
import Typography from '@/components/atoms/typography';
import FeatureNotAvailable from '@/components/organism/not-available-modal';

interface TransactionItemProps {
  avatar: string;
  name: string;
  date: string;
  amount: string;
}

const TransactionItem: React.FC<TransactionItemProps> = ({avatar, name, date, amount}) => {
  const [openModal, setOpenModal] = useState(false);

  const handleModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <ListItemContainer>
      <FeatureNotAvailable
        isOpen={openModal}
        onClose={handleModal}
      />
      <AvatarCard
        src={avatar}
        alt='transaction-avatar'
        size={64}
        title={name}
        subtitle={date}
      />
      <RightWrapper>
        <Typography variant='h6'>{amount}</Typography>
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
      </RightWrapper>
    </ListItemContainer>
  );
};

const ListItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const RightWrapper = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

export default TransactionItem;

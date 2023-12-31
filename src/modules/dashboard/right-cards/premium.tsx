import React, {useState} from 'react';

import Image from 'next/image';

import styled from 'styled-components';

import Card from '@/components/molecules/card';
import Button from '@/components/atoms/button';
import Typography from '@/components/atoms/typography';
import FeatureNotAvailable from '@/components/organism/not-available-modal';

const PremiumCard: React.FC = () => {
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
        <Typography variant='h5'>Go to premium</Typography>
        <Image
          src='/assets/images/crown.png'
          alt='crown'
          width={140}
          height={140}
        />
        <WordingWrapper>
          <Typography variant='h4'>Need more feature?</Typography>
          <Typography
            variant='h5'
            color='#a2a5ae'
          >
            Update your account to premium to get more features
          </Typography>
        </WordingWrapper>
        <Button
          primary
          onClick={handleModal}
        >
          <Typography variant='h6'>Get now</Typography>
        </Button>
      </CardContent>
    </Card>
  );
};

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  text-align: center;
`;

const WordingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  text-align: left;
`;

export default PremiumCard;

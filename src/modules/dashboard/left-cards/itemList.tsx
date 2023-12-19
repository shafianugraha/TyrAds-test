import React, {useState} from 'react';

import Image from 'next/image';

import styled from 'styled-components';

import Card from '@/components/molecules/card';
import Typography from '@/components/atoms/typography';
import CheckboxCard from '@/components/molecules/checkbox-card';

const ItemList: React.FC = () => {
  const [test, setTest] = useState(false);

  return (
    <Card>
      <CardContent>
        <Typography variant='h5'>List of items to buy</Typography>
        <DateContainer>
          <Date>
            <Typography variant='h4'>02:00</Typography>
            <Typography
              variant='subtitle1'
              color='#a2a5ae'
            >
              Sat, August 12
            </Typography>
          </Date>
          <Image
            src='/assets/svg/chevron-right.svg'
            alt='ellipsis'
            width={16}
            height={16}
          />
          <Date>
            <Typography variant='h4'>05:00</Typography>
            <Typography
              variant='subtitle1'
              color='#a2a5ae'
            >
              Sat, September 12
            </Typography>
          </Date>
        </DateContainer>
        <CheckboxCard
          label='Mackbook'
          checked={test}
          onChange={() => setTest(!test)}
        />
      </CardContent>
    </Card>
  );
};

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const DateContainer = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: space-between;
  width: 500px;
`;

const Date = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export default ItemList;

import React, {useState} from 'react';

import styled from 'styled-components';

import Card from '@/components/molecules/card';
import Button from '@/components/atoms/button';
import Typography from '@/components/atoms/typography';
import CheckboxCard from '@/components/molecules/checkbox-card';
import FeatureNotAvailable from '@/components/organism/not-available-modal';

const ItemList: React.FC = () => {
  const [openModal, setOpenModal] = useState(false);

  const [shoppingList, setShoppingList] = useState({
    MacBook: false,
    Mouse: false,
    Motorcycle: false,
    Bicycle: false,
    iPhone14ProMax: false,
  });

  const handleModal = () => {
    setOpenModal(!openModal);
  };

  const handleCheckboxChange = (itemName: string) => {
    setShoppingList((prevList) => ({
      ...prevList,
      [itemName]: !prevList[itemName],
    }));
  };

  return (
    <Card>
      <FeatureNotAvailable
        isOpen={openModal}
        onClose={handleModal}
      />
      <CardContent>
        <Typography variant='h5'>List of items to buy</Typography>
        <DateContainer>{/* ... */}</DateContainer>
        <ShoppingWrapper>
          <Typography variant='body2'>
            <span style={{color: '#a2a5ae'}}>0/3</span> Shopping list
          </Typography>
          <Button
            tertiary
            onClick={handleModal}
          >
            + Add new item
          </Button>
        </ShoppingWrapper>
        <ShoppingList>
          {Object.entries(shoppingList).map(([itemName, checked]) => (
            <CheckboxCard
              key={itemName}
              label={itemName}
              checked={checked}
              onChange={() => handleCheckboxChange(itemName)}
              onClick={handleModal}
            />
          ))}
        </ShoppingList>
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

const ShoppingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ShoppingList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 16px;
`;

export default ItemList;

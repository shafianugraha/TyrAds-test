import React from 'react';

import styled from 'styled-components';

import List from '@/components/atoms/list';
import Card from '@/components/molecules/card';
import Typography from '@/components/atoms/typography';
import Tabs, {TabProps} from '@/components/molecules/tab';
import TransactionItem from '@/components/molecules/transaction-item';

const items = [
  <TransactionItem
    key={0}
    avatar='/assets/images/bessie.png'
    name='Bessie Cooper'
    date='May 30, 2023 at 08:00 pm'
    amount='-$3,000'
  />,
  <TransactionItem
    key={1}
    avatar='/assets/images/bessie.png'
    name='Bessie Cooper'
    date='May 30, 2023 at 08:00 pm'
    amount='-$3,000'
  />,
  <TransactionItem
    key={2}
    avatar='/assets/images/bessie.png'
    name='Bessie Cooper'
    date='May 30, 2023 at 08:00 pm'
    amount='-$3,000'
  />,
];

const items1 = [
  <TransactionItem
    key={0}
    avatar='/assets/images/guy.png'
    name='Guy Hawkins'
    date='May 30, 2023 at 08:00 pm'
    amount='+$5,000'
  />,
  <TransactionItem
    key={1}
    avatar='/assets/images/guy.png'
    name='Guy Hawkins'
    date='May 30, 2023 at 08:00 pm'
    amount='+$5,000'
  />,
  <TransactionItem
    key={2}
    avatar='/assets/images/guy.png'
    name='Guy Hawkins'
    date='May 30, 2023 at 08:00 pm'
    amount='+$5,000'
  />,
];

const LastTransaction: React.FC = () => {
  return (
    <Card>
      <CardContent>
        <Typography variant='h5'>Last transactions</Typography>
        <Tabs>
          <Tab label='Newest'>
            <List listItems={items} />
          </Tab>
          <Tab label='Oldest'>
            <List listItems={items1} />
          </Tab>
        </Tabs>
      </CardContent>
    </Card>
  );
};

const Tab: React.FC<TabProps> = ({children}) => {
  return <div>{children}</div>;
};

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default LastTransaction;

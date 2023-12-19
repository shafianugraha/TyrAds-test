import React from 'react';

import styled from 'styled-components';

import List from '@/components/atoms/list';
import Tabs, {TabProps} from '@/components/molecules/tab';
import Card from '@/components/molecules/card';
import Button from '@/components/atoms/button';
import Typography from '@/components/atoms/typography';
import AvatarCard from '@/components/molecules/avatar-card';

const items = [
  <AvatarCard
    key={1}
    src='/assets/images/online-store.png'
    alt='online-store'
    size={64}
    title='Bessie Cooper'
    subtitle='May 30, 2023 at 08:00 pm'
  />,
  <AvatarCard
    key={2}
    src='/assets/images/online-store.png'
    alt='online-store'
    size={64}
    title='Guy Hawkins'
    subtitle='May 30, 2023 at 08:00 pm'
  />,
  <AvatarCard
    key={3}
    src='/assets/images/online-store.png'
    alt='online-store'
    size={64}
    title='Floyd Miles'
    subtitle='May 30, 2023 at 08:00 pm'
  />,
];

const items1 = [
  <AvatarCard
    key={2}
    src='/assets/images/online-store.png'
    alt='online-store'
    size={64}
    title='Guy Hawkins'
    subtitle='May 30, 2023 at 08:00 pm'
  />,
  <AvatarCard
    key={3}
    src='/assets/images/online-store.png'
    alt='online-store'
    size={64}
    title='Floyd Miles'
    subtitle='May 30, 2023 at 08:00 pm'
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

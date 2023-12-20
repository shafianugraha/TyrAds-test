import React from 'react';

import styled from 'styled-components';

import Header from './left-cards/header';
import ItemList from './left-cards/itemList';
import VirtualCard from './left-cards/virtualCard';
import LastTransaction from './left-cards/lastTransaction';
import BalanceStatistic from './left-cards/balanceStatistic';

import PremiumCard from './right-cards/premium';
import Sidebar from '@/components/organism/sidebar';
import LatestSpending from './right-cards/latestSpending';
import ExpensesIncome from './right-cards/expensesAndIncome';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Sidebar />
      <LeftWrapper>
        <Header />
        <TopLeftWrapper>
          <BalanceStatistic />
          <VirtualCard
            cardHolderName='John Demon'
            cardNumber='**** 9838'
            expirationDate='08/24'
          />
        </TopLeftWrapper>
        <ItemList />
        <LastTransaction />
      </LeftWrapper>
      <RightWrapper>
        <ExpensesIncome />
        <LatestSpending />
        <PremiumCard />
      </RightWrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 100%;
  gap: 24px;
  min-height: 100vh;
`;

const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  padding: 24px;
`;

const TopLeftWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
`;

const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  justify-content: space-around;
  background-color: #fff;
  width: 30%;
`;

export default Dashboard;

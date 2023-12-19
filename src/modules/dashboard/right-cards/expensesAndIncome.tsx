import React from 'react';

import styled from 'styled-components';

import Card from '@/components/molecules/card';
import Typography from '@/components/atoms/typography';
import ProgressBar from '@/components/atoms/progressBar';

const ExpensesIncome: React.FC = () => {
  return (
    <Card outlined>
      <CardContent>
        <Typography variant='h5'>Expenses and income</Typography>
        <Percentage>
          <Expense>
            <Typography variant='body2'>Expense</Typography>
            <Typography variant='h5'>75%</Typography>
            <Typography
              variant='caption'
              color='#a2a5ae'
            >
              5.653
            </Typography>
          </Expense>
          <Versus>
            <Divider />
            <Typography variant='caption'>vs</Typography>
            <Divider />
          </Versus>
          <Income>
            <Typography variant='body2'>Income</Typography>
            <Typography variant='h5'>40%</Typography>
            <Typography
              variant='caption'
              color='#a2a5ae'
            >
              2.656
            </Typography>
          </Income>
        </Percentage>
        <ProgressBar
          percent={75}
          gap='8px'
        />
      </CardContent>
    </Card>
  );
};

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Percentage = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Expense = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  text-align: left;
  justify-content: left;
`;

const Income = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  text-align: right;
  justify-content: left;
`;

const Divider = styled.div`
  width: 1px;
  height: 16px;
  background-color: black;
  margin: 0 8px;
`;

const Versus = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  align-items: center;
  justify-content: center;
`;

export default ExpensesIncome;

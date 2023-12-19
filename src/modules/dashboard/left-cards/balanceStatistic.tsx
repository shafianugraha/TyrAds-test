import React from 'react';

import styled from 'styled-components';

import Card from '@/components/molecules/card';
import Typography from '@/components/atoms/typography';
import BarChart from '@/components/molecules/bar-chart';

const BalanceStatistic: React.FC = () => {
  return (
    <Card>
      <CardContent>
        <Typography variant='h5'>Balance statistics</Typography>
        <BarChart />
      </CardContent>
    </Card>
  );
};

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default BalanceStatistic;

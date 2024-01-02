import React, {useRef} from 'react';

import styled from 'styled-components';

import Card from '@/components/molecules/card';
import Typography from '@/components/atoms/typography';
import BarChart from '@/components/molecules/bar-chart';

const BalanceStatistic: React.FC = () => {
  const ref = useRef<HTMLHeadingElement>(null);
  return (
    <Card>
      <CardContent ref={ref}>
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
  height: 264px;
  width: 100%;
`;

export default BalanceStatistic;

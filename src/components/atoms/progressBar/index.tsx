import React from 'react';
import styled from 'styled-components';

interface ProgressBarProps {
  percent: number;
  height?: string;
  color?: string;
  backgroundColor?: string;
  gap?: string;
}

const ProgressBarContainer = styled.div<{height?: string; backgroundColor?: string}>`
  display: flex;
  width: 100%;
  height: ${(props) => props.height || '20px'};
  background-color: ${(props) => props.backgroundColor || '#fff'};
  border-radius: 4px;
  overflow: hidden;
  gap: 4px;
`;

const Progress = styled.div<{percent: number; color?: string}>`
  flex: ${(props) => props.percent};
  height: 100%;
  background-color: ${(props) => props.color || '#4d53b5'};
  transition: flex 0.3s ease-in-out;
  border-radius: 4px;
`;

const RemainingBar = styled.div<{percent: number; backgroundColor?: string}>`
  flex: ${(props) => 100 - props.percent};
  height: 100%;
  background-color: ${(props) => props.backgroundColor || '#ffa70f'};
  transition: flex 0.3s ease-in-out;
  border-radius: 4px;
`;

const ProgressBar: React.FC<ProgressBarProps> = ({
  percent,
  height,
  color,
  backgroundColor,
  gap,
}) => {
  return (
    <ProgressBarContainer
      height={height}
      backgroundColor={backgroundColor}
    >
      <Progress
        percent={percent}
        color={color}
      />
      <RemainingBar
        percent={percent}
        backgroundColor={backgroundColor}
      />
    </ProgressBarContainer>
  );
};

export default ProgressBar;

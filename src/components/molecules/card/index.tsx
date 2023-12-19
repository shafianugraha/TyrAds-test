import React from 'react';

import styled from 'styled-components';

interface CardProps {
  outlined?: boolean;
  children: React.ReactNode;
}

const Card = ({outlined, children}: CardProps) => {
  return <Container outlined={outlined}>{children}</Container>;
};

interface StylesProps {
  outlined?: boolean;
}

const Container = styled.div<StylesProps>`
  background: #fff;
  padding: 16px;
  border-radius: 16px;
  font-weight: 400;
  ${(props) => props.outlined && 'border: 1px solid #e2e0e9'}
`;

export default Card;

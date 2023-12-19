import React from 'react';

import styled from 'styled-components';

import Avatar from '@/components/atoms/avatar';
import Typography from '@/components/atoms/typography';

interface AvatarCardProps {
  src: string;
  alt: string;
  size: number;
  title: string;
  subtitle: string;
}

const AvatarCard: React.FC<AvatarCardProps> = ({
  src,
  alt,
  size,
  title,
  subtitle,
}: AvatarCardProps) => {
  return (
    <Container>
      <Avatar
        src={src}
        alt={alt}
        size={size}
      />
      <TextWrapper>
        <Typography variant='h6'>{title}</Typography>
        <Typography
          variant='caption'
          color='#a2a5ae'
        >
          {subtitle}
        </Typography>
      </TextWrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  text-align: left;
`;

export default AvatarCard;

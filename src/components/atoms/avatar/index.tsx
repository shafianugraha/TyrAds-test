import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

interface AvatarProps {
  src: string;
  alt: string;
  size: number;
}

const Avatar: React.FC<AvatarProps> = ({src, alt, size}) => {
  return (
    <AvatarContainer>
      <Image
        src={src}
        alt={alt}
        width={size}
        height={size}
        objectFit='cover'
      />
    </AvatarContainer>
  );
};

const AvatarContainer = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
`;

export default Avatar;

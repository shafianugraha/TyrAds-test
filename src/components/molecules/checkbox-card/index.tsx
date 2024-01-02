import React from 'react';

import Image from 'next/image';

import styled from 'styled-components';

import Checkbox from '@/components/atoms/checkbox';
import Button from '@/components/atoms/button';
import Typography from '@/components/atoms/typography';

interface CheckboxCardProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  onClick: () => void;
}

const CheckboxCard: React.FC<CheckboxCardProps> = ({label, checked, onChange, onClick}) => {
  return (
    <Card>
      <Checkbox
        label={label}
        checked={checked}
        onChange={onChange}
      />
      <Button
        tertiary
        onClick={onClick}
      >
        <Image
          src='/assets/svg/ellipsis.svg'
          alt='ellipsis'
          width={16}
          height={16}
        />
      </Button>
    </Card>
  );
};

const Card = styled.div`
  background: #f7f6fc;
  padding: 16px;
  border-radius: 16px;
  width: fit-content;
  min-width: 200px;
  max-width: 270px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default CheckboxCard;

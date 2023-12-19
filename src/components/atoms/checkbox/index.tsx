import React, {useState, ChangeEvent} from 'react';
import styled from 'styled-components';

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const CheckboxContainer = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const CheckboxInput = styled.input`
  margin-right: 8px;
`;

const CheckboxLabel = styled.span`
  font-size: 16px;
`;

const Checkbox: React.FC<CheckboxProps> = ({label, checked, onChange}) => {
  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked);
  };

  return (
    <CheckboxContainer>
      <CheckboxInput
        type='checkbox'
        checked={checked}
        onChange={handleCheckboxChange}
      />
      <CheckboxLabel>{label}</CheckboxLabel>
    </CheckboxContainer>
  );
};

export default Checkbox;

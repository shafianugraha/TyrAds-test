import React, {ButtonHTMLAttributes} from 'react';
import styled from 'styled-components';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  primary?: boolean;
  secondary?: boolean;
  tertiary?: boolean;
  // onClick?: (event: MouseEvent) => void;
}

const Button: React.FC<ButtonProps> = ({children, primary, secondary, tertiary, ...rest}) => {
  return (
    <StyledButton
      primary={primary}
      secondary={secondary}
      tertiary={tertiary}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button<ButtonProps>`
  padding: 24px 32px;
  border: none;
  cursor: pointer;
  border-radius: 16px;
  font-size: 16px;
  transition: background-color 0.3s, border 0.3s, color 0.3s;

  /* Primary Button Style */
  ${(props) =>
    props.primary &&
    `
    background-color: #545de6;
    color: #fff;
  `}

  /* Secondary Button Style */
  ${(props) =>
    props.secondary &&
    `
    background-color: #fff;
    color: #545de6;
    border: 1px solid #545de6;
  `}

  /* Tertiary Button Style */
  ${(props) =>
    props.tertiary &&
    `
    background-color: transparent;
    color: #545de6;
    padding: 4px;
    border-radius: 100%;
  `}

  &:hover {
    ${(props) => props.primary && `background-color: #7985ed;`}
    ${(props) => props.secondary && `border-color: #7985ed;`}
  }

  &:active {
    transform: scale(0.97);
  }
`;

export default Button;

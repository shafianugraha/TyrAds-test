import React, {ReactNode} from 'react';
import styled from 'styled-components';

// Define the typography variants
type TypographyVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'subtitle1'
  | 'subtitle2'
  | 'body1'
  | 'body2'
  | 'caption';

// Define the TypographyProps type
interface TypographyProps extends React.HTMLAttributes<HTMLDivElement> {
  variant: TypographyVariant;
  children: ReactNode;
  color?: string; // Optional color prop
}

// Define the styled components for each variant
const StyledH1 = styled.h1<TypographyProps>`
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 120%;
  color: ${(props) => props.color || 'inherit'}; // Apply color or use default
`;

const StyledH2 = styled.h2<TypographyProps>`
  font-size: 2rem;
  font-weight: 700;
  line-height: 120%;
  color: ${(props) => props.color || 'inherit'};
`;

const StyledH3 = styled.h3<TypographyProps>`
  font-size: 1.75rem;
  font-weight: 400;
  line-height: 120%;
  color: ${(props) => props.color || 'inherit'};
`;

const StyledH4 = styled.h4<TypographyProps>`
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 120%;
  color: ${(props) => props.color || 'inherit'};
`;

const StyledH5 = styled.h5<TypographyProps>`
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 120%;
  color: ${(props) => props.color || 'inherit'};
`;

const StyledH6 = styled.h6<TypographyProps>`
  font-size: 1rem;
  font-weight: 600;
  line-height: 120%;
  color: ${(props) => props.color || 'inherit'};
`;

const StyledSubtitle1 = styled.div<TypographyProps>`
  font-size: 1rem;
  font-weight: 400;
  line-height: 120%;
  color: ${(props) => props.color || 'inherit'};
`;

const StyledSubtitle2 = styled.div<TypographyProps>`
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 120%;
  color: ${(props) => props.color || 'inherit'};
`;

const StyledBody1 = styled.p<TypographyProps>`
  font-size: 1rem;
  font-weight: 400;
  line-height: 120%;
  color: ${(props) => props.color || 'inherit'};
`;

const StyledBody2 = styled.p<TypographyProps>`
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 120%;
  color: ${(props) => props.color || 'inherit'};
`;

const StyledCaption = styled.p<TypographyProps>`
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 120%;
  color: ${(props) => props.color || 'inherit'};
`;

// Create a mapping of variants to styled components
const variantComponents: Record<TypographyVariant, React.ComponentType<TypographyProps>> = {
  h1: StyledH1,
  h2: StyledH2,
  h3: StyledH3,
  h4: StyledH4,
  h5: StyledH5,
  h6: StyledH6,
  subtitle1: StyledSubtitle1,
  subtitle2: StyledSubtitle2,
  body1: StyledBody1,
  body2: StyledBody2,
  caption: StyledCaption,
};

// Typography component
const Typography: React.FC<TypographyProps> = ({variant, children, color, ...rest}) => {
  const StyledComponent = variantComponents[variant] || StyledH1;

  return (
    <StyledComponent
      variant={variant}
      color={color}
      {...rest}
    >
      {children}
    </StyledComponent>
  );
};

export default Typography;

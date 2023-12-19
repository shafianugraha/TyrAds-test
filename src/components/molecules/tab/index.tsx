import Typography from '@/components/atoms/typography';
import React, {ReactNode, useState} from 'react';
import styled from 'styled-components';

export interface TabProps {
  label: string;
  children?: ReactNode;
}

interface TabsProps {
  children: ReactNode;
}

const TabContainer = styled.div`
  display: flex;
`;

const TabButton = styled.button<{isActive: boolean}>`
  padding: 10px;
  margin: 0;
  border: none;
  color: black;
  cursor: pointer;
  background-color: transparent;
  text-decoration: ${({isActive}) => (isActive ? 'underline' : 'none')};
  font-weight: ${({isActive}) => (isActive ? 'bold' : 'normal')};

  &:focus {
    outline: none;
  }
`;

const TabPanel = styled.div<{isActive: boolean}>`
  display: ${({isActive}) => (isActive ? 'block' : 'none')};
  width: 100%;
`;

const Tabs: React.FC<TabsProps> = ({children}) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div>
      <TabContainer>
        {React.Children.map(children, (child, index) => {
          if (React.isValidElement<TabProps>(child)) {
            const {label} = child.props;

            return (
              <TabButton
                key={index}
                onClick={() => handleTabClick(index)}
                isActive={index === activeTab}
              >
                <Typography variant='body1'>{label}</Typography>
              </TabButton>
            );
          }

          return null;
        })}
      </TabContainer>
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement<TabProps>(child)) {
          return (
            <TabPanel
              key={index}
              isActive={index === activeTab}
            >
              {child.props.children}
            </TabPanel>
          );
        }

        return null;
      })}
    </div>
  );
};

export default Tabs;

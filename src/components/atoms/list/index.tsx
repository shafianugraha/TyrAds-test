import React from 'react';
import styled from 'styled-components';

interface SimpleListProps {
  listItems: any[];
}

const List: React.FC<SimpleListProps> = ({listItems}) => {
  return (
    <ListContainer>
      {listItems.map((item, index) => (
        <ListItem key={index}>{item}</ListItem>
      ))}
    </ListContainer>
  );
};

const ListContainer = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  padding: 16px 0px;
  border-bottom: 1px solid #efefef; /* Add grey border below each item */
`;

export default List;

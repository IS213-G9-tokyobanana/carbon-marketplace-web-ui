import React from 'react';
import styled from 'styled-components';

import { API2 } from 'types';
import Menu, { Wrapper as $Menu } from 'components/common/Dropdown/components/Menu';
import StatusBadge, { Wrapper as $StatusBadge } from '../StatusBadge';

const Wrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;

  ${$Menu} {
    min-width: unset;
    cursor: auto;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;

  padding: 0 8px;

  ${$StatusBadge} {
    cursor: pointer;
  }
`;

export default ({
  expand,
  setExpand,
  options,
  onOptionClick,
}: {
  expand: boolean;
  setExpand: (b: boolean) => void;
  options: API2.Status[];
  onOptionClick: (o: API2.Status) => void;
}) => {
  return (
    <Wrapper onClick={(e) => e.stopPropagation()}>
      <Menu
        expand={expand}
        setExpand={setExpand}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <Container>
          {options.map((m) => (
            <StatusBadge key={m} onClick={() => onOptionClick(m)}>
              {m}
            </StatusBadge>
          ))}
        </Container>
      </Menu>
    </Wrapper>
  );
};

import React, { useEffect } from 'react';
import styled from 'styled-components';

import config from 'config';
import Menu from 'components/common/Dropdown/components/Menu';
import StatusPill from '../StatusPill';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`;

export default ({
  expand,
  setExpand,
}: {
  expand: boolean;
  setExpand: (b: boolean) => void;
}) => {
  useEffect(() => {
    const collapse = () => {
      setExpand(false);
    };

    window.addEventListener('click', collapse);
    return () => {
      window.removeEventListener('click', collapse);
    };
  }, []);

  return (
    <Menu
      expand={expand}
      setExpand={setExpand}
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <Container>
        {config.verifier.editStatusOptions.map((m) => (
          <StatusPill key={m}>{m}</StatusPill>
        ))}
      </Container>
    </Menu>
  );
};

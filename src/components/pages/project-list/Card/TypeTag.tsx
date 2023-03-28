import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: transparent;
  border: 1px solid #1c64f296;
  border-radius: 18px;

  width: fit-content;
  padding: 8px;

  text-align: center;
  font-family: var(--font-inter);
  font-size: 10px;
  line-height: 12px;
`;

export default ({ children }: { children: string }) => {
  return <Wrapper>{children}</Wrapper>;
};

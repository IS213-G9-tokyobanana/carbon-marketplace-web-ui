import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  label {
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
  }
`;

export default ({ label, children }: { label: string; children: JSX.Element }) => {
  return (
    <Wrapper>
      <label>{label}</label>

      {children}
    </Wrapper>
  );
};

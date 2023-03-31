import React from 'react';
import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Label = styled.label`
  font-weight: 700;
  font-size: 12px;
`;

export default ({
  label,
  children,
}: {
  label: string;
  children: JSX.Element | Array<boolean | JSX.Element>;
}) => {
  return (
    <Wrapper>
      <Label>{label}</Label>

      {children}
    </Wrapper>
  );
};

import React from 'react';
import styled from 'styled-components';

import { color } from 'config';
import { IntrinsicHTML } from 'types';

export const Wrapper = styled.div`
  background: ${color.neutral1};
  padding: 8px 10px;
  border-radius: 8px;
  border: 1px solid ${color.neutral4};

  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Input = styled.input`
  border: none;
  outline: none;
  background: transparent;

  &::placeholder {
    color: ${color.neutral6};
  }
`;

export default ({
  label,
  ...props
}: {
  label: string;
} & IntrinsicHTML<'input'>) => {
  return (
    <Wrapper>
      <label className="body-xs">{label}</label>

      <Input className="body-xs" {...props} />
    </Wrapper>
  );
};

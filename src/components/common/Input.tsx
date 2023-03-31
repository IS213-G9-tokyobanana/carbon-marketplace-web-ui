import React from 'react';
import styled from 'styled-components';

import { color } from 'config';
import { IntrinsicHTML } from 'types';

const Wrapper = styled.input`
  padding: 8px 16px;
  border-radius: 8px;
  outline: none;
  border: 1px solid #d1d5db;

  font-family: var(--font-inter);
  font-size: 14px;
  transition: 0.25s border-color;

  &::placeholder {
    color: #6b7280;
  }

  &:focus {
    border-color: ${color.neutral10};
  }
`;

export default (props: IntrinsicHTML<'input'>) => {
  return <Wrapper {...props} />;
};

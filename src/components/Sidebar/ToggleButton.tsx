import React from 'react';
import styled from 'styled-components';

import { color } from 'config';
import Chevron, { Wrapper as $Chevron } from 'components/common/svg/Chevron';

const Wrapper = styled.button`
  position: absolute;
  left: 100%;
  top: 40px;
  aspect-ratio: 1/1;
  height: 34px;
  width: auto;

  transform: translate(-50%);
  padding: 10px;
  border-radius: 50%;
  cursor: pointer;

  background: white;
  border: 2px solid ${color.neutral10};
  outline: none;

  ${$Chevron} {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export default ({
  active,
  ...props
}: {
  active: boolean;
} & Omit<JSX.IntrinsicElements['button'], 'ref'>) => (
  <Wrapper {...props}>
    <Chevron direction={active ? 'right' : 'left'} />
  </Wrapper>
);

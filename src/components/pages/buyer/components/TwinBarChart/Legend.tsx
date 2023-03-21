import React from 'react';
import styled from 'styled-components';

import { color } from 'config';
import { Color } from './types';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
`;

const Circle = styled.div(
  ({ $color }: { $color: string }) => `
  aspect-ratio: 1/1;
  height: 10px;
  background: ${$color};
  border-radius: 50%;
  box-shadow: 0 2px 2px 0 #0000001a;
`
);

const Label = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  p {
    font-family: var(--font-inter);
    font-size: 12px;
    line-height: 18px;
    color: ${color.neutral10};
  }
`;

export default ({ color1, color2 }: { color1: Color; color2: Color }) => (
  <Wrapper>
    <Label>
      <Circle $color={color1.value} />
      <p>{color1.label}</p>
    </Label>

    <Label>
      <Circle $color={color2.value} />
      <p>{color2.label}</p>
    </Label>
  </Wrapper>
);

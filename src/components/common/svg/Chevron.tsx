import React from 'react';
import styled from 'styled-components';

import { color } from 'config';

export const Wrapper = styled.svg(
  ({ $deg }: { $deg: number }) => `
  aspect-ratio: 9/16;
  height: auto;
  width: auto;
  display: block;

  transform-origin: center;
  transform: rotate(${$deg}deg);
`,
);

export default ({ direction }: { direction: 'up' | 'down' | 'left' | 'right' }) => {
  let deg = 0;

  switch (direction) {
    case 'up':
      deg = 90;
      break;
    case 'down':
      deg = -90;
      break;
    case 'left':
      deg = 180;
      break;
  }

  return (
    <Wrapper
      width={9}
      height={16}
      viewBox="0 0 9 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      $deg={deg}
    >
      <path
        d="M8 15L1 8L8 1"
        stroke={color.neutral10}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Wrapper>
  );
};

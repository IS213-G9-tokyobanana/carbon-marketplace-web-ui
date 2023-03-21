import React from 'react';
import styled from 'styled-components';

import { color } from 'config';

export const Wrapper = styled.svg`
  aspect-ratio: 40/38;
  height: auto;
  width: auto;
  display: block;
`;

export default (props: Omit<JSX.IntrinsicElements['svg'], 'ref'>) => (
  <Wrapper
    {...props}
    width={40}
    height={38}
    viewBox="0 0 40 38"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_395_2)">
      <rect width={40} height={38} fill="white" />
      <path
        d="M40 15.7807C40 24.4962 31.0457 22.8821 20 22.8821C8.9543 22.8821 0 24.4962 0 15.7807C0 7.06528 8.9543 0 20 0C31.0457 0 40 7.06528 40 15.7807Z"
        fill={color.neutral3}
      />
      <rect x={2} y={26} width={36} height={12} rx={6} fill={color.neutral3} />
    </g>
    <defs>
      <clipPath id="clip0_395_2">
        <rect width={40} height={38} fill="white" />
      </clipPath>
    </defs>
  </Wrapper>
);

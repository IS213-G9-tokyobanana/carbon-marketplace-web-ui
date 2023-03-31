import React from 'react';
import styled from 'styled-components';

import { color } from 'config';
import { IntrinsicHTML } from 'types';

export const Wrapper = styled.svg`
  aspect-ratio: 16/17;
  height: auto;
  width: auto;
  display: block;
`;

export default (props: IntrinsicHTML<'svg'>) => {
  return (
    <Wrapper
      {...props}
      width={16}
      height={17}
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.6933 2.36027L13.64 5.30694M11.9433 1.11027C12.3341 0.719522 12.8641 0.5 13.4167 0.5C13.9693 0.5 14.4992 0.719522 14.89 1.11027C15.2808 1.50103 15.5003 2.031 15.5003 2.58361C15.5003 3.13622 15.2808 3.66619 14.89 4.05694L3.41667 15.5303H0.5V12.5536L11.9433 1.11027Z"
        stroke={color.neutral10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Wrapper>
  );
};

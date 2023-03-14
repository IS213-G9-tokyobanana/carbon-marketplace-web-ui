import React from 'react';
import styled from 'styled-components';

export const Wrapper = styled.svg`
  aspect-ratio: 1/1;
  height: auto;
  width: auto;
  display: block;
`;

export default () => (
  <Wrapper
    width={96}
    height={96}
    viewBox="0 0 96 96"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M96 85.3333V10.6667C96 4.8 91.2 0 85.3333 0H10.6667C4.8 0 0 4.8 0 10.6667V85.3333C0 91.2 4.8 96 10.6667 96H85.3333C91.2 96 96 91.2 96 85.3333ZM29.3333 56L42.6667 72.0533L61.3333 48L85.3333 80H10.6667L29.3333 56Z"
      fill="#9CB0C9"
    />
  </Wrapper>
);

import React from 'react';
import styled from 'styled-components';

import { color } from 'config';

export const Wrapper = styled.svg`
  aspect-ratio: 1/1;
  height: auto;
  width: auto;
  display: block;
`;

export default () => (
  <Wrapper
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2.3999 11.9999C2.3999 9.45382 3.41133 7.01203 5.21168 5.21168C7.01203 3.41133 9.45382 2.3999 11.9999 2.3999V11.9999H21.5999C21.5999 14.546 20.5885 16.9878 18.7881 18.7881C16.9878 20.5885 14.546 21.5999 11.9999 21.5999C9.45382 21.5999 7.01203 20.5885 5.21168 18.7881C3.41133 16.9878 2.3999 14.546 2.3999 11.9999Z"
      fill={color.neutral10}
    />
    <path
      d="M14.3999 2.70264C16.0603 3.13279 17.5754 3.99917 18.7882 5.21198C20.001 6.42479 20.8673 7.93989 21.2975 9.60024H14.3999V2.70264Z"
      fill={color.neutral10}
    />
  </Wrapper>
);

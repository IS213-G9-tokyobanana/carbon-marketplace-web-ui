import React from 'react';
import styled from 'styled-components';

export const Wrapper = styled.svg`
  aspect-ratio: 20/19;
  height: auto;
  width: auto;
  display: block;
`;

export default () => (
  <Wrapper
    width={20}
    height={19}
    viewBox="0 0 20 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.34255 4.68029C1.5687 4.13433 1.90017 3.63825 2.31804 3.22038C2.7359 2.80251 3.23198 2.47104 3.77795 2.24489C4.32392 2.01874 4.90909 1.90234 5.50004 1.90234C6.09099 1.90234 6.67616 2.01874 7.22213 2.24489C7.7681 2.47104 8.26417 2.80251 8.68204 3.22038L10 4.53838L11.318 3.22038C12.162 2.37646 13.3066 1.90236 14.5 1.90236C15.6935 1.90236 16.8381 2.37646 17.682 3.22038C18.526 4.0643 19.0001 5.2089 19.0001 6.40238C19.0001 7.59586 18.526 8.74046 17.682 9.58438L10 17.2664L2.31804 9.58438C1.90017 9.16652 1.5687 8.67044 1.34255 8.12447C1.1164 7.5785 1 6.99334 1 6.40238C1 5.81143 1.1164 5.22626 1.34255 4.68029Z"
      stroke="#486284"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Wrapper>
)
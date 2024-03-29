import React from 'react';
import styled from 'styled-components';

import { color } from 'config';
import { IntrinsicHTML } from 'types';

export const Wrapper = styled.svg`
  aspect-ratio: 1/1;
  height: auto;
  width: auto;
  display: block;
`;

export default (props: IntrinsicHTML<'svg'>) => {
  return (
    <Wrapper
      {...props}
      width={15}
      height={15}
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.586 1.58616C10.7705 1.39514 10.9912 1.24278 11.2352 1.13796C11.4792 1.03314 11.7416 0.977969 12.0072 0.975661C12.2728 0.973354 12.5361 1.02396 12.7819 1.12452C13.0277 1.22508 13.251 1.37359 13.4388 1.56137C13.6266 1.74916 13.7751 1.97246 13.8756 2.21825C13.9762 2.46405 14.0268 2.72741 14.0245 2.99296C14.0222 3.25852 13.967 3.52096 13.8622 3.76497C13.7574 4.00898 13.605 4.22967 13.414 4.41416L12.621 5.20716L9.793 2.37916L10.586 1.58616ZM8.379 3.79316L0 12.1722V15.0002H2.828L11.208 6.62116L8.378 3.79316H8.379Z"
        fill={color.neutral10}
      />
    </Wrapper>
  );
};

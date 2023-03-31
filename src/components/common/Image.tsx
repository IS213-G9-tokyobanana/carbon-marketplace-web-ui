import React from 'react';
// import Image from 'next/image';
import styled from 'styled-components';

import { color } from 'config';
import ImageIcon from './svg/ImageIcon';

export const Wrapper = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Mask = styled.div`
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${color.neutral1};
`;

export default () => {
  return (
    <Wrapper>
      <Mask>
        <ImageIcon />
      </Mask>

      {/* <Image /> */}
    </Wrapper>
  );
};

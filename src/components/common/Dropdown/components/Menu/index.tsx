import React, { useRef } from 'react';
import styled from 'styled-components';

import { IntrinsicHTML } from 'types';
import useAnimation from './useAnimation';

export const Wrapper = styled.div`
  position: absolute;
  z-index: 10;
  top: 100%;
  min-width: 100%;
  margin-top: 5px;

  border-radius: 8px;
  background: white;
  padding: 10px 0;
  box-shadow: 0 0 16px 0 #0000001a;
  transform-origin: top center;

  opacity: 0;
`;

export default ({
  children,
  expand,
  setExpand,
  popBottom = false,
  ...props
}: {
  children: JSX.Element | Array<JSX.Element>;
  expand: boolean;
  setExpand: (b: boolean) => void;
  popBottom?: boolean;
} & IntrinsicHTML<'div'>) => {
  const ref = useRef<HTMLDivElement>(null);

  useAnimation(ref, expand);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      setExpand(false);
    }
  };

  return (
    <Wrapper ref={ref} {...props} onKeyDown={handleKeyDown}>
      {children}
    </Wrapper>
  );
};

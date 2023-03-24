import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { color } from 'config';
import { applyStyleIf } from 'utils';
import { IntrinsicHTML } from 'types';

import MagnifierGlass from './svg/MagnifierGlass';
import CommandC from './svg/CommandC';

export const Wrapper = styled.div(
  ({ $focus }: { $focus: boolean }) => `
  padding: 6px 8px;
  border-radius: 8px;

  border: 1px solid transparent;
  background: white;
  transition: 0.25s border-color;

  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: space-between;
  
  ${applyStyleIf(
    $focus,
    `
    border-color: ${color.neutral8};
  `,
  )}
`,
);

const Input = styled.input`
  flex-grow: 1;
  width: 1%;

  outline: none;
  border: none;
  background: transparent;

  font-size: 14px;
  font-family: var(--font-inter);
  color: ${color.neutral10};

  &::placeholder {
    color: ${color.neutral6};
    opacity: 1; /* Firefox */
  }

  &:-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: ${color.neutral6};
  }

  &::-ms-input-placeholder {
    /* Microsoft Edge */
    color: ${color.neutral6};
  }
`;

export default (props: IntrinsicHTML<'input'>) => {
  const ref = useRef<HTMLInputElement>(null);
  const [focus, setFocus] = useState(false);

  const focusIn = (
    e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>,
  ) => {
    e.stopPropagation();
    setFocus(true);
  };

  useEffect(() => {
    const blurOut = () => {
      setFocus(false);
    };

    window.addEventListener('mousedown', blurOut);
    window.addEventListener('touchend', blurOut);

    return () => {
      window.removeEventListener('mousedown', blurOut);
      window.removeEventListener('touchend', blurOut);
    };
  }, []);

  useEffect(() => {
    if (!focus) return;

    setTimeout(() => {
      ref.current?.focus();
    }, 10);
  }, [focus]);

  return (
    <Wrapper onMouseDown={focusIn} $focus={focus} onTouchEnd={focusIn}>
      <MagnifierGlass color={color.neutral8} />

      <Input ref={ref} {...props} />

      <CommandC color={color.neutral8} />
    </Wrapper>
  );
};

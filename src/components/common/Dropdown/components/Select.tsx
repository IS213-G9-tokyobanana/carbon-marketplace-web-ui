import React from 'react';
import styled from 'styled-components';

import { color } from 'config';
import { applyStyleIf } from 'utils';
import { IntrinsicHTML } from 'types';

import Chevron from 'components/common/svg/Chevron';

export const Wrapper = styled.div(
  ({ $focus }: { $focus: boolean }) => `
  position: relative;
  z-index: 11;
  height: 100%;
  padding: 6px 8px;
  border-radius: 8px;
  
  border: 1px solid transparent;
  background: white;
  cursor: pointer;
  transition: 0.25s border-color;

  color: ${color.neutral10};
  font-size: var(--font-size);
  font-family: var(--font-family);
  line-height: var(--font-size);

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;

  p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  svg {
    flex-grow: 0;
    flex-shrink: 0;
    height: 10px;
    margin-right: 6px;
  }

  ${applyStyleIf(
    $focus,
    `
    border-color: ${color.neutral8};
  `,
  )}
`,
);

export default ({
  expand,
  children,
  ...props
}: {
  expand: boolean;
  children: string | JSX.Element | Array<string | JSX.Element>;
} & IntrinsicHTML<'div'>) => (
  <Wrapper {...props} $focus={expand}>
    {children}
    <Chevron direction={expand ? 'up' : 'down'} />
  </Wrapper>
);

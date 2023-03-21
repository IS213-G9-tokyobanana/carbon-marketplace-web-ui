import React from 'react';
import styled from 'styled-components';

import { color } from 'config';

export const Wrapper = styled.button(
  ({
    $textColor,
    $bgColor,
    $borderColor,
    ...props
  }: {
    $textColor: string;
    $bgColor: string;
    $borderColor: string;
  } & Omit<JSX.IntrinsicElements['button'], 'ref'>) => `
  padding: 12px 20px;
  border-radius: 50px;
  border: 1px solid ${$borderColor};
  outline: none;
  cursor: ${props.onClick ? 'pointer' : 'auto'};

  background: ${$bgColor};
  color: ${$textColor};
  font-size: 16px;
`,
);

type ButtonStyle =
  | {
      classic: true;
      inverted?: never;
    }
  | {
      classic?: never;
      inverted: true;
    };

export default React.forwardRef(
  (
    {
      children,
      ...props
    }: {
      children: string | JSX.Element | Array<string | JSX.Element | boolean>;
    } & ButtonStyle &
      Omit<JSX.IntrinsicElements['button'], 'ref'>,
    ref: React.ForwardedRef<HTMLButtonElement>,
  ) => {
    let textColor, bgColor, borderColor;

    if (props.classic) {
      textColor = 'white';
      bgColor = color.neutral10;
      borderColor = color.neutral10;
    } else {
      textColor = color.neutral10;
      bgColor = 'transparent';
      borderColor = color.neutral10;
    }

    return (
      <Wrapper
        ref={ref}
        {...props}
        $textColor={textColor}
        $bgColor={bgColor}
        $borderColor={borderColor}
      >
        {children}
      </Wrapper>
    );
  },
);

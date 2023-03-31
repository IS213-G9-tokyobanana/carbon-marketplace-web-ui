import React from 'react';
import styled from 'styled-components';

import { color } from 'config';
import { IntrinsicHTML } from 'types';

export const Wrapper = styled.button(
  (
    props: {
      $textColor: string;
      $bgColor: string;
      $borderColor: string;
      $borderStyle: string;
    } & IntrinsicHTML<'button'>,
  ) => `
  padding: 12px 20px;
  border-radius: 50px;
  border: 1px ${props.$borderStyle} ${props.$borderColor};
  outline: none;
  cursor: ${props.onClick ? 'pointer' : 'auto'};

  background: ${props.$bgColor};
  color: ${props.$textColor};
  font-size: 16px;
`,
);

type ButtonStyle =
  | {
      classic: true;
      inverted?: never;
      dashed?: never;
    }
  | {
      classic?: never;
      inverted: true;
      dashed?: never;
    }
  | {
      classic?: never;
      inverted?: never;
      dashed: true;
    };

export default React.forwardRef(
  (
    {
      children,
      ...props
    }: {
      children: string | JSX.Element | Array<string | JSX.Element | boolean>;
    } & ButtonStyle &
      IntrinsicHTML<'button'>,

    ref: React.ForwardedRef<HTMLButtonElement>,
  ) => {
    let textColor, bgColor, borderColor, borderStyle, className;

    if (props.classic) {
      textColor = 'white';
      bgColor = color.neutral10;
      borderColor = color.neutral10;
      borderStyle = 'solid';
      className = 'classic';
    } else if (props.inverted) {
      textColor = color.neutral10;
      bgColor = 'transparent';
      borderColor = color.neutral10;
      borderStyle = 'solid';
      className = 'inverted';
    } else {
      textColor = color.neutral10;
      bgColor = 'transparent';
      borderColor = color.neutral8;
      borderStyle = 'dashed';
      className = 'dashed';
    }

    return (
      <Wrapper
        ref={ref}
        className={className}
        {...props}
        $textColor={textColor}
        $bgColor={bgColor}
        $borderColor={borderColor}
        $borderStyle={borderStyle}
      >
        {children}
      </Wrapper>
    );
  },
);

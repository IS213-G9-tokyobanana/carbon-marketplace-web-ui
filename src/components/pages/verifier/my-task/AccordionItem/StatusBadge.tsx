import React from 'react';
import styled from 'styled-components';

import { API2, IntrinsicHTML } from 'types';

export const Wrapper = styled.div(
  ({ $bg, $color }: { $bg: string; $color: string }) => `
  border-radius: 50px;
  font-family: var(--font-inter);
  font-size: 12px;
  line-height: 18px;

  padding: 2px 8px;
  background: ${$bg};
  color: ${$color};
  text-transform: capitalize;
`,
);

export default ({
  children,
  ...props
}: {
  children: API2.Status;
} & IntrinsicHTML<'div'>) => {
  let bgColor = '';
  let textColor = '';

  switch (children) {
    case 'pending':
      bgColor = '#E2F5FF';
      textColor = '#59A8D4';
      break;
    case 'verified':
      bgColor = '#DEF8EE';
      textColor = '#4AA785';
      break;
    case 'met':
      bgColor = '#EDEDFF';
      textColor = '#8A8CD9';
      break;
    case 'rejected':
      bgColor = '#FFE2E2';
      textColor = '#D45959';
      break;
    // case "inactive":
    //   bgColor = "#DBDBDB";
    //   textColor = "#838383";
    //   break;
  }

  return (
    <Wrapper {...props} $bg={bgColor} $color={textColor}>
      {children}
    </Wrapper>
  );
};

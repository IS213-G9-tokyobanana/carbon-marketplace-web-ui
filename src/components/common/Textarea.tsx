import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

import { color } from 'config';
import { IntrinsicHTML } from 'types';

export const Wrapper = styled.textarea(
  ({ $resize }: { $resize: string }) => `
  padding: 6px 16px;

  outline: none;
  border: 1px solid #D1D5DB;
  border-radius: 8px;
  transition: 0.25s border-color;

  font-family: var(--font-inter);
  resize: ${$resize};

  &:focus {
    border-color: ${color.neutral10};
  }
`,
);

export default ({
  autoHeight = false,
  resizeable = true,
  ...props
}: {
  autoHeight?: boolean;
  resizeable?: boolean;
} & IntrinsicHTML<'textarea'>) => {
  const ref = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (!autoHeight) return;
    adjustHeight();
  }, [props.value, autoHeight]);

  const adjustHeight = () => {
    if (!autoHeight) return;
    if (!ref.current) return;

    ref.current.style.height = '1px';
    ref.current.style.overflow = 'hidden';
    ref.current.style.height = `${3 + ref.current.scrollHeight}px`;
  };

  return (
    <Wrapper
      ref={ref}
      className="text-sm"
      {...props}
      $resize={resizeable ? 'vertical' : 'none'}
    />
  );
};

import React from 'react';
import styled from 'styled-components';

import { color } from 'config';
import { applyStyleIf } from 'utils';

const Wrapper = styled.div`
  display: flex;
  align-items: center;

  & > * {
    width: 100%;
  }
`;

const Option = styled.div(
  ({ $active }: { $active: boolean }) => `
  --duration: 0.25s;

  position: relative;
  text-align: center;
  padding: 18px 0;
  cursor: pointer;

  color: ${color.neutral7};
  transition: color var(--duration);

  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 1px;
    width: 100%;
    background: ${color.neutral7};
    transition: background var(--duration), height var(--duration);
  }

  ${applyStyleIf(
    $active,
    `
    color: ${color.neutral10};

    &:before {
      background: ${color.neutral10};
      height: 4px;
    }
  `
  )}
`
);

export default ({
  options,
  selected,
  onOptionChange
}: {
  options: string[];
  selected?: string;
  onOptionChange: (o: string) => void;
}) => {
  return (
    <Wrapper>
      {options.map((v) => (
        <Option
          key={v}
          className="body-large"
          onClick={() => onOptionChange(v)}
          $active={selected === v}
        >
          {v}
        </Option>
      ))}
    </Wrapper>
  );
};

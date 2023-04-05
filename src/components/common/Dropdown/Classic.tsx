import React, { useState } from 'react';
import styled from 'styled-components';

import { color } from 'config';
import { applyStyleIf } from 'utils';

import Select from './components/Select';
import Menu from './components/Menu';
import useCollapse from './useCollapse';

export const Wrapper = styled.div`
  --font-size: 14px;
  --font-family: var(--font-inter);

  position: relative;
`;

const Option = styled.div(
  ({ $active }: { $active: boolean }) => `
  --hover-color: #f2f2f2;

  padding: 6px 8px;
  cursor: pointer;

  font-size: var(--font-size);
  font-family: var(--font-family);
  color: ${color.neutral10};
  
  background: white;
  transition: 0.25s background;

  &:hover {
    background: var(--hover-color);
  }

  ${applyStyleIf(
    $active,
    `
    background: var(--hover-color);
  `,
  )}
`,
);

export default <T extends Object, K extends keyof T>(props: {
  options: T[];
  idKey: K;
  nameKey: keyof T;
  activeId: T[K];
  onChange?: (selectedId: T[K]) => void;
}) => {
  const [expand, setExpand] = useState(false);

  const onSelectClick = useCollapse(expand, setExpand);

  const activeOption = props.options.find((o) => o[props.idKey] === props.activeId);

  const handleOptionClick = (id: T[K]) => {
    props.onChange && props.onChange(id);
  };

  return (
    <Wrapper>
      <Select onClick={onSelectClick} expand={expand}>
        <p>{activeOption ? (activeOption[props.nameKey] as string) : ''}</p>
      </Select>

      <Menu expand={expand} setExpand={setExpand}>
        {props.options.map((o) => (
          <Option
            key={o[props.idKey] as number | string}
            onClick={() => handleOptionClick(o[props.idKey])}
            $active={o[props.idKey] === props.activeId}
          >
            {o[props.nameKey] as string}
          </Option>
        ))}
      </Menu>
    </Wrapper>
  );
};

import React, { useMemo, useRef, useState } from 'react';
import styled from 'styled-components';
import { Calendar as CalendarWidget } from 'react-widgets';

import { color } from 'config';
import { format } from 'date-fns';
import Menu, { Wrapper as $Menu } from 'components/common/Dropdown/components/Menu';
import useCollapse from 'components/common/Dropdown/useCollapse';

export const Wrapper = styled.div`
  position: relative;
  background: ${color.neutral1};
  padding: 8px 10px;
  border-radius: 8px;
  min-width: 1px;
  border: 1px solid ${color.neutral4};

  display: flex;
  flex-direction: column;
  gap: 5px;

  ${$Menu} {
    right: 0;
    left: unset;
    // bottom: 100%;
    // top: unset;
    // margin-bottom: 5px;
    width: 280px;
  }
`;

const Input = styled.input`
  border: none;
  outline: none;
  background: transparent;

  &::placeholder {
    color: ${color.neutral6};
  }
`;

const Calendar = styled(CalendarWidget)`
  border: none;

  & * {
    transition: 0.25s background, 0.25s border-color;
  }
`;

export default ({
  label,
  value,
  placeholder,
  onChange,
}: {
  label: string;
  value: Date | null;
  placeholder: string;
  onChange: (d: Date) => void;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const [expand, setExpand] = useState(false);

  const formatedValue = value ? format(value, 'yyyy-MM-dd') : '';

  const onSelectClick = useCollapse(expand, setExpand);

  const handleChange = (d: Date) => {
    setExpand(false);
    onChange(d);
  };

  return (
    <Wrapper ref={ref}>
      <label className="body-xs">{label}</label>

      <Input
        className="body-xs"
        value={formatedValue}
        readOnly
        placeholder={placeholder}
        onClick={onSelectClick}
      />

      <Menu expand={expand} setExpand={setExpand}>
        <Calendar onClick={(e) => e.stopPropagation()} onChange={handleChange} />
      </Menu>
    </Wrapper>
  );
};

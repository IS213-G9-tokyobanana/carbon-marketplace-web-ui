import React, { useState } from 'react';
import styled from 'styled-components';
import { Calendar as CalendarWidget } from 'react-widgets/cjs';

import { color } from 'config';

import Input, { Wrapper as $Input } from 'components/common/Input';
import CalendarFilled, {
  Wrapper as $CalendarFilled,
} from 'components/common/svg/CalendarFilled';
import Menu from 'components/common/Dropdown/components/Menu';
import useCollapse from 'components/common/Dropdown/useCollapse';
import { format } from 'date-fns';

const Wrapper = styled.div`
  position: relative;
`;

const InputContainer = styled.div`
  position: relative;

  ${$Input} {
    width: 100%;
    padding-left: 40px;
  }

  ${$CalendarFilled} {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 12px;
  }
`;

const Calendar = styled(CalendarWidget)`
  border: none;

  & * {
    transition: 0.25s background, 0.25s border-color;
  }
`;

export default ({
  placeholder,
  value,
  onChange,
}: {
  placeholder: string;
  value: Date | null;
  onChange: (d: Date) => void;
}) => {
  const [expand, setExpand] = useState(false);

  const onSelectClick = useCollapse(expand, setExpand);

  const handleClick = (d: Date) => {
    onChange(d);
    setExpand(false);
  };

  const formatedValue = value ? format(value, 'yyyy-MM-dd') : '';

  return (
    <Wrapper>
      <InputContainer>
        <Input
          placeholder={placeholder}
          value={formatedValue}
          readOnly
          onClick={onSelectClick}
        />

        <CalendarFilled />
      </InputContainer>

      <Menu expand={expand} setExpand={setExpand}>
        <Calendar onClick={(e) => e.stopPropagation()} onChange={handleClick} />
      </Menu>
    </Wrapper>
  );
};

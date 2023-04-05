import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import locale from 'locale';
import { color } from 'config';
import { clamp } from 'utils';
import useCollapse from './useCollapse';

import Select from './components/Select';
import Menu, { Wrapper as $Menu } from './components/Menu';
import Button, { Wrapper as $Button } from '../Button';

export const Wrapper = styled.div`
  position: relative;

  & input,
  & p {
    font-size: 14px;
    font-family: var(--font-inter);
    color: ${color.neutral10};
  }

  ${$Menu} {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;

const Placeholder = styled.p`
  transform: translateY(2px);
`;

const Container = styled.div`
  padding: 4px 8px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const InputBox = styled.div`
  border-radius: 8px;
  border: 1px solid #0000001a;
  padding: 8px 16px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
`;

const Input = styled.input`
  outline: none;
  border: none;
  width: 90px;
`;

const ButtonGroup = styled.div`
  align-self: end;
  padding: 0 8px;

  display: flex;
  align-items: center;
  gap: 10px;

  ${$Button} {
    padding: 6px 8px;
    border-radius: 8px;

    font-size: 14px;
    font-family: var(--font-inter);
  }
`;

export default ({
  placeholderText,
  min,
  max,
  unit,
  range,
  onChange,
}: {
  placeholderText: string;
  min?: number;
  max?: number;
  unit: string;
  range: [number, number];
  onChange: (min?: number, max?: number) => void;
}) => {
  /**
   * Hooks
   */
  const [_min, setMin] = useState<number | undefined>(min);
  const [_max, setMax] = useState<number | undefined>(max);

  const [expand, setExpand] = useState(false);

  const onSelectClick = useCollapse(expand, setExpand);

  useEffect(() => {
    if (expand) return;
    onChange(_min, _max);
  }, [expand]);

  /**
   * Not hook
   */
  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value) {
      setMin(undefined);
    } else {
      const num = clamp(Number(e.target.value), range[0], max || range[1]);
      setMin(num);
    }
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value) {
      setMax(undefined);
    } else {
      const num = clamp(Number(e.target.value), min || range[0], range[1]);
      setMax(num);
    }
  };

  const handleClear = () => {
    setMin(undefined);
    setMax(undefined);
    setExpand(false);
  };

  const handleApply = () => {
    setExpand(false);
  };

  /**
   * Render
   */
  return (
    <Wrapper>
      <Select onClick={onSelectClick} expand={expand}>
        <Placeholder dangerouslySetInnerHTML={{ __html: placeholderText }} />
      </Select>

      <Menu
        expand={expand}
        setExpand={setExpand}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <Container>
          <InputBox>
            <Input
              type="number"
              placeholder="Minimum"
              value={_min !== undefined ? _min.toString().replace(/^0{2,}/, '') : ''}
              min={range[0]}
              max={max || range[1]}
              onChange={handleMinChange}
            />

            <p dangerouslySetInnerHTML={{ __html: unit }} />
          </InputBox>

          <p>-</p>

          <InputBox>
            <Input
              type="number"
              placeholder="Maximum"
              value={_max !== undefined ? _max.toString().replace(/^0{2,}/, '') : ''}
              min={min || range[0]}
              max={range[1]}
              onChange={handleMaxChange}
            />

            <p dangerouslySetInnerHTML={{ __html: unit }} />
          </InputBox>
        </Container>

        <ButtonGroup>
          <Button inverted onClick={handleClear}>
            {locale.projectList.controller.minMax.button.clear}
          </Button>

          <Button classic onClick={handleApply}>
            {locale.projectList.controller.minMax.button.apply}
          </Button>
        </ButtonGroup>
      </Menu>
    </Wrapper>
  );
};

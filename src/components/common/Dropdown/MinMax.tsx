import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { color } from 'config';
import useCollapse from './useCollapse';

import Select from './components/Select';
import Menu from './components/Menu';
import { clamp } from 'utils';

export const Wrapper = styled.div`
  & * {
    font-size: 14px;
    font-family: var(--font-inter);
    color: ${color.neutral10};
  }

  position: relative;
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
  const [_min, setMin] = useState<number | undefined>(min);
  const [_max, setMax] = useState<number | undefined>(max);

  const [expand, setExpand] = useState(false);

  useCollapse(setExpand);

  useEffect(() => {
    if (expand) return;
    onChange(_min, _max);
  }, [expand]);

  const handleSelectClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setExpand(!expand);
  };

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

  return (
    <Wrapper>
      <Select onClick={handleSelectClick} expand={expand}>
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
      </Menu>
    </Wrapper>
  );
};

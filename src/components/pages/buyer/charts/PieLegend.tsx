import React from 'react';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Label = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;

  p {
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
  }
`;

const Circle = styled.div(
  ({ $color }: { $color: string }) => `
  background: ${$color};
  aspect-ratio: 1/1;
  height: 6px;
  width: auto;
  border-radius: 50%;
`,
);

export const Name = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

type Item = {
  name: string;
  value: number;
  fill: string;
};

export default ({ data, valueSuffix }: { data: Item[]; valueSuffix: string }) => (
  <Wrapper>
    {data.map((d) => (
      <Label key={d.name}>
        <Name>
          <Circle $color={d.fill} />
          <p>{d.name}</p>
        </Name>

        <p>
          {d.value}
          {valueSuffix}
        </p>
      </Label>
    ))}
  </Wrapper>
);

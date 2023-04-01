import React from 'react';
import styled from 'styled-components';
import { Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';

import { color } from 'config';
import { applyStyleIf } from 'utils';

import PieLegend, {
  Wrapper as $PieLegend,
  Label as $PieLegend__Label,
  Name as $PieLegend__Name,
} from './PieLegend';

type Item = {
  name: string;
  value: number;
  fill: string;
};

type Style = 'horizontal' | 'vertical';

export const Wrapper = styled.div(
  ({ $style }: { $style: Style }) => `
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  background: white;
  padding: 24px;
  border-radius: 10px;

  & > p {
    color: ${color.neutral10};
  }

  ${applyStyleIf(
    $style === 'vertical',
    `
    height: 100%;
    align-items: center;
    gap: 4px;
  `,
  )}
`,
);

const Container = styled.div(
  ({ $style }: { $style: Style }) => `
  position: relative;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 80px;

  * {
    transform-origin: center;
  }

  ${$PieLegend__Label} {
    gap: 10px;
  }

  ${$PieLegend__Name} {
    width: 120px;
  }

  ${applyStyleIf(
    $style === 'vertical',
    `
    flex-direction: column;
    gap: 20px;

    ${$PieLegend} {
      height: 100%;
    }

    &, ${$PieLegend}, ${$PieLegend__Label} {
      width: 100%;
    }

    ${$PieLegend__Name} {
      flex-grow: 1;
    }
  `,
  )}
`,
);

export default ({
  title,
  data,
  style,
}: {
  title: string;
  data: Item[];
  style: Style;
}) => (
  <Wrapper $style={style}>
    <p className="body-small">{title}</p>

    <Container $style={style}>
      <ResponsiveContainer width={160} aspect={1}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            cx="50%"
            cy="50%"
            innerRadius={45}
            outerRadius={70}
            stroke="rounded"
            style={{ transform: 'rotateZ(10deg)' }}
          />

          <Pie
            data={data}
            dataKey="value"
            cx="50%"
            cy="50%"
            innerRadius={45}
            outerRadius={70}
            cornerRadius={50}
            stroke="rounded"
          />

          <Tooltip formatter={(v) => `${v}%`} />
        </PieChart>
      </ResponsiveContainer>

      <PieLegend data={data} valueSuffix="%" />
    </Container>
  </Wrapper>
);

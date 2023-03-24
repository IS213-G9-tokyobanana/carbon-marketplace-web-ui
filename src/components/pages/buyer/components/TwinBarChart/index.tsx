import React from 'react';
import styled from 'styled-components';
import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Bar,
  LabelList
} from 'recharts';

import { color } from 'config';
import type { Color, Item } from './types';
import Legend from './Legend';

const yAxisTickCount = 5;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;

  background: white;
  padding: 24px;
  border-radius: 10px;

  p.body-small {
    color: ${color.neutral10};
    text-align: center;
  }
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const RechartContainer = styled(ResponsiveContainer)`
  text.recharts-cartesian-axis-tick-value {
    font-family: var(--font-inter);
    font-size: 12px;
    line-height: 18px;
    fill: ${color.neutral10};
  }

  text.recharts-label {
    font-family: var(--font-inter);
    font-size: 12px;
    line-height: 18px;
  }
`;

export default ({
  title,
  data,
  color1,
  color2,
  yAxisUnit
}: {
  title: string;
  data: Item[];
  color1: Color;
  color2: Color;
  yAxisUnit: string;
}) => {
  /**
   * Not hook
   */
  const highestValues: [number, number] = data.reduce(
    (prev, current) => {
      if (current.value1 > prev[0]) {
        prev[0] = current.value1;
      }

      if (current.value2 > prev[1]) {
        prev[1] = current.value2;
      }

      return prev;
    },
    [0, 0]
  );

  const format = (value: string, type: 'insideTop' | 'top') => {
    const val = Number(value);

    if (val > Math.max(...highestValues) / (yAxisTickCount - 1)) {
      if (type === 'insideTop') return value;
      return '';
    } else {
      if (type === 'top') return value;
      return '';
    }
  };

  return (
    <Wrapper>
      <Title>
        <p className="body-small" dangerouslySetInnerHTML={{ __html: title }} />
        <Legend color1={color1} color2={color2} />
      </Title>

      <RechartContainer width="90%" height={200}>
        <BarChart data={data} barSize={40}>
          <CartesianGrid vertical={false} />
          <XAxis dataKey="name" axisLine={false} tickLine={false} />
          <YAxis
            unit={yAxisUnit}
            axisLine={false}
            tickLine={false}
            interval={0}
            tickCount={yAxisTickCount}
          />

          <Bar dataKey="value1" radius={[3, 3, 0, 0]} fill={color1.value}>
            <LabelList
              dataKey="value1"
              position="insideTop"
              fill="white"
              offset={7}
              formatter={(s: string) => format(s, 'insideTop')}
            />

            <LabelList
              dataKey="value1"
              position="top"
              fill={color.neutral10}
              offset={7}
              formatter={(s: string) => format(s, 'top')}
            />
          </Bar>

          <Bar dataKey="value2" radius={[3, 3, 0, 0]} fill={color2.value}>
            <LabelList
              dataKey="value2"
              position="insideTop"
              fill="white"
              offset={7}
              formatter={(s: string) => format(s, 'insideTop')}
            />

            <LabelList
              dataKey="value2"
              position="top"
              fill={color.neutral10}
              offset={7}
              formatter={(s: string) => format(s, 'top')}
            />
          </Bar>
        </BarChart>
      </RechartContainer>
    </Wrapper>
  );
};

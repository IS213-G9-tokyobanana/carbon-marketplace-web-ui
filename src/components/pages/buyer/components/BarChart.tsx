import React from 'react';
import styled from 'styled-components';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  LabelList,
  ResponsiveContainer,
  XAxis,
  YAxis
} from 'recharts';

import { color } from 'config';

type Item = {
  name: string;
  value: number;
};

const userKey = 'You';
const yAxisTickCount = 6;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;

  background: white;
  padding: 24px;
  border-radius: 10px;

  p {
    color: ${color.neutral10};
  }
`;

const RechartContainer = styled(ResponsiveContainer)`
  text.recharts-cartesian-axis-tick-value {
    font-family: var(--font-inter);
    font-size: 12px;
    line-height: 18px;
    fill: ${color.neutral10};
  }

  text.recharts-label {
    font-size: 21px;
    line-height: 22px;
    font-weight: 500;
  }
`;

export default ({ title, data }: { title: string; data: Item[] }) => {
  /**
   * Not hook
   */
  const highestValue = data.reduce((prev, current) => {
    if (current.value > prev) return current.value;
    return prev;
  }, 0);

  const format = (value: string, type: 'insideTop' | 'top') => {
    const val = Number(value);

    if (val > highestValue / (yAxisTickCount - 1)) {
      if (type === 'insideTop') return value;
      return '';
    } else {
      if (type === 'top') return value;
      return '';
    }
  };

  /**
   * Render
   */
  return (
    <Wrapper>
      <p className="body-small" dangerouslySetInnerHTML={{ __html: title }} />

      <RechartContainer width="90%" height={200}>
        <BarChart data={data} barSize={100}>
          <CartesianGrid vertical={false} />
          <XAxis dataKey="name" axisLine={false} tickLine={false} />
          <YAxis
            unit=" tons"
            axisLine={false}
            tickLine={false}
            interval={0}
            tickCount={yAxisTickCount}
            width={65}
          />
          <Bar dataKey="value" radius={[3, 3, 0, 0]}>
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.name === userKey ? color.neutral10 : color.neutral6}
              />
            ))}

            <LabelList
              dataKey="value"
              position="insideTop"
              fill="white"
              offset={15}
              formatter={(s: string) => format(s, 'insideTop')}
            />

            <LabelList
              dataKey="value"
              position="top"
              fill={color.neutral10}
              offset={15}
              formatter={(s: string) => format(s, 'top')}
            />
          </Bar>
        </BarChart>
      </RechartContainer>
    </Wrapper>
  );
};

import React from 'react';
import styled from 'styled-components';
import { Pie, PieChart, ResponsiveContainer } from 'recharts';

import { color } from 'config';
import PieLegend, { Wrapper as $PieLegend, Label as $PieLegend__Label } from './PieLegend';

type Item = {
  name: string;
  value: number;
  fill: string;
};

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 10px;

  background: white;
  padding: 24px;
  border-radius: 10px;

  p {
    color: ${color.neutral10};
  }

  ${$PieLegend} {
    margin-top: 50px;
    flex-grow: 1;
    justify-content: end;
  }

  ${$PieLegend__Label} {
    justify-content: space-between;
  }
`;

const Container = styled.div`
  position: relative;

  .recharts-responsive-container {
    transform: rotateY(180deg);
  }
`;

const Percentage = styled.div`
  position: absolute;
  top: 90%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  align-items: center;

  p.body-xs {
    color: ${color.neutral6};
  }

  p.title-small {
    color: ${color.neutral10};
  }
`;

export default ({ title, data, percentage }: {
  title: string;
  data: Item[];
  percentage: number;
}) => {
  /**
   * Not hook
   */
  const pieData: Item[] = JSON.parse(JSON.stringify(data));

  const offsets = data.reduce((prev, current, i) => {
    if (i === data.length - 1) return prev;
    return prev + current.value;
  }, 0);

  pieData[data.length - 1].value -= offsets;

  /**
   * Render
   */
  return (
    <Wrapper>
      <p className="body-small">{title}</p>

      <Container>
        <ResponsiveContainer width={200} height={110}>
          <PieChart>
            <Pie
              data={pieData}
              dataKey="value"
              cx="50%"
              cy="100%"
              innerRadius={65}
              outerRadius={100}
              startAngle={0}
              endAngle={180}
              stroke=""
            />
          </PieChart>
        </ResponsiveContainer>

        <Percentage>
          <p className="body-xs">percentage</p>
          <p className="title-small">{percentage}%</p>
        </Percentage>
      </Container>

      <PieLegend data={data} valueSuffix=" tons" />
    </Wrapper>
  );
};

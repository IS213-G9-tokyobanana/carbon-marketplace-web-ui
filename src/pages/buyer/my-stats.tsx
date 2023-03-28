import React from 'react';
import styled from 'styled-components';

import { color } from 'config';
import locale from 'locale';

import DashboardGridLayout from 'components/pages/buyer/Layout';
import AnnualEmission, {
  Wrapper as $AnnualEmission,
} from 'components/pages/buyer/components/AnnualEmission';
import PieChart, {
  Wrapper as $PieChart,
} from 'components/pages/buyer/components/PieChart';
import BarChart, {
  Wrapper as $BarChart,
} from 'components/pages/buyer/components/BarChart';
import TwinBarChart, {
  Wrapper as $TwinBarChart,
} from 'components/pages/buyer/components/TwinBarChart';

const Wrapper = styled.div`
  ${$AnnualEmission} {
    height: 100%;
  }

  ${$PieChart} {
    grid-column: 2 / span 2;
  }

  ${$BarChart} {
    grid-column: 1 / span 3;
  }

  ${$TwinBarChart} {
    grid-column: 1 / span 3;
  }
`;

export default () => {
  return (
    <Wrapper>
      <DashboardGridLayout>
        <AnnualEmission km="42069" />

        <PieChart
          title={locale.buyer.myStats.pieChart.title}
          style="horizontal"
          data={[
            {
              name: 'Vehicles',
              value: 38.6,
              fill: color.neutral10,
            },
            {
              name: 'Natural Gas',
              value: 30.8,
              fill: color.neutral8,
            },
            {
              name: 'Pets',
              value: 22.5,
              fill: color.neutral6,
            },
            {
              name: 'Other',
              value: 8.1,
              fill: color.neutral4,
            },
          ]}
        />

        <BarChart
          title={locale.buyer.myStats.barChart.title}
          data={[
            {
              name: 'UK',
              value: 100,
            },
            {
              name: 'USA',
              value: 18.3,
            },
            {
              name: 'You',
              value: 10.4,
            },
            {
              name: 'Asia',
              value: 3.4,
            },
            {
              name: 'World',
              value: 4.9,
            },
          ]}
        />

        <TwinBarChart
          title={locale.buyer.myStats.twinBarChart.title}
          color1={{
            label: 'Your Emission',
            value: color.neutral10,
          }}
          color2={{
            label: 'Country Average',
            value: color.neutral7,
          }}
          yAxisUnit=" tons"
          data={[
            {
              name: 'Goods & Services',
              value1: 3.3,
              value2: 6.3,
            },
            {
              name: 'Transport',
              value1: 4.1,
              value2: 4.1,
            },
            {
              name: 'Energy',
              value1: 3.6,
              value2: 3.6,
            },
            {
              name: 'Diet',
              value1: 3.0,
              value2: 3.0,
            },
            {
              name: 'Home & Pets',
              value1: 1.3,
              value2: 1.3,
            },
          ]}
        />
      </DashboardGridLayout>
    </Wrapper>
  );
};

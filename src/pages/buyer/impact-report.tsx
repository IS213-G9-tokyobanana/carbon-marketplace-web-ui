import React from 'react';
import styled from 'styled-components';

import config, { color } from 'config';
import locale from 'locale';

import DashboardLayout from 'components/DashboardLayout';
import MonthlyOffset, {
  Wrapper as $MonthlyOffset,
} from 'components/pages/buyer/MonthlyOffset';
import SemiPieChart, {
  Wrapper as $SemiPieChart,
} from 'components/pages/buyer/SemiPieChart';
import PieChart from 'components/pages/buyer/PieChart';
import BarChart, { Wrapper as $BarChart } from 'components/pages/buyer/BarChart';

const Container = styled.div`
  flex-grow: 1;

  padding: 24px;
  max-width: var(--page-max-width);
  margin: 0 auto;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: min-content;
  align-items: start;
  gap: 16px;

  ${$MonthlyOffset}, ${$SemiPieChart} {
    height: 100%;
  }

  ${$BarChart} {
    grid-column: 1 / span 3;
  }

  @media screen and (min-width: ${config.viewport.xl}) {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);

    width: calc(var(--page-max-width) - 2 * var(--page-padding-h));
    padding: 24px 0;
  }
`;

export default () => {
  return (
    <DashboardLayout sidebarConfig={config.sidebar.buyer}>
      <Container>
        <MonthlyOffset monthYear="Feb 2023" tonsOfCO2="2.1" miles="42,069" />

        <PieChart
          title={locale.buyer.impactReport.pieChart.title}
          style="vertical"
          data={[
            {
              name: 'Carbon Capture',
              value: 30,
              fill: color.neutral10,
            },
            {
              name: 'Local Green Initiative',
              value: 30,
              fill: color.neutral6,
            },
            {
              name: 'Regional Green Initiatives',
              value: 30,
              fill: color.neutral4,
            },
          ]}
        />

        <SemiPieChart
          title={locale.buyer.impactReport.semiPieChart.title}
          percentage={20}
          data={[
            {
              name: 'Offset',
              value: 2.1,
              fill: color.neutral9,
            },
            {
              name: 'Your Emissions',
              value: 10.4,
              fill: color.neutral1,
            },
          ]}
        />

        <BarChart
          title={locale.buyer.impactReport.barChart.title}
          data={[
            {
              name: 'UK',
              value: 18.3,
            },
            {
              name: 'USA',
              value: 18.3,
            },
            {
              name: 'You',
              value: 1.4,
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
      </Container>
    </DashboardLayout>
  );
};

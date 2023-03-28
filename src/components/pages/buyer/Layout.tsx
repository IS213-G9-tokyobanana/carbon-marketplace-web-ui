import React from 'react';
import styled from 'styled-components';

import config, { color } from 'config';

import Sidebar from 'components/Sidebar';
import CarbonFootprint, {
  Wrapper as $CarbonFootprint,
} from 'components/CarbonFootprint';

const Wrapper = styled.div`
  --section-padding-v: 32px;

  position: relative;
  min-height: calc(100vh - var(--header-height));
  background: ${color.neutral1};

  display: flex;
  justify-content: space-between;

  ${$CarbonFootprint} {
    width: 268px;
    padding: var(--section-padding-v) 24px;
    border-left: 1px solid ${color.neutral2};
  }
`;

const DashboardContainer = styled.div`
  flex-grow: 1;

  padding: 24px;
  max-width: var(--page-max-width);
  margin: 0 auto;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: min-content;
  align-items: start;
  gap: 16px;

  @media screen and (min-width: ${config.viewport.xl}) {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);

    width: calc(var(--page-max-width) - 2 * var(--page-padding-h));
    padding: 24px 0;
  }
`;

export default ({ children }: { children: JSX.Element | JSX.Element[] }) => (
  <Wrapper>
    <Sidebar data={config.sidebar.buyer} />

    <DashboardContainer>{children}</DashboardContainer>

    <CarbonFootprint />
  </Wrapper>
);

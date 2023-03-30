import React from 'react';
import styled from 'styled-components';

import { color } from 'config';
import { SidebarConfig } from 'types';

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

export default ({
  children,
  sidebarConfig,
}: {
  children: JSX.Element | JSX.Element[];
  sidebarConfig: SidebarConfig;
}) => (
  <Wrapper>
    <Sidebar data={sidebarConfig} />

    {children}

    <CarbonFootprint />
  </Wrapper>
);

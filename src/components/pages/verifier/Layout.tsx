import React from 'react';
import styled from 'styled-components';

import config, { color } from 'config';
import Sidebar from 'components/Sidebar';

const Wrapper = styled.div`
  --section-padding-v: 32px;

  position: relative;
  min-height: calc(100vh - var(--header-height));
  background: ${color.neutral1};

  display: flex;
  justify-content: space-between;
`;

const Dashboard = styled.div`
  flex-grow: 1;
  overflow-y: hidden;

  padding: 24px;
  max-width: var(--dashboard-max-width);
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export default ({ children }: { children: JSX.Element | JSX.Element[] }) => (
  <Wrapper>
    <Sidebar data={config.sidebar.verifier} />

    <Dashboard>{children}</Dashboard>
  </Wrapper>
);

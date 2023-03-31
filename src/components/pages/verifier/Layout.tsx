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

  padding: 24px;
  max-width: var(--page-max-width);
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  gap: 20px;

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
    <Sidebar data={config.sidebar.verifier} />

    <Dashboard>{children}</Dashboard>
  </Wrapper>
);

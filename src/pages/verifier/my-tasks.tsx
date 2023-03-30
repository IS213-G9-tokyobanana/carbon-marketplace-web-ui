import React, { useState } from 'react';
import styled from 'styled-components';

import api from 'api';
import config from 'config';
import { API } from 'types';

import DashboardLayout from 'components/DashboardLayout';
import Controller from 'components/pages/verifier/Controller';
import AccordionItem from 'components/pages/verifier/AccordionItem';

const Container = styled.div`
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

const AccordionGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export default ({ projects }: { projects: API.VerifiableProject[] }) => {
  const [searchInput, setSearchInput] = useState('');

  return (
    <DashboardLayout sidebarConfig={config.sidebar.verifier}>
      <Container>
        <Controller searchInput={searchInput} onSearchChange={setSearchInput} />

        <AccordionGroup>
          {projects.map((p, i) => (
            <AccordionItem key={p.id} {...p} defaultExpand={i === 0} />
          ))}
        </AccordionGroup>
      </Container>
    </DashboardLayout>
  );
};

export async function getServerSideProps() {
  const projects = api.getVerifiableProjects();

  return {
    props: {
      projects,
    },
  };
}

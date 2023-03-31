import React, { useState } from 'react';
import styled from 'styled-components';

import api from 'api';
import { API } from 'types';

import Controller from 'components/pages/verifier/my-task/Controller';
import AccordionItem from 'components/pages/verifier/my-task/AccordionItem';
import Layout from 'components/pages/verifier/Layout';

const AccordionGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export default ({ projects }: { projects: API.VerifiableProject[] }) => {
  const [searchInput, setSearchInput] = useState('');

  return (
    <Layout>
      <Controller searchInput={searchInput} onSearchChange={setSearchInput} />

      <AccordionGroup>
        {projects.map((p, i) => (
          <AccordionItem key={p.id} {...p} defaultExpand={i === 0} />
        ))}
      </AccordionGroup>
    </Layout>
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

import React, { useState } from 'react';
import styled from 'styled-components';
import { IncomingMessage } from 'http';

import api from 'api';
import { API } from 'types';
import { withSessionSsr } from 'utils';
import useUserSetter from 'hooks/useUserSetter';

import Controller from 'components/pages/verifier/my-task/Controller';
import AccordionItem from 'components/pages/verifier/my-task/AccordionItem';
import Layout from 'components/pages/verifier/Layout';

const AccordionGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export default ({ projects }: { projects: API.VerifiableProject[] }) => {
  useUserSetter('verifier');

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

export const getServerSideProps = withSessionSsr(
  async ({ req }: { req: IncomingMessage }) => {
    const user = req.session.user;

    if (!user || user !== 'verifier') {
      return {
        notFound: true,
      };
    }

    const projects = api.getVerifiableProjects();

    return {
      props: { projects },
    };
  },
);

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { IncomingMessage } from 'http';

import { withSessionSsr } from 'utils';
import { API2 } from 'types';
import useUserSetter from 'hooks/useUserSetter';
import useMockProjectStore from 'stores/useMockProjectStore';

import Controller from 'components/pages/verifier/my-task/Controller';
import AccordionItem from 'components/pages/verifier/my-task/AccordionItem';
import Layout from 'components/pages/verifier/Layout';
import { MeiliSearch } from 'meilisearch';

const AccordionGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export default ({ apiProjects }: { apiProjects: API2.Project[] }) => {
  const hydrated = useMockProjectStore((state) => state.hydrated);
  const mockProject = useMockProjectStore((state) => state.projects);
  useUserSetter('verifier');

  const [toggle, setToggle] = useState(false);

  const [searchInput, setSearchInput] = useState('');
  const { projects, setProjects } = useMockProjectStore.getState();

  useEffect(() => {
    if (hydrated) {
      setProjects(apiProjects);
    }
  }, [hydrated, apiProjects]);

  useEffect(() => {
    setToggle(true);
  }, []);

  return (
    <Layout>
      <Controller searchInput={searchInput} onSearchChange={setSearchInput} />

      <AccordionGroup>
        {toggle
          ? projects.map((p, i) => (
              <AccordionItem key={p.id} {...p} defaultExpand={i === 0} />
            ))
          : []}
      </AccordionGroup>
    </Layout>
  );
};

export const getServerSideProps = withSessionSsr(
  async ({ req }: { req: IncomingMessage }) => {
    const client = new MeiliSearch({
      host: `${process.env.MEILI_URL}`,
      apiKey: 'MASTER_KEY',
    });

    const user = req.session.user;

    if (!user || user !== 'verifier') {
      return {
        notFound: true,
      };
    }

    const meiliProjectsDocs = await client
      .index('projects')
      .getDocuments({ limit: 20 });
    const projects = meiliProjectsDocs.results as API2.Project[];
    projects.forEach((project: API2.Project) => {
      const totalOffsetsAvailable = project.milestones.reduce(
        (acc: number, milestone: API2.Milestone) => {
          return acc + milestone.offsets_available;
        },
        0,
      );

      const totalOffsetsTotal = project.milestones.reduce((acc, milestone) => {
        return acc + milestone.offsets_total;
      }, 0);

      project.offsets_available = totalOffsetsAvailable;
      project.offsets_total = totalOffsetsTotal;
      console.log(project.milestones);
    });

    return {
      props: {
        apiProjects: projects,
      },
    };
  },
);

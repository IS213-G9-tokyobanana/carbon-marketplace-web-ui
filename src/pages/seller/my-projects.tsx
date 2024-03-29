import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { IncomingMessage } from 'http';

import { API2 } from 'types';
import config, { color } from 'config';
import locale from 'locale';
import { withSessionSsr } from 'utils';
import useUserSetter from 'hooks/useUserSetter';

import Sidebar from 'components/Sidebar';
import Button, { Wrapper as $Button } from 'components/common/Button';
import Controller from 'components/pages/seller/my-projects/Controller';
import ProjectCard from 'components/pages/seller/my-projects/ProjectCard';
import CreateForm from 'components/pages/seller/my-projects/CreateForm';
import PreviewEditForm from 'components/pages/seller/my-projects/PreviewEditForm';
import useMockProjectStore from 'stores/useMockProjectStore';

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
  max-width: var(--dashboard-max-width);
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const CardGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  ${$Button} {
    border-radius: 8px;
  }
`;

export default () => {
  const hydrated = useMockProjectStore((state) => state.hydrated);
  const mockProject = useMockProjectStore((state) => state.projects);
  const [projects, setProjects] = useState<API2.Project[]>([]);
  useUserSetter('seller');

  const addButton = useRef<HTMLButtonElement>(null);
  const card = useRef<HTMLDivElement>(null);

  const [addProject, setAddProject] = useState(false);

  const [selectedProject, setSelectedProject] = useState<API2.Project>();
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (hydrated) {
      setProjects(mockProject);
      setSelectedProject(mockProject[0] || undefined);
    }
  }, [hydrated, mockProject]);

  useEffect(() => {
    if (!card.current) return;
    if (!addButton.current) return;

    const ro = new ResizeObserver((e) => {
      const height = e[0].borderBoxSize[0].blockSize;

      if (addButton.current) {
        addButton.current.style.height = `${height}px`;
      }
    });

    ro.observe(card.current);

    return () => {
      ro.disconnect();
    };
  }, [addProject, projects]);

  const goToCreateForm = () => {
    setAddProject(true);
  };

  const handleFormCreated = () => {
    setAddProject(false);
  };

  return (
    <Wrapper>
      <Sidebar data={config.sidebar.seller} />

      <Dashboard>
        {!addProject && (
          <>
            <Controller
              search={search}
              onSearchChange={setSearch}
              onNewProjectClick={goToCreateForm}
            />

            <CardGroup>
              {projects.map((p) => (
                <ProjectCard
                  ref={card}
                  key={p.id}
                  onClick={() => setSelectedProject(p)}
                  active={selectedProject?.id === p.id}
                  {...p}
                />
              ))}

              <Button ref={addButton} dashed onClick={goToCreateForm}>
                {locale.seller.card.addBtn}
              </Button>
            </CardGroup>
          </>
        )}

        {addProject && (
          <CreateForm
            onSubmit={handleFormCreated}
            onCancel={() => setAddProject(false)}
          />
        )}
      </Dashboard>

      {!addProject && <PreviewEditForm data={selectedProject} />}
    </Wrapper>
  );
};

export const getServerSideProps = withSessionSsr(
  async ({ req }: { req: IncomingMessage }) => {
    const user = req.session.user;

    if (!user || user !== 'seller') {
      return {
        notFound: true,
      };
    }

    return {
      props: {},
    };
  },
);

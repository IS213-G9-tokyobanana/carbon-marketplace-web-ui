import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { IncomingMessage } from 'http';

import { API } from 'types';
import api from 'api';
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

export default ({ projects }: { projects: API.SellerProject[] }) => {
  useUserSetter('seller');

  const addButton = useRef<HTMLButtonElement>(null);
  const card = useRef<HTMLDivElement>(null);

  const [addProject, setAddProject] = useState(false);

  const [previewProject, setPreviewProject] = useState<API.SellerProject>(
    projects[0] ?? undefined,
  );
  const [search, setSearch] = useState('');

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
  }, [addProject]);

  const goToCreateForm = () => {
    setAddProject(true);
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
                  onClick={() => setPreviewProject(p)}
                  {...p}
                />
              ))}

              <Button ref={addButton} dashed onClick={goToCreateForm}>
                {locale.seller.card.addBtn}
              </Button>
            </CardGroup>
          </>
        )}

        {addProject && <CreateForm onCancel={() => setAddProject(false)} />}
      </Dashboard>

      {!addProject && <PreviewEditForm {...previewProject} />}
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

    const projects = api.getSellerProjects();

    return {
      props: { projects },
    };
  },
);

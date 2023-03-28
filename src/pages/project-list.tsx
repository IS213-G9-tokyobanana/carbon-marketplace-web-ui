import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import api from 'api';
import { API } from 'types';
import { color } from 'config';
import { ProjectCategory } from 'components/pages/project-list/types';

import Hero from 'components/pages/project-list/Hero';
import Card from 'components/pages/project-list/Card';
import Controller from 'components/pages/project-list/Controller';

const categoryAll: ProjectCategory = {
  id: -1,
  name: 'All',
};

const Wrapper = styled.div`
  background: ${color.neutral1};
  min-height: calc(100vh - var(--header-height));
`;

const Container = styled.div`
  padding: 32px var(--page-padding-h);
  max-width: var(--page-max-width);
  margin: 0 auto;
`;

const CardGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 24px;
`;

export default ({ projects }: { projects: API.Project[] }) => {
  /**
   * Hooks
   */
  const [search, setSearch] = useState('');

  const [projectCategories, setProjectCategories] = useState<ProjectCategory[]>([]);
  const [activeCategoryId, setActiveCategoryId] = useState(categoryAll.id);

  const [minCO2, setMinCO2] = useState<number>();
  const [maxCO2, setMaxCO2] = useState<number>();

  useEffect(() => {
    const projectCategories: ProjectCategory[] = [categoryAll];

    const categorySet = projects.reduce((prev, current) => {
      return prev.add(current.category);
    }, new Set<string>());

    const categories = Array.from(categorySet);

    categories.forEach((c, i) => {
      projectCategories.push({
        id: i + 1,
        name: c,
      });
    });

    setProjectCategories(projectCategories);
  }, []);

  /**
   * Not hook
   */
  const filteredProjects = projects.filter((p) => {
    const matchSearch = !!p.title.match(new RegExp(search, 'i'));
    let matchCategory = true;
    let matchCO2 = true;

    if (activeCategoryId !== categoryAll.id) {
      matchCategory =
        p.category === projectCategories.find((c) => c.id === activeCategoryId)?.name;
    }

    if (minCO2 && p.tco2e < minCO2) {
      matchCO2 = false;
    }

    if (maxCO2 && p.tco2e > maxCO2) {
      matchCO2 = false;
    }

    return matchSearch && matchCategory && matchCO2;
  });

  const handleTCO2Change = (min?: number, max?: number) => {
    setMinCO2(min);
    setMaxCO2(max);
  };

  /**
   * Render
   */
  return (
    <Wrapper>
      <Container>
        <Hero />

        <Controller
          search={search}
          onSearchChange={setSearch}
          categoryOptions={projectCategories}
          activeCategoryId={activeCategoryId}
          onCategoryChange={setActiveCategoryId}
          min={minCO2}
          max={maxCO2}
          onTCO2RangeChange={handleTCO2Change}
        />

        <CardGroup>
          {filteredProjects.map((p) => (
            <Card key={p.id} {...p} />
          ))}
        </CardGroup>
      </Container>
    </Wrapper>
  );
};

export async function getServerSideProps() {
  const projects = api.getProjects();

  return {
    props: {
      projects,
    },
  };
}

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { API2 } from 'types';
import { color } from 'config';
import { ProjectCategory } from 'components/pages/project-list/types';

import Hero from 'components/pages/project-list/Hero';
import Card from 'components/pages/project-list/Card';
import Controller from 'components/pages/project-list/Controller';
import { MeiliSearch } from 'meilisearch';

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

export default ({ projects }: { projects: API2.Project[] }) => {
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
    const matchSearch = !!p.name.match(new RegExp(search, 'i'));
    let matchCategory = true;
    let matchCO2 = true;

    if (activeCategoryId !== categoryAll.id) {
      matchCategory =
        p.category === projectCategories.find((c) => c.id === activeCategoryId)?.name;
    }

    if (minCO2 && p.offsets_available! < minCO2) {
      matchCO2 = false;
    }

    if (maxCO2 && p.offsets_available! > maxCO2) {
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
  const client = new MeiliSearch({
    host: `${process.env.MEILI_URL}`,
    apiKey: 'MASTER_KEY',
  });

  const meiliProjectsDocs = await client.index('projects').getDocuments({ limit: 20 });
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
  });

  console.log(projects);

  return {
    props: {
      projects,
    },
  };
}

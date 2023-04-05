import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { API2 } from 'types';

import CategoryTab from './CategoryTab';
import Card from './Card';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const CardGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 40px;
  row-gap: 30px;
`;

export default ({ data }: { data: API2.Project[] }) => {
  const [category, setCategory] = useState<string>();
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    const categorySet = data.reduce((prev, current) => {
      return prev.add(current.category);
    }, new Set<string>());

    const categories = Array.from(categorySet);

    setCategories(categories);
    setCategory(categories[0]);
  }, [data]);

  return (
    <Wrapper>
      <CategoryTab
        options={categories}
        selected={category}
        onOptionChange={setCategory}
      />

      <CardGroup>
        {data
          .filter((v) => v.category === category)
          .map((v) => (
            <Card key={v.id} {...v} />
          ))}
      </CardGroup>
    </Wrapper>
  );
};

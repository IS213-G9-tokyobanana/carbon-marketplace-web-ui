import React from 'react';
import styled from 'styled-components';

import locale from 'locale';
import { ProjectCategory } from './types';

import SearchInput from 'components/common/SearchInput';
import Dropdown from 'components/common/Dropdown';

const Wrapper = styled.div`
  margin-top: 20px;
  margin-bottom: 30px;

  display: grid;
  grid-template-columns: 200px 150px 150px;
  gap: 10px;
`;

export default (props: {
  search: string;
  onSearchChange: (s: string) => void;

  categoryOptions: ProjectCategory[];
  activeCategoryId: number;
  onCategoryChange: (id: number) => void;

  min?: number;
  max?: number;
  onTCO2RangeChange: (min?: number, max?: number) => void;
}) => {
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.onSearchChange(e.target.value);
  };

  return (
    <Wrapper>
      <SearchInput
        value={props.search}
        onChange={handleSearchChange}
        placeholder={locale.projectList.controller.searchPlaceholder}
      />

      <Dropdown.Classic
        options={props.categoryOptions}
        idKey="id"
        nameKey="name"
        activeId={props.activeCategoryId}
        onChange={props.onCategoryChange}
      />

      <Dropdown.MinMax
        placeholderText={locale.projectList.controller.minMaxPlaceholder}
        min={props.min}
        max={props.max}
        range={[0, 10]}
        unit={locale.tco2e.token}
        onChange={props.onTCO2RangeChange}
      />
    </Wrapper>
  );
};

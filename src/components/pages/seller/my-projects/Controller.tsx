import React from 'react';
import styled from 'styled-components';

import locale from 'locale';
import SearchInput, { Wrapper as $SearchInput } from 'components/common/SearchInput';
import Button, { Wrapper as $Button } from 'components/common/Button';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;

  ${$SearchInput} {
    width: 200px;
  }

  ${$Button} {
    padding: 4px 8px;
    border-radius: 8px;
    font-family: var(--font-inter);
    font-size: 14px;
  }
`;

export default ({
  search,
  onSearchChange,
  onNewProjectClick,
}: {
  search: string;
  onSearchChange: (s: string) => void;
  onNewProjectClick: () => void;
}) => {
  return (
    <Wrapper>
      <SearchInput
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder={locale.seller.controller.search.placeholder}
      />

      <Button classic onClick={onNewProjectClick}>
        {locale.seller.controller.newProject}
      </Button>
    </Wrapper>
  );
};

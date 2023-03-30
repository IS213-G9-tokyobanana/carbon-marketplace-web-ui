import React from 'react';
import styled from 'styled-components';

import locale from 'locale';
import SearchInput from 'components/common/SearchInput';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 200px 120px 120px;
  gap: 10px;
`;

export default ({
  searchInput,
  onSearchChange,
}: {
  searchInput: string;
  onSearchChange: (s: string) => void;
}) => {
  return (
    <Wrapper>
      <SearchInput
        value={searchInput}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder={locale.verifier.controller.searchPlaceholder}
      />
    </Wrapper>
  );
};

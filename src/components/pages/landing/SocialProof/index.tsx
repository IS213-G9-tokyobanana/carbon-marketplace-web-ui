import locale from 'locale';
import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const Wrapper = styled.section`
  padding: 120px var(--page-padding-h);

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;

  & > * { width: 100% }
`;

export default () => (
  <Wrapper>
    {locale.landing.socialProof.map((v, i) =>
      <Card key={i} {...v} />
    )}
  </Wrapper>
);

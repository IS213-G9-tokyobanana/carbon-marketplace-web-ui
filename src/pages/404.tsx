import React from 'react';
import Error from 'next/error';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: calc(100vh - var(--header-height));

  & > * {
    height: 100% !important;
  }
`;

export default () => {
  return (
    <Wrapper>
      <Error statusCode={404} />
    </Wrapper>
  );
};

import React from 'react';
import styled from 'styled-components';

import locale from 'locale';
import config, { color } from 'config';

import Step from './Step';

const Wrapper = styled.section`
  padding: 120px var(--page-padding-h);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 64px;
`;

const Title = styled.h2`
  font-weight: 700;
  font-size: 60px;
  line-height: 76px;
  color: ${color.neutral10};
`;

const StepGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 64px;
`;

export default () => (
  <Wrapper>
    <Title>{locale.landing.cleanerTomorrow.title}</Title>

    <StepGroup>
      {config.landing.cleanerSteps.map((v, i) => (
        <Step key={i} order={i + 1} {...v} />
      ))}
    </StepGroup>
  </Wrapper>
);

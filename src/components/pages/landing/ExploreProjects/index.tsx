import React from 'react';
import styled from 'styled-components';

import locale from 'locale';
import { color } from 'config';
import { API } from 'types';

import Button from 'components/common/Button';
import ProjectCarousel from './ProjectCarousel';

const Wrapper = styled.section`
  padding: 54px var(--page-padding-h);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  h2 { color: ${color.neutral10} }

  p { 
    color: ${color.neutral7};
    width: 530px;
    text-align: center;
  }
`;

const Footer = styled.div`
  margin-top: 32px;
  align-self: flex-end;

  display: flex;
  align-items: center;
  gap: 24px;

  p {
    font-weight: 500;
    font-size: 14px;
    line-height: 150%;
    color: ${color.neutral10};
  }
`;

export default ({ projects }: {
  projects: API.Project[]
}) => (
  <Wrapper id="explore-project">
    <TextContainer>
      <h2 className="title-large">
        {locale.landing.exploreProjects.title}
      </h2>

      <p className="body-small">
        {locale.landing.exploreProjects.description}
      </p>
    </TextContainer>

    <ProjectCarousel data={projects} />

    <Footer>
      <Button inverted>
        {locale.landing.exploreProjects.button.showMore}
      </Button>

      <p>
        120 {locale.landing.exploreProjects.projectAmtSuffix}
      </p>
    </Footer>
  </Wrapper>
);

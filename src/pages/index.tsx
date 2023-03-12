import { useEffect, useState } from 'react';
import styled from 'styled-components';

import api from 'api';
import { Project } from 'types';

import MainHeadline from 'components/pages/landing/MainHeadline';
import CleanerTomorrow from 'components/pages/landing/CleanerTomorrow';
import CallToAction from 'components/pages/landing/CallToAction';
import ExploreProjects from 'components/pages/landing/ExploreProjects';
import SocialProof from 'components/pages/landing/SocialProof';

const Wrapper = styled.div`
`;

export default () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    setProjects(api.getProjects());
  }, []);

  return (
    <Wrapper>
      <MainHeadline />

      <CleanerTomorrow />

      <ExploreProjects projects={projects} />

      <SocialProof />

      <CallToAction />
    </Wrapper>
  )
}

import styled from 'styled-components';

import api from 'api';
import { API } from 'types';

import MainHeadline from 'components/pages/landing/MainHeadline';
import CleanerTomorrow from 'components/pages/landing/CleanerTomorrow';
import CallToAction from 'components/pages/landing/CallToAction';
import ExploreProjects from 'components/pages/landing/ExploreProjects';
import SocialProof from 'components/pages/landing/SocialProof';

const Wrapper = styled.div`
  max-width: var(--page-max-width);
  margin: 0 auto;
`;

export default ({ projects }: { projects: API.Project[] }) => {
  return (
    <Wrapper>
      <MainHeadline />

      <CleanerTomorrow />

      <ExploreProjects projects={projects} />

      <SocialProof />

      <CallToAction />
    </Wrapper>
  );
};

export async function getServerSideProps() {
  const projects = api.getProjects();

  return {
    props: {
      projects,
    },
  };
}

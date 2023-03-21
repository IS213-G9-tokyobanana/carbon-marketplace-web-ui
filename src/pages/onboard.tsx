import React, { useState } from 'react';
import styled from 'styled-components';

import { color } from 'config';
import api from 'api';
import { API } from 'types';

import CarbonFootprint, {
  Wrapper as $CarbonFootprint,
  Comparison as $CarbonFootprint__Comparison,
} from 'components/CarbonFootprint';
import ScrollList from 'components/pages/onboard/ScrollList';
import Question from 'components/pages/onboard/Question';

const Wrapper = styled.div`
  --section-padding-v: 48px;

  max-height: calc(100vh - var(--header-height));

  padding: 0 var(--page-padding-h);
  max-width: var(--page-max-width);
  margin: 0 auto;

  display: flex;
  align-items: start;
  gap: min(5vw, 100px);

  ${$CarbonFootprint} {
    margin: var(--section-padding-v) 0;
    flex-grow: 0;
    flex-shrink: 0;

    width: 230px;
    padding: 32px 24px;
    background: ${color.neutral1};
    border-radius: 10px;

    ${$CarbonFootprint__Comparison} {
      font-size: 12px;
      line-height: 16px;
    }
  }
`;

export default ({ questions }: { questions: API.Question[] }) => {
  const [question, setQuestion] = useState<API.Question>(questions[0]);

  return (
    <Wrapper>
      <ScrollList data={questions} onQuestionClick={setQuestion} />

      <Question {...question} />

      <CarbonFootprint />
    </Wrapper>
  );
};

export async function getServerSideProps() {
  const questions = api.getQuestions();

  return {
    props: {
      questions,
    },
  };
}

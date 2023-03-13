import { color } from 'config';
import React from 'react';
import styled from 'styled-components';

import { API } from 'types';

const Wrapper = styled.div`
  margin: var(--section-padding-v) 0;
  display: flex;
  flex-direction: column;
  gap: 10px;

  .title-small {
    color: ${color.neutral10};
  }

  .subtitle-small {
    color: ${color.neutral7};
  }
`;

const AnswerGroup = styled.div`
  margin: 16px 0;

  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Answer = styled.div`
  padding: 12px;
  text-align: center;

  color: ${color.neutral10};
  border: 1px solid ${color.neutral10};
  border-radius: 12px;
`;

export default (props: API.Question) => {
  return (
    <Wrapper>
      <p className="title-small">
        {props.question}
      </p>

      <p className="subtitle-small">
        {props.description}
      </p>

      <AnswerGroup>
        {props.answers.map((v, i) =>
          <Answer
            key={`${props.id}${i}`}
            className="body-large"
          >
            {v}
          </Answer>
        )}
      </AnswerGroup>
    </Wrapper>
  );
}
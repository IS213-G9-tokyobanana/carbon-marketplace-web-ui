import React from 'react';
import styled from 'styled-components';

import locale from 'locale';
import { color } from 'config';

const Wrapper = styled.section`
  padding: 120px var(--page-padding-h);

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;

  & > * {
    width: 100%;
  }
`;

const Card = styled.div`
  padding: 42px;
  background: rgba(239, 242, 246, 0.4);
  border-radius: 24px;

  display: flex;
  flex-direction: column;
  gap: 16px;

  p {
    color: ${color.neutral10};
  }

  span {
    margin: 0 16px;
  }
`;

export default () => (
  <Wrapper>
    {locale.landing.socialProof.map((v, i) => (
      <Card key={i}>
        <p className="title-large">
          {v.number}

          {v.tco2e && (
            <span
              className="title-small"
              dangerouslySetInnerHTML={{ __html: locale.tco2e }}
            />
          )}
        </p>

        <p className="body-large">{v.description}</p>
      </Card>
    ))}
  </Wrapper>
);

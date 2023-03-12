import React from 'react';
import styled from 'styled-components';

import { color } from 'config';

const Wrapper = styled.div`
  padding: 42px;
  background: rgba(239, 242, 246, 0.4);
  border-radius: 24px;

  display: flex;
  flex-direction: column;
  gap: 16px;
  
  p { color: ${color.neutral10} }

  span { margin: 0 16px }
`;

export default ({ number, sub, description }: {
  number: string,
  sub?: string,
  description: string
}) => (
  <Wrapper>
    <p className="title-large">
      {number}

      <span className="title-small">
        {sub}
      </span>
    </p>

    <p className="body-large">
      {description}
    </p>
  </Wrapper>
);

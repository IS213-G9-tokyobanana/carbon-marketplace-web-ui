import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import { color } from 'config';
import locale from 'locale';

const Wrapper = styled.div`
  margin: var(--section-padding-v) 0;
  flex-grow: 0;
  flex-shrink: 0;

  width: 230px;
  padding: 32px 24px;
  background: ${color.neutral1};
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  p.subtitle-small, p.title-large, p#comparison { 
    color: ${color.neutral10};
    text-align: center;
  }
  
  p.body-small { color: ${color.neutral8} }

  p#comparison {
    font-style: italic;
    font-size: 12px;
    line-height: 16px;
  }

  a {
    display: block;
    width: 100%;
    text-decoration: underline;
  }
`;

export default ({ carbonIndex }: {
  carbonIndex: number
}) => {
  const carbonIndexSubstr = locale.onboard.carbonFootprint.carbonIndex.split("{{ 1 }}");
  const comparison = locale.onboard.carbonFootprint.comparison.replace("{{ 1 }}", "8%");

  return (
    <Wrapper>
      <p className="subtitle-small">
        {carbonIndexSubstr[0]}
      </p>

      <p className="title-large">
        {carbonIndex}
      </p>

      <p className="body-small">
        {carbonIndexSubstr[1]}
      </p>

      <p id="comparison">
        {comparison}

        <Link href="">
          {locale.onboard.carbonFootprint.source}
        </Link>
      </p>
    </Wrapper>
  )
}
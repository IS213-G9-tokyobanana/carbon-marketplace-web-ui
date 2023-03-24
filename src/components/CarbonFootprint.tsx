import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import locale from 'locale';
import { color } from 'config';

export const Wrapper = styled.div`
  flex-grow: 0;
  flex-shrink: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  background: white;

  p.subtitle-small,
  p.title-large {
    color: ${color.neutral10};
    text-align: center;
  }

  p.body-small {
    color: ${color.neutral8};
  }

  #comparison {
    font-style: italic;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
  }
`;

export const Comparison = styled.div`
  color: ${color.neutral10};
  text-align: center;

  font-style: italic;
  font-size: 16px;
  line-height: 24px;
  text-align: center;

  a {
    display: inline;
    width: 100%;
    text-decoration: underline;
  }
`;

export default () => {
  const carbonIndexSubstr = locale.carbonFootprint.carbonIndex.split('{{ 1 }}');
  const comparison = locale.carbonFootprint.comparison.replace('{{ 1 }}', '8%');

  return (
    <Wrapper>
      <p className="subtitle-small">{carbonIndexSubstr[0]}</p>

      <p className="title-large">{10.4}</p>

      <p
        className="body-small"
        dangerouslySetInnerHTML={{ __html: carbonIndexSubstr[1] }}
      />

      <Comparison>
        <p>{comparison}</p>

        <Link href="">{locale.carbonFootprint.source}</Link>
      </Comparison>
    </Wrapper>
  );
};

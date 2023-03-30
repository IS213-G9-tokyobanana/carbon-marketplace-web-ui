import React from 'react';
import styled from 'styled-components';

import locale from 'locale';
import { color } from 'config';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 35px;

  background: white;
  padding: 24px;
  border-radius: 10px;

  p {
    color: ${color.neutral10};
    text-align: center;
  }

  span {
    font-weight: 700;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  p.light-color {
    color: ${color.neutral8};
  }
`;

const MilesNote = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: end;
`;

export default ({
  monthYear,
  tonsOfCO2,
  miles,
}: {
  monthYear: string;
  tonsOfCO2: string;
  miles: string;
}) => {
  const _monthYear = locale.buyer.monthlyOffset[0].replace('{{ 1 }}', monthYear);
  const _miles = locale.buyer.monthlyOffset[2].replace(
    '{{ 1 }}',
    `<span>${miles} miles</span>`,
  );

  return (
    <Wrapper>
      <p className="body-small">{_monthYear}</p>

      <Container>
        <p className="display-large">{tonsOfCO2}</p>

        <p
          className="light-color"
          dangerouslySetInnerHTML={{ __html: locale.buyer.monthlyOffset[1] }}
        />
      </Container>

      <MilesNote>
        <p className="body-small" dangerouslySetInnerHTML={{ __html: _miles }} />
      </MilesNote>
    </Wrapper>
  );
};

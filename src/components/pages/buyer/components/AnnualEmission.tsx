import React from 'react';
import styled from 'styled-components';

import locale from 'locale';
import { color } from 'config';
import Image from 'components/common/Image';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

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

const ImageContainer = styled.div`
  position: relative;
  aspect-ratio: 1/1;
  height: 70px;
  width: auto;
`;

export default ({ km }: { km: string }) => {
  const _km = locale.buyer.annualEmission[1].replace('{{ 1 }}', km);

  return (
    <Wrapper>
      <p className="body-small">{locale.buyer.annualEmission[0]}</p>

      <ImageContainer>
        <Image />
      </ImageContainer>

      <p className="body-small">
        <span>{_km}</span>
        &nbsp;
        {locale.buyer.annualEmission[2]}
      </p>
    </Wrapper>
  );
};

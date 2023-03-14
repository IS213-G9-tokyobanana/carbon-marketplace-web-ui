import React from 'react';
import styled from 'styled-components';

import locale from 'locale';
import { color } from 'config';
import { CleanerStepItem } from 'types';

import Image from 'components/common/Image';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const TextContainer = styled.div`
  p { color: ${color.neutral10} }

  p.body-large { 
    margin-top: 16px;
    color: ${color.neutral7};
  }
`;

const ImageContainer = styled.div`
  flex-grow: 0;
  flex-shrink: 0;

  position: relative;
  width: 576px;
  height: 224px;

  border-radius: 24px;
  overflow: hidden;
`;

export default ({ order, ...props }: {
  order: number
} & CleanerStepItem
) => (
  <Wrapper>
    <TextContainer>
      <p className="body-large">
        {locale.landing.cleanerTomorrow.stepPrefix} {order}:
      </p>

      <p className="title-small">
        {props.title}
      </p>

      <p className="body-large">
        {props.description}
      </p>
    </TextContainer>

    <ImageContainer>
      <Image />
    </ImageContainer>
  </Wrapper>
);

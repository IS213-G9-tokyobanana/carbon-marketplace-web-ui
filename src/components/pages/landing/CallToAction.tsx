import React from 'react';
import styled from 'styled-components';

import locale from 'locale';
import { color } from 'config';

import Image from 'components/common/Image';
import Button from 'components/common/Button';

const Wrapper = styled.section`
  padding: 120px var(--page-padding-h);

  display: flex;
  align-items: center;
  gap: 83px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 40px;

  h1 { color: ${color.neutral10} }
`;

const ImageContainer = styled.div`
  flex-grow: 0;
  flex-shrink: 0;

  position: relative;
  width: 548px;
  height: 316px;

  border-radius: 24px;
  overflow: hidden;
`;

export default () => (
  <Wrapper>
    <TextContainer>
      <h1 className="title-large">
        {locale.landing.callToAction.pitch}
      </h1>

      <Button classic>
        {locale.landing.callToAction.button}
      </Button>
    </TextContainer>

    <ImageContainer>
      <Image />
    </ImageContainer>
  </Wrapper>
);

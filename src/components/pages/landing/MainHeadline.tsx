import React from 'react';
import styled from 'styled-components';

import locale from 'locale';
import { color } from 'config';

import Button from 'components/common/Button';
import Image from 'components/common/Image';

const Wrapper = styled.section`
  padding: 130px var(--page-padding-h);

  display: flex;
  align-items: center;
  gap: 40px;
`;

const ImageContainer = styled.div`
  flex-shrink: 0;
  flex-grow: 0;

  position: relative;
  height: 474px;
  width: 564px;
  border-radius: 24px;
  overflow: hidden;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;

  h2, h1 { color: ${color.neutral10} }

  p {
    margin: 16px 0;
    margin-bottom: 32px;
    color: ${color.neutral7};
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

export default () => {


  return (
    <Wrapper>
      <ImageContainer>
        <Image />
      </ImageContainer>


      <TextContainer>
        <h2 className="subtitle-small">
          {locale.landing.headline.subtitle}
        </h2>

        <h1 className="title-large">
          {locale.landing.headline.title}
        </h1>

        <p className="body-large">
          {locale.landing.headline.description}
        </p>

        <ButtonGroup>
          <Button classic>
            {locale.landing.headline.button.left}
          </Button>

          <Button inverted>
            {locale.landing.headline.button.right}
          </Button>
        </ButtonGroup>
      </TextContainer>
    </Wrapper>
  );
}
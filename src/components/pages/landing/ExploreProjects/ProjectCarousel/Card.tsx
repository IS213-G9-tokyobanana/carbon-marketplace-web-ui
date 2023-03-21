import React from 'react';
import styled from 'styled-components';

import config, { color } from 'config';
import locale from 'locale';
import { API } from 'types';

import Heart from 'components/common/svg/Heart';
import Button from 'components/common/Button';
import Image, { Mask as $ImageMask } from 'components/common/Image';

const Wrapper = styled.div`
  padding: 28px 21px;
  background: ${color.neutral1};
  border-radius: 24px;

  display: flex;
  flex-direction: column;
  gap: 28px;
`;

const FlexRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h4 {
    color: ${color.neutral10};
    font-weight: 700;
    letter-spacing: -3%;
  }

  p {
    color: ${color.neutral10};
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  aspect-ratio: 334/238;
  width: 100%;
  height: auto;

  border-radius: 24px;
  overflow: hidden;

  ${$ImageMask} {
    background: ${color.neutral0};
  }
`;

export default (props: API.Project) => {
  const title =
    props.title.length > config.landing.exploreProjects.maxTitleLength
      ? `${props.title.substring(
          0,
          config.landing.exploreProjects.maxTitleLength - 3,
        )}...`
      : props.title;

  return (
    <Wrapper>
      <FlexRow>
        <h4 className="body-large">{title}</h4>

        <Heart />
      </FlexRow>

      <ImageContainer>
        <Image />
      </ImageContainer>

      <FlexRow>
        <p className="body-small">
          <span>{props.tco2e}</span>
          <span dangerouslySetInnerHTML={{ __html: locale.tco2e }} />
        </p>

        <Button inverted>{locale.landing.exploreProjects.button.purchase}</Button>
      </FlexRow>
    </Wrapper>
  );
};

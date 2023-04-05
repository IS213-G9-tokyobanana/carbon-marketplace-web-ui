import React from 'react';
import styled from 'styled-components';

import { color } from 'config';
import locale from 'locale';
import { API2 } from 'types';

import Heart from 'components/common/svg/Heart';
import Button from 'components/common/Button';
import Image, { Mask as $ImageMask } from 'components/common/Image';
import Dropdown from 'components/common/Dropdown';

const Wrapper = styled.div`
  min-width: 0;
  padding: 28px 21px;
  background: ${color.neutral1};
  border-radius: 24px;

  display: flex;
  flex-direction: column;
  gap: 28px;

  transition: 0.25s;

  &:hover {
    transform: translate(-2px, -2px);
    box-shadow: 2px 2px 12px 1px #0001;
  }
`;

const FlexRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;

  h4 {
    color: ${color.neutral10};
    font-weight: 700;
    letter-spacing: -3%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  p {
    color: ${color.neutral10};
    display: flex;
    align-items: start;
    gap: 10px;
  }

  svg {
    flex-shrink: 0;
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

export default (props: API2.Project) => {
  return (
    <Wrapper>
      <FlexRow>
        <h4 className="body-large">{props.name}</h4>
        <Heart />
      </FlexRow>

      <ImageContainer>
        <Image />
      </ImageContainer>

      <FlexRow>
        <p className="body-small">
          <span>
            {10} {locale.tco2e.denominator}
          </span>
          <span dangerouslySetInnerHTML={{ __html: locale.tco2e.token }} />
        </p>

        <Dropdown.Purchase />
      </FlexRow>
    </Wrapper>
  );
};

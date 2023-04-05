import React from 'react';
import styled from 'styled-components';

import { color } from 'config';
import { API } from 'types';
import locale from 'locale';

import Heart from 'components/common/svg/Heart';
import Image from 'components/common/Image';
import Star from 'components/common/svg/Star';
import Dropdown from 'components/common/Dropdown';
import TypeBadge from './TypeBadge';

const Wrapper = styled.div`
  background: white;
  padding: 16px;
  border-radius: 18px;
  min-width: 0;

  display: flex;
  flex-direction: column;
  gap: 16px;

  transition: 0.25s;

  &:hover {
    box-shadow: 2px 2px 12px 1px #0001;
  }

  p {
    color: ${color.neutral10};
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;

  p {
    font-weight: 700;
    white-space: nowrap;
    overflow: hidden;
    min-width: 0;
    text-overflow: ellipsis;
  }

  svg {
    flex-shrink: 0;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  background: #eff2f6;
  height: 150px;
  border-radius: 18px;
  overflow: hidden;
`;

const FlexRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  flex-wrap: wrap;
`;

const StarGroup = styled.div`
  display: flex;
  gap: 7px;
`;

const Description = styled.p`
  flex-grow: 1;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  display: -webkit-box;
`;

export default (props: API.Project) => (
  <Wrapper>
    <Header>
      <p className="body-large">{props.title}</p>
      <Heart />
    </Header>

    <ImageContainer>
      <Image />
    </ImageContainer>

    <FlexRow>
      <TypeBadge>{props.category}</TypeBadge>

      <StarGroup>
        {Array.from(Array(5).keys()).map((_, i) => (
          <Star key={i} active={i < props.star} />
        ))}
      </StarGroup>
    </FlexRow>

    <Description className="body-xs">{props.description}</Description>

    <FlexRow>
      <p className="body-small">
        {props.tco2e} {locale.tco2e.denominator}
        &nbsp;
        <span dangerouslySetInnerHTML={{ __html: locale.tco2e.token }} />
      </p>

      <Dropdown.Purchase />
    </FlexRow>
  </Wrapper>
);

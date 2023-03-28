import React from 'react';
import styled from 'styled-components';

import { color } from 'config';
import { API } from 'types';
import Heart from 'components/common/svg/Heart';
import Image from 'components/common/Image';
import TypeTag from './TypeTag';
import Star from 'components/common/svg/Star';
import Button from 'components/common/Button';
import locale from 'locale';

const Wrapper = styled.div`
  background: white;
  padding: 16px;
  border-radius: 18px;
  min-width: 0;

  display: flex;
  flex-direction: column;
  gap: 16px;

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

  p {
    color: ${color.neutral10};
    display: flex;
    align-items: start;
    gap: 10px;
  }
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
      <TypeTag>{props.category}</TypeTag>

      <StarGroup>
        {Array.from(Array(5).keys()).map((_, i) => (
          <Star key={i} active={i < props.star} />
        ))}
      </StarGroup>
    </FlexRow>

    <Description className="body-xs">{props.description}</Description>

    <FlexRow>
      <p className="body-small">
        <span>
          {props.tco2e} {locale.tco2e.denominator}
        </span>
        <span dangerouslySetInnerHTML={{ __html: locale.tco2e.token }} />
      </p>
      <Button inverted>{locale.projectList.card.button.purchase}</Button>
    </FlexRow>
  </Wrapper>
);

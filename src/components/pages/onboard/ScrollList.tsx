import React from 'react';
import styled from 'styled-components';

import { color } from 'config';
import { API } from 'types';
import { applyStyleIf } from 'utils';

import Image from 'components/common/Image';

const Wrapper = styled.div`
  flex-grow: 0;
  flex-shrink: 0;

  position: relative;
  align-self: stretch;
`;

const ItemGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  height: 100%;
  padding: var(--section-padding-v) 0;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  cursor: pointer;

  p {
    font-weight: 500;
    font-size: 24px;
    line-height: 31px;
    letter-spacing: -2.5%;
    color: ${color.neutral10};
  }
`;

const ImageContainer = styled.div`
  position: relative;
  aspect-ratio: 1/1;
  height: 171px;
  width: auto;

  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 4px 4px 0 #00000040;
`;

const Mask = styled.div(
  ({ $bottom }: { $bottom?: boolean }) => `
  position: absolute;
  z-index: 3;
  top: 0;
  width: 100%;
  height: var(--section-padding-v);

  background: linear-gradient(180deg, #FFFFFF 50%, rgba(217, 217, 217, 0) 100%);

  ${applyStyleIf(
    !!$bottom,
    `
    bottom: 0;
    top: unset;

    background: linear-gradient(0deg, #FFFFFF 50%, rgba(217, 217, 217, 0) 100%);
  `
  )}
`
);

export default ({
  data,
  onQuestionClick
}: {
  data: API.Question[];
  onQuestionClick: (q: API.Question) => void;
}) => (
  <Wrapper>
    <Mask />

    <ItemGroup>
      {data.map((v) => (
        <Item key={v.id} onClick={() => onQuestionClick(v)}>
          <ImageContainer>
            <Image />
          </ImageContainer>

          <p>{v.imgAlt}</p>
        </Item>
      ))}
    </ItemGroup>

    <Mask $bottom />
  </Wrapper>
);

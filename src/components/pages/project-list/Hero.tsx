import React from 'react';
import styled from 'styled-components';

import { color } from 'config';
import locale from 'locale';
import Image from 'components/common/Image';

const Wrapper = styled.section`
  background: white;

  display: flex;
  align-items: center;

  & > * {
    width: 50%;
  }
`;

const ImageContainer = styled.div`
  position: relative;
`;

const TextContainer = styled.div`
  padding: 55px 16px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  color: ${color.neutral10};
`;

export default () => {
  return (
    <Wrapper>
      <ImageContainer>
        <Image />
      </ImageContainer>

      <TextContainer>
        <h2 className="subtitle-small">{locale.projectList.hero.subtitle}</h2>
        <h1 className="title-small">{locale.projectList.hero.title}</h1>
      </TextContainer>
    </Wrapper>
  );
};

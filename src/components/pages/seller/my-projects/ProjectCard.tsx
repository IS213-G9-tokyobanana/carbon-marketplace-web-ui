import React from 'react';
import styled from 'styled-components';

import { color } from 'config';
import { API2 } from 'types';
import locale from 'locale';
import { applyStyleIf, getProjectProgress } from 'utils';

import Image, { Wrapper as $Image } from 'components/common/Image';
import ProgressBar from 'components/common/ProgressBar';

const Wrapper = styled.div(
  ({ $active }: { $active: boolean }) => `
  display: flex;
  gap: 20px;

  padding: 24px 32px;
  background: white;
  border-radius: 15px;
  border: 2px solid transparent;
  cursor: pointer;

  transition: 0.25s;

  &:hover {
    transform: translate(-2px, -2px);
    box-shadow: 2px 2px 12px 1px #0001;
  }

  ${applyStyleIf(
    $active,
    `
    border-color: ${color.neutral10};
  `,
  )}
`,
);

const ImageContainer = styled.div`
  flex-shrink: 0;
  flex-grow: 0;

  position: relative;
  width: 155px;
  height: 116px;
  background: #eff2f6;

  ${$Image} svg {
    height: 50%;
  }
`;

const TitleContainer = styled.div`
  width: 100px;
  flex-grow: 1;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 10px;

  p {
    color: ${color.neutral10};
    overflow: hidden;
  }

  p.body-xs {
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }

  p.subtitle-small {
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

const AttributeContainer = styled.div`
  flex-shrink: 0;
  flex-grow: 0;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  p {
    color: ${color.neutral10};
  }
`;

const Attribute = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export default React.forwardRef(
  (
    {
      onClick,
      active = false,
      ...props
    }: {
      onClick: () => void;
      active?: boolean;
    } & API2.Project,
    ref: React.ForwardedRef<HTMLDivElement>,
  ) => {
    return (
      <Wrapper ref={ref} onClick={onClick} $active={active}>
        <ImageContainer>
          <Image />
        </ImageContainer>

        <TitleContainer>
          <p className="subtitle-small">{props.name}</p>

          <p className="body-xs">{props.description}</p>
        </TitleContainer>

        <AttributeContainer>
          <Attribute>
            <p className="body-xs">{locale.seller.card.label.type}</p>

            <p className="body-small">
              {/* {props.type} */}
              Type
            </p>
          </Attribute>

          <Attribute>
            <p className="body-xs">{locale.seller.card.label.milestone}</p>

            <ProgressBar
              progress={getProjectProgress(props)}
              total={props.milestones.length}
            />
          </Attribute>
        </AttributeContainer>
      </Wrapper>
    );
  },
);

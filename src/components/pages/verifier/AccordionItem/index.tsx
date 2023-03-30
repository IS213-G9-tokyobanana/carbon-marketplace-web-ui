import React, { useState } from 'react';
import styled from 'styled-components';

import locale from 'locale';
import { API } from 'types';
import { color } from 'config';

import ProgressBar from './ProgressBar';
import StatusPill from './StatusPill';
import Milestone from './Milestone';

export const Wrapper = styled.div`
  position: relative;
  background: white;
  border-radius: 8px;
`;

const Header = styled.div`
  display: flex;
  gap: 10px;
  padding: 32px 42px;
  cursor: pointer;
`;

const Name = styled.div`
  flex-grow: 1;
  color: ${color.neutral10};

  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const AttributeGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 160px 80px;
  align-items: center;

  gap: 7px;
  column-gap: 60px;

  p {
    color: ${color.neutral10};
  }

  & > * {
    justify-self: start;
  }
`;

const MilestoneGroup = styled.div`
  background: #f7f9fb;
`;

export default ({
  defaultExpand,
  ...props
}: {
  defaultExpand: boolean;
} & API.VerifiableProject) => {
  const [expand, setExpand] = useState(defaultExpand);

  return (
    <Wrapper>
      <Header onClick={() => setExpand(!expand)}>
        <Name>
          <p className="subtitle-small">{props.name}</p>

          <p className="body-xs">
            {locale.verifier.accordion.idPrefix} {props.id}
          </p>
        </Name>

        <AttributeGrid>
          <p className="body-xs">{locale.verifier.accordion.type}</p>

          <p className="body-xs">{locale.verifier.accordion.milestone}</p>

          <p className="body-xs">{locale.verifier.accordion.type}</p>

          <p className="body-small">{props.type}</p>

          <ProgressBar progress={4} total={10} />

          <StatusPill>{props.status}</StatusPill>
        </AttributeGrid>
      </Header>

      <MilestoneGroup>
        {props.milestones.map((m) => (
          <Milestone key={m.id} expand={expand} {...m} />
        ))}
      </MilestoneGroup>
    </Wrapper>
  );
};

import React, { useRef, useState } from 'react';
import styled from 'styled-components';

import config, { color } from 'config';
import locale from 'locale';
import { API } from 'types';
import useAnimation from './useAnimation';

import FilledPencil from 'components/common/svg/FilledPencil';
import StatusPill from '../StatusPill';
import EditStatusDropdown from './EditStatusDropdown';

const Wrapper = styled.div`
  padding: 0 42px;
  opacity: 0;
  height: 0;

  display: flex;
  align-items: start;
  gap: 10px;
`;

const Name = styled.div`
  flex-grow: 1;
  color: ${color.neutral10};

  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const AttributeContainer = styled.div`
  flex-shrink: 0;

  display: grid;
  grid-template-columns: 1fr 1fr 160px 110px;
  align-items: center;

  column-gap: 20px;
  row-gap: 2px;

  p {
    color: ${color.neutral10};
  }

  & > * {
    justify-self: start;
  }
`;

const StatusContainer = styled.div`
  width: 100%;
  position: relative;

  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: space-between;

  svg {
    cursor: pointer;
  }
`;

export default ({
  expand,
  ...props
}: {
  expand: boolean;
} & API.Milestone) => {
  const ref = useRef<HTMLDivElement>(null);

  const [editStatus, setEditStatus] = useState(false);

  useAnimation(expand, ref);

  const toggleEditStatus = (e: React.MouseEvent) => {
    e.stopPropagation();
    setEditStatus(!editStatus);
  };

  return (
    <Wrapper ref={ref}>
      <Name>
        <p className="subtitle-small">{props.name}</p>

        <p className="body-xs">
          {locale.verifier.accordion.idPrefix} {props.id}
        </p>
      </Name>

      <AttributeContainer>
        <p className="body-xs">{locale.verifier.accordion.expectedValue}</p>

        <p className="body-xs">{locale.verifier.accordion.currentValue}</p>

        <p className="body-xs">{locale.verifier.accordion.lastUpdated}</p>

        <p className="body-xs">{locale.verifier.accordion.progress}</p>

        <p className="body-small">
          {props.expectedCO2}
          &nbsp;
          <span
            className="body-xs"
            dangerouslySetInnerHTML={{ __html: locale.tco2e.token }}
          />
        </p>

        <p className="body-small">
          {props.currentCO2}
          &nbsp;
          <span
            className="body-xs"
            dangerouslySetInnerHTML={{ __html: locale.tco2e.token }}
          />
        </p>

        <p className="body-small">{props.lastUpdated}</p>

        <StatusContainer>
          <StatusPill>{props.status}</StatusPill>

          {config.verifier.editableStatus.find((s) => s === props.status) && (
            <>
              <FilledPencil onClick={toggleEditStatus} />

              <EditStatusDropdown expand={editStatus} setExpand={setEditStatus} />
            </>
          )}
        </StatusContainer>
      </AttributeContainer>
    </Wrapper>
  );
};

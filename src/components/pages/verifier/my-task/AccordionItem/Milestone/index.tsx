import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { format } from 'date-fns';

import config, { color } from 'config';
import locale from 'locale';
import { API2 } from 'types';
import useAnimation from './useAnimation';

import FilledPencil from 'components/common/svg/FilledPencil';
import StatusBadge from '../StatusBadge';
import EditStatusDropdown from './EditStatusDropdown';
import useCollapse from 'components/common/Dropdown/useCollapse';
import api from 'api';

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
} & API2.Milestone) => {
  const ref = useRef<HTMLDivElement>(null);

  const [editStatus, setEditStatus] = useState(false);

  const onSelectClick = useCollapse(editStatus, setEditStatus);

  useAnimation(expand, ref);

  const handleStatusClick = (s: API2.Status) => {
    api.project.updateMilestoneStatus(props.project_id, props.id, s);
    setEditStatus(false);
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
          {props.offsets_total}
          &nbsp;
          <span
            className="body-xs"
            dangerouslySetInnerHTML={{ __html: locale.tco2e.token }}
          />
        </p>

        <p className="body-small">
          {props.offsets_available}
          &nbsp;
          <span
            className="body-xs"
            dangerouslySetInnerHTML={{ __html: locale.tco2e.token }}
          />
        </p>

        <p className="body-small">{format(new Date(props.updated_at), 'yyyy-MM-dd')}</p>

        <StatusContainer>
          <StatusBadge>{props.status}</StatusBadge>

          {config.verifier.milestones.editableStatus.find(
            (s) => s === props.status,
          ) && (
            <>
              <FilledPencil onClick={onSelectClick} />

              <EditStatusDropdown
                expand={editStatus}
                setExpand={setEditStatus}
                options={config.verifier.milestones.editOptions}
                onOptionClick={handleStatusClick}
              />
            </>
          )}
        </StatusContainer>
      </AttributeContainer>
    </Wrapper>
  );
};

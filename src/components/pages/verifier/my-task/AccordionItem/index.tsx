import React, { use, useEffect, useState } from 'react';
import styled from 'styled-components';

import locale from 'locale';
import { API2 } from 'types';
import config, { color } from 'config';

import ProgressBar from 'components/common/ProgressBar';
import StatusBadge from './StatusBadge';
import Milestone from './Milestone';
import EditStatusDropdown from './Milestone/EditStatusDropdown';
import FilledPencil from 'components/common/svg/FilledPencil';
import useCollapse from 'components/common/Dropdown/useCollapse';
import { getProjectProgress } from 'utils';
import api from 'api';

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
  flex-shrink: 0;

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

const StatusContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 16px;

  svg {
    padding: 6px;
  }
`;

export default ({
  defaultExpand,
  ...props
}: {
  defaultExpand: boolean;
} & API2.Project) => {
  const [expand, setExpand] = useState(defaultExpand);
  const [statusExpand, setStatusExpand] = useState(false);

  useEffect(() => {
    const collapse = () => {
      setStatusExpand(false);
    };

    window.addEventListener('click', collapse);
    return () => {
      window.removeEventListener('click', collapse);
    };
  }, []);

  const handleProjectStatusChange = (s: API2.Status) => {
    api.project.updateProjectStatus(props.id, s);
    setStatusExpand(false);
  };

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

          <p className="body-small">{props.types[0]}</p>

          <ProgressBar
            progress={getProjectProgress(props)}
            total={props.milestones.length}
          />

          <StatusContainer>
            <StatusBadge>{props.status}</StatusBadge>

            {config.verifier.project.editableStatus.find((s) => s === props.status) && (
              <>
                <FilledPencil
                  onClick={(e) => {
                    e.stopPropagation();
                    setStatusExpand(!statusExpand);
                  }}
                />

                <EditStatusDropdown
                  expand={statusExpand}
                  setExpand={setStatusExpand}
                  options={config.verifier.project.editOptions}
                  onOptionClick={handleProjectStatusChange}
                />
              </>
            )}
          </StatusContainer>
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

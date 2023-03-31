import React, { useState } from 'react';
import styled from 'styled-components';

import { color } from 'config';
import { Milestone } from './types';
import locale from 'locale';

import ProjectDetail from './ProjectDetail';
import Milestones from './Milestones';
import Description from './Description';
import Button, { Wrapper as $Button } from 'components/common/Button';

const Wrapper = styled.div`
  background: white;
  padding: 56px 48px;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const BorderLine = styled.div`
  height: 1px;
  width: 100%;
  background: ${color.neutral4};
`;

const ButtonGroup = styled.div`
  align-self: end;

  display: flex;
  align-items: center;
  gap: 24px;

  ${$Button} {
    border-radius: 12px;
  }
`;

export default ({ onCancel }: { onCancel: () => void }) => {
  const [milestones, setMilestones] = useState<Milestone[]>([
    {
      name: '',
      amt: '',
      date: '',
    },
  ]);

  const submitForm = () => {
    console.log(milestones);
  };

  return (
    <Wrapper>
      <ProjectDetail />

      <BorderLine />

      <Milestones milestones={milestones} onMilestonesChange={setMilestones} />

      <BorderLine />

      <Description />

      <BorderLine />

      <ButtonGroup>
        <Button inverted onClick={onCancel}>
          {locale.seller.createForm.button.cancel}
        </Button>

        <Button classic onClick={submitForm}>
          {locale.seller.createForm.button.create}
        </Button>
      </ButtonGroup>
    </Wrapper>
  );
};

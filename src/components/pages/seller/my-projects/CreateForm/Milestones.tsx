import React from 'react';
import styled from 'styled-components';

import locale from 'locale';
import { color } from 'config';
import { Milestone } from './types';

import Input from 'components/common/Input';
import FormItem from './FormItem';
import Button, { Wrapper as $Button } from 'components/common/Button';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  ${$Button} {
    height: 74px;
    border-radius: 16px;
  }
`;

const FormItemGroup = styled.div`
  flex-grow: 1;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
  row-gap: 16px;
`;

export default ({
  milestones,
  onMilestonesChange,
}: {
  milestones: Milestone[];
  onMilestonesChange: (m: Milestone[]) => void;
}) => {
  const handleMilestoneChange = <T extends keyof Milestone>(
    i: number,
    key: T,
    value: Milestone[T],
  ) => {
    const clone = [...milestones];

    clone[i][key] = value;
    onMilestonesChange(clone);
  };

  const addMilestone = () => {
    const newMilestone = {
      name: '',
      amt: '',
      date: '',
    };

    const clone = [...milestones, newMilestone];
    onMilestonesChange(clone);
  };

  return (
    <Wrapper>
      <h3 className="subtitle-small">{locale.seller.createForm.milestones.title}</h3>

      <Container>
        <FormItemGroup>
          {milestones.map((m, i) => (
            <React.Fragment key={i}>
              <FormItem label={locale.seller.createForm.milestones.label.name}>
                <Input
                  placeholder={locale.seller.createForm.milestones.placeholder.input}
                  value={m.name}
                  onChange={(e) => handleMilestoneChange(i, 'name', e.target.value)}
                />
              </FormItem>

              <FormItem label={locale.seller.createForm.milestones.label.amt}>
                <Input
                  placeholder={locale.seller.createForm.milestones.placeholder.input}
                  value={m.amt}
                  onChange={(e) => handleMilestoneChange(i, 'amt', e.target.value)}
                />
              </FormItem>

              <FormItem label={locale.seller.createForm.milestones.label.amt}>
                <Input
                  placeholder={
                    locale.seller.createForm.milestones.placeholder.datepicker
                  }
                  value={m.date}
                  onChange={(e) => handleMilestoneChange(i, 'date', e.target.value)}
                />
              </FormItem>
            </React.Fragment>
          ))}
        </FormItemGroup>

        <Button dashed onClick={addMilestone} className="body-small">
          {locale.seller.createForm.milestones.addBtn}
        </Button>
      </Container>
    </Wrapper>
  );
};

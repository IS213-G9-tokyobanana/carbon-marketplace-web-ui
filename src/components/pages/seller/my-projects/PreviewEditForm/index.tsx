import React, { useState } from 'react';
import styled from 'styled-components';

import { color } from 'config';
import locale from 'locale';
import { API } from 'types';
import { applyStyleIf } from 'utils';

import Button, { Wrapper as $Button } from 'components/common/Button';
import Image from 'components/common/Image';
import Textarea, { Wrapper as $Textarea } from 'components/common/Textarea';
import OutlinedPencil, {
  Wrapper as $OutlinedPencil,
} from 'components/common/svg/OutlinedPencil';
import EditInput, { Wrapper as $EditInput } from './EditInput';
import FormItem from './FormItem';

export const Wrapper = styled.div`
  padding: 32px 24px;
  width: 586px;

  background: white;

  & > p.subtitle-large {
    text-align: center;
    margin: 16px 0;
  }

  p,
  label {
    color: ${color.neutral10};
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 168px;
  background: #eff2f6;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  ${$OutlinedPencil} {
    position: absolute;
    top: 0px;
    right: 0px;
    cursor: pointer;
  }

  ${$Button}.dashed {
    margin-top: 8px;
    padding: 20px 0;
    border-radius: 16px;
  }
`;

const BorderLine = styled.div`
  height: 1px;
  background: ${color.neutral5};
`;

const MilestoneGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 8px;

  ${$EditInput} {
    margin-top: 16px;
  }
`;

const TextareaContainer = styled.div(
  ({ $editMode }: { $editMode: boolean }) => `
  ${$Textarea} {
    padding: 0;
    border-width: 0;
    border-radius: 0;
    background: transparent;
    color: ${color.neutral10};
  }

  ${applyStyleIf(
    $editMode,
    `
    background: ${color.neutral1};
    padding: 16px 20px;
    border-radius: 8px;
    border: 1px solid ${color.neutral4};
  `,
  )}
`,
);

const ButtonGroup = styled.div`
  align-self: end;
  display: flex;
  align-items: center;
  gap: 24px;

  ${$Button} {
    border-radius: 8px;
    padding: 8px 16px;
    border-width: 0;
  }
`;

type Milestone = {
  name: string;
  amount: string;
  dueDate: string;
};

export default (props: API.SellerProject) => {
  const [editMilestones, setEditMilestones] = useState(false);
  const [editDesc, setEditDesc] = useState(false);

  const [description, setDescription] = useState(props.description);
  const [newMilestone, setNewMilestone] = useState<Milestone>({
    name: '',
    amount: '',
    dueDate: '',
  });

  const handleNewMilestoneChange = <T extends keyof Milestone>(
    key: T,
    value: Milestone[T],
  ) => {
    const clone = { ...newMilestone };
    clone[key] = value;
    setNewMilestone(clone);
  };

  const handleCancelClick = () => {
    setEditMilestones(false);
    setEditDesc(false);

    setDescription(props.description);
  };

  return (
    <Wrapper>
      <ImageContainer>
        <Image />
      </ImageContainer>

      <p className="subtitle-large">{props.name}</p>

      <Container>
        <FormItem label={locale.seller.previewEditForm.label.type}>
          <p className="body-xs">{props.type}</p>
        </FormItem>

        <BorderLine />

        <FormItem label={locale.seller.previewEditForm.label.totalOffset}>
          <p className="body-xs">{1000}</p>
        </FormItem>

        <BorderLine />

        <FormItem label={locale.seller.previewEditForm.label.milestones}>
          <OutlinedPencil onClick={() => setEditMilestones(true)} />

          <MilestoneGroup>
            {props.milestones.map((m) => (
              <React.Fragment key={m.id}>
                <p className="body-xs">{m.name}</p>
                <p className="body-xs">{m.task}</p>
                <p className="body-xs">
                  {locale.seller.previewEditForm.dueDatePrefix} {m.dueDate}
                </p>
              </React.Fragment>
            ))}

            {editMilestones && (
              <>
                <EditInput
                  label={locale.seller.previewEditForm.milestones.label.name}
                  placeholder={
                    locale.seller.previewEditForm.milestones.placeholder.name
                  }
                  onChange={(e) => handleNewMilestoneChange('name', e.target.value)}
                />
                <EditInput
                  label={locale.seller.previewEditForm.milestones.label.amt}
                  placeholder={locale.seller.previewEditForm.milestones.placeholder.amt}
                  onChange={(e) => handleNewMilestoneChange('amount', e.target.value)}
                />
                <EditInput
                  label={locale.seller.previewEditForm.milestones.label.dueDate}
                  placeholder={
                    locale.seller.previewEditForm.milestones.placeholder.dueDate
                  }
                  onChange={(e) => handleNewMilestoneChange('dueDate', e.target.value)}
                />
              </>
            )}
          </MilestoneGroup>

          {editMilestones && (
            <Button dashed>{locale.seller.previewEditForm.milestones.addBtn}</Button>
          )}
        </FormItem>

        <BorderLine />

        <TextareaContainer $editMode={editDesc}>
          <FormItem label={locale.seller.previewEditForm.label.description}>
            {!editDesc && <OutlinedPencil onClick={() => setEditDesc(true)} />}

            <Textarea
              autoHeight
              className="body-xs"
              readOnly={!editDesc}
              resizeable={false}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </FormItem>
        </TextareaContainer>

        {(editDesc || editMilestones) && (
          <>
            <BorderLine />

            <ButtonGroup>
              <Button inverted onClick={handleCancelClick}>
                {locale.seller.previewEditForm.button.cancel}
              </Button>

              <Button classic>
                {locale.seller.previewEditForm.button.saveChanges}
              </Button>
            </ButtonGroup>
          </>
        )}
      </Container>
    </Wrapper>
  );
};

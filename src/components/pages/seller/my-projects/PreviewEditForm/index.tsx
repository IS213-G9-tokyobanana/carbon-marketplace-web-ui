import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { format } from 'date-fns';

import { color } from 'config';
import locale from 'locale';
import { API2 } from 'types';
import { applyStyleIf } from 'utils';
import api from 'api';
import { FormSchema, Milestone } from './types';
import useForm from 'hooks/common/useForm';

import Button, { Wrapper as $Button } from 'components/common/Button';
import Image from 'components/common/Image';
import Textarea, { Wrapper as $Textarea } from 'components/common/Textarea';
import OutlinedPencil, {
  Wrapper as $OutlinedPencil,
} from 'components/common/svg/OutlinedPencil';
import EditInput from './EditInput';
import FormItem from './FormItem';

export const Wrapper = styled.div`
  flex-shrink: 0;
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

  & > div:nth-of-type(-n + 3) {
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

export default ({ data }: { data?: API2.Project }) => {
  const [editMilestones, setEditMilestones] = useState(false);
  const [editDesc, setEditDesc] = useState(false);

  const [form, setForm] = useForm<FormSchema>({
    description: data ? data.description : '',
    milestones: [],
  });

  useEffect(() => {
    if (!data) return;

    setEditMilestones(false);
    setEditDesc(false);

    setForm({
      description: data.description,
      milestones: [],
    });
  }, [data]);

  const resetForm = () => {
    setForm({
      description: data ? data.description : '',
      milestones: [],
    });
  };

  const handleEditMilestoneClick = () => {
    if (editMilestones) {
      setEditMilestones(false);
    } else {
      setForm({
        milestones: [
          {
            name: '',
            amount: '',
            dueDate: null,
          },
        ],
      });

      setEditMilestones(true);
    }
  };

  const handleAddNewMilestone = () => {
    const milestone = {
      name: '',
      amount: '',
      dueDate: null,
    };

    const clone = [...form.milestones];
    clone.push(milestone);

    setForm({ milestones: clone });
  };

  const handleMilestoneChange = <T extends keyof Milestone>(
    index: number,
    key: T,
    value: Milestone[T],
  ) => {
    const clone = [...form.milestones];

    clone[index][key] = value;

    setForm({ milestones: clone });
  };

  const handleCancelClick = () => {
    setEditMilestones(false);
    setEditDesc(false);

    resetForm();
  };

  const handleSubmitClick = () => {
    if (!data) return;

    const dateNow = new Date();

    const milestones: API2.Milestone[] = form.milestones.map((m) => ({
      id: crypto.randomUUID(),
      created_at: dateNow.toISOString(),
      description: m.amount,
      due_date: m.dueDate!.toISOString(),
      name: m.name,
      offsets_available: 50,
      offsets_total: 50,
      project_id: crypto.randomUUID(),
      status: 'pending',
      type: 'Test',
      updated_at: dateNow.toISOString(),
    }));

    api.project.updateOne(data.id, form.description, milestones);

    setEditDesc(false);
  };

  return (
    <Wrapper>
      <ImageContainer>
        <Image />
      </ImageContainer>

      <p className="subtitle-large">{data?.name || ''}</p>

      <Container>
        <FormItem label={locale.seller.previewEditForm.label.type}>
          <p className="body-xs">
            {/* {data.type} */}
            Test
          </p>
        </FormItem>

        <BorderLine />

        <FormItem label={locale.seller.previewEditForm.label.totalOffset}>
          <p className="body-xs">{1000}</p>
        </FormItem>

        <BorderLine />

        <FormItem label={locale.seller.previewEditForm.label.milestones}>
          <OutlinedPencil onClick={handleEditMilestoneClick} />

          <MilestoneGroup>
            {data?.milestones &&
              data.milestones.map((m) => {
                const date = new Date(m.due_date);
                const formattedDate = format(date, 'yyyy-MM-dd');

                return (
                  <React.Fragment key={m.id}>
                    <p className="body-xs">{m.name}</p>
                    <p className="body-xs">{m.description}</p>
                    <p className="body-xs">
                      {locale.seller.previewEditForm.dueDatePrefix} {formattedDate}
                    </p>
                  </React.Fragment>
                );
              })}

            {editMilestones &&
              form.milestones.map((m, i) => (
                <React.Fragment key={i}>
                  <EditInput.Classic
                    label={locale.seller.previewEditForm.milestones.label.name}
                    placeholder={
                      locale.seller.previewEditForm.milestones.placeholder.name
                    }
                    value={m.name}
                    onChange={(e) => handleMilestoneChange(i, 'name', e.target.value)}
                  />

                  <EditInput.Classic
                    label={locale.seller.previewEditForm.milestones.label.amt}
                    placeholder={
                      locale.seller.previewEditForm.milestones.placeholder.amt
                    }
                    value={m.amount}
                    onChange={(e) => handleMilestoneChange(i, 'amount', e.target.value)}
                  />

                  <EditInput.DatePicker
                    label={locale.seller.previewEditForm.milestones.label.dueDate}
                    placeholder={
                      locale.seller.previewEditForm.milestones.placeholder.dueDate
                    }
                    value={m.dueDate}
                    onChange={(d) => handleMilestoneChange(i, 'dueDate', d)}
                  />
                </React.Fragment>
              ))}
          </MilestoneGroup>

          {editMilestones && (
            <Button dashed onClick={handleAddNewMilestone}>
              {locale.seller.previewEditForm.milestones.addBtn}
            </Button>
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
              value={form.description}
              onChange={(e) => setForm({ description: e.target.value })}
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

              <Button classic onClick={handleSubmitClick}>
                {locale.seller.previewEditForm.button.saveChanges}
              </Button>
            </ButtonGroup>
          </>
        )}
      </Container>
    </Wrapper>
  );
};

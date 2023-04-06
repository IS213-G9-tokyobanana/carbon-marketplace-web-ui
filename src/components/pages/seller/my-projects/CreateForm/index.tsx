import React from 'react';
import styled from 'styled-components';

import { color } from 'config';
import { FormSchema } from './types';
import { API2 } from 'types';
import locale from 'locale';
import api from 'api';
import useForm from 'hooks/common/useForm';

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

export default ({
  onCancel,
  onSubmit,
}: {
  onCancel: () => void;
  onSubmit: () => void;
}) => {
  const [form, setForm] = useForm<FormSchema>({
    title: '',
    type: '',
    description: '',
    milestones: [
      {
        name: '',
        amt: '',
        date: null,
      },
    ],
  });

  const submitForm = () => {
    const dateNow = new Date();
    const projectId = crypto.randomUUID();

    const project: API2.Project = {
      created_at: dateNow.toISOString(),
      description: form.description,
      id: projectId,
      milestones: form.milestones.map((m) => ({
        created_at: dateNow.toISOString(),
        description: m.name,
        due_date: !!m.date ? dateNow.toISOString() : m.date!.toISOString(),
        id: crypto.randomUUID(),
        name: m.name,
        offsets_available: 50,
        offsets_total: 50,
        project_id: projectId,
        status: 'pending',
        type: 'Temporal',
        updated_at: dateNow.toISOString(),
      })),
      name: form.title,
      owner_id: crypto.randomUUID(),
      rating: 100,
      status: 'pending',
      types: [form.type],
      updated_at: dateNow.toISOString(),
      category: 'community',
    };

    api.project.createOne(project);
    onSubmit();
  };

  return (
    <Wrapper>
      <ProjectDetail
        title={form.title}
        onTitleChange={(s) => setForm({ title: s })}
        type={form.type}
        onTypeChange={(s) => setForm({ type: s })}
      />

      <BorderLine />

      <Milestones
        milestones={form.milestones}
        onMilestonesChange={(m) => setForm({ milestones: m })}
      />

      <BorderLine />

      <Description
        value={form.description}
        onChange={(s) => setForm({ description: s })}
      />

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

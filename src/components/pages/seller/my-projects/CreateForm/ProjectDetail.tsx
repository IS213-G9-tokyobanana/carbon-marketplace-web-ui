import React from 'react';
import styled from 'styled-components';

import locale from 'locale';
import { color } from 'config';

import FormItem from './FormItem';
import Input from 'components/common/Input';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  gap: 20px;
`;

const FormItemGroup = styled.div`
  width: 1px;
  flex-grow: 1;

  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const CoverImage = styled.div`
  flex-shrink: 0;

  aspect-ratio: 1/1;
  height: 100%;
  width: auto;

  border: 1px dashed ${color.neutral8};
  border-radius: 16px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #004323;
`;

export default ({
  title,
  onTitleChange,
  type,
  onTypeChange,
}: {
  title: string;
  onTitleChange: (s: string) => void;
  type: string;
  onTypeChange: (s: string) => void;
}) => {
  return (
    <Wrapper>
      <h3 className="subtitle-small">
        {locale.seller.createForm.projectDetails.title}
      </h3>

      <Container>
        <FormItemGroup>
          <FormItem label={locale.seller.createForm.projectDetails.label.title}>
            <Input
              placeholder={locale.seller.createForm.projectDetails.placeholder.title}
              value={title}
              onChange={(e) => onTitleChange(e.target.value)}
            />
          </FormItem>

          <FormItem label={locale.seller.createForm.projectDetails.label.type}>
            <Input
              placeholder={locale.seller.createForm.projectDetails.placeholder.type}
              value={type}
              onChange={(e) => onTypeChange(e.target.value)}
            />
          </FormItem>

          <FormItem label={locale.seller.createForm.projectDetails.label.offset}>
            <Input
              placeholder={locale.seller.createForm.projectDetails.placeholder.offset}
            />
          </FormItem>
        </FormItemGroup>

        <CoverImage className="body-small">
          {locale.seller.createForm.projectDetails.addCoverPhoto}
        </CoverImage>
      </Container>
    </Wrapper>
  );
};

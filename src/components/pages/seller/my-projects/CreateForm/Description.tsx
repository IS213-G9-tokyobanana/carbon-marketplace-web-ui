import React from 'react';
import styled from 'styled-components';

import locale from 'locale';
import Textarea from 'components/common/Textarea';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  h3 {
    font-size: 14px;
    font-weight: 500;
    color: #111928;
  }
`;

export default ({
  value,
  onChange,
}: {
  value: string;
  onChange: (s: string) => void;
}) => (
  <Wrapper>
    <h3>{locale.seller.createForm.description.title}</h3>

    <Textarea
      placeholder={locale.seller.createForm.description.placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      rows={6}
    />
  </Wrapper>
);

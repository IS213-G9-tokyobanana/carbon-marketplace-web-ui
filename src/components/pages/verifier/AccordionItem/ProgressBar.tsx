import React from 'react';
import styled from 'styled-components';

import { color } from 'config';

const Wrapper = styled.div`
  position: relative;
  background: #eff2f6;

  width: 160px;
  height: 28px;
  border-radius: 8px;
  overflow: hidden;
`;

const Progress = styled.div(
  ({ $width }: { $width: number }) => `
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: ${$width}%;

  background: #CED7E4;
`,
);

const Text = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${color.neutral10};
`;

export default ({ progress, total }: { progress: number; total: number }) => {
  return (
    <Wrapper>
      <Progress $width={(progress / total) * 100} />

      <Text className="body-small">
        {progress} / {total}
      </Text>
    </Wrapper>
  );
};

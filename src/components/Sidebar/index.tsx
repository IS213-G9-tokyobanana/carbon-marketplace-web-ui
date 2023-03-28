import React, { useRef, useState } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import { applyStyleIf } from 'utils';
import { color } from 'config';
import { SidebarConfig } from 'types';

import ToggleButton from './ToggleButton';
import useAnimation from './useAnimation';

const Wrapper = styled.div`
  position: relative;
  padding: 22px 24px;

  background: white;

  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ItemGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Item = styled.div(
  ({ $active }: { $active: boolean }) => `
  padding: 8px 10px;
  border-radius: 8px;
  transition: 0.25s background;
  cursor: pointer;

  display: flex;
  align-items: center;

  &:hover {
    background: ${color.neutral1};
  }

  ${applyStyleIf(
    $active,
    `
    background: ${color.neutral1};
  `,
  )}
`,
);

const TitleContainer = styled.div`
  width: 150px;
  position: relative;
`;

const Title = styled.p`
  padding: 0 10px;
  position: absolute;
  left: 0;
  top: 0;
  transform: translateY(-50%);
  white-space: nowrap;
  color: ${color.neutral10};
`;

const Line = styled.div`
  height: 1px;
  width: 100%;
  background: #e5e7eb;
`;

export default ({ data }: { data: SidebarConfig }) => {
  const router = useRouter();

  const containers = useRef<HTMLDivElement[]>([]);
  const titles = useRef<HTMLParagraphElement[]>([]);

  const [expand, setExpand] = useState(true);

  useAnimation(expand, containers, titles);

  containers.current.length = 0;
  titles.current.length = 0;

  const handleItemClick = (url?: string) => {
    if (!url) return;
    if (url === router.asPath) return;

    router.push(url);
  };

  return (
    <Wrapper>
      {data.map((a, i) => (
        <ItemGroup key={i}>
          {a.map((v, j) => (
            <Item
              key={j}
              $active={router.asPath === v.url}
              onClick={() => handleItemClick(v.url)}
            >
              {v.icon}

              <TitleContainer ref={(d) => d && containers.current.push(d)}>
                <Title ref={(d) => d && titles.current.push(d)} className="body-small">
                  {v.title}
                </Title>
              </TitleContainer>
            </Item>
          ))}

          {i !== data.length - 1 && <Line key={i + 100} />}
        </ItemGroup>
      ))}

      <ToggleButton active={expand} onClick={() => setExpand(!expand)} />
    </Wrapper>
  );
};

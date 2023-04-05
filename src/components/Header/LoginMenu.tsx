import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import config, { color } from 'config';
import locale from 'locale';
import { API } from 'types';
import useCollapse from 'components/common/Dropdown/useCollapse';
import useUserStore from 'stores/useUserStore';

import Menu from 'components/common/Dropdown/components/Menu';
import UserCircle from 'components/common/svg/UserCircle';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 150px;

  & > p {
    padding: 4px 12px;
    font-family: var(--font-inter);
    font-size: 14px;
  }
`;

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 4px 12px;
  cursor: pointer;

  transition: 0.25s background;

  &:hover {
    background: ${color.neutral1};
  }
`;

export default ({
  expand,
  setExpand,
}: {
  expand: boolean;
  setExpand: (b: boolean) => void;
}) => {
  const router = useRouter();

  const login = async (_user: API.User, redirect: string) => {
    const response = await fetch('/api/sessions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ user: _user }),
    });

    if (response.ok) {
      return router.push(redirect);
    }
  };

  return (
    <Menu expand={expand} setExpand={setExpand}>
      <Container>
        <p>{locale.header.button.menu.title}</p>

        {config.header.loginMenu.map((m) => (
          <MenuItem key={m.title} onClick={() => login(m.user, m.redirect)}>
            <UserCircle />

            {m.title}
          </MenuItem>
        ))}
      </Container>
    </Menu>
  );
};

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import locale from 'locale';
import config, { color } from 'config';
import useButton from './useButton';

import Button from '../common/Button';
import TokyoBanana from '../common/svg/TokyoBanana';
import LoginMenu from './LoginMenu';
import UserCircle from 'components/common/svg/UserCircle';

export const Wrapper = styled.header`
  height: var(--header-height);
  background: #fff;
  border-bottom: 1px solid ${color.neutral2};

  position: sticky;
  top: 0;
  z-index: 100;

  padding: 10px var(--page-padding-h);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;

  h1 {
    font-size: 20px;
    color: ${config.color.neutral8};
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 48px;

  a {
    color: ${config.color.neutral10};
  }
`;

const ButtonContainer = styled.div`
  position: relative;

  button > svg {
    height: 16px;
  }
`;

export default () => {
  const router = useRouter();

  const { onClick, title, expandMenu, renderAvatar, setExpandMenu } = useButton();

  const goToHome = () => {
    router.push('/');
  };

  return (
    <Wrapper>
      <Logo onClick={goToHome}>
        <TokyoBanana />
        <h1>{locale.brand}</h1>
      </Logo>

      <Nav>
        {config.header.navs.map((v) => (
          <Link key={v.title} href={v.url}>
            {v.title}
          </Link>
        ))}

        <ButtonContainer>
          <Button classic onClick={onClick}>
            {renderAvatar && <UserCircle color="white" />}
            {title}
          </Button>

          <LoginMenu expand={expandMenu} setExpand={setExpandMenu} />
        </ButtonContainer>
      </Nav>
    </Wrapper>
  );
};

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import locale from 'locale';
import config, { color } from 'config';

import Button from './common/Button';
import TokyoBanana from './common/svg/TokyoBanana';

export const Wrapper = styled.header`
  height: var(--header-height);
  background: #fff;
  border-bottom: 1px solid ${color.neutral2};
`;

const Container = styled.div`
  max-width: var(--page-max-width);
  margin: 0 auto;
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
    color: ${config.color.neutral8}
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 48px;

  a { color: ${config.color.neutral10} }
`;

export default () => {
  const router = useRouter();

  const handleLogoClick = () => {
    router.push("/");
  }

  const handleButtonClick = () => {
    if (router.asPath === "/") {
      router.push("/onboard");
    }
  }

  return (
    <Wrapper>
      <Container>
        <Logo onClick={handleLogoClick}>
          <TokyoBanana />
          <h1>
            {locale.brand}
          </h1>
        </Logo>

        <Nav>
          {config.navs.map(v =>
            <Link key={v.title} href={v.url}>
              {v.title}
            </Link>
          )}

          <Button
            classic
            onClick={handleButtonClick}
          >
            {router.asPath === "/onboard" ?
              locale.header.button.login :
              locale.header.button.cta
            }
          </Button>
        </Nav>
      </Container>
    </Wrapper>
  );
}

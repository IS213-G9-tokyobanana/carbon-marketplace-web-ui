import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import locale from 'locale';
import useUserStore from 'stores/useUserStore';

export default () => {
  const user = useUserStore((state) => state.user);

  const router = useRouter();

  const [title, setTitle] = useState('');
  const [renderAvatar, setRenderAvatar] = useState(false);
  const [expandMenu, setExpandMenu] = useState(false);

  useEffect(() => {
    setRenderAvatar(!!user);

    switch (router.asPath) {
      case '/':
        setTitle(locale.header.button.cta);
        setRenderAvatar(false);
        break;
      case '/onboard':
        setTitle(locale.header.button.login);
        setRenderAvatar(false);
        break;
      case '/project-list':
        if (!user) {
          setTitle(locale.header.button.login);
          break;
        }
      default:
        switch (user) {
          case 'buyer':
            setTitle(locale.header.button.menu.buyer);
            break;
          case 'seller':
            setTitle(locale.header.button.menu.seller);
            break;
          case 'verifier':
            setTitle(locale.header.button.menu.verifier);
            break;
          default:
            setTitle(locale.header.button.dashboard);
        }
    }
  }, [user, router.asPath]);

  const onClick = (e: React.MouseEvent) => {
    switch (router.asPath) {
      case '/':
        router.push('/onboard');
        break;
      default:
        e.stopPropagation();
        setExpandMenu(!expandMenu);
    }
  };

  return { onClick, title, renderAvatar, expandMenu, setExpandMenu };
};

import { useRouter } from 'next/router';
import locale from 'locale';

export default () => {
  const router = useRouter();

  let handleClick = () => {};
  let title = '';

  switch (router.asPath) {
    case '/':
      title = locale.header.button.cta;
      handleClick = () => {
        router.push('/onboard');
      };
      break;
    case '/onboard':
      title = locale.header.button.login;
      break;
    default:
      title = locale.header.button.dashboard;
  }

  return { handleClick, title };
};

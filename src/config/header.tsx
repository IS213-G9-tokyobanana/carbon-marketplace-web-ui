import locale from 'locale';
import { LoginMenuItem, NavItem } from 'types';

const navs: NavItem[] = [
  {
    title: locale.header.navs.approach,
    url: 'https://google.com',
  },
  {
    title: locale.header.navs.projects,
    url: '/project-list',
  },
  {
    title: locale.header.navs.workWithUs,
    url: 'https://google.com',
  },
];

const loginMenu: LoginMenuItem[] = [
  {
    title: locale.header.button.menu.buyer,
    user: 'buyer',
    redirect: '/buyer',
  },
  {
    title: locale.header.button.menu.seller,
    user: 'seller',
    redirect: '/seller',
  },
  {
    title: locale.header.button.menu.verifier,
    user: 'verifier',
    redirect: '/verifier',
  },
];

export default {
  navs,
  loginMenu,
};

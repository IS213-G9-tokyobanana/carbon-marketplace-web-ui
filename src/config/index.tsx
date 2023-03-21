import locale from 'locale';
import landing from './landing';

import { NavItem } from 'types';

export const color = {
  neutral0: '#FFFFFF',
  neutral1: '#EFF2F6',
  neutral2: '#DEE5ED',
  neutral3: '#CED7E4',
  neutral7: '#8CA2C0',
  neutral8: '#7B95B7',
  neutral10: '#486284',
};

const navs: NavItem[] = [
  {
    title: locale.header.navs[0],
    url: 'https://google.com',
  },
  {
    title: locale.header.navs[1],
    url: 'https://google.com',
  },
  {
    title: locale.header.navs[2],
    url: 'https://google.com',
  },
];

export default {
  color,
  navs,

  landing,
};

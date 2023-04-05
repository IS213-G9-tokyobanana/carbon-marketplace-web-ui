/**
 * @prettier
 */
import locale from 'locale';
import landing from './landing';
import verifier from './verifier';
import header from './header';
import api from './api';

import { SidebarConfig, Viewport } from 'types';

import PieChart from 'components/common/svg/PieChart';
import Document from 'components/common/svg/Document';
import Cog from 'components/common/svg/Cog';

export const color = {
  neutral0: '#FFFFFF',
  neutral1: '#EFF2F6',
  neutral2: '#DEE5ED',
  neutral3: '#CED7E4',
  neutral4: '#BDCADB',
  neutral5: '#ADBDD2',
  neutral6: '#9cb0c9',
  neutral7: '#8CA2C0',
  neutral8: '#7B95B7',
  neutral9: '#6B88AE',
  neutral10: '#486284',
};

const viewport: Viewport = {
  sm: '456px',
  md: '768px',
  lg: '1200px',
  xl: '1900px',
};

const ironOptions = {
  cookieName: 'user_session',
  password: 'yPo4T7apfbdvctV1Bso1oAndQH9qwC94',
  // secure: true should be used in production (HTTPS) but can't be used in development (HTTP)
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production' ? true : false,
  },
};

const sidebar: {
  buyer: SidebarConfig;
  verifier: SidebarConfig;
  seller: SidebarConfig;
} = {
  buyer: [
    [
      {
        icon: <PieChart />,
        title: locale.sidebar.myStats,
        url: '/buyer/my-stats',
      },
      {
        icon: <Document />,
        title: locale.sidebar.impactReport,
        url: '/buyer/impact-report',
      },
    ],
    [
      {
        icon: <Cog />,
        title: locale.sidebar.settings,
      },
    ],
  ],
  verifier: [
    [
      {
        icon: <PieChart />,
        title: locale.sidebar.myTasks,
        url: '/verifier/my-tasks',
      },
      {
        icon: <Document />,
        title: locale.sidebar.notifications,
      },
    ],
    [
      {
        icon: <Cog />,
        title: 'Settings',
      },
    ],
  ],
  seller: [
    [
      {
        icon: <PieChart />,
        title: locale.sidebar.myProjects,
        url: '/seller/my-projects',
      },
      {
        icon: <Document />,
        title: locale.sidebar.impactReport,
      },
    ],
    [
      {
        icon: <Cog />,
        title: 'Settings',
      },
    ],
  ],
};

export default {
  color,
  viewport,
  ironOptions,

  api,
  header,
  sidebar,
  landing,
  verifier,
};

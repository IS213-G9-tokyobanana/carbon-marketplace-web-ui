/**
 * @prettier
 */
import landing from './landing';
import buyer from './buyer';
import projectList from './project-list';
import verifier from './verifier';
import seller from './seller';

export default {
  brand: 'TokyoBanana',
  tco2e: {
    token: 'tCO<sub>2</sub>e',
    denominator: '/ 10',
  },
  header: {
    navs: {
      approach: 'Our Approach',
      projects: 'Projects',
      workWithUs: 'Work with us',
    },
    button: {
      cta: 'Get started',
      login: 'Login',
      dashboard: 'Dashboard',
      menu: {
        title: 'Login as:',
        buyer: 'Buyer',
        seller: 'Seller',
        verifier: 'Verifier',
      },
    },
  },
  carbonFootprint: {
    carbonIndex: `Your carbon footprint {{ 1 }} tons of CO<sub>2</sub> per year`,
    comparison: `That's {{ 1 }} less than the Singapore average.`,
    source: 'source',
  },
  sidebar: {
    myStats: 'My Stats',
    impactReport: 'Impact Report',
    myTasks: 'My Tasks',
    notifications: 'Notifications',
    myProjects: 'My Projects',
    settings: 'Settings',
  },

  landing,
  buyer,
  projectList,
  verifier,
  seller,
};

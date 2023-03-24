import landing from './landing';
import buyer from './buyer';

export default {
  brand: 'TokyoBanana',
  tco2e: 'tCO<sub>2</sub>e',
  header: {
    navs: ['Our Approach', 'Projects', 'Work with us'],
    button: {
      cta: 'Get started',
      login: 'Login',
      dashboard: 'Dashboard',
    },
  },
  carbonFootprint: {
    carbonIndex: `Your carbon footprint {{ 1 }} tons of CO<sub>2</sub> per year`,
    comparison: `That's {{ 1 }} less than the Singapore average.`,
    source: 'source',
  },

  landing,
  buyer,
};

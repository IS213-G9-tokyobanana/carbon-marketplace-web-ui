import { API } from 'types';

import project from './project';
import { MeiliSearch } from 'meilisearch';

const client = new MeiliSearch({
  host: `${process.env.MEILI_URL}`,
  apiKey: 'MASTER_KEY',
});

async function getProjects(): Promise<any> {
  const projects = await client.index('projects').getDocuments({ limit: 20 });
  return projects;
}

function getQuestions(): API.Question[] {
  return [
    {
      id: 1,
      imgSrc: '',
      imgAlt: 'Country',
      question: `
        Start by calculating your footprint. What country 
        do you live in?
      `,
      description: `
        Entering your country helps us begin the calculation with a 
        baseline for every category
      `,
      answers: ['Singapore', 'Malaysia', 'Japan', 'Custom'],
    },
    {
      id: 2,
      imgSrc: '',
      imgAlt: 'Gas usage',
      question: 'How much natural gas do you use?',
      description: `
        Most bills for natural gas should include the amount you used
        that month. You can divide the total by the number of people
        who share that bill.
      `,
      answers: ['Little to None', 'Average', 'A Lot', 'Custom'],
    },
    {
      id: 3,
      imgSrc: '',
      imgAlt: 'Pet',
      question: 'Sample long title',
      description: `
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae, 
        soluta sunt ipsa recusandae porro fugit quae obcaecati? Pariatur, 
        nobis vitae.
      `,
      answers: ['Little to None', 'Average', 'Apple', 'Custom'],
    },
    {
      id: 4,
      imgSrc: '',
      imgAlt: 'Clothes',
      question: 'Sample long title',
      description: `
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae, 
        soluta sunt ipsa recusandae porro fugit quae obcaecati? Pariatur, 
        nobis vitae.
      `,
      answers: ['Little to None', 'Average', 'Orange', 'Custom'],
    },
    {
      id: 5,
      imgSrc: '',
      imgAlt: 'Apple',
      question: 'Sample long title (apple)',
      description: `
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae, 
        soluta sunt ipsa recusandae porro fugit quae obcaecati? Pariatur, 
        nobis vitae.
      `,
      answers: ['Little to None', 'Average', 'Sausage', 'Custom'],
    },
    {
      id: 6,
      imgSrc: '',
      imgAlt: 'Watermelon',
      question: 'Sample long title (apple)',
      description: `
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae, 
        soluta sunt ipsa recusandae porro fugit quae obcaecati? Pariatur, 
        nobis vitae.
      `,
      answers: ['Little to None', 'Average', 'Sausage', 'Yellow'],
    },
  ];
}

function getVerifiableProjects(): API.VerifiableProject[] {
  return [
    {
      id: '132-123-123-123',
      name: 'Some Project Title A',
      type: 'Some Project Type',
      milestones: [
        {
          id: '123-asd-123-asd',
          name: 'Some really long milestone name',
          expectedCO2: 10,
          currentCO2: 6,
          lastUpdated: '14 Mar 2023 18:01:01',
          status: 'verified',
          dueDate: '14 Mar 2023 18:01:01',
          task: 'Samplet task',
        },
        {
          id: '123-asd-123-as2',
          name: 'Some really long milestone name',
          expectedCO2: 10,
          currentCO2: 6,
          lastUpdated: '14 Mar 2023 18:01:01',
          status: 'verified',
          dueDate: '14 Mar 2023 18:01:01',
          task: 'Samplet task',
        },
        {
          id: '123-asd-123-as3',
          name: 'Milestone',
          expectedCO2: 10,
          currentCO2: 6,
          lastUpdated: '14 Mar 2023 18:01:01',
          status: 'inactive',
          dueDate: '14 Mar 2023 18:01:01',
          task: 'Samplet task',
        },
        {
          id: '123-asd-123-as4',
          name: 'Some milestone',
          expectedCO2: 10,
          currentCO2: 6,
          lastUpdated: '14 Mar 2023 18:01:01',
          status: 'in-progress',
          dueDate: '14 Mar 2023 18:01:01',
          task: 'Samplet task',
        },
      ],
      status: 'pending',
    },
    {
      id: '132-123-123-12d',
      name: 'Some Project Title A',
      type: 'Some Project Type',
      milestones: [
        {
          id: '123-asd-123-asd',
          name: 'Some really long milestone name',
          expectedCO2: 10,
          currentCO2: 6,
          lastUpdated: '14 Mar 2023 18:01:01',
          status: 'verified',
          dueDate: '14 Mar 2023 18:01:01',
          task: 'Samplet task',
        },
        {
          id: '123-asd-123-as2',
          name: 'Some really long milestone name',
          expectedCO2: 10,
          currentCO2: 6,
          lastUpdated: '14 Mar 2023 18:01:01',
          status: 'verified',
          dueDate: '14 Mar 2023 18:01:01',
          task: 'Samplet task',
        },
        {
          id: '123-asd-123-as3',
          name: 'Milestone',
          expectedCO2: 10,
          currentCO2: 6,
          lastUpdated: '14 Mar 2023 18:01:01',
          status: 'verified',
          dueDate: '14 Mar 2023 18:01:01',
          task: 'Samplet task',
        },
        {
          id: '123-asd-123-as4',
          name: 'Some milestone',
          expectedCO2: 10,
          currentCO2: 6,
          lastUpdated: '14 Mar 2023 18:01:01',
          status: 'verified',
          dueDate: '14 Mar 2023 18:01:01',
          task: 'Samplet task',
        },
      ],
      status: 'pending',
    },
  ];
}

function getSellerProjects(): API.SellerProject[] {
  return [
    {
      id: '1234-1234-1234-abcd',
      type: 'Community',
      name: 'Sample Project',
      description: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
      non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      `,
      milestones: [
        {
          id: '123-asd-123-asd',
          name: 'Some really long milestone name',
          expectedCO2: 10,
          currentCO2: 6,
          lastUpdated: '14 Mar 2023 18:01:01',
          status: 'verified',
          dueDate: '14 Mar 2023 18:01:01',
          task: 'Samplet task',
        },
        {
          id: '123-asd-123-as2',
          name: 'Some really long milestone name',
          expectedCO2: 10,
          currentCO2: 6,
          lastUpdated: '14 Mar 2023 18:01:01',
          status: 'verified',
          dueDate: '14 Mar 2023 18:01:01',
          task: 'Samplet task',
        },
        {
          id: '123-asd-123-as3',
          name: 'Milestone',
          expectedCO2: 10,
          currentCO2: 6,
          lastUpdated: '14 Mar 2023 18:01:01',
          status: 'verified',
          dueDate: '14 Mar 2023 18:01:01',
          task: 'Samplet task',
        },
        {
          id: '123-asd-123-as4',
          name: 'Some milestone',
          expectedCO2: 10,
          currentCO2: 6,
          lastUpdated: '14 Mar 2023 18:01:01',
          status: 'verified',
          dueDate: '14 Mar 2023 18:01:01',
          task: 'Samplet task',
        },
      ],
    },
    {
      id: '1234-1234-1234-abc3',
      type: 'Regional',
      name: 'Another project',
      description: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
      non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      `,
      milestones: [
        {
          id: '123-asd-123-a1d',
          name: 'Some really long milestone name',
          expectedCO2: 10,
          currentCO2: 6,
          lastUpdated: '14 Mar 2023 18:01:01',
          status: 'verified',
          dueDate: '14 Mar 2023 18:01:01',
          task: 'Samplet task',
        },
        {
          id: '123-asd-123-as2',
          name: 'Some really long milestone name',
          expectedCO2: 10,
          currentCO2: 6,
          lastUpdated: '14 Mar 2023 18:01:01',
          status: 'verified',
          dueDate: '14 Mar 2023 18:01:01',
          task: 'Samplet task',
        },
        {
          id: '123-asd-123-as3',
          name: 'Milestone',
          expectedCO2: 10,
          currentCO2: 6,
          lastUpdated: '14 Mar 2023 18:01:01',
          status: 'verified',
          dueDate: '14 Mar 2023 18:01:01',
          task: 'Samplet task',
        },
        {
          id: '123-asd-123-as4',
          name: 'Some milestone',
          expectedCO2: 10,
          currentCO2: 6,
          lastUpdated: '14 Mar 2023 18:01:01',
          status: 'verified',
          dueDate: '14 Mar 2023 18:01:01',
          task: 'Samplet task',
        },
      ],
    },
  ];
}

export default {
  getProjects,
  getQuestions,
  getVerifiableProjects,
  getSellerProjects,

  project,
};

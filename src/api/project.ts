import axios from 'axios';
import config from 'config';
import { API2 } from 'types';

function getAll(): { data: API2.Project[]; success: boolean } {
  // const response = await axios.get(`http://${config.api.baseUrl}:${config.api.port.project}/projects`);
  // return response.data;

  return {
    data: [
      {
        created_at: '2023-04-03T08:57:38Z',
        description: 'desc3',
        id: 'c01cd437-ae01-4a02-ac11-6656f4565b27',
        category: 'popular',
        milestones: [
          {
            created_at: '2023-04-03T08:57:38Z',
            description:
              '1 million tCO2e saved by year 6 after the launch of the windmill',
            due_date: '2029-03-21T09:24:14Z',
            id: '360b8200-ed48-4e21-9e1f-25c0fc9707d5',
            name: '1 million tCO2e saved by year 6',
            offsets_available: 50.0,
            offsets_total: 50.0,
            project_id: 'c01cd437-ae01-4a02-ac11-6656f4565b27',
            status: 'pending',
            type: 'Temporal',
            updated_at: '2023-04-03T08:57:38Z',
          },
          {
            created_at: '2023-04-03T08:57:38Z',
            description:
              'Generation of 180 GWh of clean electricity annually after the project has been implemented.',
            due_date: '2024-03-21T19:30:22Z',
            id: '276787be-c88a-4bad-ad51-bdbfbfd60ec5',
            name: 'Generation of 180 GWh of clean electricity annually',
            offsets_available: 50.0,
            offsets_total: 50.0,
            project_id: 'c01cd437-ae01-4a02-ac11-6656f4565b27',
            status: 'pending',
            type: 'Temporal',
            updated_at: '2023-04-03T08:57:38Z',
          },
          {
            created_at: '2023-04-03T08:57:38Z',
            description:
              '1.23 million tCO2e saved by year 7 after the launch of the windmill',
            due_date: '2030-03-21T21:30:23Z',
            id: '98355b3d-926d-4dc7-a719-843b9b1332ee',
            name: '1.23 million tCO2e saved by year 7',
            offsets_available: 50.0,
            offsets_total: 50.0,
            project_id: 'c01cd437-ae01-4a02-ac11-6656f4565b27',
            status: 'pending',
            type: 'Temporal',
            updated_at: '2023-04-03T08:57:38Z',
          },
          {
            created_at: '2023-04-03T08:57:38Z',
            description:
              '0.5 million tCO2e saved in 3 years after the launch of the windmill',
            due_date: '2026-03-21T09:30:00Z',
            id: 'e60b3ccd-ab34-43e9-b5cc-aa5745a8f3e9',
            name: '0.5 million tCO2e saved by year 3',
            offsets_available: 40.0,
            offsets_total: 50.0,
            project_id: 'c01cd437-ae01-4a02-ac11-6656f4565b27',
            status: 'pending',
            type: 'Temporal',
            updated_at: '2023-04-03T09:02:30Z',
          },
        ],
        name: '100.5MW Wind Power Project in Madhya Pradesh, India',
        owner_id: '3b08a327-42b2-4694-bbeb-f61ad526ec47',
        rating: 100.0,
        status: 'pending',
        types: ['carbon capture', 'local green initiative (small project)'],
        updated_at: '2023-04-03T08:57:38Z',
      },
      {
        created_at: '2023-04-03T10:32:14Z',
        description: 'desc3',
        id: 'bf5cd8ef-01ab-4e8c-b5d1-9cd66ffaba1a',
        category: 'regional projects',
        milestones: [
          {
            created_at: '2023-04-03T10:32:14Z',
            description:
              '0.5 million tCO2e saved in 3 years after the launch of the windmill',
            due_date: '2026-03-21T09:30:00Z',
            id: '16c0542b-d10e-4c76-b528-2a161a6ab717',
            name: '0.5 million tCO2e saved by year 3',
            offsets_available: 50.0,
            offsets_total: 50.0,
            project_id: 'bf5cd8ef-01ab-4e8c-b5d1-9cd66ffaba1a',
            status: 'pending',
            type: 'Temporal',
            updated_at: '2023-04-03T10:32:14Z',
          },
          {
            created_at: '2023-04-03T10:32:14Z',
            description:
              '1 million tCO2e saved by year 6 after the launch of the windmill',
            due_date: '2029-03-21T09:24:14Z',
            id: '91af5cf1-a95c-4f3f-aa80-754ca74cfca9',
            name: '1 million tCO2e saved by year 6',
            offsets_available: 50.0,
            offsets_total: 50.0,
            project_id: 'bf5cd8ef-01ab-4e8c-b5d1-9cd66ffaba1a',
            status: 'pending',
            type: 'Temporal',
            updated_at: '2023-04-03T10:32:14Z',
          },
          {
            created_at: '2023-04-03T10:32:14Z',
            description:
              'Generation of 180 GWh of clean electricity annually after the project has been implemented.',
            due_date: '2024-03-21T19:30:22Z',
            id: '43d47198-561c-4b0e-a502-0ad509fd9278',
            name: 'Generation of 180 GWh of clean electricity annually',
            offsets_available: 50.0,
            offsets_total: 50.0,
            project_id: 'bf5cd8ef-01ab-4e8c-b5d1-9cd66ffaba1a',
            status: 'pending',
            type: 'Temporal',
            updated_at: '2023-04-03T10:32:14Z',
          },
          {
            created_at: '2023-04-03T10:32:14Z',
            description:
              '1.23 million tCO2e saved by year 7 after the launch of the windmill',
            due_date: '2030-03-21T21:30:23Z',
            id: '7b65da58-1a2c-4822-9867-5082a5ef854f',
            name: '1.23 million tCO2e saved by year 7',
            offsets_available: 50.0,
            offsets_total: 50.0,
            project_id: 'bf5cd8ef-01ab-4e8c-b5d1-9cd66ffaba1a',
            status: 'pending',
            type: 'Temporal',
            updated_at: '2023-04-03T10:32:14Z',
          },
        ],
        name: '100.5MW Wind Power Project in Madhya Pradesh, India',
        owner_id: '3b08a327-42b2-4694-bbeb-f61ad526ec47',
        rating: 100.0,
        status: 'pending',
        types: ['carbon capture', 'local green initiative (small project)'],
        updated_at: '2023-04-03T10:32:14Z',
      },
      {
        created_at: '2023-04-03T08:57:38Z',
        description: 'desc3',
        id: 'c01cd437-ae01-4a02-ac11-6656f4565b27',
        category: 'community projects',
        milestones: [
          {
            created_at: '2023-04-03T08:57:38Z',
            description:
              '1 million tCO2e saved by year 6 after the launch of the windmill',
            due_date: '2029-03-21T09:24:14Z',
            id: '360b8200-ed48-4e21-9e1f-25c0fc9707d5',
            name: '1 million tCO2e saved by year 6',
            offsets_available: 50.0,
            offsets_total: 50.0,
            project_id: 'c01cd437-ae01-4a02-ac11-6656f4565b27',
            status: 'pending',
            type: 'Temporal',
            updated_at: '2023-04-03T08:57:38Z',
          },
          {
            created_at: '2023-04-03T08:57:38Z',
            description:
              'Generation of 180 GWh of clean electricity annually after the project has been implemented.',
            due_date: '2024-03-21T19:30:22Z',
            id: '276787be-c88a-4bad-ad51-bdbfbfd60ec5',
            name: 'Generation of 180 GWh of clean electricity annually',
            offsets_available: 50.0,
            offsets_total: 50.0,
            project_id: 'c01cd437-ae01-4a02-ac11-6656f4565b27',
            status: 'pending',
            type: 'Temporal',
            updated_at: '2023-04-03T08:57:38Z',
          },
          {
            created_at: '2023-04-03T08:57:38Z',
            description:
              '1.23 million tCO2e saved by year 7 after the launch of the windmill',
            due_date: '2030-03-21T21:30:23Z',
            id: '98355b3d-926d-4dc7-a719-843b9b1332ee',
            name: '1.23 million tCO2e saved by year 7',
            offsets_available: 50.0,
            offsets_total: 50.0,
            project_id: 'c01cd437-ae01-4a02-ac11-6656f4565b27',
            status: 'pending',
            type: 'Temporal',
            updated_at: '2023-04-03T08:57:38Z',
          },
          {
            created_at: '2023-04-03T08:57:38Z',
            description:
              '0.5 million tCO2e saved in 3 years after the launch of the windmill',
            due_date: '2026-03-21T09:30:00Z',
            id: 'e60b3ccd-ab34-43e9-b5cc-aa5745a8f3e9',
            name: '0.5 million tCO2e saved by year 3',
            offsets_available: 40.0,
            offsets_total: 50.0,
            project_id: 'c01cd437-ae01-4a02-ac11-6656f4565b27',
            status: 'pending',
            type: 'Temporal',
            updated_at: '2023-04-03T09:02:30Z',
          },
        ],
        name: '100.5MW Wind Power Project in Madhya Pradesh, India',
        owner_id: '3b08a327-42b2-4694-bbeb-f61ad526ec47',
        rating: 100.0,
        status: 'pending',
        types: ['carbon capture', 'local green initiative (small project)'],
        updated_at: '2023-04-03T08:57:38Z',
      },
    ],
    success: true,
  };
}

export default {
  getAll,
};

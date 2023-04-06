import { API2 } from 'types';

export default {
  project: {
    editableStatus: ['pending'] satisfies API2.Status[],
    editOptions: ['verified', 'rejected'] satisfies API2.Status[],
  },
  milestones: {
    editableStatus: ['pending'] satisfies API2.Status[],
    editOptions: ['met', 'rejected'] satisfies API2.Status[],
  },
};

import { API } from 'types';

export default {
  editableStatus: ['in-progress', 'inactive'] satisfies API.Status[],
  editStatusOptions: ['rejected', 'verified'] satisfies API.Status[],
};

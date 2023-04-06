import axios from 'axios';
import config from 'config';
import useMockProjectStore from 'stores/useMockProjectStore';
import { API2, MsgType } from 'types';

function getAll(): API2.Project[] {
  // const response = await axios.get(`http://${config.api.baseUrl}:${config.api.port.project}/projects`);
  // return response.data;

  const projects = useMockProjectStore.getState().projects;
  return projects;
}

function createOne(data: API2.Project) {
  const { projects, setProjects } = useMockProjectStore.getState();

  const clone = JSON.parse(JSON.stringify(projects));
  clone.push(data);
  setProjects(clone);
}

function updateOne(
  projectId: string,
  description: string,
  newMilestone?: API2.Milestone[],
) {
  const { projects, setProjects } = useMockProjectStore.getState();
  const clone: API2.Project[] = JSON.parse(JSON.stringify(projects));

  const project = clone.find((m) => m.id === projectId);
  if (!project) return;

  project.description = description;
  newMilestone && project.milestones.push(...newMilestone);

  setProjects(clone);
}

function updateProjectStatus(projectId: string, status: API2.Status) {
  const { projects, setProjects } = useMockProjectStore.getState();
  const clone: API2.Project[] = JSON.parse(JSON.stringify(projects));

  const project = clone.find((m) => m.id === projectId);
  if (!project) return;

  project.status = status;

  setProjects(clone);

  console.log('update project status', projectId, status, config.api.baseUrl);

  axios
    .patch(`${config.api.baseUrl}/projects/${projectId}/status`, {
      status: status,
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
}

function updateMilestoneStatus(
  projectId: string,
  milestoneId: string,
  status: API2.Status,
) {
  const { projects, setProjects } = useMockProjectStore.getState();
  const clone: API2.Project[] = JSON.parse(JSON.stringify(projects));

  const project = clone.find((m) => m.id === projectId);
  if (!project) return;

  const milestone = project.milestones.find((m) => m.id === milestoneId);
  if (!milestone) return;

  milestone.status = status;

  setProjects(clone);

  axios
    .patch(
      `${config.api.baseUrl}/projects/${projectId}/milestones/${milestoneId}/status`,
      {
        status: status,
      },
    )
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });

  let msgType;
  switch (status) {
    case 'rejected':
      msgType = MsgType.MILESTONE_PENALISE;
      break;
  }

  axios
    .post('/api/amqp', {
      resourceId: projectId,
      msgType: msgType,
      msgData: {
        project_id: projectId,
        milestone_id: milestoneId,
      },
    })
    .then((response) => console.log(response.data))
    .catch((error) => console.error(error));
}

export default {
  getAll,
  createOne,
  updateOne,
  updateProjectStatus,
  updateMilestoneStatus,
};

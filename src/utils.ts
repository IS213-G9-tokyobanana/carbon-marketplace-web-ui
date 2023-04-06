import { withIronSessionSsr } from 'iron-session/next';
import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next';

import config from 'config';
import { API2 } from 'types';

export function applyStyleIf(predicate: boolean, style: string) {
  if (predicate) return style;
  return '';
}

export function clamp(value: number, min: number, max: number) {
  if (value < min) return min;
  if (value > max) return max;
  return value;
}

export function withSessionSsr<P extends { [key: string]: unknown }>(
  handler: (
    context: GetServerSidePropsContext,
  ) => GetServerSidePropsResult<P> | Promise<GetServerSidePropsResult<P>>,
) {
  return withIronSessionSsr(handler, config.ironOptions);
}

export function getProjectProgress(project: API2.Project) {
  return project.milestones.reduce((prev, current) => {
    if (current.status === 'met') return prev + 1;
    else return prev;
  }, 0);
}

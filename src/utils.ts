import { withIronSessionSsr } from 'iron-session/next';
import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next';

import config from 'config';

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

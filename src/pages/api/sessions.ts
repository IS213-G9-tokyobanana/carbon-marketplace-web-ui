import { withIronSessionApiRoute } from 'iron-session/next';
import { NextApiRequest, NextApiResponse } from 'next';

import config from 'config';
import { API } from 'types';

declare module 'iron-session' {
  interface IronSessionData {
    user?: API.User;
  }
}

export default withIronSessionApiRoute(createSessionRoute, config.ironOptions);

async function createSessionRoute(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    req.session.user = req.body.user;

    await req.session.save();
    res.send({ ok: true });
  }
}

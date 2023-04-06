// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import type { Stripe } from 'stripe';
import getRawBody from 'raw-body';

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

type Data = {
  resource?: any;
  message?: string;
};

type Resp = {
  success: boolean;
  data: Data;
};

enum StripeWebhooks {
  Completed = 'checkout.session.completed',
  Expired = 'checkout.session.expired',
}

const respondOk = (res: NextApiResponse<Resp>) => {
  return res.status(200).json({ success: true, data: { message: 'received' } });
};

const internalServerErrorException = (res: NextApiResponse<Resp>) => {
  return res.status(500).json({
    success: false,
    data: { message: 'Internal Server Error' },
  });
};

const sendStatus = async (sessionId: string, amount: number, status: string) => {
  console.log('session id', sessionId);
  console.log('amount_subtotal', amount);
  console.log('status', status);

  // post request to backend
  const response = await fetch(`${process.env.BACKEND_BASE_URL}/buy/webhook`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      payment_id: sessionId,
      status: status,
    }),
  });

  if (response.status === 200) {
    console.log('send success');
  }

  return response;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Resp>) {
  if (req.method === 'POST') {
    try {
      const rawBody = getRawBody(req);
      const signature = req.headers['stripe-signature'];

      let event;
      try {
        event = stripe.webhooks.constructEvent(
          rawBody,
          signature,
          process.env.STRIPE_WEBHOOK_SECRET,
        );
      } catch (err: any) {
        return res
          .status(400)
          .send({ success: false, data: { message: `Webhook Error: ${err.message}` } });
      }

      switch (event.type) {
        case StripeWebhooks.Completed: {
          const session = event.data.object as Stripe.Checkout.Session;
          await sendStatus(session.id, session.amount_subtotal!, session.status!);
          break;
        }
        case StripeWebhooks.Expired: {
          const session = event.data.object as Stripe.Checkout.Session;
          await sendStatus(session.id, session.amount_subtotal!, session.status!);
          break;
        }
      }

      return respondOk(res);
    } catch (e) {
      console.error(e);
      return internalServerErrorException(res);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}

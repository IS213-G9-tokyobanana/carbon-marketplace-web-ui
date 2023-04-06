// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

type Data = {
  name: string;
};

type BackendApiData = {
  payment_id: string;
  project_id: string;
  milestone_id: string;
  quantity_tco2e: number;
  owner_id: string;
  buyer_id: string;
};

const sendCheckout = async (data: BackendApiData) => {
  console.log('data', data);
  const response = await fetch(`${process.env.BACKEND_BASE_URL}/buy/checkout`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  if (response.status === 200) {
    console.log('send success');
  }
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method === 'POST') {
    try {
      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            price: 'price_1MtAFxGehkGRMk67oC6t1vpX',
            quantity: req.body.quantity,
          },
        ],
        mode: 'payment',
        success_url: `${req.headers.origin}/stripe/success`,
        cancel_url: `${req.headers.origin}/stripe/failed`,
      });
      res.redirect(303, session.url);

      await sendCheckout({
        payment_id: session.id,
        project_id: req.body.project_id,
        milestone_id: req.body.milestone_id,
        quantity_tco2e: req.body.quantity,
        owner_id: req.body.owner_id,
        buyer_id: req.body.buyer_id,
      });
    } catch (err: any) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}

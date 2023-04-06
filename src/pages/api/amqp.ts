import amqp from 'amqplib';
import type { NextApiRequest, NextApiResponse } from 'next';
import { MsgType } from 'types';

type Data = {
  resource?: any;
  message?: string;
};

type Resp = {
  success: boolean;
  data: Data;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Resp>) {
  try {
    const TASK_EXECUTE_BINDING_KEY = 'events.ui.police.task.execute';

    // Connect to the AMQP server
    const connection = await amqp.connect(process.env.AMQP_URL!);
    const channel = await connection.createChannel();

    // Publish the message to the exchange
    const exchangeName = 'topic_exchange';
    const { resourceId, msgType, msgData } = req.body;
    const message = {
      resource_id: resourceId,
      type: msgType as MsgType,
      data: msgData,
    };
    channel.publish(
      exchangeName,
      TASK_EXECUTE_BINDING_KEY,
      Buffer.from(JSON.stringify(message)),
    );

    // Close the channel and connection
    await channel.close();
    await connection.close();

    res
      .status(200)
      .json({ success: true, data: { message: 'Message sent to AMQP exchange' } });
  } catch (err) {
    console.error('Error sending message to AMQP exchange:', err);
    res.status(500).json({ success: true, data: { message: 'Internal server error' } });
  }
}

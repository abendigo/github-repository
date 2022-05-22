import type { RequestHandler } from '@sveltejs/kit';
import { createHmac } from 'crypto';

export const post: RequestHandler = async ({ params, request }) => {
  const secret = 'Mama Said Knock You Out';

  const hmac = createHmac('sha256', secret);

  // const arrayBuffer = await request.arrayBuffer();
  const text = await request.text();
  // const data = await request.json();
  const headers = request.headers;

  const digest = `sha256=${hmac.update(text).digest('hex')}`;

  const event = headers.get('x-github-event');
  const signature = headers.get('x-hub-signature-256');

  console.log({ /* data, headers, */ params });
  console.log({ event, signature, digest });

  return { status: 200 };
};

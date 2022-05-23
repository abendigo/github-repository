import type { RequestHandler } from '@sveltejs/kit';
import { createHmac } from 'crypto';

import child_process from 'child_process';

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

  // const owner = 'abendigo';
  // const name = 'github-repository.git';
  const { owner, repository } = params;
  const branch = process.env.GITHUB_BRANCH ?? 'main';
  const fullName = `${owner}/${repository}`;

  // see https://stackoverflow.com/questions/9589814/how-do-i-force-git-pull-to-overwrite-everything-on-every-pull
  // git fetch origin master
  // git reset --hard FETCH_HEAD
  // git clean -df
  console.log(child_process.execSync(`pwd`).toString());
  console.log(
    child_process
      .execSync(
        `cd repos/${fullName} && git fetch origin ${branch} && git reset --hard FETCH_HEAD && git clean -df`
      )
      .toString()
  );

  return { status: 200 };
};

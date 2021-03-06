# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm init svelte

# create a new project in my-app
npm init svelte my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

## Docker

    docker run --rm -v repos:/usr/src/service/repos:rw -v $(pwd):/usr/src/service -w /usr/src/service node:16 npm run dev

    docker run --rm -it -v repos:/repos:rw node:16 bash

## Uses

https://github.com/Eficode/wait-for

# Inspiration

https://betterprogramming.pub/github-webhooks-docker-and-python-for-automatic-app-deployments-a7f18d23d5b7

https://hub.docker.com/r/chrimaho/update-from-git

https://github.com/chrimaho/update-from-git

https://cheatcode.co/tutorials/how-to-clone-and-sync-a-github-repo-via-node-js

## Testing...

More changes

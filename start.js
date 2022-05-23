import child_process from 'child_process';
import fs from 'fs';

const {
  REPOSITORY: repository,
  BRANCH: branch = 'main',
  DISABLE_SERVICE: disable = false
} = process.env;

if (repository) {
  const url = new URL(repository);
  const [, owner, name] = url.pathname.split('/');

  const fullName = `${owner}/${name}`;
  const exists = fs.existsSync(`repos/${fullName}`);

  if (!exists) {
    console.log(
      child_process
        .execSync(`git clone --branch ${branch} --single-branch ${repository} repos/${fullName}`)
        .toString()
    );
  } else {
    console.log(
      child_process
        .execSync(
          `cd repos/${fullName} && git fetch origin ${branch} && git reset --hard FETCH_HEAD && git clean -df`
        )
        .toString()
    );
  }
}

if (!disable) {
  const { host, path, port /*, server */ } = await import('./build/index.js');
  console.log({ host, path, port });
}

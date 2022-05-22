import child_process from 'child_process';
import fs from 'fs';

// https://github.com/abendigo/portainer-compose.git
// const username = 'abendigo';
// const repo = 'use-beckylib'; // 'portainer-compose';
// const repo = 'portainer-compose';

// console.log('===========================================');
// console.log(process.env);
// console.log('===========================================');

const { REPOSITORY: repository } = process.env;

// console.log({ repository });

const url = new URL(repository);
// console.log({ url });

const [, owner, name] = url.pathname.split('/');
// console.log({ owner, name });

// const repoPath = `${username}/${repo}`;
const repoPath = `${owner}/${name}`;
const exists = fs.existsSync(`repos/${repoPath}`);

// console.log('PWD:', child_process.execSync(`pwd`).toString());
// console.log('ID:', child_process.execSync(`id`).toString());

if (!exists) {
  console.log(
    child_process
      .execSync(
        // `git clone https://github.com/${username}/${repo}.git repos/${username}/${repo}`
        `git clone ${repository} repos/${repoPath}`
        // `cd repos && git clone https://github.com/${username}/${repo}.git`
        // `ls -l`
      )
      .toString()
  );
}
// see https://stackoverflow.com/questions/9589814/how-do-i-force-git-pull-to-overwrite-everything-on-every-pull
// git fetch origin master
// git reset --hard FETCH_HEAD
// git clean -df

// app.get('/repos/clone/:username/:repo', (req, res) => {
// export default (repoExists = false, username = '', repo = '', branch = 'master') => {
//   if (!repoExists) {
//     child_process.execSync(`git clone https://${username}:${process.env.PERSONAL_ACCESS_TOKEN}@github.com/${username}/${repo}.git repos/${username}/${repo}`);
//   } else {
//     child_process.execSync(`cd repos/${username}/${repo} && git pull origin ${branch} --rebase`);
//   }
// }

const { host, path, port /*, server */ } = await import('./build/index.js');
console.log({ host, path, port });

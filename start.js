console.log('sleeping...');
await new Promise((r) => setTimeout(r, 10_000));

// import child_process from 'child_process';
// import fs from 'fs';
// const repoExists = fs.existsSync(`repos/${repoPath}`);
// export default (repoExists = false, username = '', repo = '', branch = 'master') => {
//   if (!repoExists) {
//     child_process.execSync(`git clone https://${username}:${process.env.PERSONAL_ACCESS_TOKEN}@github.com/${username}/${repo}.git repos/${username}/${repo}`);
//   } else {
//     child_process.execSync(`cd repos/${username}/${repo} && git pull origin ${branch} --rebase`);
//   }
// }

console.log('awake');

const { host, path, port /*, server */ } = await import('./build/index.js');
console.log({ host, path, port });

import child_process from 'child_process';
import fs from 'fs';

// console.log('sleeping...');
// await new Promise((r) => setTimeout(r, 2_000));

// https://github.com/abendigo/portainer-compose.git
const username = 'abendigo';
const repo = 'use-beckylib'; // 'portainer-compose';

const repoPath = `${username}/${repo}`;
const exists = fs.existsSync(`repos/${repoPath}`);

if (!exists) {
	child_process.execSync(
		`git clone https://github.com/${username}/${repo}.git repos/${username}/${repo}`
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

console.log('awake');

const { host, path, port /*, server */ } = await import('./build/index.js');
console.log({ host, path, port });

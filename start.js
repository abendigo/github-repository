import child_process from 'child_process';
import fs from 'fs';

const { REPOSITORY: repository, DISABLE_SERVICE: disable } = process.env;

if (repository) {
  const url = new URL(repository);
  const [, owner, name] = url.pathname.split('/');

  const fullName = `${owner}/${name}`;
  const exists = fs.existsSync(`repos/${fullName}`);

  // if (mkdir) {
  //   // const exists = fs.existsSync(`repos/${mkdir}`);
  //   // if (!exists) {
  //   console.log(child_process.execSync(`mkdir -p repos/${mkdir}`).toString());
  //   // }
  // }

  if (!exists) {
    console.log(
      child_process
        .execSync(
          // `git clone https://github.com/${username}/${repo}.git repos/${username}/${repo}`
          `git clone ${repository} repos/${fullName}`
        )
        .toString()
    );
  }
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

if (!disable) {
  const { host, path, port /*, server */ } = await import('./build/index.js');
  console.log({ host, path, port });
}

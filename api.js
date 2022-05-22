// https://docs.github.com/en/rest/webhooks/repos

const { GITHUB_PERSONAL_ACCESS_TOKEN: token } = process.env;

const response = await fetch('https://api.github.com/repos/abendigo/github-repository/hooks', {
  headers: {
    Accept: 'application/vnd.github.v3+json',
    Authorization: `token ${token}`
  }
});

const data = await response.json();

console.log(data);

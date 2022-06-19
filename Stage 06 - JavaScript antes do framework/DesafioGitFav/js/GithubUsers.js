export class GithubUsers {
  static search(username) {
    const url = `https://api.github.com/users/${username}`

    return fetch(url)
      .then(data => data.json())
      .then(({
        login,
        name,
        public_repos,
        followers
      }) => ({
        login,
        name,
        public_repos,
        followers
      }))
  }
}
import querystring from 'querystring'

async function getVariables() {
  const { username } = querystring.parse(window.location.search.replace("?", ""))
  if (!username) {
    return { error: "Please pass a GitHub username in the query string, like '?username=your-username'" }
  }
  const user = await (await fetch(`https://api.github.com/users/${username}`)).json()
  const repos = await (await fetch(`https://api.github.com/users/${username}/repos`)).json()
  console.log(repos)
  return { user, repos }
}

export default getVariables

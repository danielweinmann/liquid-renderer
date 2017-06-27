import querystring from 'querystring'

function getCurrentRoute() {
  const { p } = querystring.parse(window.location.search.replace("?", ""))
  if (p) {
    window.history.replaceState(null, null, p)
  }
  const { pathname } = window.location
  const path = (p ? p : pathname)
  const [, username, repo] = path.split('/')
  const filename = ( repo ? "repo" : (username ? "user" : "users") )
  return { filename, username, repo }
}

export default getCurrentRoute

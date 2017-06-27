async function getVariables() {
  const users = await (await fetch(`https://api.github.com/users`)).json()
  return { users }
}

export default getVariables

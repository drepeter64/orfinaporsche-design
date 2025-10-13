export const getHomePageData = async () => {
  const [todosRes, postsRes] = await Promise.all([
    fetch("https://jsonplaceholder.typicode.com/todos/1"),
    fetch("https://jsonplaceholder.typicode.com/posts/1"),
  ])

  return {
    todo: await todosRes.json(),
    post: await postsRes.json(),
  }
}

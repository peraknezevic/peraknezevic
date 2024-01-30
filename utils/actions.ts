export const fetchProjects = async () => {
  const res = await fetch("../assets/data.json")
  const data = await res.json()
  return data
}

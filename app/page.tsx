// import { getProjects } from "@/utils/actions"
import { getLocalData } from "@/utils/actions"
import { Project } from "./types"

const Home = async () => {
  const { projects } = await getLocalData()
  return (
    <>
      {projects.map((project: Project) => {
        return <div key={project.id}>{project.title}</div>
      })}
    </>
  )
}

export default Home

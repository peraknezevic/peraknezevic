// import { getProjects } from "@/utils/actions"
import { getLocalData } from "@/utils/actions"
import { Project } from "./types"
import Card from "@/components/Card"

const Home = async () => {
  const { projects } = await getLocalData()
  return (
    <div className="flex gap-16 flex-wrap mx-auto justify-center w-[80vw] max-w-screen-lg">
      {projects.map((project: Project) => {
        return <Card project={project} key={project.id} />
      })}
    </div>
  )
}

export default Home

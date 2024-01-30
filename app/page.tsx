// import { getProjects } from "@/utils/actions"
import { getLocalData } from "@/utils/actions"
import { Project } from "./types"
import Card from "@/components/Card"

const Home = async () => {
  const { projects } = await getLocalData()
  return (
    <div className="flex gap-12 flex-wrap mx-auto max-w-[1000px]">
      {projects.map((project: Project) => {
        return <Card project={project} key={project.id} />
      })}
    </div>
  )
}

export default Home

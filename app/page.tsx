// import { getProjects } from "@/utils/actions"
import { getLocalData } from "@/utils/actions"
import { Project } from "./types"
import Card from "@/components/Card"

const Home = async () => {
  const projects = await getLocalData("projects")
  return (
    <main className="bg-slate-100 py-32 overflow-scroll w-full justify-center">
      <h2>Recent Projects</h2>
      <div className="max-w-screen-xl flex flex-wrap gap-32 mx-auto">
        {projects.map((project: Project, i: number) => {
          if (i < 3) return <Card project={project} key={project.id} />
        })}
      </div>
    </main>
  )
}

export default Home

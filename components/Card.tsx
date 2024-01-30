import { Project } from "@/app/types"

const Card = ({ project }: { project: Project }) => {
  return <div>{project.title}</div>
}
export default Card

import { Project } from "@/app/types"
import CldImage from "./CldImage"

const Card = ({ project }: { project: Project }) => {
  return (
    <div className="w-80 h-full border-red-900 text-red-900 border-2 rounded-md shadow-[8px_8px_0px_rgba(127,29,29,1)] bg-white">
      <a href="" className="block cursor-pointer">
        <article className="w-full h-full">
          <figure className="w-full h-1/2 border-red-900 border-b-2">
            <CldImage
              src={project.image}
              alt="thumbnail"
              width="1000"
              height="1000"
              className="w-full h-full object-cover"
            />
          </figure>
          <div className="px-6 py-5 text-left h-full">
            <h1 className="text-2xl mb-4">{project.title}</h1>
            <p className="text-sm mb-4 uppercase">{project.type}</p>
            <p className="text-sm mb-4 line-clamp-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span
                  key={item}
                  className=" text-white tracking-wider text-xs font-bold py-1 px-2 bg-red-900 hover:bg-red-800 active:bg-red-700 uppercase rounded-md"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </article>
      </a>
    </div>
  )
}
export default Card

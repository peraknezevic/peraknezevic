import { Project } from "@/app/types"
import CldImage from "./CldImage"

const Card = ({ project }: { project: Project }) => {
  return (
    <div>
      <article className="w-full flex px-16 gap-16">
        <div className="px-6 py-5 text-left w-1/2 h-full">
          <h1 className="text-2xl mb-4">{project.title}</h1>
          <p className="text-sm mb-4 uppercase">{project.type}</p>
          <p className="text-sm mb-4 line-clamp-4">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <span
                key={item}
                className=" text-black tracking-wider text-xs font-bold py-1 px-2 bg-white uppercase rounded-md"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
        <figure className="w-1/2 h-full border-black border-4 rounded-xl overflow-hidden drop-shadow-2xl hover:scale-125 transition duration-500 cursor-pointer">
          <CldImage
            src={project.image}
            alt={project.title}
            width="1000"
            height="1000"
          />
        </figure>
      </article>
    </div>
  )
}
export default Card

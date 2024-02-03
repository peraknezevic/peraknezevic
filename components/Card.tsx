import CldImage from "./CldImage"
import { FiArrowRight } from "react-icons/fi"
import { Website } from "@/app/types"

const Card = ({ website }: { website: Website }) => {
  return (
    <article className="w-full flex flex-col xl:flex-row gap-8 xl:gap-24 py-24 border-b-2 border-black dark:border-slate-100 justify-between items-center">
      <div className="flex flex-col gap-4 xl:w-1/2 pl-4">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100">
          {website.title}
        </h1>
        <p>{website.description}</p>
        <p>Status: {website.status}</p>
        <p className="mt-4">
          <span>Tech used:</span>
        </p>
        <div className="flex flex-wrap gap-2 py-1">
          {website.stack.map((item) => (
            <span
              key={item.url}
              className="px-2 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg inline"
            >
              <a href={item.url}>{item.title}</a>
            </span>
          ))}
        </div>

        <p className="mt-8">
          {website.url && (
            <a
              href={website.url}
              className="border-b border-slate-950 dark:border-pink-500 pb-2 inline-block hover:border-b-2 hover:font-bold transition-all mr-8 mb-8"
              title={`Visit ${website.title} website`}
            >
              Visit the website <FiArrowRight className="inline" />
            </a>
          )}
          {website.github && (
            <a
              href={website.github}
              className="border-b border-slate-950 dark:border-pink-500 pb-2 inline-block hover:border-b-2 hover:font-bold transition-all"
              title={`Visit ${website.title} Github Project page`}
            >
              Github Repo <FiArrowRight className="inline" />
            </a>
          )}
        </p>
      </div>
      <figure className="xl:w-1/2 h-full border-slate-950 dark:border-slate-100 border-4 rounded-xl overflow-hidden drop-shadow-2xl xl:hover:scale-110 xl:transition xl:duration-500 cursor-pointer">
        <CldImage
          src={website.image}
          alt={website.title}
          width="1000"
          height="1000"
        />
      </figure>
    </article>
  )
}
export default Card

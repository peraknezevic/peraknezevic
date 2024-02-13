"use client"

import CldImage from "./CldImage"
import { FiArrowRight } from "react-icons/fi"
import { Website } from "@/app/types"
import { motion } from "framer-motion"

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5 * index,
    },
  }),
}

const Card = ({ website }: { website: Website }) => {
  return (
    <article
      className="w-full flex flex-col xl:flex-row gap-8 xl:gap-24 py-24 border-b-2 border-black dark:border-slate-100 justify-between items-center"
      id={website.id}
    >
      <div className="flex flex-col gap-4 xl:w-1/2 pl-4">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100">
          {website.title}
        </h1>
        <p>{website.description}</p>
        <p>Status: {website.status}</p>
        <p className="mt-4">
          <span>Tech used:</span>
        </p>
        <ul className="flex flex-wrap gap-2 py-1">
          {website.stack.map((item, index) => (
            <motion.li
              key={item.url}
              className="px-2 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg inline"
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={index}
            >
              <a href={item.url}>{item.title}</a>
            </motion.li>
          ))}
        </ul>

        <p className="mt-8 flex gap-8">
          {website.url && (
            <a
              href={website.url}
              className="bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 bg-[length:100%_3px] bg-no-repeat bg-bottom hover:bg-right hover:bg-[length:100%_12px] transition-all pb-2"
              title={`Visit ${website.title} website`}
            >
              Visit the website <FiArrowRight className="inline" />
            </a>
          )}
          {website.github && (
            <a
              href={website.github}
              className="bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 bg-[length:100%_3px] bg-no-repeat bg-bottom hover:bg-right hover:bg-[length:100%_12px] transition-all pb-2"
              title={`Visit ${website.title} Github Project page`}
            >
              Github Repo <FiArrowRight className="inline" />
            </a>
          )}
        </p>
      </div>
      <figure className="xl:w-1/2 h-full border-slate-950 dark:border-slate-100 border-4 rounded-xl overflow-hidden shadow-2xl xl:hover:scale-110 xl:transition xl:duration-500 cursor-pointer">
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

import Card from "@/components/Card"
import { FiArrowRight } from "react-icons/fi"
import Link from "next/link"
import { Website } from "./types"
import { getLocalData } from "@/utils/actions"

const Home = async () => {
  const websites = await getLocalData("websites")
  return (
    <div className="max-w-screen-xl flex flex-col gap-4 mx-auto">
      <h2 className="text-4xl xl:text-5xl font-bold text-slate-900 dark:text-slate-100">
        Recent Projects
      </h2>
      <div className="flex flex-col border-t-2 border-slate-900 mt-16 lg:mt-16 dark:border-slate-100">
        {websites.map((website: Website, i: number) => {
          if (i < 3) return <Card website={website} key={website.id} />
        })}
      </div>
      <Link
        href="/work#4"
        className="mx-auto my-16 lg:my-32 uppercase text-xl border border-black dark:border-pink-500 px-4 py-2 inline-block hover:border-2 hover:font-bold transition-all"
      >
        More projects <FiArrowRight className="inline" />
      </Link>
    </div>
  )
}

export default Home

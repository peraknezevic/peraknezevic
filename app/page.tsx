// import { getProjects } from "@/utils/actions"
import { getLocalData } from "@/utils/actions"
import { Website } from "./types"
import Card from "@/components/Card"

const Home = async () => {
  const websites = await getLocalData("websites")
  return (
    <div className="max-w-screen-xl flex flex-col gap-4 mx-auto">
      <h2 className="text-5xl font-bold">Recent Projects</h2>
      <div className="flex flex-col border-t-2 border-black mt-16 dark:border-slate-100">
        {websites.map((website: Website, i: number) => {
          if (i < 3) return <Card website={website} key={website.id} />
        })}
      </div>
    </div>
  )
}

export default Home

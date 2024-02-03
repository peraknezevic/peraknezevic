import Card from "@/components/Card"
import { Website } from "../types"
import { getLocalData } from "@/utils/actions"

const Work = async () => {
  const websites = await getLocalData("websites")

  return (
    <div className="max-w-screen-xl flex flex-col gap-4 mx-auto">
      <h2 className="text-4xl xl:text-5xl font-bold pb-16 text-slate-900 dark:text-slate-100 ">
        Work
      </h2>
      <div className="flex flex-col dark:border-slate-100 border-t-2 border-slate-900">
        {websites.map((website: Website) => {
          return <Card website={website} key={website.id} />
        })}
      </div>
    </div>
  )
}
export default Work

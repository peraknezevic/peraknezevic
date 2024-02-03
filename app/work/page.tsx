import Card from "@/components/Card"
import { Website } from "../types"
import { getLocalData } from "@/utils/actions"

const Work = async () => {
  const websites = await getLocalData("websites")

  return (
    <div className="max-w-screen-xl flex flex-col gap-4 mx-auto">
      <h2 className="text-5xl font-bold mb-8 text-slate-900 dark:text-slate-100">
        Work
      </h2>
      <h2 className="text-3xl font-bold">Websites</h2>

      <div className="flex flex-col border-t-2 border-black mt-8 dark:border-slate-100">
        {websites.map((website: Website) => {
          return <Card website={website} key={website.id} />
        })}
      </div>
    </div>
  )
}
export default Work

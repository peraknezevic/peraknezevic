import { Book, Website } from "../types"

import BookCard from "@/components/BookCard"
import WebCard from "@/components/WebCard"
import { getLocalData } from "@/utils/actions"

const Work = async () => {
  const websites = await getLocalData("websites")
  const books = await getLocalData("books")

  return (
    <div className="max-w-screen-xl flex flex-col gap-4 mx-auto">
      <h2 className="text-4xl xl:text-5xl font-bold pb-8 text-slate-900 dark:text-slate-100 ">
        Work
      </h2>
      <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 pb-4 mb-8 border-b-2 dark:border-slate-100 border-black">
        Web Design &amp; Development
      </h3>
      <div className="flex flex-col">
        {websites.map((website: Website) => {
          return <WebCard website={website} key={website.id} />
        })}
      </div>
      <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 pb-4 mb-8 border-b-2 dark:border-slate-100 border-black">
        Book Cover Designs
      </h3>
      <div className="flex flex-col">
        {books.map((book: Book) => {
          return <BookCard book={book} key={book.id} />
        })}
      </div>
    </div>
  )
}
export default Work

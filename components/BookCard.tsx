import { Book } from "@/app/types"
import CldImage from "./CldImage"

const BookCard = ({ book }: { book: Book }) => {
  return (
    <article
      className="w-full flex flex-col xl:flex-row gap-8 xl:gap-24 py-24 border-b-2 border-black/50 dark:border-slate-100/50 justify-between items-center last:border-none"
      id={`book-${book.id}`}
      aria-labelledby={`book-${book.id}-title`}
    >
      <div className="flex flex-col gap-4 xl:w-1/2 pl-4">
        <h3
          id={`book-${book.id}-title`}
          className="text-3xl font-bold text-slate-900 dark:text-slate-100"
        >
          {book.title}
        </h3>
        <p>Written by {book.author}</p>
        <p>Published by {book.publisher}</p>
        <p>{book.year}</p>
      </div>
      <figure className="xl:w-1/2 h-full border-slate-950 dark:border-slate-100 border-4 rounded-xl overflow-hidden shadow-2xl motion-safe:xl:hover:scale-110 motion-safe:xl:transition motion-safe:xl:duration-500">
        <CldImage
          src={book.image}
          alt={`Cover design for ${book.title}`}
          width="1000"
          height="1000"
        />
      </figure>
    </article>
  )
}
export default BookCard

"use client"

import { Book } from "@/app/types"
import CldImage from "./CldImage"
import { FiArrowRight } from "react-icons/fi"
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

const BookCard = ({ book }: { book: Book }) => {
  return (
    <article
      className="w-full flex flex-col xl:flex-row gap-8 xl:gap-24 py-24 border-b-2 border-black/50 dark:border-slate-100/50 justify-between items-center last:border-none"
      id={book.id}
    >
      <div className="flex flex-col gap-4 xl:w-1/2 pl-4">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100">
          {book.title}
        </h1>
        <p>Written by {book.author}</p>
        <p>Published by {book.publisher}</p>
        <p>{book.year}</p>
      </div>
      <figure className="xl:w-1/2 h-full border-slate-950 dark:border-slate-100 border-4 rounded-xl overflow-hidden shadow-2xl xl:hover:scale-110 xl:transition xl:duration-500 cursor-pointer">
        <CldImage
          src={book.image}
          alt={book.title}
          width="1000"
          height="1000"
        />
      </figure>
    </article>
  )
}
export default BookCard

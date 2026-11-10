"use client"

import CldImage from "./CldImage"
import Navbar from "./Navbar"

const Header = () => {
  return (
    <header className="bg-slate-300 dark:bg-slate-900 w-screen md:w-1/2 xl:min-w-1/3 p-16 xl:max-w-lg">
      <div className="flex flex-col gap-12 justify-around">
        <div className="min-h-[calc(100vh-16rem)] w-10/12 mx-auto text-center ">
          <div className="w-full h-auto rounded-full overflow-hidden mx-auto mb-8 shadow-2xl">
            <CldImage
              src="portfolio/peraknezevic-v2"
              alt="Portrait of Predrag Knezevic"
              width="1000"
              height="1000"
              className="rounded-full  overflow-hidden"
              priority
            />
          </div>
          <div className="mx-auto">
            {/* Site name, not a heading: each page has its own h1. */}
            <p className="text-4xl font-bold mb-2 tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-700 via-fuchsia-700 to-indigo-700 dark:from-rose-400 dark:via-fuchsia-500 dark:to-indigo-500">
                Predrag Knezevic
              </span>
            </p>
            <p className="text-xl text-slate-900 dark:text-slate-100">
              Web Designer and Developer
            </p>
          </div>
        </div>
        <Navbar />
      </div>
    </header>
  )
}
export default Header

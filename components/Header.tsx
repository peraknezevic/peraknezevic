import CldImage from "./CldImage"
import Navbar from "./Navbar"

const Header = () => {
  return (
    <header className="bg-slate-300 dark:bg-slate-900 w-screen md:w-1/2 xl:min-w-1/3 p-16 xl:max-w-lg">
      <div className="flex flex-col gap-16">
        <div className="min-h-[calc(100vh-16rem)] w-10/12 mx-auto text-center ">
          <div className="w-full h-auto rounded-full overflow-hidden mx-auto mb-12 shadow-2xl">
            <CldImage
              src="portfolio/peraknezevic-v2"
              alt="Pera Knezevic"
              width="1000"
              height="1000"
              className="rounded-full  overflow-hidden"
              priority
            />
          </div>
          <div className="mx-auto">
            <h1 className="text-4xl text-slate-950 dark:text-slate-50 font-bold mb-2">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500">
                Pera Knezevic
              </span>
            </h1>
            <p className="text-2xl text-slate-900 dark:text-slate-100">
              Web Developer
            </p>
          </div>
        </div>
        <Navbar />
      </div>
    </header>
  )
}
export default Header

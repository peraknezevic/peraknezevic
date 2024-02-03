import CldImage from "./CldImage"
import Navbar from "./Navbar"

const Header = () => {
  return (
    <header className="bg-slate-300 dark:bg-slate-900 w-screen md:w-1/2 xl:min-w-1/3 p-16 xl:max-w-lg">
      <div className="flex flex-col gap-16">
        <div className="min-h-[calc(100vh-16rem)] w-10/12 mx-auto text-center ">
          <div className="w-full h-auto rounded-full overflow-hidden mx-auto mb-12 drop-shadow-2xl">
            <CldImage
              src="portfolio/peraknezevic"
              alt="Pera Knezevic"
              width="1000"
              height="1000"
              className="rounded-full"
            />
          </div>
          <div className="mx-auto">
            <h1 className="text-4xl text-slate-950 dark:text-slate-50 font-bold mb-2">
              Pera Knezevic
            </h1>
            <h2 className="text-2xl text-slate-900 dark:text-slate-100">
              Web Developer
            </h2>
          </div>
        </div>
        <Navbar />
      </div>
    </header>
  )
}
export default Header

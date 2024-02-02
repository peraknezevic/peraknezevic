import Navbar from "./Navbar"
import CldImage from "./CldImage"

const Header = () => {
  return (
    <header className="bg-slate-200 w-1/3 p-16 max-w-lg">
      <div className="grid grid-rows-[1fr,auto] header-content">
        <div className="min-h-[calc(100vh-16rem)] w-10/12 mx-auto text-center ">
          <div className="w-full h-auto rounded-full overflow-hidden mx-auto mb-8 drop-shadow-2xl">
            <CldImage
              src="portfolio/peraknezevic"
              alt="Pera Knezevic"
              width="1000"
              height="1000"
              className="rounded-full"
            />
          </div>
          <div className="mx-auto">
            <h1 className="text-4xl font-bold">Pera Knezevic</h1>
            <h2 className="text-2xl font-semibold">Web Developer</h2>
          </div>
        </div>
        <Navbar />
      </div>
    </header>
  )
}
export default Header
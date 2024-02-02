import { getLocalData } from "@/utils/actions"
import { SiApple, SiIkea, SiLogitech } from "react-icons/si"

const Uses = async () => {
  const uses = await getLocalData("uses")
  return (
    <div className="flex flex-col gap-8 max-w-screen-md mx-auto">
      <div className="text-center">
        <h1 className="text-6xl font-bold leading-10">Tools I Use</h1>
        <p className="p-4">A list of tools I use to get things done</p>
      </div>
      <div>
        <h2 className="text-3xl font-bold leading-10">Hardware</h2>
        <ul className="p-4 flex flex-col gap-2 list-disc">
          <li>
            Laptop: <SiApple className="inline align-baseline" />{" "}
            <span className="uppercase font-bold">{uses.hardware.laptop}</span>
          </li>
          <li>
            Desktop: <SiApple className="inline align-baseline" />{" "}
            <span className="uppercase font-bold">{uses.hardware.desktop}</span>
          </li>
          <li>
            Phone: <SiApple className="inline align-baseline" />{" "}
            <span className="uppercase font-bold">{uses.hardware.phone}</span>
          </li>
          <li>
            Tablet: <SiApple className="inline align-baseline" />{" "}
            <span className="uppercase font-bold">{uses.hardware.tablet}</span>
          </li>
        </ul>
      </div>
      <div>
        <h2 className="text-3xl font-bold leading-10">Desk Setup</h2>
        <ul className="p-4 flex flex-col gap-2 list-disc">
          <li>Desk: {uses.hardware.desk}</li>
          <li>
            Chair: <SiIkea />
            {uses.hardware.chair}
          </li>
          <li>Monitor: {uses.hardware.monitor}</li>
          <li>Storage: {uses.hardware.storage}</li>
          <li>
            Keyboard: <SiLogitech className="inline align-baseline" />{" "}
            <span className="uppercase font-bold">
              {uses.hardware.keyboard}
            </span>
          </li>
          <li>Mouse: {uses.hardware.mouse}</li>
          <li>Speakers: {uses.hardware.speakers}</li>
          <li>Headphones: {uses.hardware.headphones}</li>
        </ul>
      </div>
      <div>
        <h2 className="text-3xl font-bold">Software</h2>
        <ul className="p-4 flex flex-col gap-2 list-disc">
          <li>OS: {uses.software.os}</li>
          <li>Code Editor: {uses.software.codeEditor}</li>
          <li>Current VS Code Theme: {uses.software.vscodeTheme}</li>
          <li>
            VS Code Plugins:{" "}
            {uses.software.plugins.map((item: string, i: number) => (
              <span key={item}>
                {item}
                {i !== uses.software.plugins.length - 1 && ", "}
              </span>
            ))}
          </li>
          <li>
            Dev Tools:{" "}
            {uses.software.devTools.map((item: string, i: number) => (
              <span key={item}>
                {item}
                {i !== uses.software.devTools.length - 1 && ", "}
              </span>
            ))}
          </li>
          <li>Default Browser: {uses.software.defaultBrowser}</li>
          <li>
            Other Browsers:{" "}
            {uses.software.otherBrowsers.map((item: string, i: number) => (
              <span key={item}>
                {item}
                {i !== uses.software.otherBrowsers.length - 1 && ", "}
              </span>
            ))}
          </li>
          <li>
            Other Apps:{" "}
            {uses.software.apps.map((item: string, i: number) => (
              <span key={item}>
                {item}
                {i !== uses.software.apps.length - 1 && ", "}
              </span>
            ))}
          </li>
        </ul>
      </div>
    </div>
  )
}
export default Uses

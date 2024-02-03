import { SiApple, SiIkea, SiLogitech } from "react-icons/si"

import { getLocalData } from "@/utils/actions"

const Uses = async () => {
  const uses = await getLocalData("uses")
  return (
    <div className="max-w-screen-xl flex flex-col gap-4 mx-auto">
      <h2 className="text-4xl xl:text-5xl font-bold pb-16 text-slate-900 dark:text-slate-100 ">
        /Uses
      </h2>
      <div className="border-t-2 border-slate-900 py-24">
        <article>
          <h3 className="text-3xl font-bold">Hardware</h3>
          <ul className="p-4 flex flex-col gap-2 list-disc">
            <li>Laptop: {uses.hardware.laptop}</li>
            <li>Desktop: {uses.hardware.desktop}</li>
            <li>Phone: {uses.hardware.phone}</li>
            <li>Tablet: {uses.hardware.tablet}</li>
          </ul>
        </article>
        <article>
          <h3 className="text-3xl font-bold leading-10">Desk Setup</h3>
          <ul className="p-4 flex flex-col gap-2 list-disc">
            <li>Desk: {uses.hardware.desk}</li>
            <li>Chair: {uses.hardware.chair}</li>
            <li>Monitor: {uses.hardware.monitor}</li>
            <li>Storage: {uses.hardware.storage}</li>
            <li>
              Keyboard:
              {uses.hardware.keyboard}
            </li>
            <li>Mouse: {uses.hardware.mouse}</li>
            <li>Speakers: {uses.hardware.speakers}</li>
            <li>Headphones: {uses.hardware.headphones}</li>
            <li>Earbuds: {uses.hardware.earbuds}</li>
          </ul>
        </article>
        <article>
          <h3 className="text-3xl font-bold">Software</h3>
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
        </article>
      </div>
    </div>
  )
}
export default Uses

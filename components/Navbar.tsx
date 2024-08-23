import { SiGithub, SiLinkedin } from "react-icons/si"

import { GrDocument } from "react-icons/gr"
import Link from "next/link"
import { LuMail } from "react-icons/lu"
import ThemeSwitch from "./ThemeSwitch"

const links = [
  { id: 1, url: "/", title: "Home", titleTag: "Go to home page" },
  { id: 2, url: "/work", title: "Work", titleTag: "See the work I've done" },
  {
    id: 3,
    url: "/uses",
    title: "/Uses",
    titleTag: "Checkout the gear and software I use",
  },
]
const social = [
  {
    id: 1,
    url: "mailto:predragknezevic@icloud.com",
    icon: <LuMail />,
    titleTag: "Contact me by email",
  },
  {
    id: 2,
    url: "https://github.com/peraknezevic",
    icon: <SiGithub />,
    titleTag: "Visit my Github profile page",
  },
  {
    id: 3,
    url: "https://linkedin.com/in/predrag-knezevic-062100247/",
    icon: <SiLinkedin />,
    titleTag: "Visit my Linkedin profile page",
  },
  {
    id: 4,
    url: "./Pera-Knezevic-CV.pdf",
    icon: <GrDocument />,
    titleTag: "Download my CV",
  },
]
const Navbar = () => {
  return (
    <nav className="text-xl">
      <ul className="cursor-pointer flex gap-8 mb-12 justify-center">
        {links.map((link) => (
          <li key={link.id}>
            <Link
              href={link.url}
              title={link.titleTag}
              className="bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 bg-[length:100%_3px] bg-no-repeat bg-bottom hover:bg-right hover:bg-[length:100%_12px] transition-all pb-2"
            >
              {link.title}
            </Link>
          </li>
        ))}
        <li className="items-baseline p-1">
          <ThemeSwitch />
        </li>
      </ul>
      <ul className="cursor-pointer flex gap-8 justify-center">
        {social.map((item) => (
          <li key={item.id}>
            <a
              href={item.url}
              target="_blank"
              rel="noreferrer"
              title={item.titleTag}
            >
              {item.icon}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
export default Navbar

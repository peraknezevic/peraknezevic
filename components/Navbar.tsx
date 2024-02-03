import {
  SiFacebook,
  SiGithub,
  SiInstagram,
  SiLastdotfm,
  SiLinkedin,
} from "react-icons/si"

import Link from "next/link"
import { LuMail } from "react-icons/lu"
import ThemeSwitch from "./ThemeSwitch"

const links = [
  { id: 1, url: "/", title: "Home", titleTag: "Go to home page" },
  { id: 2, url: "/work", title: "Work", titleTag: "See the work I've done" },
  {
    id: 3,
    url: "/uses",
    title: "?Uses",
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
    url: "https://linkedin.com/peraknezevic",
    icon: <SiLinkedin />,
    titleTag: "Visit my Linkedin profile page",
  },
  {
    id: 4,
    url: "https://facebook.com/pera.knezevic",
    icon: <SiFacebook />,
    titleTag: "Visit my Facebook profile",
  },
  {
    id: 5,
    url: "https://instagram.com/peraknezevic",
    icon: <SiInstagram />,
    titleTag: "Visit my Instagram profile",
  },
  {
    id: 6,
    url: "https://last.fm/user/pera2109",
    icon: <SiLastdotfm />,
    titleTag: "Visit my Last.fm profile",
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
              className="border-b border-black dark:border-pink-500 pb-2 hover:border-b-2 hover:font-bold transition-all"
            >
              {link.title}
            </Link>
          </li>
        ))}
        <li className="items-baseline ">
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

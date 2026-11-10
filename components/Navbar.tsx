"use client"

import { SiGithub, SiLinkedin } from "react-icons/si"

import { GrDocument } from "react-icons/gr"
import Link from "next/link"
import { LuMail } from "react-icons/lu"
import ThemeSwitch from "./ThemeSwitch"
import { usePathname } from "next/navigation"

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
    icon: <LuMail aria-hidden="true" />,
    label: "Contact me by email",
    newTab: false,
  },
  {
    id: 2,
    url: "https://github.com/peraknezevic",
    icon: <SiGithub aria-hidden="true" />,
    label: "Visit my Github profile page",
    newTab: true,
  },
  {
    id: 3,
    url: "https://linkedin.com/in/predrag-knezevic-062100247/",
    icon: <SiLinkedin aria-hidden="true" />,
    label: "Visit my Linkedin profile page",
    newTab: true,
  },
  {
    id: 4,
    url: "/Pera-Knezevic-CV.pdf",
    icon: <GrDocument aria-hidden="true" />,
    label: "Download my CV (PDF)",
    newTab: true,
  },
]
const Navbar = () => {
  const pathname = usePathname()

  return (
    <nav className="text-xl" aria-label="Main">
      <ul className="flex gap-8 mb-12 justify-center">
        {links.map((link) => {
          const isCurrent = pathname === link.url
          return (
            <li key={link.id}>
              <Link
                href={link.url}
                title={link.titleTag}
                aria-current={isCurrent ? "page" : undefined}
                className={`bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 bg-no-repeat bg-bottom hover:bg-right hover:bg-[length:100%_12px] transition-all pb-2 ${
                  isCurrent ? "bg-[length:100%_6px] font-semibold" : "bg-[length:100%_3px]"
                }`}
              >
                {link.title}
              </Link>
            </li>
          )
        })}
        <li className="items-baseline">
          <ThemeSwitch />
        </li>
      </ul>
      <ul className="flex gap-8 justify-center">
        {social.map((item) => {
          const label = item.newTab ? `${item.label} (opens in a new tab)` : item.label
          return (
            <li key={item.id}>
              <a
                href={item.url}
                {...(item.newTab ? { target: "_blank", rel: "noreferrer" } : {})}
                aria-label={label}
                title={label}
                className="inline-flex p-1"
              >
                {item.icon}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
export default Navbar

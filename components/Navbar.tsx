import { Github, Instagram, Linkedin, Mail } from "lucide-react"
import { SiGithub } from "react-icons/si"
import Link from "next/link"

const links = [
  { id: 1, url: "/", title: "Home" },
  { id: 2, url: "/work", title: "Work" },
  { id: 3, url: "/uses", title: "Uses" },
]
const social = [
  { id: 1, url: "mailto:predragknezevic@icloud.com", icon: <Mail /> },
  { id: 2, url: "https://github.com/peraknezevic", icon: <SiGithub /> },
  { id: 3, url: "https://linkedin.com/peraknezevic", icon: <Linkedin /> },
  { id: 4, url: "https://instagram.com/peraknezevic", icon: <Instagram /> },
]
const Navbar = () => {
  return (
    <nav>
      <ul>
        {links.map((link) => (
          <li key={link.id}>
            <Link href={link.url}>{link.title}</Link>
          </li>
        ))}
      </ul>
      <ul className="flex gap-4">
        {social.map((item) => (
          <li key={item.id}>
            <a href={item.url} target="_blank" rel="noreferrer">
              {item.icon}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
export default Navbar

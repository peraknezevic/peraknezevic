export type Website = {
  id: string
  title: string
  type: string
  description: string
  url?: string
  github?: string
  image: string
  stack: { title: string; url: string }[]
}

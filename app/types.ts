export type Website = {
  id: string
  title: string
  type: string
  description: string
  url?: string
  github?: string
  status: string
  image: string
  stack: { title: string; url: string }[]
}

export type Book = {
  id: string
  title: string
  author: string
  publisher: string
  year: number
  image: string
}

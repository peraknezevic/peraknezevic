import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import "./globals.css"
import Header from "@/components/Header"

export const metadata: Metadata = {
  title: "Pera Knezevic Web Developer Portfolio",
  description: "Portfolio website",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="h-screen w-screen flex flex-col">
      <body
        className={`${GeistSans.className} flex overflow-hidden justify-start leading-6`}
      >
        <Header />
        {children}
      </body>
    </html>
  )
}

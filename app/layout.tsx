import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import "./globals.css"
import Header from "@/components/Header"
import { Providers } from "./providers"
import Footer from "@/components/Footer"

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
    <html
      lang="en"
      className="md:h-screen md:w-screen md:flex flex-col"
      suppressHydrationWarning
    >
      <body
        className={`${GeistSans.className} text-slate-950 dark:text-slate-100 flex flex-col md:flex-row md:overflow-hidden dark:bg-slate-900 justify-start leading-6`}
      >
        <Providers>
          <Header />
          <main className="bg-slate-200 dark:bg-slate-800 py-32 px-16 overflow-scroll w-full justify-center">
            {children}
          </main>
          {/* <Footer /> */}
        </Providers>
      </body>
    </html>
  )
}

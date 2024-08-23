import "./globals.css"

import { Analytics } from "@vercel/analytics/react"
import { GeistSans } from "geist/font/sans"
import Header from "@/components/Header"
import type { Metadata } from "next"
import { Providers } from "./providers"
import { SpeedInsights } from "@vercel/speed-insights/next"

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
        className={`${GeistSans.className} text-slate-800 dark:text-slate-200 flex flex-col md:flex-row md:overflow-hidden dark:bg-slate-900 justify-start leading-6`}
      >
        <Providers>
          <Header />
          <main className="bg-slate-200 dark:bg-slate-800 py-12 xl:py-16 lg:py-32 px-8 lg:px-16 overflow-scroll w-full justify-center">
            {children}
            <Analytics />
          </main>
        </Providers>
        <SpeedInsights />
      </body>
    </html>
  )
}

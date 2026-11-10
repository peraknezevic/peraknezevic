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
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-slate-100 focus:px-4 focus:py-2 focus:text-slate-900 focus:shadow-lg"
        >
          Skip to content
        </a>
        <Providers>
          <Header />
          {/* tabIndex lets the skip link move focus here, so the scrollable main can be scrolled by keyboard. */}
          <main
            id="main-content"
            tabIndex={-1}
            className="bg-slate-200 dark:bg-slate-800 py-12 xl:py-16 lg:py-32 px-8 lg:px-16 overflow-scroll w-full justify-center focus:outline-none"
          >
            {children}
            <Analytics />
          </main>
        </Providers>
        <SpeedInsights />
      </body>
    </html>
  )
}

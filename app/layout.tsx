import type { Metadata } from "next"
import { GeistMono } from "geist/font/mono"
import "./globals.css"
import Navbar from "@/components/Navbar"

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
    <html lang="en" className="root">
      <body className={`${GeistMono.className} bg-orange-100 text-red-900`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}

import { Inter } from 'next/font/google'
import "./globals.css"
import { Navigation } from "@/components/navigation"
import Script from 'next/script'

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen sm:ml-[200px] sm:w-[calc(100%-200px)]">
          {children}
        </main>
        <Script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js" />
      </body>
    </html>
  )
}


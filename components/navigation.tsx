"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import Link from "next/link"
import { useEffect, useState } from "react"

const links = [
  { href: "home", label: "Home" },
  { href: "projects", label: "Projects" },
  { href: "skills", label: "Skills" },
  { href: "about", label: "About" },
  { href: "certificates", label: "Certs" },
  { href: "contact", label: "Contact" },
]

export function Navigation() {
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2

      for (let i = links.length - 1; i >= 0; i--) {
        const section = document.getElementById(links[i].href)
        if (section && scrollPosition >= section.offsetTop) {
          setActiveSection(links[i].href)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Call once to set initial active section
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const section = document.getElementById(href)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <motion.nav 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed left-0 top-0 z-50 flex h-16 w-full items-center justify-center bg-transparent px-4 sm:h-screen sm:w-[200px] sm:flex-col sm:justify-center"
    >
      <div className="flex items-center justify-center gap-2 sm:flex-col sm:gap-6">
        {links.map((link) => (
          <Link
            key={link.href}
            href={`#${link.href}`}
            onClick={(e) => handleClick(e, link.href)}
            className="group flex items-center gap-2 sm:gap-4"
          >
            <motion.div
              animate={{
                scale: activeSection === link.href ? 1.2 : 1,
                boxShadow: activeSection === link.href ? "0 0 10px #fff" : "none",
              }}
              className="h-1 w-1 rounded-full bg-white transition-all duration-300 sm:h-2 sm:w-2"
            />
            <motion.span
              animate={{
                scale: activeSection === link.href ? 1.1 : 1,
                color: activeSection === link.href ? "#ffffff" : "rgba(255, 255, 255, 0.7)",
                textShadow: activeSection === link.href ? "0 0 10px rgba(255, 255, 255, 0.5)" : "none",
              }}
              className={cn(
                "text-xs font-light transition-all duration-300 sm:text-base",
                "group-hover:text-white"
              )}
            >
              {link.label}
            </motion.span>
          </Link>
        ))}
      </div>
    </motion.nav>
  )
}


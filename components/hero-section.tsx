"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Download, Github, Linkedin } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black py-20">
      {/* Blue glow effect */}
      <div className="absolute left-1/2 top-1/3 h-[300px] w-[300px] sm:h-[500px] sm:w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/20 blur-[120px]" />
      
      <div className="container relative mx-auto flex min-h-screen flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8 space-y-4 w-full"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white">
            Vishnu Prasad S
          </h1>
          <p className="text-lg sm:text-xl text-white/80">Fueling innovation with curiosity.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mb-12 space-y-4 sm:space-y-6 w-full max-w-3xl"
        >
          {[
            { icon: "🚀", text: "Proficient in Node.js, React.js, and MongoDB for building complete solutions..." },
            { icon: "💻", text: "Skilled in Java, JavaScript, Python, AI/ML, and No-code tools..." },
            { icon: "🌐", text: "Experienced in developing web technologies and products..." },
            { icon: "🤖", text: "Actively exploring Artificial Intelligence applications..." },
            { icon: "💡", text: "Working on AI and Prompt Engineering advancements..." },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="flex items-start sm:items-center gap-4 text-left"
            >
              <span className="text-xl sm:text-2xl flex-shrink-0">{item.icon}</span>
              <span className="text-base sm:text-lg text-white/80">{item.text}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 w-full max-w-md justify-center"
        >
          <Button
            size="lg"
            className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-blue-700 text-white hover:from-blue-600 hover:to-blue-800"
            asChild
          >
            <a href="https://github.com/Vishnuuuuuu" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </a>
          </Button>
          <Button
            size="lg"
            className="w-full sm:w-auto bg-gradient-to-r from-purple-500 to-purple-700 text-white hover:from-purple-600 hover:to-purple-800"
            asChild
          >
            <a href="https://www.linkedin.com/in/vishnu-prasad-s-862b5b1bb/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </a>
          </Button>
          <Button
            size="lg"
            className="w-full sm:w-auto bg-gradient-to-r from-green-500 to-emerald-700 text-white hover:from-green-600 hover:to-emerald-800"
            asChild
          >
            <a href="/resume.pdf" download>
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}


"use client"

import { motion } from "framer-motion"
import Link from 'next/link'

export default function AboutPage() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-purple-900 via-black to-indigo-900">
      <div className="absolute inset-0 bg-[url(/grid.svg)] bg-center [mask-image:linear-gradient(0deg,transparent,black)]" />
      
      <div className="container relative mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h1 className="mb-8 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            About Me
          </h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12 space-y-6 text-lg text-white/80"
          >
            <p>
              Hi Everyone, I am Vishnu Prasad S from Bangalore, India.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Currently employed as a Backend Dev at AADS, I have completed my Diploma in Computer Science at SJ (Govt) Polytechnic.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="rounded-lg border border-white/10 bg-white/5 p-8"
          >
            <h2 className="mb-4 text-xl font-semibold text-white">Beyond Coding</h2>
            <p className="text-white/70">
              Chess • Reading • AI Research • Sports
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12"
          >
            <blockquote className="text-xl italic text-white/90">
              "When you give your 100% focus on your work, Success is Inevitable."
              <footer className="mt-2 text-right text-white/70">- @VP</footer>
            </blockquote>
          </motion.div>
        </motion.div>
      </div>
      <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.8 }}
  className="mt-12 text-center"
>
  <Link href="/certificates" className="text-blue-400 hover:text-blue-300 underline">
    View My Certificates
  </Link>
</motion.div>
    </section>
  )
}


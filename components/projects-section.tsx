"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { BarChart2, Clock, ExternalLink } from 'lucide-react'

const projects = [
  {
    icon: <BarChart2 className="h-8 w-8" />,
    title: "Algorithmic Trading System",
    description: "An automated trading system which needs no human intervention",
    details: [
      "Integrated Fyers API for seamless order placement",
      "Processed real-time TradingView alerts for timely trade execution",
      "Built a Node.js backend with MongoDB for order tracking and retrieval",
      "Designed a React-based frontend to display trade history",
    ],
    tech: "React.js, Node.js, APIs",
    link: "https://algotrade-frontend-six.vercel.app/",
    status: "View history up to May 20",
  },
  {
    icon: <Clock className="h-8 w-8" />,
    title: "Digi-Cap (Time Capsule)",
    description: "A Digital Capsule for precious memories",
    details: [
      "Built with React and Firebase, featuring Google authentication",
      "Users can upload images stored in a capsule (Firebase)",
      "Capsules unlock on a chosen date, sending an email surprise",
      "Developed with ChatGPT and deployed on Vercel",
    ],
    tech: "React.js, Node.js, Firebase",
    link: "https://time-capsule-0-1.vercel.app/login",
    status: "Backend temporarily down",
  },
]

export function ProjectsSection() {
  return (
    <section className="min-h-screen w-full bg-gradient-to-br from-indigo-900 via-black to-blue-900 py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center text-3xl font-bold text-white md:text-4xl"
        >
          Projects
        </motion.h2>
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group h-full relative overflow-hidden border-white/10 bg-white/5 transition-colors hover:bg-white/10">
                <CardHeader>
                  <CardTitle className="flex items-center gap-4 text-white">
                    {project.icon}
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-white/80">{project.description}</p>
                  <div className="space-y-2">
                    {project.details.map((detail, i) => (
                      <p key={i} className="text-sm text-white/70">• {detail}</p>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-blue-300">{project.tech}</span>
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="text-white hover:bg-white/20"
                    >
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Project
                      </a>
                    </Button>
                  </div>
                  <p className="text-xs text-white/50 italic">{project.status}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

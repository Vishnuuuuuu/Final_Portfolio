"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useCallback, useEffect, useState } from "react"

interface Certificate {
  title: string
  issuer: string
  date: string
  pdfUrl: string
  verifyUrl: string
}

const certificates: Certificate[] = [
  {
    title: "API Testing Using Rest Assured",
    issuer: "Coursera Project Network",
    date: "Nov 2, 2023",
    pdfUrl: "/API Testing Cert.pdf",
    verifyUrl: "https://coursera.org/verify/TADM2YB68VXH"
  },
  {
    title: "DevOps on AWS: Specialization",
    issuer: "Amazon Web Services",
    date: "Nov 20, 2023",
    pdfUrl: "/AWS DEVOPS.pdf",
    verifyUrl: "https://coursera.org/verify/specialization/UL3MSVVHHYNL"
  },
  {
    title: "DevOps on AWS: Code, Build, and Test",
    issuer: "Amazon Web Services",
    date: "Nov 15, 2023",
    pdfUrl: "/AWS(code,build&Test).pdf",
    verifyUrl: "https://coursera.org/verify/HR2XBZ5HAR27"
  },
  {
    title: "DevOps on AWS: Operate and Monitor",
    issuer: "Amazon Web Services",
    date: "Nov 20, 2023",
    pdfUrl: "/AWS(operate&monitor).pdf",
    verifyUrl: "https://coursera.org/verify/QFRHCYFF2QHH"
  },
  {
    title: "DevOps on AWS: Release and Deploy",
    issuer: "Amazon Web Services",
    date: "Nov 17, 2023",
    pdfUrl: "/AWS(release&deploy).pdf",
    verifyUrl: "https://coursera.org/verify/K3RRWW2ER3MH"
  },
  {
    title: "AWS Cloud Technical Essentials",
    issuer: "Amazon Web Services",
    date: "Nov 12, 2023",
    pdfUrl: "/AWS(technical).pdf",
    verifyUrl: "https://coursera.org/verify/S2GA36E5EDFZ"
  },
  {
    title: "Developing Back-End Apps with Node.js and Express",
    issuer: "IBM via Coursera",
    date: "May 15, 2023",
    pdfUrl: "/Coursera APVWLRTVE2CM.pdf",
    verifyUrl: "https://coursera.org/verify/APVWLRTVE2CM"
  },
  {
    title: "HTML, CSS, and JavaScript for Web Developers",
    issuer: "Johns Hopkins University via Coursera",
    date: "Apr 14, 2023",
    pdfUrl: "/Coursera TVQ6HHKDFSBM.pdf",
    verifyUrl: "https://coursera.org/verify/TVQ6HHKDFSBM"
  },
  {
    title: "Introduction to Docker: Build Your Own Portfolio Site",
    issuer: "Coursera Project Network",
    date: "Nov 6, 2023",
    pdfUrl: "/DockerProfile.pdf",
    verifyUrl: "https://coursera.org/verify/RPXKEQC2GG2S"
  }
]

export function CertificatesShowcase() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()])
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false)

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setPrevBtnEnabled(emblaApi.canScrollPrev())
    setNextBtnEnabled(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
  }, [emblaApi, onSelect])

  return (
    <section className="w-full bg-gradient-to-br from-blue-900 via-black to-purple-900 py-10 sm:py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 sm:mb-12 text-center text-2xl sm:text-3xl font-bold text-white md:text-4xl"
        >
          My Certificates
        </motion.h2>
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {certificates.map((cert, index) => (
                <div key={cert.title} className="flex-[0_0_100%] min-w-0 pl-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="overflow-hidden bg-white/5 transition-colors hover:bg-white/10">
                      <CardContent className="p-4">
                        <div className="aspect-[3/2] overflow-hidden rounded-lg bg-gray-800">
                          <iframe
                            src={cert.pdfUrl}
                            width="100%"
                            height="100%"
                            className="h-full w-full"
                            title={cert.title}
                          />
                        </div>
                        <h3 className="mt-4 text-lg sm:text-xl font-semibold text-white">{cert.title}</h3>
                        <p className="text-xs sm:text-sm text-white/70">{cert.issuer}</p>
                        <p className="text-xs sm:text-sm text-white/70">{cert.date}</p>
                        <a
                          href={cert.verifyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-2 inline-block text-xs sm:text-sm text-blue-400 hover:text-blue-300"
                        >
                          Verify Certificate
                        </a>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
          <Button
            variant="outline"
            size="icon"
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white"
            onClick={scrollPrev}
            disabled={!prevBtnEnabled}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white"
            onClick={scrollNext}
            disabled={!nextBtnEnabled}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}

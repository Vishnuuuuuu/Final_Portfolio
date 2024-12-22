"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import emailjs from '@emailjs/browser'
import { motion } from "framer-motion"
import { useState } from "react"

export function ContactSection() {
  const [formData, setFormData] = useState({ from_name: '', reply_to: '', message: '' })
  const [isSent, setIsSent] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!formData.from_name || !formData.reply_to || !formData.message) {
      setError('All fields are required.')
      return
    }
    setError('')
    emailjs
      .send(
        'service_ervdg5y',
        'template_pczxmiq',
        {
          to_name: 'Vishnu',
          ...formData,
        },
        'MEldIgBFvN_QFd7Je'
      )
      .then(() => {
        setIsSent(true)
        setFormData({ from_name: '', reply_to: '', message: '' })
      })
      .catch(() => setError('Failed to send message. Try again later.'))
  }

  return (
    <section id="contact" className="min-h-screen w-full bg-gradient-to-br from-green-900 via-black to-blue-900 py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center text-3xl font-bold text-white md:text-4xl"
        >
          Contact Me
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto max-w-md"
        >
          <Card className="border-white/10 bg-white/5">
            <CardHeader>
              <CardTitle className="text-center text-white">
                Drop a message and I&apos;ll get back to you soon!
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={sendEmail} className="space-y-4">
                <div>
                  <Input
                    name="from_name"
                    placeholder="Your Name"
                    value={formData.from_name}
                    onChange={handleChange}
                    className="border-white/10 bg-white/5 text-white placeholder:text-white/50"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    name="reply_to"
                    placeholder="Your Email"
                    value={formData.reply_to}
                    onChange={handleChange}
                    className="border-white/10 bg-white/5 text-white placeholder:text-white/50"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    className="min-h-[150px] border-white/10 bg-white/5 text-white placeholder:text-white/50"
                  />
                </div>
                {error && <p className="text-red-500">{error}</p>}
                {isSent && <p className="text-green-500">Will get back to you soon!</p>}
                <Button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600" size="lg">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}


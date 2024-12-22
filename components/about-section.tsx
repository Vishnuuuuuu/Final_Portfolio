"use client"

import { motion } from "framer-motion"

export function AboutSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-purple-900 via-black to-indigo-900 py-20">
      <div className="absolute inset-0 bg-[url(/grid.svg)] bg-center [mask-image:linear-gradient(0deg,transparent,black)]" />
      
      <div className="container relative mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h1 className="mb-8 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            About Me
          </h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12 space-y-6 text-lg text-white/80"
          >
           

<p>  
  Hi Everyone, I am Vishnu Prasad S 
  from Bangalore, India.  
</p>  
<p>  
  I completed my Diploma in Computer Science in 2023 at S J (Govt) Polytechnic and am currently pursuing a Bachelor of Computer Applications (BCA) at Manipal University Jaipur.  
</p>  
<p>  
  I am a quick learner with a high level of adaptability. Over the years, I have gained extensive experience in teamwork and leadership, thanks to my three years in NCC and my work experience.  
</p>  
<p>  
  Although I am a Backend Developer, I don't let that limit me. For instance, this portfolio was entirely built by me using AI, showcasing my ability to use the Ai to it's best way.  
</p>  


          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="rounded-lg border border-white/10 bg-white/5 p-8"
          >
            <h2 className="mb-4 text-xl font-semibold text-white">Beyond Coding</h2>
            <p className="text-white/70">
              Chess • Reading Books • AI Research • Music • Games • Sports
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12"
          >
            {/* <blockquote className="text-xl italic text-white/90">
              "When you give your 100% focus on your work, Success is Inevitable."
              <footer className="mt-2 text-right text-white/70">- @VP</footer>
            </blockquote> */}
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 text-center"
        >
          {/* <Link href="/certificates" className="text-blue-400 hover:text-blue-300 underline">
            View My Certificates
          </Link> */}
        </motion.div>
      </div>
    </section>
  )
}


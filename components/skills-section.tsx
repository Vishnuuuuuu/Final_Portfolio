// "use client"

// import { motion } from "framer-motion"

// const skills = [
//   { name: "Node.js", level: 95 },
//   { name: "JavaScript", level: 90 },
//   { name: "React", level: 85 },
//   { name: "MongoDB", level: 80 },
//   { name: "MySQL", level: 80 },
//   { name: "Python", level: 79 },
//   { name: "API Development", level: 85 },
//   { name: "Express.js", level: 85 },
// ]

// export function SkillsSection() {
//   return (
//     <section className="w-full bg-gradient-to-br from-blue-900 via-black to-purple-900 py-20">
//       <div className="container mx-auto px-4">
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="mb-12 text-center text-3xl font-bold text-white md:text-4xl"
//         >
//           Skills in my Arsenal
//         </motion.h2>
//         <div className="mx-auto grid max-w-3xl gap-6 md:grid-cols-2">
//           {skills.map((skill, index) => (
//             <motion.div
//               key={skill.name}
//               initial={{ opacity: 0, x: -20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               className="relative"
//             >
//               <div className="mb-2 flex justify-between text-sm text-white">
//                 <span>{skill.name}</span>
//                 <span>{skill.level}%</span>
//               </div>
//               <div className="h-2 overflow-hidden rounded-full bg-white/10">
//                 <motion.div
//                   initial={{ width: 0 }}
//                   whileInView={{ width: `${skill.level}%` }}
//                   transition={{ duration: 1, delay: 0.5 }}
//                   className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
//                 />
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

"use client"

import { motion } from "framer-motion"

const skills = [
  { name: "Node.js", level: 95 },
  { name: "JavaScript", level: 90 },
  { name: "React", level: 85 },
  { name: "MongoDB", level: 80 },
  { name: "MySQL", level: 80 },
  { name: "Python", level: 79 },
  { name: "API Development", level: 85 },
  { name: "Express.js", level: 85 },
]

export function SkillsSection() {
  return (
    <section className="w-full h-screen bg-gradient-to-br from-blue-900 via-black to-purple-900 flex items-center justify-center">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center text-3xl font-bold text-white md:text-4xl"
        >
          Skills in my Arsenal
        </motion.h2>
        <div className="mx-auto grid max-w-3xl gap-6 md:grid-cols-2">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="mb-2 flex justify-between text-sm text-white">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

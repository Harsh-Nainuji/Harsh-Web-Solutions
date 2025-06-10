import React from "react";
import { motion } from "framer-motion";

const skills = [
  {
    name: "React JS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    level: 90,
  },
  {
    name: "HTML5 & CSS3 / Tailwind CSS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    level: 95,
  },
  {
    name: "Bootstrap",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    level: 85,
  },
  {
    name: "jQuery",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg",
    level: 80,
  },
  {
    name: "Responsive Design",
    logo: "https://img.icons8.com/?size=100&id=5zuVgEwv1rTz&format=png&color=000000",
    level: 90,
  },
  {
    name: "Node.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    level: 95,
  },
  {
    name: "Express.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    level: 90,
  },
  {
    name: "MongoDB / PostgreSQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    level: 98,
  },
];

const SkillSection = () => {
  return (
    <section
      id="skills"
      className="relative z-10 w-full px-6 py-24 overflow-hidden bg-gradient-to-b from-black via-violet-900 to-black sm:px-10 md:px-20"

    >
      {/* Section Header */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-16 text-4xl font-extrabold tracking-tight text-center text-white"
      >
        Technical Arsenal
      </motion.h2>

      {/* Grid */}
      <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className="relative overflow-hidden rounded-2xl p-6 bg-[#1b1b2f]/80 border border-white/10 shadow-md backdrop-blur group hover:scale-[1.03] transition-transform duration-300"
          >
            {/* Glow circle */}
            <div className="absolute w-32 h-32 transition-opacity bg-purple-400 rounded-full -top-10 -right-10 opacity-20 blur-3xl group-hover:opacity-40" />

            {/* Top Row: Icon + Name */}
            <div className="relative z-10 flex items-center gap-4 mb-4">
              <img
                src={skill.logo}
                alt={skill.name}
                className="object-contain w-10 h-10"
              />
              <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
            </div>

            {/* Circular Progress */}
            <div className="relative w-24 h-24 mx-auto mt-4">
              <svg className="absolute w-full h-full transform -rotate-90">
                <circle
                  cx="48"
                  cy="48"
                  r="40"
                  stroke="#ffffff1a"
                  strokeWidth="8"
                  fill="none"
                />
                <motion.circle
                  cx="48"
                  cy="48"
                  r="40"
                  stroke="#a855f7"
                  strokeWidth="8"
                  strokeDasharray="251.2"
                  strokeDashoffset={251.2 - (251.2 * skill.level) / 100}
                  strokeLinecap="round"
                  fill="none"
                  transition={{ duration: 1.2 }}
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center text-lg font-bold text-purple-300">
                {skill.level}%
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillSection;

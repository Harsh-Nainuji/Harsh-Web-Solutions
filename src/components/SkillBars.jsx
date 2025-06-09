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
      className="relative z-10 px-6 py-24 overflow-hidden bg-gradient-to-b from-violet-900 to-black sm:px-10 md:px-20"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-16 text-4xl font-extrabold text-center text-white"
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
            className="relative p-6 overflow-hidden text-white transition-all rounded-2xl group hover:scale-105 bg-[#1a1a2e] shadow-lg hover:shadow-purple-500/40 border border-white/10"
          >
            {/* Shine effect */}
            <div className="absolute inset-0 z-0 pointer-events-none before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/10 before:to-transparent before:rotate-45 before:scale-150 before:opacity-0 group-hover:before:opacity-100 before:transition-opacity before:duration-700" />

            <div className="relative z-10 flex items-center space-x-4">
              <img
                src={skill.logo}
                alt={skill.name}
                className="object-contain w-10 h-10"
              />
              <h3 className="text-lg font-semibold">{skill.name}</h3>
            </div>

            {/* Circular Progress */}
            <div className="relative w-20 h-20 mx-auto mt-6">
              <svg className="absolute w-full h-full rotate-[-90deg]">
                <circle
                  cx="40"
                  cy="40"
                  r="32"
                  stroke="#ffffff1a"
                  strokeWidth="6"
                  fill="transparent"
                />
                <motion.circle
                  cx="40"
                  cy="40"
                  r="32"
                  stroke="#a855f7"
                  strokeWidth="6"
                  strokeDasharray="201"
                  strokeDashoffset={201 - (201 * skill.level) / 100}
                  fill="transparent"
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

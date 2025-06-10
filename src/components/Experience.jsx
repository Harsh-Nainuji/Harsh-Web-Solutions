import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Laptop, Code, Sparkles } from "lucide-react";

const experiences = [
  {
    date: "2023 – Present",
    title: "Full-Stack Web Developer (Self-Taught)",
    icon: <Code size={24} className="text-purple-300" />,
    description:
      "Started my journey through Udemy and YouTube, mastering frontend and backend technologies like React.js, Node.js, MongoDB, Express.js, and PostgreSQL. Built real-world clones and improved problem-solving through constant project work.",
  },
  {
    date: "Jan 2025 – Apr 2025",
    title: "Full Stack Developer Intern",
    company: "NovaNectar Services Pvt. Ltd.",
    icon: <Briefcase size={24} className="text-purple-300" />,
    description:
      "Worked on 5+ full-stack web apps including fitness platforms, job portals, hospital management systems, and product dashboards. Gained hands-on experience in routing, API handling, database CRUD operations, and secure file uploads.",
  },
  {
    date: "2023 – Present",
    title: "GitHub Projects & Open Source",
    icon: <Laptop size={24} className="text-purple-300" />,
    description:
      "Contributed to over 10+ GitHub repositories including Coffee Shop, Blog Site, Child Hospital, and more. My projects cover diverse stacks, feature reusable components, and emphasize clean code, responsiveness, and user-centric design.",
  },
  {
    date: "2024 – 2025",
    title: "Advanced Full-Stack Projects",
    icon: <Sparkles size={24} className="text-purple-300" />,
    description:
      "Built an AI-powered Automatic News Site and started learning Web3. Learned about JWT security, analytics dashboards, and Google Maps integration.",
  },
];

const cardVariants = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
};

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative w-full px-6 overflow-hidden py-28 bg-gradient-to-b from-black via-violet-950 to-black lg:px-24"
    >
      {/* Section Heading */}
      <div className="relative z-10 mb-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold tracking-tight text-white md:text-5xl"
        >
          My Experience
        </motion.h2>
        <p className="mt-4 text-lg text-purple-300">
          From learning to launching full-scale apps — here's my journey.
        </p>
      </div>

      {/* Timeline Grid */}
      <div className="relative z-10 grid max-w-6xl grid-cols-1 gap-10 mx-auto md:grid-cols-2">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ delay: index * 0.15, duration: 0.6, ease: "easeOut" }}
            className="relative p-6 overflow-hidden transition-all duration-500 border shadow-md group rounded-2xl border-white/20 bg-white/5 backdrop-blur-md hover:shadow-purple-500/30"
          >
            <div className="absolute w-32 h-32 transition-opacity bg-purple-400 rounded-full -top-10 -right-10 opacity-20 blur-3xl group-hover:opacity-40" />
            <div className="flex items-center gap-3 mb-3">
              {exp.icon}
              <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
            </div>
            {exp.company && (
              <p className="mb-1 text-sm font-medium text-purple-300">{exp.company}</p>
            )}
            <p className="text-sm text-purple-200">{exp.date}</p>
            <p className="mt-3 text-sm leading-relaxed text-purple-100">
              {exp.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;

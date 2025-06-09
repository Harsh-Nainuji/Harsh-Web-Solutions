import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative flex flex-col-reverse items-center justify-center min-h-screen px-6 pt-32 pb-12 bg-gradient-to-b from-black via-violet-900 to-black xl:flex-row lg:px-24">
      
      {/* Left Content */}
      <div className="z-10 flex flex-col justify-center w-full text-center xl:w-1/2 xl:text-left">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 80, damping: 18, duration: 1 }}
          className="mb-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl"
        >
          Build Modern <span className="text-violet-400">Web Solutions</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="max-w-xl mx-auto mb-6 text-base leading-relaxed text-purple-200 sm:text-lg xl:mx-0 xl:text-left"
        >
          I specialize in crafting responsive, fast, and scalable websites that help businesses grow. Clean code, modern design, and user-first development — let's build something powerful.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center xl:justify-start"
        >
          <a
            href="#projects"
            className="px-6 py-3 font-medium text-white transition rounded-lg bg-violet-700 hover:bg-violet-600"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 font-medium transition bg-white rounded-lg text-violet-700 hover:bg-gray-100"
          >
            Contact Me
          </a>
        </motion.div>
      </div>

      {/* Image / Illustration (optional) */}
      <div className="flex justify-center w-full mt-12 xl:w-1/2 xl:mt-0">
        <img
          src="/assets/hero-illustration.svg"
          alt="Developer illustration"
          className="w-full max-w-md"
        />
      </div>
    </section>
  );
};

export default HeroSection;

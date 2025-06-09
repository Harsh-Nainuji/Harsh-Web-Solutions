import React from "react";
import { motion } from "framer-motion";
import { FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import logo from "../assets/logo.jpeg";
import Tilt from "react-parallax-tilt";

const HeroSection = () => {
  return (
    <section className="relative flex flex-col-reverse items-center justify-center min-h-screen px-6 pt-32 pb-12 overflow-hidden bg-gradient-to-b from-black via-violet-900 to-black xl:flex-row lg:px-24">
      {/* Left Content */}
      <div className="z-10 flex flex-col justify-center w-full text-center xl:w-1/2 xl:text-left">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 80,
            damping: 18,
            duration: 1,
          }}
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
          I specialize in crafting responsive, fast, and scalable websites that
          help businesses grow. Clean code, modern design, and user-first
          development — let's build something powerful.
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

      {/* Right Side Profile Card */}
      <Tilt
        glareEnable={false}
        tiltMaxAngleX={8}
        tiltMaxAngleY={8}
        transitionSpeed={1200}
        className="w-full mt-10 sm:mt-12 xl:mt-0 max-w-[240px] sm:max-w-[280px] md:max-w-[320px]"
      >
        <div className="relative bg-white bg-opacity-10 backdrop-blur-md border border-white border-opacity-20 shadow-xl w-full px-6 py-8 sm:p-6 rounded-2xl text-center text-white transition-transform duration-500 hover:-translate-y-1.5 overflow-hidden group">
          {/* Shine Animation */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute w-1/3 h-full bg-gradient-to-b from-white/20 to-transparent blur-lg transform rotate-45 -translate-x-full group-hover:translate-x-[220%] transition-all duration-1000 ease-in-out" />
          </div>

          {/* Profile Image */}
          <div className="relative z-10 w-24 h-24 mx-auto overflow-hidden bg-black border-4 rounded-lg shadow-lg border-violet-400">
            <img
              src={logo}
              alt="My Logo"
              className="object-cover w-full h-full"
              loading="lazy"
            />
          </div>

          {/* Name + Title */}
          <p className="mt-5 text-base font-semibold sm:text-lg md:text-xl">
            Harsh Nainuji
            <span className="block text-sm font-light text-purple-200">
              Full Stack Developer
            </span>
          </p>

          <div className="w-full h-[1px] bg-violet-400 my-5" />

          {/* Social Links */}
          <div className="flex justify-center gap-4 text-lg sm:text-xl">
            <a
              href="https://x.com/HarshNDev"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-violet-400"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.instagram.com/harsh.websolutions/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-violet-400"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/harshnainuji/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-violet-400"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </Tilt>
    </section>
  );
};

export default HeroSection;

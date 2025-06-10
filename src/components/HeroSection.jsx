import React, { useState, Suspense, lazy } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import logo from "../assets/logo.jpeg";

const Tilt = lazy(() => import("react-parallax-tilt"));

const HeroSection = () => {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <section className="relative flex flex-col-reverse items-center justify-center min-h-screen px-6 pt-32 pb-12 overflow-hidden bg-gradient-to-b from-black via-violet-900 to-black xl:flex-row lg:px-24">
      {/* Left Content */}
      <div className="z-10 flex flex-col justify-center w-full text-center xl:w-1/2 xl:text-left">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 60, damping: 15 }}
          className="mb-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl"
        >
          Build Modern <span className="text-violet-400">Web Solutions</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="max-w-xl mx-auto mb-6 text-base leading-relaxed text-purple-200 sm:text-lg xl:mx-0"
        >
          I specialize in crafting responsive, fast, and scalable websites that
          help businesses grow. Clean code, modern design, and user-first
          development — let's build something powerful.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
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

      {/* Right Side Card */}
      <Suspense fallback={<div className="bg-gray-800 w-60 h-60 animate-pulse rounded-xl" />}>
        <Tilt
          glareEnable={false}
          tiltMaxAngleX={8}
          tiltMaxAngleY={8}
          transitionSpeed={1000}
          className="w-full mt-10 sm:mt-12 xl:mt-0 max-w-[240px] sm:max-w-[280px] md:max-w-[320px]"
        >
          <div className="relative w-full px-6 py-8 overflow-hidden text-center text-white bg-white border border-white shadow-xl bg-opacity-10 backdrop-blur-md border-opacity-20 sm:p-6 rounded-2xl group">
            {/* Shine Effect */}
            <div className="absolute inset-0 z-0 pointer-events-none">
              <div className="absolute w-1/3 h-full bg-gradient-to-b from-white/20 to-transparent blur-lg transform rotate-45 -translate-x-full group-hover:translate-x-[220%] transition-all duration-1000 ease-in-out" />
            </div>

            {/* Profile Image */}
            <div className="relative z-10 w-24 h-24 mx-auto overflow-hidden bg-black border-4 rounded-lg shadow-lg border-violet-400">
              <img
                src={logo}
                alt="My Logo"
                className={`object-cover w-full h-full transition-opacity duration-500 ${imgLoaded ? "opacity-100" : "opacity-0"}`}
                loading="lazy"
                onLoad={() => setImgLoaded(true)}
              />
            </div>

            {/* Name & Title */}
            <p className="mt-5 text-base font-semibold sm:text-lg md:text-xl">
              Harsh Nainuji
              <span className="block text-sm font-light text-purple-200">
                Full Stack Developer
              </span>
            </p>

            <div className="w-full h-[1px] bg-violet-400 my-5" />

            {/* Social Icons */}
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
      </Suspense>
    </section>
  );
};

export default HeroSection;

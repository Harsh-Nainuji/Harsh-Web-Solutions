import React from "react";
import Spline from "@splinetool/react-spline";
import { FaLinkedin, FaXTwitter, FaGithub, FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="relative w-full px-6 pt-16 pb-8 overflow-hidden text-white bg-gradient-to-t from-black to-violet-900">
      {/* Spline Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-20">
        <Spline scene="https://prod.spline.design/dHhDR18uTbKisUAR/scene.splinecode" />
      </div>

      {/* Footer Content */}
      <div className="relative z-10 flex flex-col items-center justify-between space-y-6 text-center sm:flex-row sm:space-y-0 sm:text-left sm:items-start">
        {/* Left Section */}
        <div>
          <h1 className="text-2xl font-bold text-white">Harsh Nainuji</h1>
          <p className="text-sm text-purple-200">Full Stack Developer Portfolio</p>
        </div>

        {/* Social Links */}
        <div className="flex items-center space-x-6">
          <a
            href="https://www.linkedin.com/in/harsh-nainuji"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-300 transition-colors hover:text-white"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://twitter.com/HarshNainuji"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-300 transition-colors hover:text-white"
          >
            <FaXTwitter size={24} />
          </a>
          <a
            href="https://github.com/Harsh-Nainuji"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-300 transition-colors hover:text-white"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://instagram.com/HarshNainuji"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-300 transition-colors hover:text-white"
          >
            <FaInstagram size={24} />
          </a>
        </div>

        {/* Right Section */}
        <div className="text-sm text-purple-300">
          <p>© {new Date().getFullYear()} Harsh Nainuji. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

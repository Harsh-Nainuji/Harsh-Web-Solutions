import React, { useEffect, useState } from "react";
import { FaLinkedin, FaXTwitter, FaGithub, FaInstagram } from "react-icons/fa6";

const Footer = () => {
  const [showSpline, setShowSpline] = useState(false);

  // Lazy-load Spline only after component mounts (client-side)
  useEffect(() => {
    const timeout = setTimeout(() => setShowSpline(true), 1200); // Delay Spline load
    return () => clearTimeout(timeout);
  }, []);

  return (
    <footer className="relative w-full px-6 pt-16 pb-8 overflow-hidden text-white bg-gradient-to-t from-black to-violet-900">
      {/* Lazy Spline Background */}
      {showSpline && (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-20">
         
        </div>
      )}

      {/* Footer Content */}
      <div className="relative z-10 flex flex-col items-center justify-between space-y-6 text-center sm:flex-row sm:space-y-0 sm:text-left sm:items-start">
        {/* Name & Title */}
        <div>
          <h1 className="text-2xl font-bold text-white">Harsh Nainuji</h1>
          <p className="text-sm text-purple-200">Full Stack Developer Portfolio</p>
        </div>

        {/* Social Icons */}
        <div className="flex items-center space-x-6">
          <FooterIcon href="https://www.linkedin.com/in/harsh-nainuji">
            <FaLinkedin />
          </FooterIcon>
          <FooterIcon href="https://twitter.com/HarshNainuji">
            <FaXTwitter />
          </FooterIcon>
          <FooterIcon href="https://github.com/Harsh-Nainuji">
            <FaGithub />
          </FooterIcon>
          <FooterIcon href="https://instagram.com/HarshNainuji">
            <FaInstagram />
          </FooterIcon>
        </div>

        {/* Copyright */}
        <div className="text-sm text-purple-300">
          <p>© {new Date().getFullYear()} Harsh Nainuji. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

// Reusable icon link component
const FooterIcon = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-purple-300 transition-colors hover:text-white"
  >
    <span className="text-xl">{children}</span>
  </a>
);

export default Footer;

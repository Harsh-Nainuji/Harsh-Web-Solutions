import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaTimes } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { Link as ScrollLink } from "react-scroll";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = ["Home", "About", "Projects", "Experience", "Skills", "Contact"];

  const socialLinks = [
    { icon: <FaGithub />, href: "https://github.com/Harsh-Nainuji/Harsh-Nainuji", label: "GitHub" },
    { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/harshnainuji/", label: "LinkedIn" },
    { icon: <FaTwitter />, href: "https://x.com/HarshNDev", label: "X" },
    { icon: <FaInstagram />, href: "https://www.instagram.com/harsh.websolutions/", label: "Instagram" },
  ];

  // Scroll listener for hide/show on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > lastScrollY && currentY > 80) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-transform duration-500 ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container flex items-center justify-between h-16 px-4 mx-auto shadow-sm sm:px-6 lg:px-8 md:h-20 bg-black/40 backdrop-blur-md rounded-b-xl">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="flex items-center justify-center w-10 h-10 text-2xl font-extrabold rounded-full text-violet-600 bg-gradient-to-r from-gray-700 to-gray-400">
            H
          </div>
          <span className="text-lg font-semibold text-gray-200 select-none">Harsh</span>
        </div>

        {/* Desktop Nav */}
        <nav className="items-center hidden space-x-8 lg:flex">
          {navItems.map((item) => (
            <ScrollLink
              key={item}
              to={item.toLowerCase()}
              smooth
              duration={500}
              offset={-80}
              className="font-medium text-gray-300 transition-colors duration-300 cursor-pointer hover:text-violet-400"
            >
              {item}
            </ScrollLink>
          ))}
        </nav>

        {/* Desktop Socials */}
        <div className="items-center hidden space-x-5 md:flex">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="text-lg text-gray-300 transition-colors duration-300 hover:text-violet-400"
            >
              {link.icon}
            </a>
          ))}

          <a
            href="mailto:nainujiharsh@gmail.com"
            className="px-5 py-2 ml-6 text-sm font-semibold transition-colors duration-300 bg-gray-300 rounded-lg select-none text-violet-700 hover:bg-violet-700 hover:text-white"
          >
            Let's Work
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-300 transition-colors duration-300 hover:text-violet-400 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes size={26} /> : <FiMenu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="backdrop-blur-md bg-black/60 rounded-b-2xl lg:hidden">
          <div className="px-6 py-6 space-y-6 text-white">
            <nav className="flex flex-col space-y-4 text-lg font-medium">
              {navItems.map((item) => (
                <ScrollLink
                  key={item}
                  to={item.toLowerCase()}
                  smooth
                  duration={500}
                  offset={-70}
                  onClick={toggleMenu}
                  className="text-gray-200 cursor-pointer hover:text-violet-400"
                >
                  {item}
                </ScrollLink>
              ))}
            </nav>

            <div className="flex items-center justify-between pt-4 border-t border-gray-700">
              <div className="flex space-x-6">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="text-xl text-gray-300 hover:text-violet-400"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
              <a
                href="mailto:nainujiharsh@gmail.com"
                className="px-4 py-2 text-sm font-semibold text-white rounded-md bg-violet-600 hover:bg-violet-700"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

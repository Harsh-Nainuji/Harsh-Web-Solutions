import React, { useRef } from "react";
import { motion } from "framer-motion";
import "./AboutSection.css";

const AboutSection = () => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;

    card.style.transition = "transform 0.3s ease-out";
    card.style.transform = "rotateX(0deg) rotateY(0deg)";
    setTimeout(() => (card.style.transition = ""), 300); // Reset transition
  };

  return (
    <section
      id="about"
      className="relative flex flex-col items-center justify-center min-h-screen px-4 pt-24 pb-16 overflow-hidden bg-gradient-to-b from-black via-violet-900 to-black sm:px-6 md:px-12"
    >
      <div
        className="about-card-wrapper"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <motion.div
          ref={cardRef}
          className="about-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="shine-overlay" />
          <h2 className="about-heading">About Me</h2>
          <p className="about-text">
            I’m a full-stack developer who loves solving problems with clean code and thoughtful design.
            <br /><br />
            From idea to deployment, I help businesses bring their vision to life — whether it's a sleek portfolio, a data-driven dashboard, or an e-commerce site.
            <br /><br />
            🚀 Let’s build something great together.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;

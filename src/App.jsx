import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import Projects from './components/Projects';
import Experience from './components/Experience';
import SkillBars from './components/SkillBars';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';


export default function App() {
  return (
    <>
    <Header />   
    <HeroSection />
    <AboutSection />
    <Projects />
    <Experience />
    <SkillBars />
    <ContactSection />
    <Footer />
    </>
  )
}
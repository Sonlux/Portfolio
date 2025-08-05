
import React from 'react';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Achievements from '@/components/Achievements';
import Leadership from '@/components/Leadership';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import QuantumCursor from '@/components/QuantumCursor';
import LetterGlitch from '@/components/LetterGlitch';

const Index = () => {
  return (
    <div className="min-h-screen relative">
      {/* Fixed Letter Glitch Background */}
      <div className="fixed inset-0 w-full h-full">
        <LetterGlitch
          glitchSpeed={50}
          centerVignette={true}
          outerVignette={false}
          smooth={true}
        />
      </div>
      
      {/* Main Content */}
      <div className="relative z-10">
        <QuantumCursor />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Leadership />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Index;

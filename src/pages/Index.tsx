
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

const Index = () => {
  return (
    <div className="min-h-screen">
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
  );
};

export default Index;

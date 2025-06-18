
import React, { useEffect, useState, useRef } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Download, Code, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  
  const roles = ['AI Innovator', 'Cloud Architect', 'Problem Solver', 'Tech Visionary', 'Code Artist'];

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden"
    >
      {/* Matrix Rain Effect */}
      <div className="matrix-rain absolute inset-0" style={{ zIndex: 2 }} />
      
      {/* Neural Network Background */}
      <div className="neural-network absolute inset-0" style={{ zIndex: 3 }}>
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="neural-node"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>
      
      {/* Cyber Grid */}
      <div className="cyber-grid absolute inset-0" style={{ zIndex: 4 }} />
      
      {/* Liquid Background */}
      <div className="liquid-bg absolute inset-0" style={{ zIndex: 5 }} />
      
      {/* Floating geometric shapes */}
      <div className="absolute inset-0" style={{ zIndex: 6 }}>
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="floating-element absolute opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`
            }}
          >
            <div 
              className="w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-600 rotate-45"
              style={{
                clipPath: i % 3 === 0 ? 'polygon(50% 0%, 0% 100%, 100% 100%)' : 
                         i % 3 === 1 ? 'circle(50%)' : 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'
              }}
            />
          </div>
        ))}
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className={`transition-all duration-1000 ${isLoaded ? 'fade-in-up visible' : 'fade-in-up'}`}>
          {/* Glitch effect on name */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            <span className="text-reveal">
              Hi, I'm{' '}
              <span 
                className="holographic-text glitch"
                data-text="Lakshan"
              >
                Lakshan
              </span>
            </span>
          </h1>
          
          {/* Advanced role typing effect with morphing */}
          <div className="text-2xl md:text-4xl text-gray-300 mb-4 font-light h-12 flex items-center justify-center">
            <Sparkles className="w-6 h-6 mr-3 text-blue-400 animate-pulse" />
            <span 
              key={currentRole} 
              className="holographic-text morphing-card transition-all duration-500 px-4 py-2 rounded-lg backdrop-blur-sm"
            >
              {roles[currentRole]}
            </span>
            <Code className="w-6 h-6 ml-3 text-purple-400 animate-pulse" />
          </div>
          
          <div className="text-lg text-gray-400 max-w-4xl mx-auto mb-8 leading-relaxed">
            <span className="slide-in-left">
              Crafting the future through{' '}
              <span className="holographic-text font-semibold">AI/ML innovation</span>,{' '}
              <span className="holographic-text font-semibold">Smart Cities</span>, and{' '}
              <span className="holographic-text font-semibold">cutting-edge technology</span>.
              Transforming ideas into reality with passion and precision.
            </span>
          </div>
          
          {/* Enhanced interactive buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button 
              variant="outline" 
              size="lg" 
              className="cosmic-button morphing-card bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 transition-all duration-500 hover:scale-110 hover:shadow-2xl group"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Sparkles className="w-4 h-4 mr-2 group-hover:animate-spin" />
              Explore My Universe
            </Button>
            
            <Button 
              size="lg" 
              className="cosmic-button morphing-card bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 hover:from-blue-600 hover:via-purple-700 hover:to-pink-600 text-white border-0 transition-all duration-500 hover:scale-110 hover:shadow-2xl group"
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/resume.pdf';
                link.download = 'Lakshan_AS_Resume.pdf';
                link.click();
              }}
            >
              <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
              Download CV
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="cosmic-button morphing-card bg-gradient-to-r from-green-500/20 to-emerald-600/20 backdrop-blur-md border-green-400/30 text-green-300 hover:bg-green-500/30 transition-all duration-500 hover:scale-110 hover:shadow-2xl group"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Mail className="w-4 h-4 mr-2 group-hover:animate-pulse" />
              Let's Connect
            </Button>
          </div>
          
          {/* Enhanced social links */}
          <div className="flex justify-center space-x-6">
            {[
              { icon: Mail, href: "mailto:lakshanamineni@gmail.com", color: "from-red-500 to-pink-500" },
              { icon: Linkedin, href: "https://linkedin.com/in/lakshan-amineni", color: "from-blue-600 to-blue-800" },
              { icon: Github, href: "https://github.com/Sonlux", color: "from-gray-700 to-gray-900" }
            ].map((social, index) => (
              <a 
                key={index}
                href={social.href}
                className="morphing-card group relative p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-125"
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <social.icon 
                  size={24} 
                  className="text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300"
                />
                <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${social.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
              </a>
            ))}
          </div>
        </div>
      </div>
      
      {/* Enhanced scroll indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer group"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <div className="morphing-card p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 group-hover:bg-white/20 transition-all duration-300">
          <ChevronDown 
            size={32} 
            className="text-white/60 group-hover:text-white transition-colors duration-300" 
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;


import React, { useEffect, useState } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = ['Innovator', 'Engineer', 'Problem Solver', 'AI Developer', 'Cloud Specialist'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating particles */}
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-30 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
        
        {/* Network connections */}
        <div className="absolute inset-0">
          <svg className="w-full h-full opacity-20">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>
            </defs>
            <line x1="10%" y1="20%" x2="90%" y2="80%" stroke="url(#lineGradient)" strokeWidth="1" className="animate-pulse" />
            <line x1="20%" y1="80%" x2="80%" y2="20%" stroke="url(#lineGradient)" strokeWidth="1" className="animate-pulse" />
            <line x1="50%" y1="10%" x2="50%" y2="90%" stroke="url(#lineGradient)" strokeWidth="1" className="animate-pulse" />
          </svg>
        </div>
        
        {/* Gradient orbs */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-40 left-40 w-60 h-60 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '0.5s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Hi, I'm <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Lakshan
            </span>
          </h1>
          
          {/* Animated role typing effect */}
          <div className="text-2xl md:text-4xl text-gray-300 mb-4 font-light h-12 flex items-center justify-center">
            <span className="mr-2">—</span>
            <span key={currentRole} className="animate-fade-in text-gradient bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {roles[currentRole]}
            </span>
          </div>
          
          <p className="text-lg text-gray-400 max-w-4xl mx-auto mb-8 leading-relaxed">
            Passionate about building real-world impact through <span className="text-blue-400">AI/ML</span>, 
            <span className="text-purple-400"> Smart Cities</span>, and <span className="text-pink-400">AI-for-good</span>. 
            Specializing in anomaly detection, environmental monitoring, and scalable cloud infrastructure.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all duration-300 hover:scale-105"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0 transition-all duration-300 hover:scale-105"
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/resume.pdf';
                link.download = 'Lakshan_AS_Resume.pdf';
                link.click();
              }}
            >
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="bg-green-500/20 backdrop-blur-sm border-green-400/30 text-green-300 hover:bg-green-500/30 transition-all duration-300 hover:scale-105"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
          </div>
          
          <div className="flex justify-center space-x-6">
            <a 
              href="mailto:lakshanamineni@gmail.com" 
              className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 transform p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20"
            >
              <Mail size={24} />
            </a>
            <a 
              href="https://linkedin.com/in/lakshan-amineni" 
              className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 transform p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="https://github.com" 
              className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 transform p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20"
            >
              <Github size={24} />
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown 
          size={32} 
          className="text-white/60 cursor-pointer" 
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        />
      </div>
    </section>
  );
};

export default Hero;


import React from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-40 left-40 w-60 h-60 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-500"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              LAKSHAN.A.S
            </span>
          </h1>
          <div className="text-xl md:text-2xl text-gray-300 mb-4 font-light">
            AI Developer & Cloud Computing Specialist
          </div>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-8 leading-relaxed">
            Leveraging expertise in AI development, cloud computing, and real-time monitoring to drive innovation and efficiency. 
            Skilled in designing scalable solutions and optimizing system performance with data-driven insights.
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
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
          </div>
          
          <div className="flex justify-center space-x-6">
            <a 
              href="mailto:lakshanamineni@gmail.com" 
              className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 transform"
            >
              <Mail size={24} />
            </a>
            <a 
              href="https://linkedin.com/in/lakshan-amineni" 
              className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 transform"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="https://github.com" 
              className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 transform"
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

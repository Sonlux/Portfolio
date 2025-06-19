
import React, { useEffect, useState, useRef } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Download, Zap, Code2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  
  const roles = ['Full Stack Developer', 'AI/ML Engineer', 'Creative Problem Solver', 'Tech Innovator', 'Software Architect'];

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Cyberpunk Background */}
      <div className="cyber-bg absolute inset-0" />
      
      {/* Cyberpunk Grid */}
      <div className="cyber-grid absolute inset-0" />
      
      {/* Floating neon particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="cyber-particles absolute opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`
            }}
          >
            <div 
              className="w-2 h-2 bg-gradient-to-r from-pink-400 to-cyan-400 rounded-full blur-sm"
              style={{
                boxShadow: '0 0 10px currentColor'
              }}
            />
          </div>
        ))}
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className={`transition-all duration-1000 ${isLoaded ? 'cyber-fade-in visible' : 'cyber-fade-in'}`}>
          {/* Cyberpunk name presentation */}
          <h1 className="text-6xl md:text-8xl font-display cyber-heading text-white mb-8 tracking-tight">
            <span className="cyber-fade-in visible">
              Hello, I'm{' '}
              <span className="cyber-text font-bold">
                Lakshan
              </span>
            </span>
          </h1>
          
          {/* Enhanced role display */}
          <div className="text-xl md:text-3xl text-gray-300 mb-6 font-light h-10 flex items-center justify-center">
            <Code2 className="w-5 h-5 mr-3 text-pink-400" />
            <span 
              key={currentRole} 
              className="cyber-card transition-all duration-700 px-6 py-2 rounded-full font-medium text-white"
            >
              {roles[currentRole]}
            </span>
            <Zap className="w-5 h-5 ml-3 text-cyan-400" />
          </div>
          
          <div className="text-lg text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed font-light cyber-text-body">
            <span className="cyber-slide-in visible">
              Passionate about creating innovative solutions through{' '}
              <span className="text-pink-400 font-medium">cutting-edge technology</span>,{' '}
              <span className="text-cyan-400 font-medium">machine learning</span>, and{' '}
              <span className="text-purple-400 font-medium">full-stack development</span>.
              Transforming ideas into scalable, impactful applications.
            </span>
          </div>
          
          {/* Cyberpunk action buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <Button 
              variant="outline" 
              size="lg" 
              className="cyber-button px-8 py-3 font-medium border-pink-500/50 hover:border-cyan-400"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Zap className="w-4 h-4 mr-2" />
              View My Work
            </Button>
            
            <Button 
              size="lg" 
              className="cyber-button bg-gradient-to-r from-pink-600 to-cyan-600 hover:from-pink-500 hover:to-cyan-500 text-white border-0 px-8 py-3 font-medium"
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
              className="cyber-button px-8 py-3 font-medium border-purple-500/50 hover:border-pink-400"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Mail className="w-4 h-4 mr-2" />
              Get In Touch
            </Button>
          </div>
          
          {/* Enhanced social links */}
          <div className="flex justify-center space-x-8 mb-16">
            {[
              { icon: Mail, href: "mailto:lakshanamineni@gmail.com", label: "Email", color: "text-pink-400" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/lakshan2810/", label: "LinkedIn", color: "text-cyan-400" },
              { icon: Github, href: "https://github.com/Sonlux", label: "GitHub", color: "text-purple-400" }
            ].map((social, index) => (
              <a 
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`cyber-card group p-4 rounded-full ${social.color} hover:text-white transition-all duration-500 cyber-glow`}
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
                aria-label={social.label}
              >
                <social.icon size={24} />
              </a>
            ))}
          </div>
        </div>
      </div>
      
      {/* Cyberpunk scroll indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer group"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <div className="cyber-card p-3 rounded-full text-gray-400 group-hover:text-cyan-400 transition-all duration-500">
          <ChevronDown 
            size={24} 
            className="animate-bounce" 
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

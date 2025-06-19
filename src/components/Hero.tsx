
import React, { useEffect, useState, useRef } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Download, Palette, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  
  const roles = ['UI/UX Designer', 'Creative Artist', 'Digital Craftsman', 'Visual Storyteller', 'Design Innovator'];

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
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 overflow-hidden"
    >
      {/* Artistic Background */}
      <div className="artistic-bg absolute inset-0" />
      
      {/* Elegant Grid */}
      <div className="elegant-grid absolute inset-0" />
      
      {/* Floating artistic elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="floating-smooth absolute opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`
            }}
          >
            <div 
              className="w-3 h-3 bg-gradient-to-r from-indigo-300 to-purple-300 rounded-full blur-sm"
            />
          </div>
        ))}
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className={`transition-all duration-1000 ${isLoaded ? 'fade-in-elegant visible' : 'fade-in-elegant'}`}>
          {/* Elegant name presentation */}
          <h1 className="text-6xl md:text-8xl font-display font-light text-slate-800 mb-8 tracking-tight">
            <span className="fade-in-elegant visible">
              Hello, I'm{' '}
              <span className="elegant-text font-medium">
                Lakshan
              </span>
            </span>
          </h1>
          
          {/* Refined role display */}
          <div className="text-xl md:text-3xl text-slate-600 mb-6 font-light h-10 flex items-center justify-center">
            <Palette className="w-5 h-5 mr-3 text-indigo-400" />
            <span 
              key={currentRole} 
              className="artistic-card transition-all duration-700 px-6 py-2 rounded-full font-medium"
            >
              {roles[currentRole]}
            </span>
            <Sparkles className="w-5 h-5 ml-3 text-purple-400" />
          </div>
          
          <div className="text-lg text-slate-500 max-w-4xl mx-auto mb-12 leading-relaxed font-light">
            <span className="slide-in-elegant visible">
              Crafting beautiful digital experiences through{' '}
              <span className="text-slate-700 font-medium">thoughtful design</span>,{' '}
              <span className="text-slate-700 font-medium">innovative solutions</span>, and{' '}
              <span className="text-slate-700 font-medium">artistic vision</span>.
              Transforming ideas into elegant, user-centered designs.
            </span>
          </div>
          
          {/* Elegant action buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <Button 
              variant="outline" 
              size="lg" 
              className="artistic-button px-8 py-3 text-slate-700 hover:text-slate-900 font-medium"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Sparkles className="w-4 h-4 mr-2" />
              View My Work
            </Button>
            
            <Button 
              size="lg" 
              className="artistic-button bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white border-0 px-8 py-3 font-medium"
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
              className="artistic-button px-8 py-3 text-slate-700 hover:text-slate-900 font-medium"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Mail className="w-4 h-4 mr-2" />
              Get In Touch
            </Button>
          </div>
          
          {/* Refined social links */}
          <div className="flex justify-center space-x-8 mb-16">
            {[
              { icon: Mail, href: "mailto:lakshanamineni@gmail.com", label: "Email" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/lakshan2810/", label: "LinkedIn" },
              { icon: Github, href: "https://github.com/Sonlux", label: "GitHub" }
            ].map((social, index) => (
              <a 
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="artistic-card group p-4 rounded-full text-slate-600 hover:text-slate-800 transition-all duration-500"
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
      
      {/* Elegant scroll indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer group"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <div className="artistic-card p-3 rounded-full text-slate-400 group-hover:text-slate-600 transition-all duration-500">
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

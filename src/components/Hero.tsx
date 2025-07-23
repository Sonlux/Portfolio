
import React, { useEffect, useState, useRef } from "react";
import {
  ChevronDown,
  Github,
  Linkedin,
  Mail,
  Download,
  Zap,
  Code2,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const roles = [
    "Full Stack Developer",
    "AI/ML Engineer",
    "Creative Problem Solver",
    "Tech Innovator",
    "Software Architect",
  ];

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // More aggressive throttling for better performance
  useEffect(() => {
    let ticking = false;
    let lastUpdate = 0;
    const throttleDelay = 50; // Increased throttle delay
    
    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastUpdate < throttleDelay) return;
      
      if (!ticking) {
        requestAnimationFrame(() => {
          setMousePos({ x: e.clientX, y: e.clientY });
          lastUpdate = now;
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Optimized text glow effect
  const renderEnhancedGlowingText = (text: string) => {
    return (
      <span className="relative inline-block">
        {text.split("").map((char, i) => (
          <span
            key={i}
            className="relative inline-block transition-transform duration-200 hover:scale-105"
            style={{
              textShadow: `
                0 0 8px rgba(56, 189, 248, 0.6),
                0 0 16px rgba(56, 189, 248, 0.4),
                0 0 32px rgba(56, 189, 248, 0.2),
                0 0 64px rgba(236, 72, 153, 0.1)
              `,
              animation: `glow-pulse 3s ease-in-out infinite`,
              animationDelay: `${i * 0.05}s`,
            }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </span>
    );
  };

  return (
    <section
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Apple-style Background */}
      <div className="cyber-bg absolute inset-0" />
      <div className="cyber-grid absolute inset-0" />

      {/* Subtle floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="cyber-particles absolute w-1 h-1 bg-white/10 rounded-full"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
              animationDelay: `${i * 1.5}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Optimized ambient light following cursor */}
      <div
        className="absolute pointer-events-none transition-all duration-700 ease-out"
        style={{
          left: mousePos.x - 150,
          top: mousePos.y - 150,
          width: 300,
          height: 300,
          background: `radial-gradient(circle, rgba(56, 189, 248, 0.08) 0%, rgba(236, 72, 153, 0.04) 50%, transparent 70%)`,
          borderRadius: '50%',
          filter: 'blur(30px)',
          transform: 'translate3d(0, 0, 0)',
        }}
      />

      <div className="container mx-auto px-6 text-center relative z-10">
        <div
          className={`transition-all duration-800 ${
            isLoaded ? "cyber-fade-in visible" : "cyber-fade-in"
          }`}
        >
          {/* Enhanced interactive heading with optimized glow */}
          <h1
            ref={headingRef}
            className="text-6xl md:text-8xl font-display cyber-heading text-white mb-8 tracking-tight relative"
            style={{ userSelect: "none" }}
          >
            {renderEnhancedGlowingText("Hello, I'm Lakshan")}
          </h1>

          {/* Enhanced role display */}
          <div className="text-xl md:text-3xl text-gray-300 mb-6 font-light h-10 flex items-center justify-center">
            <Code2 className="w-5 h-5 mr-3 text-pink-400" />
            <span
              key={currentRole}
              className="cyber-card transition-all duration-500 px-6 py-2 rounded-full font-medium text-white"
              style={{
                background: `linear-gradient(135deg, rgba(56, 189, 248, 0.1) 0%, rgba(236, 72, 153, 0.1) 100%)`,
                border: '1px solid rgba(56, 189, 248, 0.3)',
                boxShadow: '0 0 15px rgba(56, 189, 248, 0.15)',
              }}
            >
              {roles[currentRole]}
            </span>
            <Zap className="w-5 h-5 ml-3 text-cyan-400" />
          </div>

          <div className="text-lg text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed font-light cyber-text-body">
            <span className="cyber-slide-in visible">
              Passionate about creating innovative solutions through{" "}
              <span className="text-pink-400 font-medium">
                cutting-edge technology
              </span>
              ,{" "}
              <span className="text-cyan-400 font-medium">
                machine learning
              </span>
              , and{" "}
              <span className="text-purple-400 font-medium">
                full-stack development
              </span>
              . Transforming ideas into scalable, impactful applications.
            </span>
          </div>

          {/* Enhanced action buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <Button
              variant="outline"
              size="lg"
              className="cyber-button px-8 py-3 font-medium border-pink-500/50 hover:border-cyan-400"
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <Zap className="w-4 h-4 mr-2" />
              View My Work
            </Button>

            <Button
              size="lg"
              className="cyber-button px-8 py-3 font-medium"
              style={{
                background: `linear-gradient(135deg, rgba(236, 72, 153, 0.8) 0%, rgba(56, 189, 248, 0.8) 100%)`,
                border: '1px solid rgba(56, 189, 248, 0.5)',
                boxShadow: '0 0 15px rgba(236, 72, 153, 0.2)',
              }}
              onClick={() => {
                const link = document.createElement("a");
                link.href = "/resume.pdf";
                link.download = "Lakshan_CV.pdf";
                link.click();
              }}
            >
              <Download className="w-4 h-4 mr-2" />
              Download CV
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="cyber-button px-8 py-3 font-medium border-purple-500/50 hover:border-pink-400"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <Mail className="w-4 h-4 mr-2" />
              Get In Touch
            </Button>
          </div>

          {/* Enhanced social links */}
          <div className="flex justify-center space-x-8 mb-16">
            {[
              {
                icon: Mail,
                href: "mailto:lakshanamineni@gmail.com",
                label: "Email",
                color: "text-pink-400",
              },
              {
                icon: Linkedin,
                href: "https://www.linkedin.com/in/lakshan2810/",
                label: "LinkedIn",
                color: "text-cyan-400",
              },
              {
                icon: Github,
                href: "https://github.com/Sonlux",
                label: "GitHub",
                color: "text-purple-400",
              },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`cyber-card group p-4 rounded-full ${social.color} hover:text-white transition-all duration-300 cyber-glow`}
                style={{
                  animationDelay: `${index * 0.1}s`,
                  background: `rgba(24, 24, 27, 0.6)`,
                  backdropFilter: 'blur(10px)',
                }}
                aria-label={social.label}
              >
                <social.icon size={24} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer group"
        onClick={() =>
          document
            .getElementById("about")
            ?.scrollIntoView({ behavior: "smooth" })
        }
      >
        <div className="cyber-card p-3 rounded-full text-gray-400 group-hover:text-cyan-400 transition-all duration-300">
          <ChevronDown size={24} className="animate-bounce" />
        </div>
      </div>

      <style>{`
        @keyframes glow-pulse {
          0%, 100% {
            text-shadow: 
              0 0 8px rgba(56, 189, 248, 0.6),
              0 0 16px rgba(56, 189, 248, 0.4),
              0 0 32px rgba(56, 189, 248, 0.2);
          }
          50% {
            text-shadow: 
              0 0 12px rgba(56, 189, 248, 0.8),
              0 0 24px rgba(56, 189, 248, 0.6),
              0 0 48px rgba(56, 189, 248, 0.4),
              0 0 80px rgba(236, 72, 153, 0.2);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;

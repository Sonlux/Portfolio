
import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
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

  // Clean, refined text without excessive glow
  const renderEnhancedText = (text: string) => {
    return (
      <span className="relative inline-block">
        {text.split("").map((char, i) => (
          <span
            key={i}
            className="relative inline-block transition-all duration-300"
            style={{
              textShadow: `
                0 1px 2px rgba(0, 0, 0, 0.1),
                0 0 8px rgba(56, 189, 248, 0.1)
              `,
              animation: `subtle-glow 4s ease-in-out infinite`,
              animationDelay: `${i * 0.03}s`,
            }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </span>
    );
  };

  return (
    <motion.section
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      {/* Apple-style Background */}
      <div className="cyber-bg absolute inset-0" />
      <div className="cyber-grid absolute inset-0" />

      {/* Subtle floating elements */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="cyber-particles absolute w-1 h-1 bg-white/10 rounded-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: [0.4, 0.6, 0.4], 
              y: [0, -10, 0] 
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: i * 1.5,
              ease: "easeInOut"
            }}
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
            }}
          />
        ))}
      </motion.div>

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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          {/* Enhanced interactive heading with optimized glow */}
          <motion.h1
            ref={headingRef}
            className="text-6xl md:text-8xl font-display cyber-heading text-white mb-8 tracking-tight relative"
            style={{ userSelect: "none" }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          >
            {renderEnhancedText("Hello, I'm Lakshan")}
          </motion.h1>

          {/* Enhanced role display */}
          <motion.div 
            className="text-xl md:text-3xl text-gray-300 mb-6 font-light h-10 flex items-center justify-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          >
            <motion.div
              className="w-5 h-5 mr-3 text-pink-400"
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <Code2 className="w-5 h-5" />
            </motion.div>
            <motion.span
              key={currentRole}
              className="cyber-card transition-all duration-500 px-6 py-2 rounded-full font-medium text-white"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              style={{
                background: `linear-gradient(135deg, rgba(56, 189, 248, 0.1) 0%, rgba(236, 72, 153, 0.1) 100%)`,
                border: '1px solid rgba(56, 189, 248, 0.3)',
                boxShadow: '0 0 15px rgba(56, 189, 248, 0.15)',
              }}
            >
              {roles[currentRole]}
            </motion.span>
            <motion.div
              className="w-5 h-5 ml-3 text-cyan-400"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <Zap className="w-5 h-5" />
            </motion.div>
          </motion.div>

          <motion.div 
            className="text-lg text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed font-light cyber-text-body"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          >
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
          </motion.div>

          {/* Enhanced action buttons */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1, ease: "easeOut" }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
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
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
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
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
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
            </motion.div>
          </motion.div>

          {/* Enhanced social links */}
          <motion.div 
            className="flex justify-center space-x-8 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
          >
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
              <motion.a
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
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 + index * 0.1, duration: 0.5 }}
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer group"
        onClick={() =>
          document
            .getElementById("about")
            ?.scrollIntoView({ behavior: "smooth" })
        }
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        whileHover={{ scale: 1.1 }}
      >
        <div className="cyber-card p-3 rounded-full text-gray-400 group-hover:text-cyan-400 transition-all duration-300">
          <ChevronDown size={24} className="animate-bounce" />
        </div>
      </motion.div>

      <style>{`
        @keyframes subtle-glow {
          0%, 100% {
            text-shadow: 
              0 1px 2px rgba(0, 0, 0, 0.1),
              0 0 6px rgba(56, 189, 248, 0.08);
          }
          50% {
            text-shadow: 
              0 1px 2px rgba(0, 0, 0, 0.1),
              0 0 12px rgba(56, 189, 248, 0.12),
              0 0 24px rgba(236, 72, 153, 0.04);
          }
        }
      `}</style>
    </motion.section>
  );
};

export default Hero;

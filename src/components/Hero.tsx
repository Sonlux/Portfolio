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
  const [glowX, setGlowX] = useState(50);
  const [glowPos, setGlowPos] = useState({ x: 0, y: 0 });

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

  // Mouse move handler for heading glow
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!headingRef.current) return;
      const rect = headingRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      setGlowX(Math.max(0, Math.min(100, x)));
    };
    const heading = headingRef.current;
    if (heading) {
      heading.addEventListener("mousemove", handleMouseMove);
      heading.addEventListener("mouseleave", () => setGlowX(50));
    }
    return () => {
      if (heading) {
        heading.removeEventListener("mousemove", handleMouseMove);
        heading.removeEventListener("mouseleave", () => setGlowX(50));
      }
    };
  }, []);

  // Mouse move handler for per-letter glow
  useEffect(() => {
    const heading = headingRef.current;
    if (!heading) return;
    const handleMove = (e: MouseEvent) => {
      const rect = heading.getBoundingClientRect();
      setGlowPos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };
    heading.addEventListener("mousemove", handleMove);
    heading.addEventListener("mouseleave", () => setGlowPos({ x: 0, y: 0 }));
    return () => {
      heading.removeEventListener("mousemove", handleMove);
      heading.removeEventListener("mouseleave", () =>
        setGlowPos({ x: 0, y: 0 })
      );
    };
  }, []);

  // Helper to render glowing letters
  const renderGlowingText = (text: string) => {
    return (
      <span style={{ display: "inline-block", position: "relative" }}>
        {text.split("").map((char, i) => (
          <span
            key={i}
            style={{
              display: "inline-block",
              position: "relative",
              transition: "text-shadow 0.15s",
              textShadow:
                glowPos.x && glowPos.y && headingRef.current
                  ? (() => {
                      const rect = headingRef.current!.getBoundingClientRect();
                      const letterWidth = rect.width / text.length;
                      const letterHeight = rect.height;
                      const letterX = i * letterWidth + letterWidth / 2;
                      const letterY = letterHeight / 2;
                      const dx = glowPos.x - letterX;
                      const dy = glowPos.y - letterY;
                      const dist = Math.sqrt(dx * dx + dy * dy);
                      const intensity = Math.max(0, 1 - dist / 180);
                      return `0 0 ${32 + 48 * intensity}px rgba(56,189,248,${
                        0.7 * intensity
                      }), 0 0 ${80 * intensity}px #38bdf8`;
                    })()
                  : "0 0 32px #38bdf8",
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
      {/* Cyberpunk Background */}
      <div className="cyber-bg absolute inset-0" />

      {/* Cyberpunk Grid */}
      <div className="cyber-grid absolute inset-0" />

      {/* Static neon particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="cyber-particles absolute opacity-60"
            style={{
              left: `${10 + (i % 5) * 18}%`,
              top: `${10 + Math.floor(i / 5) * 30}%`,
              animation: "none",
            }}
          >
            <div
              className="w-2 h-2 bg-gradient-to-r from-pink-400 to-cyan-400 rounded-full blur-sm"
              style={{
                boxShadow: "0 0 10px currentColor",
              }}
            />
          </div>
        ))}
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div
          className={`transition-all duration-1000 ${
            isLoaded ? "cyber-fade-in visible" : "cyber-fade-in"
          }`}
        >
          {/* Interactive per-letter glow heading */}
          <h1
            ref={headingRef}
            className="text-6xl md:text-8xl font-display cyber-heading text-white mb-8 tracking-tight"
            style={{ userSelect: "none" }}
          >
            {renderGlowingText("Hello, I'm Lakshan")}
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

          {/* Cyberpunk action buttons */}
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
              className="cyber-button bg-gradient-to-r from-pink-600 to-cyan-600 hover:from-pink-500 hover:to-cyan-500 text-white border-0 px-8 py-3 font-medium"
              onClick={() => {
                const link = document.createElement("a");
                link.href = "/resume.pdf";
                link.download = "Lakshan_AS_Resume.pdf";
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
                className={`cyber-card group p-4 rounded-full ${social.color} hover:text-white transition-all duration-500 cyber-glow`}
                style={{
                  animationDelay: `${index * 0.1}s`,
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
        onClick={() =>
          document
            .getElementById("about")
            ?.scrollIntoView({ behavior: "smooth" })
        }
      >
        <div className="cyber-card p-3 rounded-full text-gray-400 group-hover:text-cyan-400 transition-all duration-500">
          <ChevronDown size={24} className="animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

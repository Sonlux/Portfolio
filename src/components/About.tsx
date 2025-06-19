import React, { useEffect, useRef, useState, useMemo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Zap, Target, Rocket, Brain, Code2, Award } from "lucide-react";

const About = () => {
  const [visibleElements, setVisibleElements] = useState<Set<number>>(
    new Set()
  );
  const observerRef = useRef<IntersectionObserver | null>(null);

  const stats = useMemo(
    () => [
      {
        value: "8.07",
        label: "CGPA",
        description: "Academic Excellence",
        icon: Brain,
        gradient: "from-cyan-400 to-blue-500",
      },
      {
        value: "8+",
        label: "Major Projects",
        description: "Creative Solutions",
        icon: Code2,
        gradient: "from-pink-400 to-purple-500",
      },
      {
        value: "5+",
        label: "Certifications",
        description: "AWS & Tech",
        icon: Award,
        gradient: "from-green-400 to-emerald-500",
      },
      {
        value: "3+",
        label: "Hackathons",
        description: "Top 5 Finalist",
        icon: Zap,
        gradient: "from-orange-400 to-red-500",
      },
    ],
    []
  );

  // For main card and stats
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [visibleCards, setVisibleCards] = useState<boolean[]>(() =>
    Array(stats.length + 1).fill(false)
  );
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    for (let i = 0; i < stats.length + 1; i++) {
      if (!cardRefs.current[i]) continue;
      const observer = new window.IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => {
              const updated = [...prev];
              updated[i] = true;
              return updated;
            });
            observer.disconnect();
          }
        },
        { threshold: 0.15 }
      );
      observer.observe(cardRefs.current[i]!);
      observers.push(observer);
    }
    return () => observers.forEach((obs) => obs.disconnect());
  }, [stats.length]);

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Cyberpunk background elements */}
      <div className="cyber-bg absolute inset-0" />
      <div className="cyber-grid absolute inset-0" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-display cyber-heading cyber-text mb-6">
            About Me
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-pink-500 to-cyan-500 mx-auto mb-8" />
          <p className="text-xl text-gray-300 font-light max-w-2xl mx-auto">
            Crafting innovative solutions with passion and precision
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* About Me Content */}
          <Card
            className={`cyber-card group h-full flex items-center justify-center p-8 border-0 cyber-fade-in${
              visibleCards[0] ? " visible" : ""
            }`}
            data-index={0}
            ref={(el) => (cardRefs.current[0] = el)}
          >
            <CardContent className="p-0">
              <div className="space-y-6 cyber-text-body">
                <p className="text-lg leading-relaxed text-gray-300">
                  I'm currently pursuing my{" "}
                  <span className="font-medium text-pink-400">
                    B.Tech in Computer Science Engineering
                  </span>{" "}
                  with a specialization in{" "}
                  <span className="font-medium text-cyan-400">AI & ML</span>,
                  maintaining an impressive{" "}
                  <span className="font-medium text-purple-400">8.07 CGPA</span>
                  . My journey combines technical expertise with innovative
                  problem-solving.
                </p>
                <p className="text-lg leading-relaxed text-gray-300">
                  Passionate about creating impactful digital solutions, I
                  specialize in{" "}
                  <span className="font-medium text-pink-400">
                    Full-Stack Development
                  </span>
                  ,{" "}
                  <span className="font-medium text-cyan-400">
                    Machine Learning
                  </span>
                  , and{" "}
                  <span className="font-medium text-purple-400">
                    Cloud Computing
                  </span>
                  . My approach bridges cutting-edge technology with practical
                  applications.
                </p>
                <p className="text-lg leading-relaxed text-gray-300">
                  Recognized as a{" "}
                  <span className="font-medium cyber-text">Tech Innovator</span>{" "}
                  and{" "}
                  <span className="font-medium cyber-text">Problem Solver</span>
                  , I combine analytical thinking with creative solutions to
                  build applications that make a real difference in people's
                  lives.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Enhanced stats grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className={`cyber-card group h-40 flex items-center justify-center border-0 cyber-fade-in${
                  visibleCards[index + 1] ? " visible" : ""
                }`}
                data-index={index + 1}
                ref={(el) => (cardRefs.current[index + 1] = el)}
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4">
                    <div
                      className={`w-12 h-12 rounded-full bg-gradient-to-r ${stat.gradient} flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-500 cyber-glow`}
                    >
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    <div
                      className={`text-3xl font-display font-medium bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}
                    >
                      {stat.value}
                    </div>
                  </div>
                  <div className="text-sm font-medium text-gray-300 mb-1">
                    {stat.label}
                  </div>
                  <div className="text-xs text-gray-400">
                    {stat.description}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Enhanced Focus Areas */}
        <div className="mt-20">
          <h3 className="text-4xl font-display cyber-heading cyber-text text-center mb-16">
            Technical Focus Areas
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Full Stack Development",
                description:
                  "Building end-to-end applications with modern frameworks and scalable architectures",
                icon: "💻",
                gradient: "from-cyan-500/20 to-blue-500/20",
                border: "from-cyan-500/50 to-blue-500/50",
              },
              {
                title: "AI & Machine Learning",
                description:
                  "Developing intelligent systems and predictive models for real-world applications",
                icon: "🤖",
                gradient: "from-pink-500/20 to-purple-500/20",
                border: "from-pink-500/50 to-purple-500/50",
              },
              {
                title: "Cloud & DevOps",
                description:
                  "Deploying scalable solutions with modern cloud technologies and automation",
                icon: "☁️",
                gradient: "from-green-500/20 to-emerald-500/20",
                border: "from-green-500/50 to-emerald-500/50",
              },
            ].map((area, index) => (
              <div
                key={index}
                className={`cyber-card p-8 text-center bg-gradient-to-br ${area.gradient} border border-transparent bg-clip-padding relative overflow-hidden`}
                style={{
                  animationDelay: `${index * 0.2}s`,
                }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${area.border} opacity-20 rounded-lg`}
                />

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-r from-gray-800 to-gray-900 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg cyber-glow">
                    <span className="text-2xl">{area.icon}</span>
                  </div>

                  <h4 className="font-display text-xl font-medium text-white mb-4">
                    {area.title}
                  </h4>

                  <p className="text-gray-300 leading-relaxed font-light">
                    {area.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

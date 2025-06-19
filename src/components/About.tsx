
import React, { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Zap, Target, Rocket, Brain, Palette, Award } from "lucide-react";

const About = () => {
  const [visibleElements, setVisibleElements] = useState<Set<number>>(
    new Set()
  );
  const observerRef = useRef<IntersectionObserver | null>(null);

  const stats = [
    {
      value: "8.07",
      label: "CGPA",
      description: "Academic Excellence",
      icon: Brain,
      gradient: "from-blue-500 to-indigo-500",
    },
    {
      value: "8+",
      label: "Major Projects",
      description: "Creative Solutions",
      icon: Palette,
      gradient: "from-purple-500 to-pink-500",
    },
    {
      value: "5+",
      label: "Certifications",
      description: "AWS & Design",
      icon: Award,
      gradient: "from-green-500 to-emerald-500",
    },
    {
      value: "3+",
      label: "Hackathons",
      description: "Top 5 Finalist",
      icon: Zap,
      gradient: "from-orange-500 to-red-500",
    },
  ];

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(
            entry.target.getAttribute("data-index") || "0"
          );
          if (entry.isIntersecting) {
            setVisibleElements((prev) => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.3 }
    );

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      {/* Artistic background elements */}
      <div className="artistic-bg absolute inset-0" />
      <div className="elegant-grid absolute inset-0" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-display font-light text-slate-800 mb-6 elegant-text">
            About Me
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-8" />
          <p className="text-xl text-slate-600 font-light max-w-2xl mx-auto">
            Crafting digital experiences with passion and precision
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* About Me Content */}
          <Card
            className="artistic-card group h-full flex items-center justify-center p-8 border-0"
            data-index={0}
            ref={(el) => el && observerRef.current?.observe(el)}
          >
            <CardContent className="p-0">
              <div className="space-y-6 text-artistic">
                <p className="text-lg leading-relaxed">
                  I'm currently pursuing my <span className="font-medium text-slate-700">B.Tech in Computer Science Engineering</span> with a specialization in <span className="font-medium text-slate-700">AI & ML</span>, maintaining an impressive <span className="font-medium text-slate-700">8.07 CGPA</span>. My journey combines technical expertise with creative vision.
                </p>
                <p className="text-lg leading-relaxed">
                  Passionate about creating impactful digital experiences, I specialize in <span className="font-medium text-slate-700">UI/UX Design</span>, <span className="font-medium text-slate-700">Creative Development</span>, and <span className="font-medium text-slate-700">Innovative Solutions</span>. My approach bridges aesthetic beauty with functional excellence.
                </p>
                <p className="text-lg leading-relaxed">
                  Recognized as a <span className="font-medium elegant-text">Creative Innovator</span> and <span className="font-medium elegant-text">Design Thinker</span>, I combine artistic vision with technical precision to create experiences that inspire and engage users on a deeper level.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Enhanced stats grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="artistic-card group h-40 flex items-center justify-center border-0"
                data-index={index + 1}
                ref={(el) => el && observerRef.current?.observe(el)}
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${stat.gradient} flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-500`}>
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className={`text-3xl font-display font-medium bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                      {stat.value}
                    </div>
                  </div>
                  <div className="text-sm font-medium text-slate-700 mb-1">{stat.label}</div>
                  <div className="text-xs text-slate-500">{stat.description}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Enhanced Focus Areas */}
        <div className="mt-20">
          <h3 className="text-4xl font-display font-light text-slate-800 text-center mb-16 elegant-text">
            Creative Focus Areas
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "UI/UX Design",
                description: "Creating intuitive, beautiful interfaces that delight users and enhance their digital journey",
                icon: "🎨",
                gradient: "from-blue-50 to-indigo-50",
                border: "from-blue-200 to-indigo-200",
              },
              {
                title: "Creative Development",
                description: "Bridging design and code to bring artistic visions to life with technical excellence",
                icon: "💻",
                gradient: "from-purple-50 to-pink-50",
                border: "from-purple-200 to-pink-200",
              },
              {
                title: "Design Innovation",
                description: "Pushing boundaries of digital creativity with cutting-edge design solutions and fresh perspectives",
                icon: "✨",
                gradient: "from-green-50 to-emerald-50",
                border: "from-green-200 to-emerald-200",
              },
            ].map((area, index) => (
              <div
                key={index}
                className={`artistic-card p-8 text-center bg-gradient-to-br ${area.gradient} border border-transparent bg-clip-padding relative overflow-hidden`}
                style={{
                  animationDelay: `${index * 0.2}s`,
                }}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${area.border} opacity-20 rounded-lg`} />
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <span className="text-2xl">{area.icon}</span>
                  </div>

                  <h4 className="font-display text-xl font-medium text-slate-800 mb-4">
                    {area.title}
                  </h4>

                  <p className="text-slate-600 leading-relaxed font-light">
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

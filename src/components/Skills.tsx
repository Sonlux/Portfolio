
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { useScrollAnimation, useMagneticEffect } from '@/hooks/useScrollAnimation';
import { Sparkles, Zap, Code, Database } from 'lucide-react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [animatedBars, setAnimatedBars] = useState<Set<string>>(new Set());
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { elementRef: magneticRef, mousePosition } = useMagneticEffect(0.02);

  const skillCategories = [
    {
      id: 'languages',
      title: "Programming Languages",
      skills: [
        { name: "C & C++", level: 90, icon: "💻", color: "from-blue-500 to-cyan-500" },
        { name: "Python", level: 95, icon: "🐍", color: "from-green-500 to-emerald-500" },
        { name: "MySQL", level: 85, icon: "🗄️", color: "from-orange-500 to-red-500" },
        { name: "JavaScript", level: 88, icon: "⚡", color: "from-yellow-500 to-orange-500" }
      ],
      color: "from-blue-500 to-cyan-500",
      bgIcon: Code
    },
    {
      id: 'frameworks',
      title: "Frameworks & Libraries",
      skills: [
        { name: "TensorFlow", level: 90, icon: "🧠", color: "from-orange-500 to-red-500" },
        { name: "OpenCV", level: 85, icon: "👁️", color: "from-blue-500 to-purple-500" },
        { name: "NumPy", level: 90, icon: "🔢", color: "from-green-500 to-teal-500" },
        { name: "Pandas", level: 88, icon: "🐼", color: "from-purple-500 to-pink-500" },
        { name: "Keras", level: 85, icon: "⚡", color: "from-red-500 to-orange-500" },
        { name: "React", level: 87, icon: "⚛️", color: "from-cyan-500 to-blue-500" }
      ],
      color: "from-purple-500 to-pink-500",
      bgIcon: Sparkles
    },
    {
      id: 'tools',
      title: "Tools & Platforms",
      skills: [
        { name: "Kubernetes", level: 85, icon: "☸️", color: "from-blue-500 to-cyan-500" },
        { name: "AWS", level: 80, icon: "☁️", color: "from-orange-500 to-yellow-500" },
        { name: "Docker", level: 85, icon: "🐳", color: "from-blue-500 to-teal-500" },
        { name: "GitHub", level: 90, icon: "🐙", color: "from-gray-600 to-gray-800" },
        { name: "Supabase", level: 75, icon: "⚡", color: "from-green-500 to-emerald-500" },
        { name: "Prometheus", level: 80, icon: "📊", color: "from-red-500 to-orange-500" },
        { name: "Grafana", level: 78, icon: "📈", color: "from-orange-500 to-red-500" }
      ],
      color: "from-green-500 to-teal-500",
      bgIcon: Database
    },
    {
      id: 'iot',
      title: "IoT & Embedded Systems",
      skills: [
        { name: "ESP32", level: 88, icon: "🔧", color: "from-green-500 to-teal-500" },
        { name: "Arduino IDE", level: 85, icon: "🔌", color: "from-teal-500 to-cyan-500" },
        { name: "FreeRTOS", level: 80, icon: "⏱️", color: "from-purple-500 to-indigo-500" }
      ],
      color: "from-orange-500 to-red-500",
      bgIcon: Zap
    }
  ];

  const categories = [
    { id: 'all', name: 'All Skills', icon: '🚀' },
    { id: 'languages', name: 'Languages', icon: '💻' },
    { id: 'frameworks', name: 'Frameworks', icon: '⚡' },
    { id: 'tools', name: 'Tools', icon: '🛠️' },
    { id: 'iot', name: 'IoT & Embedded', icon: '🔧' }
  ];

  const filteredCategories = activeCategory === 'all' ? skillCategories : skillCategories.filter(cat => cat.id === activeCategory);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (activeCategory) {
        const newAnimatedBars = new Set<string>();
        filteredCategories.forEach(category => {
          category.skills.forEach(skill => {
            newAnimatedBars.add(`${category.id}-${skill.name}`);
          });
        });
        setAnimatedBars(newAnimatedBars);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [activeCategory, filteredCategories]);

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-gray-100 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="cyber-grid opacity-10" />
        <div className="neural-network opacity-20" />
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="floating-element absolute w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 
            ref={titleRef}
            className={`text-4xl font-bold text-gray-900 mb-4 holographic-text ${titleVisible ? 'fade-in-up visible' : 'fade-in-up'}`}
            style={{ transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)` }}
          >
            Technical Arsenal
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8" />
          
          {/* Enhanced Category Filter */}
          <div 
            ref={magneticRef}
            className="flex flex-wrap justify-center gap-3 mb-8"
          >
            {categories.map((category, index) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`morphing-card px-6 py-3 rounded-full transition-all duration-500 group relative overflow-hidden ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-2xl scale-110'
                    : 'bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white hover:shadow-xl hover:scale-105'
                }`}
                style={{
                  animationDelay: `${index * 0.1}s`,
                  transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`
                }}
              >
                <span className="flex items-center space-x-2">
                  <span className="text-lg">{category.icon}</span>
                  <span className="font-medium">{category.name}</span>
                </span>
                
                {activeCategory === category.id && (
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-600/20 rounded-full animate-pulse" />
                )}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredCategories.map((category, index) => (
            <Card 
              key={category.id} 
              className="morphing-card group hover:shadow-2xl transition-all duration-700 hover:-translate-y-4 border-0 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden"
              style={{ 
                animationDelay: `${index * 150}ms`,
                transform: `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px)`
              }}
            >
              {/* Animated background */}
              <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              {/* Neural network overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                <div className="neural-network" />
              </div>
              
              <CardContent className="p-6 relative z-10">
                {/* Enhanced header with icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500`}>
                    <category.bgIcon className="w-6 h-6 text-white" />
                  </div>
                  <Sparkles className="w-5 h-5 text-gray-400 group-hover:text-yellow-500 group-hover:animate-spin transition-all duration-300" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                  {category.title}
                </h3>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex}
                      className="group-hover:translate-x-1 transition-transform duration-300"
                      style={{ transitionDelay: `${skillIndex * 50}ms` }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <span className="text-lg group-hover:animate-bounce" style={{ animationDelay: `${skillIndex * 0.1}s` }}>
                            {skill.icon}
                          </span>
                          <span className="text-gray-700 font-medium text-sm">{skill.name}</span>
                        </div>
                      </div>
                      
                      {/* Enhanced progress bar without percentage */}
                      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                        <div 
                          className={`h-3 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1500 ease-out relative overflow-hidden`}
                          style={{ 
                            width: animatedBars.has(`${category.id}-${skill.name}`) ? `${skill.level}%` : '0%',
                            transitionDelay: `${skillIndex * 100}ms`
                          }}
                        >
                          {/* Shimmer effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 animate-shimmer" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Floating particles on hover */}
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-blue-400 rounded-full animate-ping"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 2}s`
                      }}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Custom keyframes for shimmer effect */}
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%) skewX(-12deg); }
          100% { transform: translateX(200%) skewX(-12deg); }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </section>
  );
};

export default Skills;

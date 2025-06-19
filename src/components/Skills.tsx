
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Code, Database, Zap, Layers, Sparkles, Brain } from 'lucide-react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [animatedBars, setAnimatedBars] = useState<Set<string>>(new Set());
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation();

  const skillCategories = [
    {
      id: 'frontend',
      title: "Frontend Development",
      skills: [
        { name: "React", level: 92, icon: "⚛️", gradient: "from-cyan-400 to-blue-400" },
        { name: "JavaScript", level: 90, icon: "⚡", gradient: "from-yellow-400 to-orange-400" },
        { name: "TypeScript", level: 85, icon: "📘", gradient: "from-blue-400 to-indigo-400" },
        { name: "Tailwind CSS", level: 95, icon: "🎨", gradient: "from-teal-400 to-cyan-400" },
        { name: "Next.js", level: 88, icon: "▲", gradient: "from-gray-600 to-gray-800" }
      ],
      gradient: "from-blue-500 to-cyan-500",
      bgIcon: Code
    },
    {
      id: 'backend',
      title: "Backend & Data",
      skills: [
        { name: "Python", level: 88, icon: "🐍", gradient: "from-green-400 to-emerald-400" },
        { name: "Node.js", level: 82, icon: "🟢", gradient: "from-green-500 to-teal-500" },
        { name: "MySQL", level: 85, icon: "🗄️", gradient: "from-orange-400 to-red-400" },
        { name: "MongoDB", level: 80, icon: "🍃", gradient: "from-green-500 to-lime-500" },
        { name: "Flask", level: 85, icon: "🌶️", gradient: "from-red-400 to-pink-400" }
      ],
      gradient: "from-green-500 to-emerald-500",
      bgIcon: Database
    },
    {
      id: 'aiml',
      title: "AI & Machine Learning",
      skills: [
        { name: "TensorFlow", level: 85, icon: "🧠", gradient: "from-orange-400 to-red-500" },
        { name: "PyTorch", level: 82, icon: "🔥", gradient: "from-red-500 to-pink-500" },
        { name: "Scikit-learn", level: 88, icon: "📊", gradient: "from-blue-400 to-purple-400" },
        { name: "OpenCV", level: 80, icon: "👁️", gradient: "from-green-400 to-blue-400" },
        { name: "Pandas", level: 90, icon: "🐼", gradient: "from-purple-400 to-indigo-400" }
      ],
      gradient: "from-purple-500 to-pink-500",
      bgIcon: Brain
    },
    {
      id: 'tools',
      title: "Tools & Platforms",
      skills: [
        { name: "Git & GitHub", level: 90, icon: "🐙", gradient: "from-gray-600 to-gray-800" },
        { name: "AWS", level: 75, icon: "☁️", gradient: "from-orange-400 to-yellow-400" },
        { name: "Docker", level: 80, icon: "🐳", gradient: "from-blue-400 to-teal-400" },
        { name: "Kubernetes", level: 78, icon: "☸️", gradient: "from-blue-500 to-cyan-500" },
        { name: "Linux", level: 85, icon: "🐧", gradient: "from-yellow-400 to-orange-500" }
      ],
      gradient: "from-indigo-500 to-purple-500",
      bgIcon: Layers
    }
  ];

  const categories = [
    { id: 'all', name: 'All Skills', icon: '🚀' },
    { id: 'frontend', name: 'Frontend', icon: '⚡' },
    { id: 'backend', name: 'Backend', icon: '🗄️' },
    { id: 'aiml', name: 'AI/ML', icon: '🤖' },
    { id: 'tools', name: 'Tools', icon: '🛠️' }
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
    <section className="py-24 bg-gradient-to-br from-blue-50 to-purple-50 relative overflow-hidden">
      {/* Artistic background elements */}
      <div className="artistic-bg absolute inset-0" />
      <div className="elegant-grid absolute inset-0" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 
            ref={titleRef}
            className={`text-5xl font-display font-light text-slate-800 mb-6 elegant-text ${titleVisible ? 'fade-in-elegant visible' : 'fade-in-elegant'}`}
          >
            Technical Skills
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-8" />
          <p className="text-xl text-slate-600 font-light max-w-2xl mx-auto">
            A comprehensive toolkit for building innovative solutions
          </p>
          
          {/* Enhanced Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mt-12">
            {categories.map((category, index) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`artistic-button px-6 py-3 rounded-full transition-all duration-500 font-medium ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg scale-105'
                    : 'text-slate-700 hover:text-slate-900'
                }`}
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <span className="flex items-center space-x-2">
                  <span className="text-sm">{category.icon}</span>
                  <span>{category.name}</span>
                </span>
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredCategories.map((category, index) => (
            <Card 
              key={category.id} 
              className="artistic-card group border-0 h-full flex items-center justify-center"
              style={{ 
                animationDelay: `${index * 150}ms`,
                minHeight: "350px"
              }}
            >
              <CardContent className="p-8 relative z-10 text-center">
                {/* Enhanced header with icon */}
                <div className="flex items-center justify-center mb-6">
                  <div className={`w-14 h-14 rounded-full bg-gradient-to-r ${category.gradient} flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500 shadow-lg`}>
                    <category.bgIcon className="w-7 h-7 text-white" />
                  </div>
                </div>
                
                <h3 className="text-xl font-display font-medium text-slate-800 mb-6 group-hover:elegant-text transition-all duration-300">
                  {category.title}
                </h3>
                
                <div className="space-y-5">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex}
                      className="group-hover:translate-x-1 transition-transform duration-300"
                      style={{ transitionDelay: `${skillIndex * 50}ms` }}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <span className="text-lg group-hover:animate-bounce" style={{ animationDelay: `${skillIndex * 0.1}s` }}>
                            {skill.icon}
                          </span>
                          <span className="text-slate-700 font-medium text-sm">{skill.name}</span>
                        </div>
                      </div>
                      
                      {/* Artistic progress bar */}
                      <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden progress-artistic">
                        <div 
                          className={`h-2 rounded-full bg-gradient-to-r ${skill.gradient} transition-all duration-1500 ease-out relative overflow-hidden`}
                          style={{ 
                            width: animatedBars.has(`${category.id}-${skill.name}`) ? `${skill.level}%` : '0%',
                            transitionDelay: `${skillIndex * 100}ms`
                          }}
                        >
                          {/* Shimmer effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 animate-pulse" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Floating sparkles on hover */}
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <Sparkles className="absolute top-4 right-4 w-4 h-4 text-indigo-400 animate-pulse" />
                  <Sparkles className="absolute bottom-6 left-4 w-3 h-3 text-purple-400 animate-pulse" style={{ animationDelay: '0.5s' }} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

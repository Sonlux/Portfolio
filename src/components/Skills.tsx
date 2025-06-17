
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const skillCategories = [
    {
      id: 'languages',
      title: "Programming Languages",
      skills: [
        { name: "C & C++", level: 90, icon: "💻" },
        { name: "Python", level: 95, icon: "🐍" },
        { name: "MySQL", level: 85, icon: "🗄️" }
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 'frameworks',
      title: "Frameworks & Libraries",
      skills: [
        { name: "TensorFlow", level: 90, icon: "🧠" },
        { name: "OpenCV", level: 85, icon: "👁️" },
        { name: "NumPy", level: 90, icon: "🔢" },
        { name: "Pandas", level: 88, icon: "🐼" },
        { name: "Keras", level: 85, icon: "⚡" }
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 'tools',
      title: "Tools & Platforms",
      skills: [
        { name: "Kubernetes", level: 85, icon: "☸️" },
        { name: "AWS", level: 80, icon: "☁️" },
        { name: "Docker", level: 85, icon: "🐳" },
        { name: "GitHub", level: 90, icon: "🐙" },
        { name: "Supabase", level: 75, icon: "⚡" },
        { name: "Prometheus", level: 80, icon: "📊" },
        { name: "Grafana", level: 78, icon: "📈" }
      ],
      color: "from-green-500 to-teal-500"
    },
    {
      id: 'iot',
      title: "IoT & Embedded Systems",
      skills: [
        { name: "ESP32", level: 88, icon: "🔧" },
        { name: "Arduino IDE", level: 85, icon: "🔌" },
        { name: "FreeRTOS", level: 80, icon: "⏱️" },
        { name: "MH-Z19E", level: 75, icon: "🌬️" },
        { name: "MQ-135 Sensors", level: 78, icon: "📡" }
      ],
      color: "from-orange-500 to-red-500"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Skills' },
    { id: 'languages', name: 'Languages' },
    { id: 'frameworks', name: 'Frameworks' },
    { id: 'tools', name: 'Tools' },
    { id: 'iot', name: 'IoT & Embedded' }
  ];

  const filteredCategories = activeCategory === 'all' ? skillCategories : skillCategories.filter(cat => cat.id === activeCategory);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredCategories.map((category, index) => (
            <Card 
              key={category.id} 
              className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-0 bg-gradient-to-br from-white to-gray-50"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <div className="w-6 h-6 bg-white rounded opacity-80"></div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{category.title}</h3>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex}
                      className="group-hover:translate-x-1 transition-transform duration-300"
                      style={{ transitionDelay: `${skillIndex * 50}ms` }}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center space-x-2">
                          <span className="text-lg">{skill.icon}</span>
                          <span className="text-gray-700 font-medium">{skill.name}</span>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {skill.level}%
                        </Badge>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full bg-gradient-to-r ${category.color} transition-all duration-1000 ease-out`}
                          style={{ 
                            width: activeCategory === 'all' || activeCategory === category.id ? `${skill.level}%` : '0%',
                            transitionDelay: `${skillIndex * 100}ms`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
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

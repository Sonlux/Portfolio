
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["C & C++", "Python", "MySQL"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Frameworks & Libraries",
      skills: ["TensorFlow", "OpenCV", "NumPy", "Pandas", "Keras"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Tools & Platforms",
      skills: ["Kubernetes", "AWS", "Arduino IDE", "Docker", "GitHub"],
      color: "from-green-500 to-teal-500"
    },
    {
      title: "Specialized Skills",
      skills: ["Machine Learning", "Real-time Monitoring", "IoT Development", "Data Analytics"],
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-0 bg-gradient-to-br from-white to-gray-50"
            >
              <CardContent className="p-6">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <div className="w-6 h-6 bg-white rounded opacity-80"></div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{category.title}</h3>
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex}
                      className="flex items-center space-x-2 group-hover:translate-x-1 transition-transform duration-300"
                      style={{ transitionDelay: `${skillIndex * 50}ms` }}
                    >
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color}`}></div>
                      <span className="text-gray-700">{skill}</span>
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


import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const stats = [
    { value: "8.07", label: "CGPA", color: "blue", description: "Academic Excellence" },
    { value: "6+", label: "Major Projects", color: "purple", description: "Real-World Impact" },
    { value: "4", label: "Certifications", color: "green", description: "AWS & AI/ML" },
    { value: "3", label: "Hackathons", color: "orange", description: "Top 5 Finalist" }
  ];

  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="prose prose-lg">
              <p className="text-gray-700 leading-relaxed">
                I'm passionate about creating <span className="font-semibold text-blue-600">real-world impact</span> through 
                innovative technology solutions. Currently pursuing Electronics & Computer Engineering at SRM Institute 
                with a stellar 8.07/10 CGPA, I specialize in building systems that make a difference.
              </p>
              <p className="text-gray-700 leading-relaxed">
                My expertise spans <span className="font-semibold text-purple-600">AI/ML</span>, 
                <span className="font-semibold text-green-600"> Smart Cities</span>, and 
                <span className="font-semibold text-orange-600"> AI-for-good</span> initiatives. 
                From Kubernetes anomaly detection systems to environmental KPI monitoring using IoT sensors, 
                I thrive on creating scalable solutions that drive automation and efficiency.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Beyond technical innovation, I'm actively involved in leadership roles as HR Lead at Club Radiance 
                and member of the Directorate of Student Affairs, where I organize impactful events and foster 
                collaboration in the tech community.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-0 bg-gradient-to-br from-white to-gray-50 group">
                <CardContent className="p-6 text-center">
                  <div className={`text-4xl font-bold text-${stat.color}-600 mb-2 group-hover:scale-110 transition-transform duration-300`}>
                    {stat.value}
                  </div>
                  <div className="text-gray-600 font-medium mb-1">{stat.label}</div>
                  <div className="text-xs text-gray-500">{stat.description}</div>
                  <div className={`w-full h-1 bg-gradient-to-r from-${stat.color}-400 to-${stat.color}-600 rounded-full mt-3 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Core Values Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Core Focus Areas</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">AI</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Smart Cities & Automation</h4>
              <p className="text-sm text-gray-600">Building intelligent systems for urban infrastructure and automated decision-making</p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-green-50 to-green-100 hover:from-green-100 hover:to-green-200 transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">🌍</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">AI-for-Good</h4>
              <p className="text-sm text-gray-600">Leveraging technology for environmental monitoring and social impact</p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 hover:from-purple-100 hover:to-purple-200 transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">☁️</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Cloud & Edge Computing</h4>
              <p className="text-sm text-gray-600">Scalable infrastructure and real-time processing at the edge</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

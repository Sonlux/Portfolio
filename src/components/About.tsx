
import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Zap, Target, Rocket, Brain } from 'lucide-react';

const About = () => {
  const [visibleElements, setVisibleElements] = useState<Set<number>>(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const stats = [
    { value: "8.07", label: "CGPA", color: "blue", description: "Academic Excellence", icon: Brain },
    { value: "8+", label: "Major Projects", color: "purple", description: "Real-World Impact", icon: Rocket },
    { value: "5+", label: "Certifications", color: "green", description: "AWS & AI/ML", icon: Target },
    { value: "3+", label: "Hackathons", color: "orange", description: "Top 5 Finalist", icon: Zap }
  ];

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.getAttribute('data-index') || '0');
          if (entry.isIntersecting) {
            setVisibleElements(prev => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.3 }
    );

    return () => observerRef.current?.disconnect();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const magneticStyle = (strength: number = 0.02) => ({
    transform: `translate(${(mousePosition.x - window.innerWidth / 2) * strength}px, ${(mousePosition.y - window.innerHeight / 2) * strength}px)`
  });

  return (
    <section id="about" className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="cyber-grid opacity-20" />
        <div className="floating-element absolute top-10 right-10 w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full opacity-20" />
        <div className="floating-element absolute bottom-20 left-10 w-16 h-16 bg-gradient-to-r from-green-400 to-teal-600 rounded-full opacity-20" style={{ animationDelay: '2s' }} />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl font-bold text-gray-900 mb-4 holographic-text"
            style={magneticStyle(0.01)}
          >
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto" />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Enhanced text content with photo */}
          <div className="space-y-8">
            {/* Professional Photo */}
            <div 
              className="morphing-card relative group"
              style={magneticStyle(0.005)}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src="/lovable-uploads/1caf2fa6-07c7-4311-9dbc-cdddd2788361.png"
                  alt="Lakshan Amineni - Professional Photo"
                  className="w-full h-80 object-cover object-center transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay with holographic effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Floating elements on hover */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110">
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full animate-pulse" />
                </div>
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-700 transform group-hover:scale-125">
                  <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-teal-600 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
                </div>
                
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              </div>
            </div>

            {/* Text content */}
            <div 
              className="prose prose-lg fade-in-up space-y-6"
              data-index="0"
              ref={(el) => el && observerRef.current?.observe(el)}
            >
              <p className="text-gray-700 leading-relaxed text-reveal">
                I'm passionate about creating <span className="font-semibold holographic-text">real-world impact</span> through 
                innovative technology solutions. Currently pursuing Electronics & Computer Engineering at SRM Institute 
                with a stellar 8.07/10 CGPA, I specialize in building systems that make a difference.
              </p>
              <p className="text-gray-700 leading-relaxed">
                My expertise spans <span className="font-semibold holographic-text">AI/ML</span>, 
                <span className="font-semibold holographic-text"> Smart Cities</span>, and 
                <span className="font-semibold holographic-text"> AI-for-good</span> initiatives. 
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
          
          {/* Enhanced stats grid with advanced animations */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card 
                key={index}
                className={`morphing-card hover:shadow-2xl transition-all duration-700 hover:-translate-y-4 border-0 bg-gradient-to-br from-white to-gray-50 group overflow-hidden ${
                  visibleElements.has(index + 1) ? 'scale-in visible' : 'scale-in'
                }`}
                data-index={index + 1}
                ref={(el) => el && observerRef.current?.observe(el)}
                style={{
                  ...magneticStyle(0.01),
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <CardContent className="p-6 text-center relative">
                  {/* Animated background effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r from-${stat.color}-400/20 to-${stat.color}-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  {/* Icon with advanced animation */}
                  <div className="relative mb-4">
                    <stat.icon 
                      className={`w-8 h-8 text-${stat.color}-600 mx-auto group-hover:scale-125 transition-transform duration-500 group-hover:rotate-12`}
                    />
                  </div>
                  
                  {/* Value with holographic effect */}
                  <div 
                    className={`text-4xl font-bold text-${stat.color}-600 mb-2 group-hover:scale-110 transition-transform duration-300 holographic-text`}
                  >
                    {stat.value}
                  </div>
                  
                  <div className="text-gray-600 font-medium mb-1">{stat.label}</div>
                  <div className="text-xs text-gray-500">{stat.description}</div>
                  
                  {/* Animated progress bar */}
                  <div className={`w-full h-1 bg-gradient-to-r from-${stat.color}-400 to-${stat.color}-600 rounded-full mt-3 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left`} />
                  
                  {/* Sparkle effect on hover */}
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-pulse" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Enhanced Core Values Section */}
        <div className="mt-16">
          <h3 
            className="text-2xl font-bold text-gray-900 text-center mb-8 holographic-text"
            style={magneticStyle(0.01)}
          >
            Core Focus Areas
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Smart Cities & Automation",
                description: "Building intelligent systems for urban infrastructure and automated decision-making",
                gradient: "from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200",
                icon: "🤖",
                color: "blue"
              },
              {
                title: "AI-for-Good",
                description: "Leveraging technology for environmental monitoring and social impact",
                gradient: "from-green-50 to-green-100 hover:from-green-100 hover:to-green-200",
                icon: "🌍",
                color: "green"
              },
              {
                title: "Cloud & Edge Computing",
                description: "Scalable infrastructure and real-time processing at the edge",
                gradient: "from-purple-50 to-purple-100 hover:from-purple-100 hover:to-purple-200",
                icon: "☁️",
                color: "purple"
              }
            ].map((area, index) => (
              <div
                key={index}
                className={`morphing-card text-center p-6 rounded-xl bg-gradient-to-br ${area.gradient} transition-all duration-500 hover:scale-105 group relative overflow-hidden`}
                style={{
                  ...magneticStyle(0.005),
                  animationDelay: `${index * 0.2}s`
                }}
              >
                {/* Animated background pattern */}
                <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                  <div className="cyber-grid" />
                </div>
                
                <div className={`w-16 h-16 bg-gradient-to-r from-${area.color}-500 to-${area.color}-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500`}>
                  <span className="text-white font-bold text-2xl">{area.icon}</span>
                </div>
                
                <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                  {area.title}
                </h4>
                
                <p className="text-sm text-gray-600 relative z-10">{area.description}</p>
                
                {/* Hover effect overlay */}
                <div className={`absolute inset-0 bg-gradient-to-r from-${area.color}-400/10 to-${area.color}-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

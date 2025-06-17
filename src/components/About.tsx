
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
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
                I'm a passionate AI Developer and Cloud Computing Specialist currently pursuing my Bachelor's in Electronics & Computer Engineering at SRM Institute of Science & Technology with a stellar CGPA of 8.07/10.
              </p>
              <p className="text-gray-700 leading-relaxed">
                My journey in technology has been marked by innovative projects ranging from Kubernetes anomaly detection systems to real-time environmental monitoring using IoT sensors. I thrive on creating scalable solutions that drive efficiency and innovation.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Beyond technical expertise, I'm actively involved in leadership roles, currently serving as HR Lead at Club Radiance and as a member of the Directorate of Student Affairs, where I organize impactful events and foster collaboration.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">8.07</div>
                <div className="text-gray-600">CGPA</div>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">4+</div>
                <div className="text-gray-600">Major Projects</div>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">4</div>
                <div className="text-gray-600">Certifications</div>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">3</div>
                <div className="text-gray-600">Hackathons</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

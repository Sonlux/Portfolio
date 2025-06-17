
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Trophy } from 'lucide-react';

const Achievements = () => {
  const certifications = [
    "AWS Cloud Foundations",
    "AWS Cloud Architecture", 
    "GOOGLE AIML Virtual Internship (AICTE)",
    "PALO ALTO Cyber Security Virtual Internship (AICTE)"
  ];

  const hackathons = [
    {
      name: "Tata Steel Tomorrow Lab 2023 – BeyondBricks",
      type: "Participation",
      description: "Contributed to designing sustainable and refurbishable housing model for affordable shelter solutions",
      achievements: [
        "Proposed modular housing concepts requiring refurbishing every 10 years",
        "Addressed challenges in employment generation, supply chain risks, and long-term housing viability"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Smart India Hackathon (SIH) 2024",
      type: "Participation",
      description: "AI-Driven Crop Disease Prediction and Management System (Problem ID: SIH1638)",
      achievements: [
        "Ideated Smart Agriculture Forecasting Engine (S.A.F.E) for crop disease detection",
        "Explored machine learning techniques for crop health analysis using image and environmental data"
      ],
      color: "from-green-500 to-teal-500"
    },
    {
      name: "Guidewire DevTrails 2025",
      type: "Top 5 Finalist",
      description: "AI-driven system for predicting and mitigating Kubernetes cluster failures",
      achievements: [
        "Developed AI-driven system for Kubernetes cluster failure prediction",
        "Implemented time-series forecasting and anomaly detection for system reliability",
        "Integrated Prometheus and Grafana for real-time cluster performance monitoring",
        "Worked on AI-based remediation system for proactive failure resolution"
      ],
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Achievements & Certifications</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Certifications */}
          <Card className="hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-xl font-bold text-gray-900">Certifications</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 hover:from-blue-100 hover:to-purple-100 transition-all duration-300">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-gray-700 font-medium">{cert}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Hackathons Summary */}
          <Card className="hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-xl font-bold text-gray-900">Hackathons</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-gradient-to-r from-green-50 to-teal-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">3</div>
                  <div className="text-sm text-gray-600">Participated</div>
                </div>
                <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">1</div>
                  <div className="text-sm text-gray-600">Top 5 Finalist</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Recognition */}
          <Card className="hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-xl font-bold text-gray-900">Recognition</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-center p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg">
                  <div className="text-lg font-semibold text-orange-600 mb-2">Academic Excellence</div>
                  <div className="text-sm text-gray-700">Maintaining 8.07/10 CGPA in Electronics & Computer Engineering</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
                  <div className="text-lg font-semibold text-blue-600 mb-2">Leadership</div>
                  <div className="text-sm text-gray-700">HR Lead at Club Radiance with successful event organization</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Hackathons */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Hackathon Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hackathons.map((hackathon, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-0 overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${hackathon.color}`}></div>
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-lg font-bold text-gray-900 leading-tight">
                      {hackathon.name}
                    </CardTitle>
                    <Badge 
                      variant="outline" 
                      className={`bg-gradient-to-r ${hackathon.color} text-white border-0 whitespace-nowrap ml-2`}
                    >
                      {hackathon.type}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">{hackathon.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {hackathon.achievements.map((achievement, achIndex) => (
                      <div key={achIndex} className="flex items-start space-x-2">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${hackathon.color} mt-2 flex-shrink-0`}></div>
                        <span className="text-xs text-gray-700">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;

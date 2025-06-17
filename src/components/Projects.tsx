
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Kubernetes Anomaly Detection and Remediation System (KubeOPS)",
      description: "Built a multi-agent system for real-time anomaly detection in Kubernetes clusters with OOM risk identification, resource exhaustion monitoring, and crash loop detection.",
      technologies: ["Kubernetes", "Python", "Machine Learning", "NVIDIA LLM", "Docker"],
      highlights: [
        "Real-time anomaly detection in Kubernetes clusters",
        "Interactive dashboard with time-series metrics",
        "NVIDIA LLM integration for root cause analysis",
        "Automated remediation system with validation"
      ],
      gradient: "from-blue-600 to-purple-600"
    },
    {
      title: "Stock Market Price Prediction and Analysis",
      description: "Developed an AI-powered solution for predicting stock prices using deep learning models with LSTM and GRU-based neural networks.",
      technologies: ["Python", "TensorFlow", "LSTM", "GRU", "Data Analytics"],
      highlights: [
        "Deep learning models for stock price prediction",
        "Real-time stock data retrieval and analysis",
        "Technical indicators integration",
        "Interactive data visualizations"
      ],
      gradient: "from-green-600 to-teal-600"
    },
    {
      title: "Real-Time AI-Based Road Surface Classification (ESP32)",
      description: "Developed a real-time road surface classification system using embedded acoustic systems with ESP32 and machine learning.",
      technologies: ["ESP32", "Arduino IDE", "FreeRTOS", "Supabase", "IoT"],
      highlights: [
        "Embedded acoustic systems for road analysis",
        "Real-time surface classification",
        "Microphone and vibration sensor integration",
        "Smart city infrastructure enhancement"
      ],
      gradient: "from-orange-600 to-red-600"
    },
    {
      title: "Real-Time KPI Monitoring for Environmental Insights",
      description: "Designed and developed a real-time monitoring system using ESP32 to track environmental KPIs with IoT sensors.",
      technologies: ["ESP32", "IoT Sensors", "Cloud Computing", "Real-time Analytics"],
      highlights: [
        "Environmental KPI tracking system",
        "IoT sensor integration (MH-Z19E, MQ-135)",
        "Cloud-based data management",
        "Real-time visualization and analytics"
      ],
      gradient: "from-purple-600 to-pink-600"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 overflow-hidden"
            >
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                  {project.title}
                </CardTitle>
                <p className="text-gray-600 leading-relaxed">{project.description}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  {project.highlights.map((highlight, hIndex) => (
                    <div key={hIndex} className="flex items-start space-x-2">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.gradient} mt-2 flex-shrink-0`}></div>
                      <span className="text-sm text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-2 pt-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="secondary" 
                      className="bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors duration-200"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex space-x-3 pt-4">
                  <Button size="sm" variant="outline" className="group-hover:border-blue-500 group-hover:text-blue-500 transition-colors duration-300">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button size="sm" className={`bg-gradient-to-r ${project.gradient} hover:opacity-90 text-white border-0`}>
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

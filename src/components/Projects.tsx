
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const projects = [
    {
      title: "KubeOPS - Kubernetes Anomaly Detection & LLM-based Remediation",
      shortDescription: "Real-time anomaly detection in Kubernetes clusters with AI-powered remediation system.",
      fullDescription: "Built a comprehensive multi-agent system for real-time anomaly detection in Kubernetes clusters. Features OOM risk identification, resource exhaustion monitoring, and crash loop detection with automated remediation powered by NVIDIA LLM integration.",
      technologies: ["Kubernetes", "Python", "Machine Learning", "NVIDIA LLM", "Docker", "Prometheus", "Grafana"],
      highlights: [
        "Real-time anomaly detection using time-series forecasting",
        "Interactive dashboard with comprehensive metrics visualization",
        "NVIDIA LLM integration for intelligent root cause analysis",
        "Automated remediation system with validation and rollback",
        "Multi-agent architecture for scalable monitoring",
        "Custom alerting system with severity classification"
      ],
      achievements: "🏆 Top 5 Finalist at Guidewire DevTrails 2025",
      gradient: "from-blue-600 to-purple-600",
      category: "AI/ML & Cloud"
    },
    {
      title: "AI Road Surface Classification using ESP32 Acoustic System",
      shortDescription: "Real-time road surface classification using embedded acoustic analysis.",
      fullDescription: "Developed an innovative embedded system using ESP32 for real-time road surface classification through acoustic pattern recognition, contributing to smart city infrastructure enhancement.",
      technologies: ["ESP32", "Arduino IDE", "FreeRTOS", "Machine Learning", "Acoustic Processing", "IoT"],
      highlights: [
        "Embedded acoustic systems for real-time road analysis",
        "Advanced signal processing algorithms for surface classification",
        "Microphone and vibration sensor integration",
        "Real-time data processing with FreeRTOS",
        "Smart city infrastructure enhancement applications",
        "Edge AI implementation for immediate response"
      ],
      achievements: "🌟 Featured in Smart Cities research initiatives",
      gradient: "from-green-600 to-teal-600",
      category: "IoT & Embedded"
    },
    {
      title: "CO₂ & Air Quality Monitoring System",
      shortDescription: "Real-time environmental monitoring using ESP32 with cloud integration.",
      fullDescription: "Designed comprehensive environmental KPI monitoring system using ESP32 with specialized sensors for real-time air quality tracking and cloud-based analytics.",
      technologies: ["ESP32", "MH-Z19E", "MQ-135", "FreeRTOS", "Cloud Computing", "Real-time Analytics"],
      highlights: [
        "Environmental KPI tracking with high precision sensors",
        "MH-Z19E CO₂ sensor integration for accurate measurements",
        "MQ-135 air quality sensor for comprehensive monitoring",
        "Cloud-based data management and storage",
        "Real-time visualization and analytics dashboard",
        "Automated alerting for threshold violations"
      ],
      achievements: "🌱 Deployed in environmental research projects",
      gradient: "from-green-500 to-emerald-600",
      category: "IoT & Environmental"
    },
    {
      title: "Stock Market Prediction using LSTM & GRU",
      shortDescription: "AI-powered stock price prediction using advanced neural networks.",
      fullDescription: "Developed sophisticated deep learning models using LSTM and GRU neural networks for accurate stock price prediction with real-time data integration.",
      technologies: ["Python", "TensorFlow", "LSTM", "GRU", "Data Analytics", "NumPy", "Pandas"],
      highlights: [
        "Deep learning models with LSTM and GRU architectures",
        "Real-time stock data retrieval and preprocessing",
        "Technical indicators integration for enhanced accuracy",
        "Interactive data visualizations and trend analysis",
        "Backtesting framework for model validation",
        "Performance optimization for real-time predictions"
      ],
      achievements: "📈 Achieved 85%+ prediction accuracy",
      gradient: "from-orange-600 to-red-600",
      category: "AI/ML & Finance"
    },
    {
      title: "Crop Disease Detection (SIH 2024)",
      shortDescription: "AI-driven crop disease prediction and management system.",
      fullDescription: "Ideated Smart Agriculture Forecasting Engine (S.A.F.E) for early crop disease detection using machine learning techniques with image and environmental data analysis.",
      technologies: ["Python", "Computer Vision", "Machine Learning", "Image Processing", "Agricultural Data"],
      highlights: [
        "Smart Agriculture Forecasting Engine (S.A.F.E) development",
        "Machine learning for crop health analysis",
        "Image processing for disease pattern recognition",
        "Environmental data integration for comprehensive analysis",
        "Early warning system for farmers",
        "Scalable solution for agricultural applications"
      ],
      achievements: "🌾 Participated in Smart India Hackathon 2024",
      gradient: "from-yellow-500 to-orange-500",
      category: "AI/ML & Agriculture"
    },
    {
      title: "Kubernetes Failure Forecasting",
      shortDescription: "Predictive system for Kubernetes cluster failure prevention.",
      fullDescription: "Advanced AI-driven system for predicting and mitigating Kubernetes cluster failures using time-series forecasting and anomaly detection techniques.",
      technologies: ["Kubernetes", "Time-series Analysis", "Anomaly Detection", "Prometheus", "Grafana", "Python"],
      highlights: [
        "Time-series forecasting for failure prediction",
        "Anomaly detection for early warning systems",
        "Prometheus and Grafana integration for monitoring",
        "Proactive failure resolution mechanisms",
        "System reliability enhancement",
        "Automated scaling and resource optimization"
      ],
      achievements: "🏆 Top 5 Finalist at Guidewire DevTrails 2025",
      gradient: "from-purple-600 to-pink-600",
      category: "Cloud & DevOps"
    }
  ];

  const toggleExpand = (index: number) => {
    setExpandedProject(expandedProject === index ? null : index);
  };

  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Innovative solutions spanning AI/ML, IoT, Cloud Computing, and Real-time Systems
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 overflow-hidden"
            >
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-lg font-bold text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300 leading-tight">
                    {project.title}
                  </CardTitle>
                  <Badge variant="outline" className={`bg-gradient-to-r ${project.gradient} text-white border-0 text-xs whitespace-nowrap ml-2`}>
                    {project.category}
                  </Badge>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {expandedProject === index ? project.fullDescription : project.shortDescription}
                </p>
                {project.achievements && (
                  <div className="text-sm font-medium text-green-600 mt-2">
                    {project.achievements}
                  </div>
                )}
              </CardHeader>
              <CardContent className="space-y-4">
                {expandedProject === index && (
                  <div className="space-y-3 animate-fade-in">
                    <h4 className="font-semibold text-gray-900 flex items-center">
                      <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${project.gradient} mr-2`}></div>
                      Key Highlights
                    </h4>
                    {project.highlights.map((highlight, hIndex) => (
                      <div key={hIndex} className="flex items-start space-x-2">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.gradient} mt-2 flex-shrink-0`}></div>
                        <span className="text-sm text-gray-700">{highlight}</span>
                      </div>
                    ))}
                  </div>
                )}
                
                <div className="flex flex-wrap gap-2 pt-4">
                  {project.technologies.slice(0, expandedProject === index ? project.technologies.length : 4).map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="secondary" 
                      className="bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors duration-200 text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                  {!expandedProject && project.technologies.length > 4 && (
                    <Badge variant="secondary" className="bg-gray-100 text-gray-500 text-xs">
                      +{project.technologies.length - 4} more
                    </Badge>
                  )}
                </div>
                
                <div className="flex justify-between items-center pt-4">
                  <div className="flex space-x-3">
                    <Button size="sm" variant="outline" className="group-hover:border-blue-500 group-hover:text-blue-500 transition-colors duration-300">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button size="sm" className={`bg-gradient-to-r ${project.gradient} hover:opacity-90 text-white border-0`}>
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  </div>
                  
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleExpand(index)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    {expandedProject === index ? (
                      <>
                        <ChevronUp className="w-4 h-4 mr-1" />
                        Less
                      </>
                    ) : (
                      <>
                        <ChevronDown className="w-4 h-4 mr-1" />
                        More
                      </>
                    )}
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

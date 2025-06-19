
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, ChevronDown, ChevronUp } from "lucide-react";

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const projects = [
    {
      title: "Kubescape - Kubernetes Anomaly Detection & LLM-based Remediation",
      shortDescription:
        "Real-time anomaly detection in Kubernetes clusters with AI-powered remediation system.",
      fullDescription:
        "Built a comprehensive multi-agent system for real-time anomaly detection in Kubernetes clusters. Features OOM risk identification, resource exhaustion monitoring, and crash loop detection with automated remediation powered by NVIDIA LLM integration.",
      technologies: [
        "Kubernetes",
        "Python",
        "Machine Learning",
        "NVIDIA LLM",
        "Docker",
        "Prometheus",
        "Grafana",
      ],
      highlights: [
        "Real-time anomaly detection using time-series forecasting",
        "Interactive dashboard with comprehensive metrics visualization",
        "NVIDIA LLM integration for intelligent root cause analysis",
        "Automated remediation system with validation and rollback",
        "Multi-agent architecture for scalable monitoring",
        "Custom alerting system with severity classification",
      ],
      achievements: "🏆 Top 5 Finalist at Guidewire DevTrails 2025",
      gradient: "from-blue-600 to-purple-600",
      category: "AI/ML & Cloud",
      githubUrl:
        "https://github.com/Sonlux/K8S-Anomaly-Detection-and-Remediation",
      hasDemo: true,
      demoUrl: "https://kubescape.vercel.app/",
    },
    {
      title: "TRADEO - Stock Market Prediction & Trading Platform",
      shortDescription:
        "Comprehensive stock market prediction platform combining ML models with real-time analysis.",
      fullDescription:
        "A comprehensive stock market prediction and trading platform that combines machine learning models with real-time market data analysis. Features Flask backend API with various ML models for market prediction, interactive dashboard, and trading signals generation.",
      technologies: [
        "Flask",
        "TensorFlow",
        "PyTorch",
        "XGBoost",
        "Pandas",
        "NumPy",
        "Scikit-learn",
        "Alpha Vantage API",
      ],
      highlights: [
        "Real-time stock data analysis and visualization",
        "Multiple ML models for price predictions (LSTM, GRU, XGBoost)",
        "RESTful API endpoints for stock data integration",
        "Interactive dashboard with historical data visualization",
        "Trading signals generation with confidence metrics",
        "Alpha Vantage and Yahoo Finance API integration",
        "Flask-CORS enabled for cross-origin requests",
      ],
      achievements: "📈 Advanced ML-powered trading platform",
      gradient: "from-green-600 to-emerald-600",
      category: "AI/ML & Finance",
      githubUrl: "https://github.com/Sonlux/TRADEO",
      hasDemo: true,
    },
    {
      title: "AstroVerse - Interactive 3D Astronomy Platform",
      shortDescription:
        "Real-time, interactive astronomy web platform for space enthusiasts and researchers.",
      fullDescription:
        "AstroVerse is an ambitious, real-time, and interactive astronomy web platform designed for space enthusiasts, students, educators, and researchers. Features 3D universe mapping, real-time astronomical data integration, and immersive cosmic UI experience.",
      technologies: [
        "Next.js",
        "Three.js",
        "React-Three-Fiber",
        "Node.js",
        "PostgreSQL",
        "Supabase",
        "GraphQL",
        "Framer Motion",
      ],
      highlights: [
        "Interactive 3D universe map with solar system visualization",
        "Real-time data integration from NASA API and SpaceX API",
        "Object details on hover with celestial body information",
        "Dynamic filtering by object type and category",
        "Personalized bookmarking for celestial events",
        "Dark cosmic UI with glassmorphism effects",
        "Responsive design across multiple devices",
        "GraphQL API with Apollo Server integration",
      ],
      achievements: "🌌 Immersive space exploration platform",
      gradient: "from-purple-600 to-indigo-600",
      category: "Full-Stack & 3D",
      githubUrl: "https://github.com/Sonlux/AstroVerse",
      hasDemo: true,
    },
    {
      title: "E-Commerce Sentiment Analysis",
      shortDescription:
        "Advanced sentiment analysis system for e-commerce product reviews and customer feedback.",
      fullDescription:
        "Comprehensive sentiment analysis project using natural language processing techniques to analyze e-commerce customer reviews and feedback. Implements various ML algorithms to classify sentiments and extract meaningful insights from customer opinions.",
      technologies: [
        "Python",
        "Jupyter Notebook",
        "NLTK",
        "Pandas",
        "Scikit-learn",
        "Matplotlib",
        "Seaborn",
        "TextBlob",
      ],
      highlights: [
        "Natural language processing for review analysis",
        "Multiple sentiment classification algorithms",
        "Customer feedback sentiment scoring",
        "Data visualization of sentiment trends",
        "Text preprocessing and feature extraction",
        "Model performance comparison and evaluation",
        "Interactive data analysis in Jupyter environment",
      ],
      achievements: "💬 NLP-powered customer insights",
      gradient: "from-orange-600 to-pink-600",
      category: "AI/ML & NLP",
      githubUrl: "https://github.com/Sonlux/E-Commerce-Sentiment-Analysis",
      hasDemo: false,
    },
    {
      title: "AI Road Surface Classification using ESP32 Acoustic System",
      shortDescription:
        "Real-time road surface classification using embedded acoustic analysis.",
      fullDescription:
        "Developed an innovative embedded system using ESP32 for real-time road surface classification through acoustic pattern recognition, contributing to smart city infrastructure enhancement.",
      technologies: [
        "ESP32",
        "Arduino IDE",
        "FreeRTOS",
        "Machine Learning",
        "Acoustic Processing",
        "IoT",
      ],
      highlights: [
        "Embedded acoustic systems for real-time road analysis",
        "Advanced signal processing algorithms for surface classification",
        "Microphone and vibration sensor integration",
        "Real-time data processing with FreeRTOS",
        "Smart city infrastructure enhancement applications",
        "Edge AI implementation for immediate response",
      ],
      achievements: "🌟 Featured in Smart Cities research initiatives",
      gradient: "from-green-600 to-teal-600",
      category: "IoT & Embedded",
      githubUrl: "",
      hasDemo: false,
    },
    {
      title: "CO₂ & Air Quality Monitoring System",
      shortDescription:
        "Real-time environmental monitoring using ESP32 with cloud integration.",
      fullDescription:
        "Designed comprehensive environmental KPI monitoring system using ESP32 with specialized sensors for real-time air quality tracking and cloud-based analytics.",
      technologies: [
        "ESP32",
        "MH-Z19E",
        "MQ-135",
        "FreeRTOS",
        "Cloud Computing",
        "Real-time Analytics",
      ],
      highlights: [
        "Environmental KPI tracking with high precision sensors",
        "MH-Z19E CO₂ sensor integration for accurate measurements",
        "MQ-135 air quality sensor for comprehensive monitoring",
        "Cloud-based data management and storage",
        "Real-time visualization and analytics dashboard",
        "Automated alerting for threshold violations",
      ],
      achievements: "🌱 Deployed in environmental research projects",
      gradient: "from-green-500 to-emerald-600",
      category: "IoT & Environmental",
      githubUrl: "",
      hasDemo: false,
    },
    {
      title: "Crop Disease Detection (SIH 2024)",
      shortDescription:
        "AI-driven crop disease prediction and management system.",
      fullDescription:
        "Ideated Smart Agriculture Forecasting Engine (S.A.F.E) for early crop disease detection using machine learning techniques with image and environmental data analysis.",
      technologies: [
        "Python",
        "Computer Vision",
        "Machine Learning",
        "Image Processing",
        "Agricultural Data",
      ],
      highlights: [
        "Smart Agriculture Forecasting Engine (S.A.F.E) development",
        "Machine learning for crop health analysis",
        "Image processing for disease pattern recognition",
        "Environmental data integration for comprehensive analysis",
        "Early warning system for farmers",
        "Scalable solution for agricultural applications",
      ],
      achievements: "🌾 Participated in Smart India Hackathon 2024",
      gradient: "from-yellow-500 to-orange-500",
      category: "AI/ML & Agriculture",
      githubUrl: "",
      hasDemo: false,
    },
  ];

  const toggleExpand = (index: number) => {
    setExpandedProject(expandedProject === index ? null : index);
  };

  const handleGithubClick = (url: string) => {
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  type Project = {
    title: string;
    shortDescription: string;
    fullDescription: string;
    technologies: string[];
    highlights: string[];
    achievements: string;
    gradient: string;
    category: string;
    githubUrl: string;
    hasDemo: boolean;
    demoUrl?: string;
  };

  const handleDemoClick = (project: Project) => {
    console.log(`Opening demo for ${project.title}`);
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Cyberpunk background elements */}
      <div className="cyber-bg absolute inset-0" />
      <div className="cyber-grid absolute inset-0" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-display cyber-heading cyber-text mb-6">
            Featured Projects
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-pink-500 to-cyan-500 mx-auto mb-8" />
          <p className="text-xl text-gray-300 font-light max-w-3xl mx-auto">
            Innovative solutions spanning AI/ML, IoT, Cloud Computing, and Real-time Systems
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="cyber-card group border-0 cyber-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`h-1 bg-gradient-to-r ${project.gradient}`}></div>
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-lg font-display font-medium text-white group-hover:cyber-text transition-all duration-300 leading-tight">
                    {project.title}
                  </CardTitle>
                  <Badge
                    variant="outline"
                    className={`cyber-card px-3 py-1 text-xs whitespace-nowrap ml-2 text-gray-300 border-pink-500/30`}
                  >
                    {project.category}
                  </Badge>
                </div>
                <p className="text-gray-300 leading-relaxed cyber-text-body">
                  {expandedProject === index
                    ? project.fullDescription
                    : project.shortDescription}
                </p>
                {project.achievements && (
                  <div className="text-sm font-medium text-cyan-400 mt-2">
                    {project.achievements}
                  </div>
                )}
              </CardHeader>
              <CardContent className="space-y-4">
                {expandedProject === index && (
                  <div className="space-y-3 cyber-fade-in">
                    <h4 className="font-medium text-white flex items-center">
                      <div
                        className={`w-3 h-3 rounded-full bg-gradient-to-r ${project.gradient} mr-2 cyber-glow`}
                      ></div>
                      Key Highlights
                    </h4>
                    {project.highlights.map((highlight, hIndex) => (
                      <div key={hIndex} className="flex items-start space-x-2">
                        <div
                          className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.gradient} mt-2 flex-shrink-0`}
                        ></div>
                        <span className="text-sm text-gray-300">
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex flex-wrap gap-2 pt-4">
                  {project.technologies
                    .slice(
                      0,
                      expandedProject === index
                        ? project.technologies.length
                        : 4
                    )
                    .map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="cyber-card bg-gray-800/50 text-gray-300 border-gray-700/50 hover:bg-gray-700/50 transition-colors duration-300 text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  {!expandedProject && project.technologies.length > 4 && (
                    <Badge
                      variant="secondary"
                      className="bg-gray-800/50 text-gray-400 text-xs border-gray-700/50"
                    >
                      +{project.technologies.length - 4} more
                    </Badge>
                  )}
                </div>

                <div className="flex justify-between items-center pt-4">
                  <div className="flex space-x-3">
                    {project.githubUrl ? (
                      <Button
                        size="sm"
                        className="cyber-button text-gray-300 border-pink-500/50"
                        onClick={() => handleGithubClick(project.githubUrl)}
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                    ) : (
                      <Button
                        size="sm"
                        className="opacity-50 cursor-not-allowed bg-gray-800/50 text-gray-500 border-gray-700/50"
                        disabled
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Private
                      </Button>
                    )}
                    {project.hasDemo && project.demoUrl ? (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block"
                      >
                        <Button
                          size="sm"
                          className={`cyber-button bg-gradient-to-r ${project.gradient} hover:opacity-90 text-white border-0`}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Demo
                        </Button>
                      </a>
                    ) : project.hasDemo ? (
                      <Button
                        size="sm"
                        className={`cyber-button bg-gradient-to-r ${project.gradient} hover:opacity-90 text-white border-0`}
                        disabled
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </Button>
                    ) : null}
                  </div>

                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleExpand(index)}
                    className="text-gray-400 hover:text-cyan-400 hover:bg-gray-800/50 transition-all duration-300"
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

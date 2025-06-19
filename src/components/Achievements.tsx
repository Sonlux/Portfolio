import React, { useRef, useEffect, useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Trophy } from "lucide-react";

const Achievements = () => {
  const certifications = [
    "AWS Cloud Foundations",
    "AWS Cloud Architecture",
    "GOOGLE AIML Virtual Internship (AICTE)",
    "PALO ALTO Cyber Security Virtual Internship (AICTE)",
  ];

  const hackathons = useMemo(
    () => [
      {
        name: "Tata Steel Tomorrow Lab 2023 – BeyondBricks",
        type: "Participation",
        description:
          "Contributed to designing sustainable and refurbishable housing model for affordable shelter solutions",
        achievements: [
          "Proposed modular housing concepts requiring refurbishing every 10 years",
          "Addressed challenges in employment generation, supply chain risks, and long-term housing viability",
        ],
        color: "from-blue-500 to-cyan-500",
      },
      {
        name: "Smart India Hackathon (SIH) 2024",
        type: "Participation",
        description:
          "AI-Driven Crop Disease Prediction and Management System (Problem ID: SIH1638)",
        achievements: [
          "Ideated Smart Agriculture Forecasting Engine (S.A.F.E) for crop disease detection",
          "Explored machine learning techniques for crop health analysis using image and environmental data",
        ],
        color: "from-green-500 to-teal-500",
      },
      {
        name: "Guidewire DevTrails 2025",
        type: "Top 5 Finalist",
        description:
          "AI-driven system for predicting and mitigating Kubernetes cluster failures",
        achievements: [
          "Developed AI-driven system for Kubernetes cluster failure prediction",
          "Implemented time-series forecasting and anomaly detection for system reliability",
          "Integrated Prometheus and Grafana for real-time cluster performance monitoring",
          "Worked on AI-based remediation system for proactive failure resolution",
        ],
        color: "from-purple-500 to-pink-500",
      },
    ],
    []
  );

  // For hackathon details
  const hackathonRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [visibleHackathons, setVisibleHackathons] = useState<boolean[]>(() =>
    hackathons.map(() => false)
  );
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    hackathons.forEach((_, i) => {
      if (!hackathonRefs.current[i]) return;
      const observer = new window.IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleHackathons((prev) => {
              const updated = [...prev];
              updated[i] = true;
              return updated;
            });
            observer.disconnect();
          }
        },
        { threshold: 0.15 }
      );
      observer.observe(hackathonRefs.current[i]!);
      observers.push(observer);
    });
    return () => observers.forEach((obs) => obs.disconnect());
  }, [hackathons]);

  // For top three cards
  const topCardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [visibleTopCards, setVisibleTopCards] = useState<boolean[]>([
    false,
    false,
    false,
  ]);
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    for (let i = 0; i < 3; i++) {
      if (!topCardRefs.current[i]) continue;
      const observer = new window.IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleTopCards((prev) => {
              const updated = [...prev];
              updated[i] = true;
              return updated;
            });
            observer.disconnect();
          }
        },
        { threshold: 0.15 }
      );
      observer.observe(topCardRefs.current[i]!);
      observers.push(observer);
    }
    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Cyberpunk background elements */}
      <div className="cyber-bg absolute inset-0" />
      <div className="cyber-grid absolute inset-0" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-display cyber-heading cyber-text mb-6">
            Achievements & Certifications
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-pink-500 to-cyan-500 mx-auto mb-8" />
          <p className="text-xl text-gray-300 font-light max-w-2xl mx-auto">
            Recognition and continuous learning journey
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Certifications */}
          <Card
            ref={(el) => (topCardRefs.current[0] = el)}
            className={`cyber-card border-0 cyber-fade-in${
              visibleTopCards[0] ? " visible" : ""
            }`}
          >
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 cyber-glow">
                <Award className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-xl font-display font-medium text-white">
                Certifications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="cyber-card p-3 rounded-lg transition-all duration-300 hover:scale-105"
                  >
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-300 font-medium cyber-text-body">
                        {cert}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Hackathons Summary */}
          <Card
            ref={(el) => (topCardRefs.current[1] = el)}
            className={`cyber-card border-0 cyber-fade-in${
              visibleTopCards[1] ? " visible" : ""
            }`}
            style={{ animationDelay: "0.1s" }}
          >
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4 cyber-glow">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-xl font-display font-medium text-white">
                Hackathons
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="grid grid-cols-2 gap-4">
                <div className="cyber-card p-4 rounded-lg">
                  <div className="text-2xl font-bold text-green-400 font-display">
                    3
                  </div>
                  <div className="text-sm text-gray-400">Participated</div>
                </div>
                <div className="cyber-card p-4 rounded-lg">
                  <div className="text-2xl font-bold text-purple-400 font-display">
                    1
                  </div>
                  <div className="text-sm text-gray-400">Top 5 Finalist</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Recognition */}
          <Card
            ref={(el) => (topCardRefs.current[2] = el)}
            className={`cyber-card border-0 cyber-fade-in${
              visibleTopCards[2] ? " visible" : ""
            }`}
            style={{ animationDelay: "0.2s" }}
          >
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 cyber-glow">
                <Award className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-xl font-display font-medium text-white">
                Recognition
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="cyber-card p-4 rounded-lg text-center">
                  <div className="text-lg font-semibold text-orange-400 mb-2 font-display">
                    Academic Excellence
                  </div>
                  <div className="text-sm text-gray-300 cyber-text-body">
                    Maintaining 8.07/10 CGPA in Electronics & Computer
                    Engineering
                  </div>
                </div>
                <div className="cyber-card p-4 rounded-lg text-center">
                  <div className="text-lg font-semibold text-blue-400 mb-2 font-display">
                    Leadership
                  </div>
                  <div className="text-sm text-gray-300 cyber-text-body">
                    HR Lead at Club Radiance with successful event organization
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Hackathons */}
        <div>
          <h3 className="text-4xl font-display cyber-heading cyber-text text-center mb-16">
            Hackathon Details
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hackathons.map((hackathon, index) => (
              <Card
                key={index}
                ref={(el) => (hackathonRefs.current[index] = el)}
                className={`cyber-card border-0 overflow-hidden cyber-fade-in${
                  visibleHackathons[index] ? " visible" : ""
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className={`h-1 bg-gradient-to-r ${hackathon.color}`}
                ></div>
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-lg font-medium text-white leading-tight font-display">
                      {hackathon.name}
                    </CardTitle>
                    <Badge
                      variant="outline"
                      className={`cyber-card bg-gradient-to-r ${hackathon.color} text-white border-0 whitespace-nowrap ml-2 px-2 py-1 text-xs`}
                    >
                      {hackathon.type}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-300 leading-relaxed cyber-text-body">
                    {hackathon.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {hackathon.achievements.map((achievement, achIndex) => (
                      <div
                        key={achIndex}
                        className="flex items-start space-x-2"
                      >
                        <div
                          className={`w-2 h-2 rounded-full bg-gradient-to-r ${hackathon.color} mt-2 flex-shrink-0`}
                        ></div>
                        <span className="text-xs text-gray-300 cyber-text-body">
                          {achievement}
                        </span>
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

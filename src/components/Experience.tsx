import React, { useRef, useEffect, useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Experience = () => {
  const experiences = useMemo(
    () => [
      {
        title: "HR Lead",
        company: "Club Radiance",
        location: "Chennai, Tamil Nadu",
        period: "09.2023 - Current",
        type: "Leadership",
        responsibilities: [
          "Elected to lead Club Radiance's first team as an HR, supporting youth development in UHV",
          "Assembled and managed individuals to promote well-being and collaboration",
          "Dedicated 15 hours weekly to organizing workshops and events",
          "Achieved two successful outcomes in 2024",
        ],
        color: "from-blue-500 to-cyan-500",
      },
      {
        title: "Public Relations",
        company: "RAEEUCCI-2024",
        location: "Chennai, Tamil Nadu",
        period: "04.2024",
        type: "Event Management",
        responsibilities: [
          "Managed communication and outreach to enhance event visibility and engagement",
          "Coordinated with teams to ensure smooth execution of promotional activities",
          "Strengthened networking and collaboration with participants and stakeholders",
        ],
        color: "from-green-500 to-teal-500",
      },
      {
        title: "Member",
        company: "Directorate of Student Affairs (DSA)",
        location: "Chennai, Tamil Nadu",
        period: "07.2023 - Current",
        type: "Student Affairs",
        responsibilities: [
          "Managed execution of major student events like Milan, Jhalak, Shuru, and Road Shows",
          "Coordinated with teams to ensure smooth event planning and operations",
          "Facilitated communication between students and administration for effective event management",
        ],
        color: "from-purple-500 to-pink-500",
      },
    ],
    []
  );

  const education = useMemo(
    () => [
      {
        degree: "Bachelor of Technology in Electronics & Computer Engineering",
        institution: "SRM Institute of Science & Technology",
        period: "09.2022 - Current",
        cgpa: "8.07 / 10",
        color: "from-orange-500 to-red-500",
      },
      {
        degree: "Class XII",
        institution: "Narayana Olympiad School",
        period: "04.2020 - 2022",
        cgpa: "85%",
        color: "from-indigo-500 to-purple-500",
      },
      {
        degree: "Class X",
        institution: "Narayana E-Techno School",
        period: "04.2015 - 2020",
        cgpa: "90.2%",
        color: "from-teal-500 to-green-500",
      },
    ],
    []
  );

  // For experience cards
  const expRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [visibleExp, setVisibleExp] = useState<boolean[]>(() =>
    experiences.map(() => false)
  );
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    experiences.forEach((_, i) => {
      if (!expRefs.current[i]) return;
      const observer = new window.IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleExp((prev) => {
              const updated = [...prev];
              updated[i] = true;
              return updated;
            });
            observer.disconnect();
          }
        },
        { threshold: 0.15 }
      );
      observer.observe(expRefs.current[i]!);
      observers.push(observer);
    });
    return () => observers.forEach((obs) => obs.disconnect());
  }, [experiences]);
  // For education cards
  const eduRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [visibleEdu, setVisibleEdu] = useState<boolean[]>(() =>
    education.map(() => false)
  );
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    education.forEach((_, i) => {
      if (!eduRefs.current[i]) return;
      const observer = new window.IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleEdu((prev) => {
              const updated = [...prev];
              updated[i] = true;
              return updated;
            });
            observer.disconnect();
          }
        },
        { threshold: 0.15 }
      );
      observer.observe(eduRefs.current[i]!);
      observers.push(observer);
    });
    return () => observers.forEach((obs) => obs.disconnect());
  }, [education]);

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Cyberpunk background elements */}
      <div className="cyber-bg absolute inset-0" />
      <div className="cyber-grid absolute inset-0" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-display cyber-heading cyber-text mb-6">
            Experience & Education
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-pink-500 to-cyan-500 mx-auto mb-8" />
          <p className="text-xl text-gray-300 font-light max-w-2xl mx-auto">
            Professional journey and academic excellence
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Experience Section */}
          <div>
            <h3 className="text-3xl font-display cyber-heading text-white mb-8 flex items-center">
              <div className="w-3 h-3 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-full mr-3 cyber-glow"></div>
              Professional Experience
            </h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <Card
                  key={index}
                  ref={(el) => (expRefs.current[index] = el)}
                  className={`cyber-card border-0 cyber-fade-in${
                    visibleExp[index] ? " visible" : ""
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-lg font-medium text-white">
                        {exp.title}
                      </CardTitle>
                      <Badge
                        variant="outline"
                        className={`cyber-card bg-gradient-to-r ${exp.color} text-white border-0 px-3 py-1`}
                      >
                        {exp.type}
                      </Badge>
                    </div>
                    <div className="text-cyan-400 font-medium">
                      {exp.company}
                    </div>
                    <div className="text-sm text-gray-400">
                      {exp.location} • {exp.period}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, respIndex) => (
                        <li
                          key={respIndex}
                          className="flex items-start space-x-2"
                        >
                          <div
                            className={`w-2 h-2 rounded-full bg-gradient-to-r ${exp.color} mt-2 flex-shrink-0`}
                          ></div>
                          <span className="text-sm text-gray-300 cyber-text-body">
                            {resp}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div>
            <h3 className="text-3xl font-display cyber-heading text-white mb-8 flex items-center">
              <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-3 cyber-glow"></div>
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card
                  key={index}
                  ref={(el) => (eduRefs.current[index] = el)}
                  className={`cyber-card border-0 cyber-fade-in${
                    visibleEdu[index] ? " visible" : ""
                  }`}
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <CardHeader>
                    <CardTitle className="text-lg font-medium text-white leading-tight">
                      {edu.degree}
                    </CardTitle>
                    <div className="text-pink-400 font-medium">
                      {edu.institution}
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="text-sm text-gray-400">{edu.period}</div>
                      <Badge
                        variant="outline"
                        className={`cyber-card bg-gradient-to-r ${edu.color} text-white border-0 px-3 py-1`}
                      >
                        {edu.cgpa}
                      </Badge>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

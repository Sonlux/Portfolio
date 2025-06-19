import React, { useRef, useEffect, useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Calendar, Award } from "lucide-react";

const Leadership = () => {
  const leadership = useMemo(
    () => [
      {
        title: "HR Lead",
        organization: "Club Radiance",
        period: "September 2023 - Current",
        description:
          "Leading Club Radiance's inaugural team focused on Universal Human Values (UHV) and youth well-being initiatives.",
        achievements: [
          "Assembled and managed diverse teams to promote collaboration and well-being",
          "Dedicated 15+ hours weekly to organizing impactful workshops and events",
          "Successfully delivered two major outcomes in 2024",
          "Pioneered UHV-based leadership development programs",
          "Fostered inclusive environment for student growth and development",
        ],
        impact: "200+ Students Impacted",
        color: "from-blue-500 to-cyan-500",
        icon: Users,
      },
      {
        title: "Public Relations Lead",
        organization: "RAEEUCCI-2024",
        period: "April 2024",
        description:
          "Managed communication and outreach strategies to enhance event visibility and engagement for the premier engineering conference.",
        achievements: [
          "Developed comprehensive PR strategy for large-scale engineering event",
          "Coordinated cross-functional teams for seamless promotional activities",
          "Enhanced event visibility through strategic communication channels",
          "Strengthened networking opportunities between participants and stakeholders",
          "Managed media relations and stakeholder communications",
        ],
        impact: "1000+ Event Participants",
        color: "from-green-500 to-teal-500",
        icon: Calendar,
      },
      {
        title: "Core Member",
        organization: "Directorate of Student Affairs (DSA)",
        period: "July 2023 - Current",
        description:
          "Driving execution of major student events and facilitating communication between students and administration.",
        achievements: [
          "Managed execution of flagship events: Milan, Jhalak, Shuru, and Road Shows",
          "Coordinated multi-team operations for smooth event planning and execution",
          "Facilitated effective communication channels between students and administration",
          "Streamlined event management processes for enhanced efficiency",
          "Contributed to policy development for student affairs",
        ],
        impact: "5000+ Students Reached",
        color: "from-purple-500 to-pink-500",
        icon: Award,
      },
    ],
    []
  );

  const volunteeringStats = [
    { number: "3", label: "Leadership Roles", icon: "👥" },
    { number: "6000+", label: "Students Impacted", icon: "🎯" },
    { number: "50+", label: "Events Organized", icon: "📅" },
    { number: "100+", label: "Hours Dedicated", icon: "⏰" },
  ];

  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [visibleCards, setVisibleCards] = useState<boolean[]>(() =>
    leadership.map(() => false)
  );

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    leadership.forEach((_, i) => {
      if (!cardRefs.current[i]) return;
      const observer = new window.IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => {
              const updated = [...prev];
              updated[i] = true;
              return updated;
            });
            observer.disconnect();
          }
        },
        { threshold: 0.15 }
      );
      observer.observe(cardRefs.current[i]!);
      observers.push(observer);
    });
    return () => observers.forEach((obs) => obs.disconnect());
  }, [leadership]);

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Cyberpunk background elements */}
      <div className="cyber-bg absolute inset-0" />
      <div className="cyber-grid absolute inset-0" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-display cyber-heading cyber-text mb-6">
            Leadership & Volunteering
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-pink-500 to-cyan-500 mx-auto mb-8" />
          <p className="text-xl text-gray-300 font-light max-w-3xl mx-auto">
            Fostering collaboration, driving innovation, and creating positive
            impact through leadership and community engagement
          </p>
        </div>

        {/* Impact Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {volunteeringStats.map((stat, index) => (
            <Card
              key={index}
              className="cyber-card text-center border-0 cyber-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold text-white mb-1 font-display">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Leadership Roles */}
        <div className="space-y-8">
          {leadership.map((role, index) => (
            <Card
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className={`cyber-card border-0 cyber-fade-in${
                visibleCards[index] ? " visible" : ""
              }`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-4">
                    <div
                      className={`w-12 h-12 rounded-lg bg-gradient-to-r ${role.color} flex items-center justify-center cyber-glow`}
                    >
                      <role.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-medium text-white font-display">
                        {role.title}
                      </CardTitle>
                      <div className="text-cyan-400 font-medium">
                        {role.organization}
                      </div>
                      <div className="text-sm text-gray-400">{role.period}</div>
                    </div>
                  </div>
                  <Badge
                    variant="outline"
                    className={`cyber-card bg-gradient-to-r ${role.color} text-white border-0 whitespace-nowrap px-3 py-1`}
                  >
                    {role.impact}
                  </Badge>
                </div>
                <p className="text-gray-300 leading-relaxed mt-4 cyber-text-body">
                  {role.description}
                </p>
              </CardHeader>
              <CardContent>
                <h4 className="font-medium text-white mb-3 flex items-center">
                  <div
                    className={`w-3 h-3 rounded-full bg-gradient-to-r ${role.color} mr-2 cyber-glow`}
                  ></div>
                  Key Achievements
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {role.achievements.map((achievement, achIndex) => (
                    <div key={achIndex} className="flex items-start space-x-2">
                      <div
                        className={`w-2 h-2 rounded-full bg-gradient-to-r ${role.color} mt-2 flex-shrink-0`}
                      ></div>
                      <span className="text-sm text-gray-300 cyber-text-body">
                        {achievement}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div
          className="mt-16 text-center cyber-card p-8 rounded-2xl cyber-fade-in"
          style={{ animationDelay: "0.5s" }}
        >
          <h3 className="text-2xl font-bold text-white mb-4 font-display">
            Let's Collaborate
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto cyber-text-body">
            Passionate about creating positive impact through technology and
            leadership. Open to collaboration opportunities in AI-for-good,
            smart cities, and student initiatives.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Leadership;

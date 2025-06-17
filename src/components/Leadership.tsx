
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Calendar, Award } from 'lucide-react';

const Leadership = () => {
  const leadership = [
    {
      title: "HR Lead",
      organization: "Club Radiance",
      period: "September 2023 - Current",
      description: "Leading Club Radiance's inaugural team focused on Universal Human Values (UHV) and youth well-being initiatives.",
      achievements: [
        "Assembled and managed diverse teams to promote collaboration and well-being",
        "Dedicated 15+ hours weekly to organizing impactful workshops and events",
        "Successfully delivered two major outcomes in 2024",
        "Pioneered UHV-based leadership development programs",
        "Fostered inclusive environment for student growth and development"
      ],
      impact: "200+ Students Impacted",
      color: "from-blue-500 to-cyan-500",
      icon: Users
    },
    {
      title: "Public Relations Lead",
      organization: "RAEEUCCI-2024",
      period: "April 2024",
      description: "Managed communication and outreach strategies to enhance event visibility and engagement for the premier engineering conference.",
      achievements: [
        "Developed comprehensive PR strategy for large-scale engineering event",
        "Coordinated cross-functional teams for seamless promotional activities",
        "Enhanced event visibility through strategic communication channels",
        "Strengthened networking opportunities between participants and stakeholders",
        "Managed media relations and stakeholder communications"
      ],
      impact: "1000+ Event Participants",
      color: "from-green-500 to-teal-500",
      icon: Calendar
    },
    {
      title: "Core Member",
      organization: "Directorate of Student Affairs (DSA)",
      period: "July 2023 - Current",
      description: "Driving execution of major student events and facilitating communication between students and administration.",
      achievements: [
        "Managed execution of flagship events: Milan, Jhalak, Shuru, and Road Shows",
        "Coordinated multi-team operations for smooth event planning and execution",
        "Facilitated effective communication channels between students and administration",
        "Streamlined event management processes for enhanced efficiency",
        "Contributed to policy development for student affairs"
      ],
      impact: "5000+ Students Reached",
      color: "from-purple-500 to-pink-500",
      icon: Award
    }
  ];

  const volunteeringStats = [
    { number: "3", label: "Leadership Roles", icon: "👥" },
    { number: "6000+", label: "Students Impacted", icon: "🎯" },
    { number: "50+", label: "Events Organized", icon: "📅" },
    { number: "100+", label: "Hours Dedicated", icon: "⏰" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Leadership & Volunteering</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Fostering collaboration, driving innovation, and creating positive impact through leadership and community engagement
          </p>
        </div>

        {/* Impact Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {volunteeringStats.map((stat, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Leadership Roles */}
        <div className="space-y-8">
          {leadership.map((role, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border-l-4 border-l-transparent hover:border-l-blue-500">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${role.color} flex items-center justify-center`}>
                      <role.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-bold text-gray-900">{role.title}</CardTitle>
                      <div className="text-blue-600 font-medium">{role.organization}</div>
                      <div className="text-sm text-gray-500">{role.period}</div>
                    </div>
                  </div>
                  <Badge variant="outline" className={`bg-gradient-to-r ${role.color} text-white border-0 whitespace-nowrap`}>
                    {role.impact}
                  </Badge>
                </div>
                <p className="text-gray-600 leading-relaxed mt-4">{role.description}</p>
              </CardHeader>
              <CardContent>
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${role.color} mr-2`}></div>
                  Key Achievements
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {role.achievements.map((achievement, achIndex) => (
                    <div key={achIndex} className="flex items-start space-x-2">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${role.color} mt-2 flex-shrink-0`}></div>
                      <span className="text-sm text-gray-700">{achievement}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Let's Collaborate</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Passionate about creating positive impact through technology and leadership. 
            Open to collaboration opportunities in AI-for-good, smart cities, and student initiatives.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Leadership;

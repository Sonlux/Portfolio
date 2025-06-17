
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Experience = () => {
  const experiences = [
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
        "Achieved two successful outcomes in 2024"
      ],
      color: "from-blue-500 to-cyan-500"
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
        "Strengthened networking and collaboration with participants and stakeholders"
      ],
      color: "from-green-500 to-teal-500"
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
        "Facilitated communication between students and administration for effective event management"
      ],
      color: "from-purple-500 to-pink-500"
    }
  ];

  const education = [
    {
      degree: "Bachelor of Technology in Electronics & Computer Engineering",
      institution: "SRM Institute of Science & Technology",
      period: "09.2022 - Current",
      cgpa: "8.07 / 10",
      color: "from-orange-500 to-red-500"
    },
    {
      degree: "Class XII",
      institution: "Narayana Olympiad School",
      period: "04.2020 - 2022",
      cgpa: "85%",
      color: "from-indigo-500 to-purple-500"
    },
    {
      degree: "Class X",
      institution: "Narayana E-Techno School",
      period: "04.2015 - 2020",
      cgpa: "90.2%",
      color: "from-teal-500 to-green-500"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience & Education</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Experience Section */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mr-3"></div>
              Professional Experience
            </h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-transparent hover:border-l-blue-500">
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-lg font-semibold text-gray-900">{exp.title}</CardTitle>
                      <Badge variant="outline" className={`bg-gradient-to-r ${exp.color} text-white border-0`}>
                        {exp.type}
                      </Badge>
                    </div>
                    <div className="text-blue-600 font-medium">{exp.company}</div>
                    <div className="text-sm text-gray-500">{exp.location} • {exp.period}</div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, respIndex) => (
                        <li key={respIndex} className="flex items-start space-x-2">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${exp.color} mt-2 flex-shrink-0`}></div>
                          <span className="text-sm text-gray-700">{resp}</span>
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
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-teal-500 rounded-full mr-3"></div>
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-transparent hover:border-l-green-500">
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold text-gray-900">{edu.degree}</CardTitle>
                    <div className="text-green-600 font-medium">{edu.institution}</div>
                    <div className="flex justify-between items-center">
                      <div className="text-sm text-gray-500">{edu.period}</div>
                      <Badge variant="outline" className={`bg-gradient-to-r ${edu.color} text-white border-0`}>
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

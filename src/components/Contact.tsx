
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Github, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const { toast } = useToast();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "lakshanamineni@gmail.com",
      href: "mailto:lakshanamineni@gmail.com",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Lakshan Amineni",
      href: "https://www.linkedin.com/in/lakshan2810/",
      color: "from-blue-600 to-blue-800",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Chennai, Tamil Nadu",
      href: "#",
      color: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Cyberpunk background elements */}
      <div className="cyber-bg absolute inset-0" />
      <div className="cyber-grid absolute inset-0" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-display cyber-heading cyber-text mb-6">
            Get In Touch
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-pink-500 to-cyan-500 mx-auto mb-8" />
          <p className="text-xl text-gray-300 font-light max-w-2xl mx-auto">
            Ready to collaborate on innovative projects or discuss
            opportunities? Let's connect and create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-display cyber-heading text-white mb-6">
                Contact Information
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contactInfo.map((info, index) => (
                  <a key={index} href={info.href} className="group block">
                    <Card className="cyber-card border-0 group-hover:scale-105 transition-all duration-300">
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-3">
                          <div
                            className={`w-10 h-10 rounded-lg bg-gradient-to-r ${info.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 cyber-glow`}
                          >
                            <info.icon className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <div className="text-sm text-gray-400">
                              {info.label}
                            </div>
                            <div className="text-white font-medium">
                              {info.value}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-display font-medium text-white mb-4">
                Connect With Me
              </h3>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/lakshan2810/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cyber-card w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 cyber-glow"
                >
                  <Linkedin className="w-6 h-6 text-white" />
                </a>
                <a
                  href="https://github.com/Sonlux"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cyber-card w-12 h-12 bg-gradient-to-r from-gray-700 to-gray-900 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 cyber-glow"
                >
                  <Github className="w-6 h-6 text-white" />
                </a>
                <a
                  href="mailto:lakshanamineni@gmail.com"
                  className="cyber-card w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 cyber-glow"
                >
                  <Mail className="w-6 h-6 text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="cyber-card border-0">
            <CardHeader>
              <CardTitle className="text-2xl font-display font-medium text-white">
                Send a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="cyber-card bg-gray-800/50 border-gray-700/50 text-white placeholder:text-gray-400 focus:border-cyan-400"
                      required
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="cyber-card bg-gray-800/50 border-gray-700/50 text-white placeholder:text-gray-400 focus:border-cyan-400"
                      required
                    />
                  </div>
                </div>
                <div>
                  <Input
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="cyber-card bg-gray-800/50 border-gray-700/50 text-white placeholder:text-gray-400 focus:border-cyan-400"
                    required
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="cyber-card bg-gray-800/50 border-gray-700/50 text-white placeholder:text-gray-400 resize-none focus:border-cyan-400"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full cyber-button bg-gradient-to-r from-pink-600 to-cyan-600 hover:from-pink-500 hover:to-cyan-500 text-white border-0 transition-all duration-300 hover:scale-105"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;

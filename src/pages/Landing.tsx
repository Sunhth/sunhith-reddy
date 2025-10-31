import { motion } from "framer-motion";
import { Briefcase, Code, Mail, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Landing() {
  return (
    <div className="min-h-screen bg-[#FFEB3B]">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Full Screen Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://harmless-tapir-303.convex.cloud/api/storage/b893c057-493c-4ac6-89c8-ea6a32c629c5"
            alt="Sunhith Reddy"
            className="w-full h-full object-cover"
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Name Section - Overlaid on Image */}
        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white neo-border neo-shadow bg-black px-8 py-6 inline-block -rotate-2 whitespace-nowrap"
          >
            SUNHITH REDDY
          </motion.h1>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-[#00FF80]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-bold text-black neo-border neo-shadow bg-white px-8 py-4 inline-block -rotate-1 mb-12">
              ABOUT ME
            </h2>
            
            <Card className="neo-border neo-shadow bg-white p-8 md:p-12 rotate-1 mt-8">
              <p className="text-xl md:text-2xl font-bold text-black leading-relaxed">
                Hey! I'm Sunhith Reddy, a passionate developer and creative problem solver. 
                I love building things that make a difference and pushing the boundaries of what's possible with code.
              </p>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 bg-[#0080FF]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-bold text-white neo-border neo-shadow bg-black px-8 py-4 inline-block rotate-1 mb-12">
              SKILLS
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {[
                { icon: Code, title: "FRONTEND", color: "#FF0080" },
                { icon: Code, title: "BACKEND", color: "#00FF80" },
                { icon: Code, title: "DESIGN", color: "#FFEB3B" },
                { icon: Briefcase, title: "LEADERSHIP", color: "#FF0080" },
                { icon: Code, title: "DATABASES", color: "#00FF80" },
                { icon: Briefcase, title: "DEVOPS", color: "#FFEB3B" },
              ].map((skill, index) => (
                <motion.div
                  key={skill.title}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ rotate: -2, scale: 1.05 }}
                >
                  <Card 
                    className="neo-border neo-shadow p-6 text-center cursor-pointer"
                    style={{ backgroundColor: skill.color }}
                  >
                    <skill.icon className="h-12 w-12 mx-auto mb-4 text-black" strokeWidth={3} />
                    <h3 className="text-2xl font-bold text-black">{skill.title}</h3>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 bg-[#FF0080]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-bold text-black neo-border neo-shadow bg-[#FFEB3B] px-8 py-4 inline-block -rotate-1 mb-12">
              PROJECTS
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              {[
                { title: "PROJECT ONE", desc: "An awesome project that does amazing things", color: "#00FF80" },
                { title: "PROJECT TWO", desc: "Another incredible build with cutting-edge tech", color: "#0080FF" },
                { title: "PROJECT THREE", desc: "A revolutionary app that changes everything", color: "#FFEB3B" },
                { title: "PROJECT FOUR", desc: "The future of web development starts here", color: "#00FF80" },
              ].map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ rotate: 2, scale: 1.02 }}
                >
                  <Card 
                    className="neo-border neo-shadow p-8 cursor-pointer bg-white"
                  >
                    <div 
                      className="w-full h-3 mb-4 neo-border-thin"
                      style={{ backgroundColor: project.color }}
                    ></div>
                    <h3 className="text-3xl font-bold text-black mb-3">{project.title}</h3>
                    <p className="text-lg font-bold text-black/70">{project.desc}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-bold text-white neo-border neo-shadow bg-black px-8 py-4 inline-block rotate-1 mb-12">
              GET IN TOUCH
            </h2>
            
            <Card className="neo-border neo-shadow bg-[#00FF80] p-12 -rotate-1 mt-8">
              <p className="text-2xl md:text-3xl font-bold text-black mb-8">
                Let's build something amazing together!
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  size="lg"
                  className="neo-border neo-shadow-sm bg-[#0080FF] hover:bg-[#0080FF] text-white font-bold text-lg px-6 py-6 rotate-2 hover:rotate-0 transition-transform"
                >
                  <Mail className="mr-2 h-5 w-5" /> EMAIL
                </Button>
                <Button
                  size="lg"
                  className="neo-border neo-shadow-sm bg-black hover:bg-black text-white font-bold text-lg px-6 py-6 -rotate-2 hover:rotate-0 transition-transform"
                >
                  <Github className="mr-2 h-5 w-5" /> GITHUB
                </Button>
                <Button
                  size="lg"
                  className="neo-border neo-shadow-sm bg-[#FF0080] hover:bg-[#FF0080] text-white font-bold text-lg px-6 py-6 rotate-1 hover:rotate-0 transition-transform"
                >
                  <Linkedin className="mr-2 h-5 w-5" /> LINKEDIN
                </Button>
                <Button
                  size="lg"
                  className="neo-border neo-shadow-sm bg-[#FFEB3B] hover:bg-[#FFEB3B] text-black font-bold text-lg px-6 py-6 -rotate-1 hover:rotate-0 transition-transform"
                >
                  <Twitter className="mr-2 h-5 w-5" /> TWITTER
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-black">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-white font-bold text-xl">
            © 2024 SUNHITH REDDY. ALL RIGHTS RESERVED.
          </p>
        </div>
      </footer>
    </div>
  );
}
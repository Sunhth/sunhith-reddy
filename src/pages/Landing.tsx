import { motion } from "framer-motion";
import { Briefcase, Code, Mail, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Landing() {
  const fullText = "Whether it's writing code or structuring a life, I aim for clarity, calm and long-term impact. I believe good systems are built with intent and consistency";
  // Word-by-word fade-in animation setup
  const words = fullText.split(" ");
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };
  const wordVariants = {
    hidden: { opacity: 0, y: 4 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="min-h-screen flex items-end justify-start relative overflow-hidden pb-20 pl-8 md:pl-16 lg:pl-24">
        {/* Full Screen Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://harmless-tapir-303.convex.cloud/api/storage/b893c057-493c-4ac6-89c8-ea6a32c629c5"
            alt="Sunhith Reddy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Top Navigation */}
        <div className="absolute top-0 left-0 right-0 flex justify-between items-start p-8 z-20">
          <div className="flex items-center gap-2">
            <span className="text-white font-bold text-lg">Sunhith Reddy</span>
            <span className="flex items-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-green-500 font-semibold">Available for work</span>
            </span>
          </div>
          <div className="flex flex-col items-end gap-6">
            <div className="flex gap-6 text-white font-medium">
              <a href="#about" className="hover:text-cyan-400 transition-colors">Download CV</a>
              <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact Me</a>
            </div>
            {/* Narrower container to increase lines and avoid face overlap */}
            <div className="max-w-[12rem] md:max-w-[16rem] lg:max-w-[22rem]" style={{ marginTop: "10vh" }}>
              <motion.p
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="text-white text-xs md:text-sm lg:text-base text-right leading-relaxed font-semibold uppercase tracking-wide"
              >
                <span className="mr-1">"Sunhith Reddy"</span>
                {words.map((word, i) => (
                  <motion.span key={i} variants={wordVariants} className="inline-block mr-1">
                    {word}
                  </motion.span>
                ))}
                <span>"</span>
              </motion.p>
            </div>
          </div>
        </div>

        {/* Name Section - Bottom Left */}
        <div className="relative z-10 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1
              className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-none mb-4 whitespace-nowrap"
              style={{ fontFamily: "'Alfa Slab One', sans-serif" }}
            >
              SUNHITH REDDY
            </h1>

            <p className="text-white text-xl md:text-2xl font-medium">
              Senior Software Engineer, based in Los Angeles
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              About Me
            </h2>
            
            <Card className="border border-gray-200 bg-white p-8 md:p-12 shadow-sm">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Hey! I'm Sunhith Reddy, a passionate developer and creative problem solver. 
                I love building things that make a difference and pushing the boundaries of what's possible with code.
              </p>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Skills
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Code, title: "Frontend" },
                { icon: Code, title: "Backend" },
                { icon: Code, title: "Design" },
                { icon: Briefcase, title: "Leadership" },
                { icon: Code, title: "Databases" },
                { icon: Briefcase, title: "DevOps" },
              ].map((skill, index) => (
                <motion.div
                  key={skill.title}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Card 
                    className="border border-gray-200 bg-white p-6 text-center cursor-pointer shadow-sm hover:shadow-md transition-shadow"
                  >
                    <skill.icon className="h-10 w-10 mx-auto mb-4 text-gray-700" strokeWidth={2} />
                    <h3 className="text-xl font-semibold text-gray-900">{skill.title}</h3>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Projects
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { title: "Project One", desc: "An awesome project that does amazing things" },
                { title: "Project Two", desc: "Another incredible build with cutting-edge tech" },
                { title: "Project Three", desc: "A revolutionary app that changes everything" },
                { title: "Project Four", desc: "The future of web development starts here" },
              ].map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Card 
                    className="border border-gray-200 bg-white p-8 cursor-pointer shadow-sm hover:shadow-md transition-shadow"
                  >
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
                    <p className="text-base text-gray-600">{project.desc}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Get In Touch
            </h2>
            
            <Card className="border border-gray-200 bg-white p-12 shadow-sm">
              <p className="text-xl md:text-2xl text-gray-700 mb-8">
                Let's build something amazing together!
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  size="lg"
                  className="bg-gray-900 hover:bg-gray-800 text-white font-medium text-base px-6 py-6"
                >
                  <Mail className="mr-2 h-5 w-5" /> Email
                </Button>
                <Button
                  size="lg"
                  className="bg-gray-900 hover:bg-gray-800 text-white font-medium text-base px-6 py-6"
                >
                  <Github className="mr-2 h-5 w-5" /> GitHub
                </Button>
                <Button
                  size="lg"
                  className="bg-gray-900 hover:bg-gray-800 text-white font-medium text-base px-6 py-6"
                >
                  <Linkedin className="mr-2 h-5 w-5" /> LinkedIn
                </Button>
                <Button
                  size="lg"
                  className="bg-gray-900 hover:bg-gray-800 text-white font-medium text-base px-6 py-6"
                >
                  <Twitter className="mr-2 h-5 w-5" /> Twitter
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-white font-medium text-base">
            © 2024 Sunhith Reddy. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
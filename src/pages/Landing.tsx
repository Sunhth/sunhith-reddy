import { motion } from "framer-motion";
import { Briefcase, Code, Mail, Github, Linkedin, GraduationCap, BadgeCheck, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Landing() {
  // Removed right-side quote and links per request

  return (
    <div className="min-h-screen bg-[#8c1b1b]">
      {/* Hero Section */}
      <section className="min-h-screen flex items-end justify-start relative overflow-hidden pb-20 pl-8 md:pl-16 lg:pl-24">
        {/* Full Screen Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://harmless-tapir-303.convex.cloud/api/storage/7c5deda2-eec4-405c-955b-3c9f407ed58b"
            alt="Sunhith Reddy"
            className="w-full h-full object-cover"
            // Fallback if remote image fails to load (prevents "refused to connect" blank hero)
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = "/logo_bg.png";
            }}
          />
          {/* Bottom 25% fade: reduce image visibility towards the bottom */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(to bottom, rgba(140,27,27,0) 75%, rgba(140,27,27,0.4) 88%, rgba(140,27,27,0.85) 100%)",
            }}
          />
        </div>

        {/* Top Navigation */}
        <div className="absolute top-0 left-0 right-0 flex justify-between items-start p-8 z-20">
          <div className="flex items-center gap-[0.6rem]">
            <span className="text-white font-bold text-lg">Sunhith Reddy</span>
            <span className="flex items-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-green-500 font-semibold">Available for work</span>
            </span>
          </div>
          {/* Right-side navigation */}
          <nav className="hidden md:flex items-center gap-4 text-white/90">
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#education" className="hover:text-white transition-colors">Education</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#certifications" className="hover:text-white transition-colors">Certifications</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </nav>
        </div>

        {/* Name Section - Bottom Left */}
        <div className="relative z-10 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1
              className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-none mb-4 whitespace-nowrap"
              style={{ fontFamily: "'Alfa Slab One', sans-serif" }}
            >
              SUNHITH REDDY
            </h1>

            <p className="text-white text-xl md:text-2xl font-medium">
              Developer, Designer, based in Banglore
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-[#8c1b1b]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              About Me
            </h2>
            
            <Card className="border border-white/20 bg-transparent p-8 md:p-12">
              <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                Hey! I'm Sunhith Reddy, a passionate developer and creative problem solver. 
                I love building things that make a difference and pushing the boundaries of what's possible with code.
              </p>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-[#8c1b1b]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Skills
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Code,
                  title: "Technical Skills",
                  points: [
                    "Programming: JavaScript, Python, HTML, CSS",
                    "Frameworks & Tools: React, Node.js, TensorFlow, OpenCV",
                    "AI & ML: Model training, feature engineering, evaluation metrics (Accuracy, F1-score, AUC-ROC)",
                    "Web Development: Front-end and full-stack development, responsive design, authentication systems",
                    "Data Handling: Preprocessing, visualization, optimization, dataset management",
                  ],
                },
                {
                  icon: Briefcase,
                  title: "Professional Skills",
                  points: [
                    "Problem-Solving: Strong analytical mindset with a focus on efficiency and accuracy",
                    "Team Collaboration: Experience working in group-based academic and freelance projects",
                    "Adaptability: Quick learner, flexible with new technologies and workflows",
                    "Creativity: Builds innovative, user-focused solutions and project concepts",
                    "Communication: Clear articulation of technical ideas through reports, presentations, and research",
                  ],
                },
                {
                  icon: Code,
                  title: "Areas of Interest",
                  points: [
                    "Artificial Intelligence & Machine Learning",
                    "Computer Vision",
                    "Web & Mobile Application Development",
                    "Data-Driven Systems",
                  ],
                },
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
                    className="border border-white/20 bg-transparent p-6 cursor-pointer transition-colors hover:bg-white/5"
                  >
                    <skill.icon className="h-10 w-10 mb-4 text-white" strokeWidth={2} />
                    <h3 className="text-xl font-semibold text-white">{skill.title}</h3>
                    <ul className="text-white/80 text-sm mt-3 list-disc pl-5 space-y-1">
                      {skill.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-[#8c1b1b]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
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
                    className="border border-white/20 bg-transparent p-8 cursor-pointer transition-colors hover:bg-white/5"
                  >
                    <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                    <p className="text-base text-white/80">{project.desc}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 bg-[#8c1b1b]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Education</h2>
            <div className="grid gap-6">
              <Card className="border border-white/20 bg-transparent p-8 transition-colors hover:bg-white/5">
                <div className="flex items-start gap-4">
                  <GraduationCap className="h-6 w-6 text-white mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-white">B.Tech in Computer Science</h3>
                    <p className="text-white/80">Your University • 2021 — 2025</p>
                  </div>
                </div>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-[#8c1b1b]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Experience</h2>
            <div className="grid gap-6">
              <Card className="border border-white/20 bg-transparent p-8 transition-colors hover:bg-white/5">
                <div className="flex items-start gap-4">
                  <Briefcase className="h-6 w-6 text-white mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-white">Frontend Developer</h3>
                    <p className="text-white/80">Company Name • 2023 — Present</p>
                    <p className="text-white/80 mt-2">Building performant, accessible UIs with React and Tailwind.</p>
                  </div>
                </div>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 px-4 bg-[#8c1b1b]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Certifications</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border border-white/20 bg-transparent p-6 transition-colors hover:bg-white/5">
                <div className="flex items-start gap-3">
                  <BadgeCheck className="h-5 w-5 text-white mt-0.5" />
                  <div>
                    <h3 className="text-lg font-semibold text-white">Certification Title One</h3>
                    <p className="text-white/80">Issuer • Year</p>
                  </div>
                </div>
              </Card>
              <Card className="border border-white/20 bg-transparent p-6 transition-colors hover:bg-white/5">
                <div className="flex items-start gap-3">
                  <BadgeCheck className="h-5 w-5 text-white mt-0.5" />
                  <div>
                    <h3 className="text-lg font-semibold text-white">Certification Title Two</h3>
                    <p className="text-white/80">Issuer • Year</p>
                  </div>
                </div>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-[#8c1b1b]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Get In Touch
            </h2>
            
            <Card className="border border-white/20 bg-transparent p-12">
              <p className="text-xl md:text-2xl text-white/90 mb-8">
                Let's build something amazing together!
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  size="lg"
                  className="bg-gray-900 hover:bg-gray-800 text-white font-medium text-base px-6 py-6"
                  onClick={() => (window.location.href = "mailto:iamtsr2004@gmail.com")}
                >
                  <Mail className="mr-2 h-5 w-5" /> Email
                </Button>
                <Button
                  size="lg"
                  className="bg-gray-900 hover:bg-gray-800 text-white font-medium text-base px-6 py-6"
                  onClick={() => window.open("https://github.com/SunhithReddy647", "_blank")}
                >
                  <Github className="mr-2 h-5 w-5" /> GitHub
                </Button>
                <Button
                  size="lg"
                  className="bg-gray-900 hover:bg-gray-800 text-white font-medium text-base px-6 py-6"
                  onClick={() => window.open("https://www.linkedin.com/in/sunhithreddy", "_blank")}
                >
                  <Linkedin className="mr-2 h-5 w-5" /> LinkedIn
                </Button>
                <Button
                  size="lg"
                  className="bg-gray-900 hover:bg-gray-800 text-white font-medium text-base px-6 py-6"
                  onClick={() => window.open("https://instagram.com/sunhith_reddy", "_blank")}
                >
                  <Instagram className="mr-2 h-5 w-5" /> Instagram
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-[#8c1b1b] border-t border-white/20">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-white font-medium text-base">
            © 2024 Sunhith Reddy. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
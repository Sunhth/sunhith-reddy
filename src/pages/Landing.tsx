import { motion } from "framer-motion";
import { Briefcase, Code, Cpu, Globe, Users, Mail, Github, Linkedin, GraduationCap, Instagram, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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

            <Card className="border border-white/20 bg-transparent p-8 md:p-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="border border-white/15 rounded-lg p-6 md:p-7 hover:bg-white/5 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <Code className="h-6 w-6 text-white" />
                    <h3 className="text-xl md:text-2xl font-semibold text-white">Languages &amp; Tools</h3>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Badge className="bg-white/10 text-white border-white/20 text-sm md:text-base px-3 py-1.5">Python</Badge>
                    <Badge className="bg-white/10 text-white border-white/20 text-sm md:text-base px-3 py-1.5">JavaScript</Badge>
                    <Badge className="bg-white/10 text-white border-white/20 text-sm md:text-base px-3 py-1.5">React</Badge>
                    <Badge className="bg-white/10 text-white border-white/20 text-sm md:text-base px-3 py-1.5">Node.js</Badge>
                    <Badge className="bg-white/10 text-white border-white/20 text-sm md:text-base px-3 py-1.5">TensorFlow</Badge>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.05 }}
                  className="border border-white/15 rounded-lg p-6 md:p-7 hover:bg-white/5 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <Cpu className="h-6 w-6 text-white" />
                    <h3 className="text-xl md:text-2xl font-semibold text-white">AI &amp; ML</h3>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Badge className="bg-white/10 text-white border-white/20 text-sm md:text-base px-3 py-1.5">Data preprocessing</Badge>
                    <Badge className="bg-white/10 text-white border-white/20 text-sm md:text-base px-3 py-1.5">Model training</Badge>
                    <Badge className="bg-white/10 text-white border-white/20 text-sm md:text-base px-3 py-1.5">Evaluation</Badge>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="border border-white/15 rounded-lg p-6 md:p-7 hover:bg-white/5 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <Globe className="h-6 w-6 text-white" />
                    <h3 className="text-xl md:text-2xl font-semibold text-white">Web Development</h3>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Badge className="bg-white/10 text-white border-white/20 text-sm md:text-base px-3 py-1.5">Front-end</Badge>
                    <Badge className="bg-white/10 text-white border-white/20 text-sm md:text-base px-3 py-1.5">Full-stack</Badge>
                    <Badge className="bg-white/10 text-white border-white/20 text-sm md:text-base px-3 py-1.5">Auth systems</Badge>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.15 }}
                  className="border border-white/15 rounded-lg p-6 md:p-7 hover:bg-white/5 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <Users className="h-6 w-6 text-white" />
                    <h3 className="text-xl md:text-2xl font-semibold text-white">Soft Skills</h3>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Badge className="bg-white/10 text-white border-white/20 text-sm md:text-base px-3 py-1.5">Problem‑solving</Badge>
                    <Badge className="bg-white/10 text-white border-white/20 text-sm md:text-base px-3 py-1.5">Teamwork</Badge>
                    <Badge className="bg-white/10 text-white border-white/20 text-sm md:text-base px-3 py-1.5">Adaptability</Badge>
                  </div>
                </motion.div>
              </div>
            </Card>
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
            
            {/* First row: three projects in one row on large screens */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
              {[
                {
                  title: "CardioPredict – AI-driven Heart Disease Prediction System",
                  desc:
                    "An intelligent health analysis platform that predicts heart disease risk using ensemble learning, neural networks, and gradient boosting. Evaluated through accuracy, precision, recall, F1-score, and AUC-ROC for clinical reliability. Tech Stack: Python, TensorFlow, Scikit-learn, Flask",
                },
                {
                  title: "AI UPI Fraud Detection System – ML Model for Digital Transaction Security",
                  desc:
                    "Detects fraudulent transactions within real-time UPI payment data using supervised machine learning models. Implements data preprocessing, feature selection, and anomaly detection for high accuracy. Tech Stack: Python, Pandas, Random Forest, SVM, Matplotlib",
                },
                {
                  title: "HolisticFit – Task-based Wellness and Fitness Website",
                  desc:
                    "A web platform encouraging mental and physical well-being through daily challenges and community-driven progress sharing. Users complete fitness tasks, post updates, and earn virtual coins for customization rewards. Tech Stack: HTML, CSS, JavaScript",
                },
              ].map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className="h-full"
                >
                  <Card 
                    className="h-full flex flex-col border border-white/20 bg-transparent p-8 cursor-pointer transition-colors hover:bg-white/5"
                  >
                    <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                    <p className="text-base text-white/80">{project.desc}</p>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Second row: Projxty full-width with logo */}
            <div className="mt-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <Card 
                  className="border border-white/20 bg-transparent p-8 transition-colors hover:bg-white/5"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src="https://harmless-tapir-303.convex.cloud/api/storage/c7195b04-943c-4ba9-9f55-d963a0896117"
                      alt="Projxty logo"
                      className="h-12 w-12 rounded-md object-cover"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = "/logo.png";
                      }}
                    />
                    <h3 className="text-2xl font-bold text-white">
                      Projxty – Real-time Project Marketplace
                    </h3>
                  </div>
                  <p className="text-base text-white/80">
                    A live, small-scale project marketplace connecting students, freelancers, and developers. Projxty offers end-to-end project building services including websites, mobile applications, and AI-based systems — a collaborative hub where learning meets execution. Tech Stack: React, Node.js, MongoDB, Firebase
                  </p>

                  <div className="mt-5 flex items-center gap-3">
                    <Badge className="bg-green-600 text-white border-white/20">Live</Badge>
                    <Button
                      size="sm"
                      className="bg-gray-900 hover:bg-gray-800 text-white"
                      onClick={() => window.open("https://projxty.netlify.app", "_blank")}
                    >
                      Visit Project
                    </Button>
                  </div>

                  <p className="text-white/70 text-sm mt-3 italic">
                    "Building real projects, connecting real talent — Projxty is where ideas become deliverables."
                  </p>
                </Card>
              </motion.div>
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
                    <h3 className="text-xl font-semibold text-white">Bachelor of Computer Applications (BCA)</h3>
                    <p className="text-white/80">Mohan Babu University • 2022 — 2025 • Tirupati, India</p>
                    <p className="text-white/80 mt-2">Focus: Augmented Reality, Virtual Reality</p>
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
            <div className="grid md:grid-cols-2 gap-8 md:gap-10">
              {/* Card 1: Certified Software Engineer */}
              <Card className="border border-white/20 bg-transparent p-8 md:p-10 transition-colors hover:bg-white/5 relative">
                <div className="flex items-center justify-center gap-3 text-center">
                  <img
                    src="https://harmless-tapir-303.convex.cloud/api/storage/da68b2ff-5fbd-41e9-afab-92a808c4a368"
                    alt="HackerRank logo"
                    className="h-8 w-8 rounded-sm object-cover mt-0.5"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = "/logo.png";
                    }}
                  />
                  <div className="text-center">
                    {/* Title row without the link */}
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3 className="text-xl md:text-2xl font-semibold text-white">Certified Software Engineer</h3>
                    </div>
                    <p className="text-white/80 text-base md:text-lg">HackerRank • Issued Mar 2025</p>
                    <p className="text-white/70 text-sm md:text-base mt-1">Credential ID: 4DDBDD33AC34</p>
                  </div>
                </div>

                {/* Bottom-anchored enlarged link (5px from bottom) */}
                <a
                  href="https://www.hackerrank.com/certificates/4ddbdd33ac34"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-[5px] left-0 right-0 text-center text-white hover:text-white/90 text-lg md:text-xl"
                >
                  View Credential
                </a>
              </Card>

              {/* Card 2: Google Digital Marketing & E-commerce Specialization */}
              <Card className="border border-white/20 bg-transparent p-8 md:p-10 transition-colors hover:bg-white/5 relative">
                <div className="flex items-center justify-center gap-3 text-center">
                  <img
                    src="https://harmless-tapir-303.convex.cloud/api/storage/c933c346-cd52-4bc4-8eb4-753135c8e2bb"
                    alt="Google logo"
                    className="h-8 w-8 rounded-sm object-cover mt-0.5"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = "/logo.png";
                    }}
                  />
                  <div className="text-center">
                    {/* Title row without the link */}
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3 className="text-xl md:text-2xl font-semibold text-white">Google Digital Marketing & E-commerce Specialization</h3>
                    </div>
                    <p className="text-white/80 text-base md:text-lg">Google • Issued Jun 2024</p>
                    <p className="text-white/70 text-sm md:text-base mt-1">Credential ID: UHXWNFX8Q36Q</p>
                  </div>
                </div>

                {/* Bottom-anchored enlarged link (5px from bottom) */}
                <a
                  href="https://www.coursera.org/account/accomplishments/specialization/UHXWNFX8Q36Q"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-[5px] left-0 right-0 text-center text-white hover:text-white/90 text-lg md:text-xl"
                >
                  View Credential
                </a>
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
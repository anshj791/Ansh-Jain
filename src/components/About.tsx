import React from 'react';
import { motion } from 'framer-motion';
import { BentoGrid, BentoGridItem } from './ui/bento-grid';
import { Code, Database, Globe, Smartphone, Palette, Zap } from 'lucide-react';

const About = () => {
  const skills = [
    {
      title: "Frontend Development",
      description: "React, TypeScript, Next.js, Tailwind CSS",
      icon: <Code className="h-8 w-8 text-cyan-400" />,
      className: "md:col-span-2",
      header: (
        <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-cyan-900/20 to-purple-900/20 border border-cyan-500/20"></div>
      ),
    },
    {
      title: "Backend Development",
      description: "Node.js, Python, PostgreSQL, MongoDB",
      icon: <Database className="h-8 w-8 text-purple-400" />,
      className: "md:col-span-1",
      header: (
        <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/20"></div>
      ),
    },
    {
      title: "Cloud & DevOps",
      description: "AWS, Docker, CI/CD, Kubernetes",
      icon: <Globe className="h-8 w-8 text-green-400" />,
      className: "md:col-span-1",
      header: (
        <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-green-900/20 to-teal-900/20 border border-green-500/20"></div>
      ),
    },
    {
      title: "Mobile Development",
      description: "React Native, Flutter, iOS/Android",
      icon: <Smartphone className="h-8 w-8 text-orange-400" />,
      className: "md:col-span-2",
      header: (
        <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-orange-900/20 to-red-900/20 border border-orange-500/20"></div>
      ),
    },
    {
      title: "UI/UX Design",
      description: "Figma, Adobe Creative Suite, Design Systems",
      icon: <Palette className="h-8 w-8 text-pink-400" />,
      className: "md:col-span-1",
      header: (
        <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-pink-900/20 to-rose-900/20 border border-pink-500/20"></div>
      ),
    },
    {
      title: "Performance Optimization",
      description: "Web Vitals, SEO, Accessibility, Speed",
      icon: <Zap className="h-8 w-8 text-yellow-400" />,
      className: "md:col-span-2",
      header: (
        <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-yellow-900/20 to-amber-900/20 border border-yellow-500/20"></div>
      ),
    },
  ];

  return (
    <section id="about" className="py-20 bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-4">
            About Me
          </h2>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
            I'm a passionate full-stack developer with 5+ years of experience creating digital solutions
            that make a difference. I love turning complex problems into simple, beautiful designs.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <BentoGrid className="max-w-4xl mx-auto">
            {skills.map((item, i) => (
              <BentoGridItem
                key={i}
                title={item.title}
                description={item.description}
                header={item.header}
                icon={item.icon}
                className={item.className}
              />
            ))}
          </BentoGrid>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-cyan-900/20 to-purple-900/20 border border-cyan-500/20 rounded-2xl p-8 backdrop-blur-md">
            <h3 className="text-2xl font-bold text-white mb-4">Let's Work Together</h3>
            <p className="text-neutral-300 mb-6 max-w-2xl mx-auto">
              I'm always excited to take on new challenges and collaborate on innovative projects.
              Let's create something amazing together!
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600 text-white font-medium hover:from-cyan-500 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
            >
              Start a Project
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
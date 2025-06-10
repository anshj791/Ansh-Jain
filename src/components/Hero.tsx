import React from 'react';
import { motion } from 'framer-motion';
import { Spotlight } from './ui/spotlight';
import { TextGenerateEffect } from './ui/text-generate-effect';
import { BackgroundBeams } from './ui/background-beams';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import DesktopModel from './canvas/Desktop'; // 👈 import 3D model

const Hero = () => {
  const words = "Building the future with code, creativity, and cutting-edge technology.";

  return (
    <section id="home" className="min-h-screen  relative bg-black/[0.96] antialiased bg-grid-white/[0.02] overflow-hidden">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
      <BackgroundBeams />

      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.h1
              className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                 Ansh Jain
              </span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-neutral-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Full Stack Developer & UI/UX Enthusiast
            </motion.p>

            <TextGenerateEffect words={words} className="max-w-4xl mx-auto" />

            {/* 👇 3D Model inserted here */}
            <div className="mt-8">
              <DesktopModel />
            </div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <a
                href="#contact"
                className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600 text-white font-medium hover:from-cyan-500 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                Get In Touch
              </a>
              <a
                href="#projects"
                className="px-8 py-3 rounded-full border border-neutral-600 text-neutral-300 font-medium hover:bg-neutral-800 transition-all duration-200 transform hover:scale-105"
              >
                View My Work
              </a>
              <a
                href="/resume.pdf"
                className="px-8 py-3 rounded-full bg-neutral-800 text-neutral-300 font-medium hover:bg-neutral-700 transition-all duration-200 transform hover:scale-105 flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                Resume
              </a>
            </motion.div>

            <motion.div
              className="flex justify-center space-x-6 mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <a href="https://github.com" className="text-neutral-400 hover:text-cyan-400 transform hover:scale-110 transition-all duration-200">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com" className="text-neutral-400 hover:text-cyan-400 transform hover:scale-110 transition-all duration-200">
                <Linkedin size={24} />
              </a>
              <a href="mailto:john@example.com" className="text-neutral-400 hover:text-cyan-400 transform hover:scale-110 transition-all duration-200">
                <Mail size={24} />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

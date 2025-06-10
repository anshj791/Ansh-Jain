import React from 'react';
import { motion } from 'framer-motion';
import { HoverEffect } from './ui/card-hover-effect';
import { ExternalLink, Github, Code, Smartphone, Globe, ShoppingCart } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "TripEasy - Travel Planning Platform",
      description: "A comprehensive travel planning application built with React and Node.js. Features include trip itinerary creation, destination recommendations, budget tracking, and collaborative planning tools for seamless travel experiences.",
      link: "https://github.com/anshj791/TripEasy",
      icon: <Globe className="w-8 h-8" />,
    },
    {
      title: "Instagram Clone",
      description: "A full-featured Instagram clone with user authentication, photo sharing, real-time comments, likes, and follow system. Built using React, Node.js, and MongoDB with responsive design and modern UI/UX.",
      link: "https://github.com/anshj791/ig-Clone",
      icon: <Smartphone className="w-8 h-8" />,
    },
    {
      title: "Pinterest Clone",
      description: "A Pinterest-inspired platform for image sharing and discovery. Features include image upload, board creation, pin organization, search functionality, and user profiles with responsive masonry layout.",
      link: "https://github.com/anshj791/pinterest-clone",
      icon: <Code className="w-8 h-8" />,
    },
    {
      title: "Smart Trolley System",
      description: "An innovative IoT-based smart shopping trolley system that automates billing, provides product recommendations, and enhances the shopping experience through technology integration and real-time data processing.",
      link: "https://github.com/anshj791/smart-trolley-system",
      icon: <ShoppingCart className="w-8 h-8" />,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-black/[0.96] antialiased transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-gray-900 to-gray-600 dark:from-neutral-50 dark:to-neutral-400 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-neutral-300 max-w-3xl mx-auto">
            A showcase of my recent work - from web applications to innovative solutions that solve real-world problems
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <HoverEffect items={projects} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://github.com/anshj791"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600 text-white font-medium hover:from-cyan-500 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
            >
              <Github className="w-5 h-5 mr-2" />
              View More on GitHub
            </a>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-3 rounded-full border border-gray-400 dark:border-neutral-600 text-gray-700 dark:text-neutral-300 font-medium hover:bg-gray-100 dark:hover:bg-neutral-800 transition-all duration-200 transform hover:scale-105"
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              Let's Build Something
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
import React from 'react';
import { motion } from 'framer-motion';
import { HoverEffect } from './ui/card-hover-effect';
import { ExternalLink, Github, Code, Smartphone, Globe, BarChart3 } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform built with React, Node.js, and Stripe integration. Features include user authentication, product catalog, shopping cart, and order management with real-time inventory tracking.",
      link: "https://example.com",
      icon: <Code className="w-8 h-8" />,
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features. Built with modern web technologies and WebSocket integration.",
      link: "https://example.com",
      icon: <Smartphone className="w-8 h-8" />,
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather dashboard that provides detailed weather information, forecasts, and historical data visualization using modern charts and interactive maps with geolocation support.",
      link: "https://example.com",
      icon: <Globe className="w-8 h-8" />,
    },
    {
      title: "Social Media Analytics",
      description: "A comprehensive analytics platform for social media management with detailed insights, reporting, and automated scheduling features for multiple platforms including advanced sentiment analysis.",
      link: "https://example.com",
      icon: <BarChart3 className="w-8 h-8" />,
    },
    {
      title: "AI-Powered Chatbot",
      description: "An intelligent chatbot system using natural language processing and machine learning to provide customer support with context-aware responses and multi-language support.",
      link: "https://example.com",
      icon: <Code className="w-8 h-8" />,
    },
    {
      title: "Blockchain Wallet",
      description: "A secure cryptocurrency wallet application with multi-chain support, DeFi integration, and advanced security features including hardware wallet compatibility and transaction monitoring.",
      link: "https://example.com",
      icon: <Globe className="w-8 h-8" />,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
            A showcase of my recent work - from web applications to mobile solutions and everything in between
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
              href="https://github.com"
              className="inline-flex items-center px-8 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600 text-white font-medium hover:from-cyan-500 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
            >
              <Github className="w-5 h-5 mr-2" />
              View More on GitHub
            </a>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-3 rounded-full border border-neutral-600 text-neutral-300 font-medium hover:bg-neutral-800 transition-all duration-200 transform hover:scale-105"
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
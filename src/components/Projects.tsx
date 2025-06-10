import React, { useState, useEffect } from 'react';
import { ExternalLink, Github, Code, Smartphone, Globe, ShoppingCart, Brain, Camera, Star, Calendar, Users, Zap } from 'lucide-react';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [filterTag, setFilterTag] = useState('all');

  const projects = [
    {
      id: 1,
      title: "TripEasy",
      subtitle: "AI-Powered Trip Planner",
      description: "An intelligent travel planning application that leverages AI to create personalized itineraries. Features seamless UI/UX design, budget management, destination recommendations, and collaborative planning tools.",
      longDescription: "Built with React Native, TripEasy revolutionizes travel planning by using AI algorithms to suggest optimal routes, accommodations, and activities based on user preferences, budget constraints, and travel dates.",
      image: "/api/placeholder/600/400",
      tech: ["React Native", "AI/ML", "Node.js", "MongoDB", "REST API"],
      category: "Mobile",
      status: "Live",
      github: "https://github.com/anshj791/TripEasy",
      liveDemo: "#",
      icon: <Brain className="w-8 h-8" />,
      gradient: "from-cyan-500 via-blue-500 to-purple-600",
      features: ["AI Trip Planning", "Budget Management", "Collaborative Planning", "Real-time Updates"],
      stats: { downloads: "1.2K+", rating: 4.8, users: "500+" }
    },
    {
      id: 2,
      title: "Instagram Clone",
      subtitle: "Full-Stack Social Media Platform",
      description: "A comprehensive social media application replicating Instagram's core features with modern enhancements. Includes real-time interactions, advanced media handling, and responsive design.",
      longDescription: "Built using the MERN stack, this project demonstrates full-stack development skills with features like user authentication, image/video uploads, real-time comments, likes, stories, and an intelligent feed algorithm.",
      image: "/api/placeholder/600/400",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.io", "Cloudinary"],
      category: "Web",
      status: "Completed",
      github: "https://github.com/anshj791/ig-Clone",
      liveDemo: "#",
      icon: <Camera className="w-8 h-8" />,
      gradient: "from-pink-500 via-red-500 to-yellow-500",
      features: ["Real-time Chat", "Stories", "Advanced Filters", "Feed Algorithm"],
      stats: { commits: "150+", lines: "15K+", features: "25+" }
    },
    {
      id: 3,
      title: "Pinterest Clone",
      subtitle: "Visual Discovery Platform",
      description: "A Pinterest-inspired platform focused on visual content discovery and organization. Features advanced search, board management, and responsive masonry layouts.",
      longDescription: "This project showcases advanced frontend skills with infinite scroll, masonry layouts, drag-and-drop functionality, and sophisticated image handling. Built with performance optimization in mind.",
      image: "/api/placeholder/600/400",
      tech: ["React.js", "Node.js", "MongoDB", "Express.js", "Cloudinary", "Redis"],
      category: "Web",
      status: "Completed",
      github: "https://github.com/anshj791/pinterest-clone",
      liveDemo: "#",
      icon: <Globe className="w-8 h-8" />,
      gradient: "from-red-500 via-pink-500 to-rose-600",
      features: ["Infinite Scroll", "Masonry Layout", "Advanced Search", "Board Management"],
      stats: { pins: "10K+", boards: "500+", searches: "2K+" }
    },
    {
      id: 4,
      title: "Smart Trolley System",
      subtitle: "IoT Retail Solution",
      description: "An innovative IoT-based smart shopping system that revolutionizes retail experience through automated billing, product recommendations, and inventory management.",
      longDescription: "This project integrates hardware and software to create a seamless shopping experience. Features include RFID scanning, automatic billing, real-time inventory updates, and predictive analytics for better customer experience.",
      image: "/api/placeholder/600/400",
      tech: ["React.js", "Node.js", "IoT", "Arduino", "MongoDB", "WebSocket"],
      category: "IoT",
      status: "Prototype",
      github: "https://github.com/anshj791/smart-trolley-system",
      liveDemo: "#",
      icon: <ShoppingCart className="w-8 h-8" />,
      gradient: "from-green-500 via-teal-500 to-blue-600",
      features: ["RFID Integration", "Auto Billing", "Inventory Tracking", "Analytics Dashboard"],
      stats: { accuracy: "98%", speed: "3x Faster", efficiency: "85%" }
    },
    {
      id: 5,
      title: "CrucibleOne",
      subtitle: "E-Commerce Platform",
      description: "A complete e-commerce solution developed during internship at Coder Edge Technology. Features comprehensive product management, secure payments, and admin dashboard.",
      longDescription: "Professional e-commerce platform built with modern technologies, featuring advanced product catalog, secure payment processing, order management, and comprehensive admin controls. Deployed and maintained in production environment.",
      image: "/api/placeholder/600/400",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Stripe", "JWT"],
      category: "Web",
      status: "Production",
      github: "#",
      liveDemo: "#",
      icon: <Code className="w-8 h-8" />,
      gradient: "from-purple-500 via-indigo-500 to-blue-600",
      features: ["Payment Integration", "Admin Dashboard", "Order Management", "Product Catalog"],
      stats: { products: "500+", orders: "100+", uptime: "99.9%" }
    }
  ];

  const categories = ['all', 'Web', 'Mobile', 'IoT'];
  const filteredProjects = filterTag === 'all' ? projects : projects.filter(p => p.category === filterTag);

  const ProjectCard = ({ project, index }) => {
    const isHovered = hoveredProject === project.id;
    
    return (
      <div
        className={`group relative bg-black/40 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden transition-all duration-500 ${
          isHovered ? 'scale-[1.02] border-white/20' : 'hover:border-white/15'
        }`}
        onMouseEnter={() => setHoveredProject(project.id)}
        onMouseLeave={() => setHoveredProject(null)}
      >
        {/* Background gradient overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />
        
        {/* Status badge */}
        <div className="absolute top-4 right-4 z-10">
          <span className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm ${
            project.status === 'Live' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
            project.status === 'Production' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
            project.status === 'Prototype' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' :
            'bg-purple-500/20 text-purple-400 border border-purple-500/30'
          }`}>
            {project.status}
          </span>
        </div>

        {/* Project image/icon */}
        <div className="relative h-48 bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center overflow-hidden">
          <div className={`p-4 rounded-full bg-gradient-to-br ${project.gradient} opacity-80 group-hover:opacity-100 transition-opacity duration-300`}>
            {React.cloneElement(project.icon, { className: "w-12 h-12 text-white" })}
          </div>
          
          {/* Animated background pattern */}
          <div className="absolute inset-0 opacity-10">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className={`absolute w-2 h-2 bg-gradient-to-r ${project.gradient} rounded-full animate-pulse`}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${2 + Math.random() * 2}s`
                }}
              />
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Header */}
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                {project.title}
              </h3>
              <span className="text-xs text-white/60 px-2 py-1 rounded-full bg-white/5">
                {project.category}
              </span>
            </div>
            <p className="text-sm text-white/70 font-medium">{project.subtitle}</p>
          </div>

          {/* Description */}
          <p className="text-white/80 text-sm mb-4 line-clamp-3">
            {isHovered ? project.longDescription : project.description}
          </p>

          {/* Tech stack */}
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {project.tech.slice(0, isHovered ? project.tech.length : 4).map((tech, techIndex) => (
                <span
                  key={tech}
                  className="px-2 py-1 text-xs rounded-full bg-white/10 text-white/80 border border-white/20"
                  style={{ animationDelay: `${techIndex * 100}ms` }}
                >
                  {tech}
                </span>
              ))}
              {!isHovered && project.tech.length > 4 && (
                <span className="px-2 py-1 text-xs rounded-full bg-white/5 text-white/60">
                  +{project.tech.length - 4} more
                </span>
              )}
            </div>
          </div>

          {/* Features (shown on hover) */}
          {isHovered && (
            <div className="mb-4 animate-fadeIn">
              <h4 className="text-sm font-semibold text-white/90 mb-2">Key Features:</h4>
              <div className="grid grid-cols-2 gap-1">
                {project.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-1">
                    <Zap className="w-3 h-3 text-green-400" />
                    <span className="text-xs text-white/70">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Stats */}
          <div className="mb-4 p-3 rounded-lg bg-white/5 border border-white/10">
            <div className="grid grid-cols-3 gap-4 text-center">
              {Object.entries(project.stats).map(([key, value]) => (
                <div key={key}>
                  <div className="text-sm font-bold text-white">{value}</div>
                  <div className="text-xs text-white/60 capitalize">{key}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex space-x-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex-1 flex items-center justify-center px-4 py-2 rounded-lg bg-gradient-to-r ${project.gradient} text-white font-medium text-sm hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105`}
            >
              <Github className="w-4 h-4 mr-2" />
              Code
            </a>
            {project.liveDemo !== '#' && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center px-4 py-2 rounded-lg border border-white/20 text-white hover:bg-white/10 font-medium text-sm transition-all duration-300"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Demo
              </a>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="py-20 bg-black/[0.96] antialiased relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid-white/[0.02]" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/20 mb-6">
            <Star className="h-5 w-5 text-purple-400" />
            <span className="text-sm font-medium text-purple-400">FEATURED WORK</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-4">
            Projects Portfolio
          </h2>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto mb-8">
            A collection of projects showcasing full-stack development skills, from AI-powered applications 
            to innovative IoT solutions and enterprise-level platforms.
          </p>

          {/* Filter buttons */}
          <div className="flex justify-center space-x-2 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilterTag(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  filterTag === category
                    ? 'bg-gradient-to-r from-purple-500 to-cyan-500 text-white'
                    : 'bg-white/10 text-white/70 hover:bg-white/20 border border-white/20'
                }`}
              >
                {category === 'all' ? 'All Projects' : category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Bottom section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-900/20 to-cyan-900/20 border border-purple-500/20 rounded-2xl p-8 backdrop-blur-md max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Let's Build Something Amazing</h3>
            <p className="text-white/70 mb-6 max-w-2xl mx-auto">
              I'm always excited to work on new projects and collaborate with innovative teams. 
              Let's discuss how we can bring your ideas to life.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://github.com/anshj791"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-medium hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105"
              >
                <Github className="w-5 h-5 mr-2" />
                View All Projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-3 rounded-full border border-white/20 text-white font-medium hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
              >
                <Users className="w-5 h-5 mr-2" />
                Let's Collaborate
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </section>
  );
};

export default Projects;
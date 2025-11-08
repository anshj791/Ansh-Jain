
import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase, Code, Users, Rocket } from 'lucide-react';

const Experience = () => {
  const experiences = [
            {
      title: 'Software Developer',
      company: 'Agile infoways',
      location: 'Ahmedabad, India',
      period: 'July 1 2025 - Present',
      type: 'Trainee',
      description: 'Developing and maintaining dynamic web components using React.js and Nest.js for client-facing applications. Working in an Agile environment with focus on performance optimization and best practices.',
      achievements: [
        'Developed dynamic web components using React.js',
        'Integrated RESTful APIs and optimized data flow',
        'Enhanced application performance with state management',
        'Contributed to code reviews and Git workflows',
        'Participated in Agile stand-ups and sprint planning'
      ],
      color: 'from-purple-400 to-pink-500',
      icon: Code
    },
        {
      title: 'React.js Developer Intern',
      company: 'Coder Edge Technology',
      location: 'India',
      period: 'Jan 15, 2025 - June 15, 2025',
      type: 'internship',
      description: 'Developing and maintaining dynamic web components using React.js for client-facing applications. Working in an Agile environment with focus on performance optimization and best practices.',
      achievements: [
        'Developed dynamic web components using React.js',
        'Integrated RESTful APIs and optimized data flow',
        'Enhanced application performance with state management',
        'Contributed to code reviews and Git workflows',
        'Participated in Agile stand-ups and sprint planning'
      ],
      color: 'from-emerald-400 to-cyan-500',
      icon: Code
    },
    {
      title: 'MERN Stack Projects',
      company: 'Personal Development',
      location: 'Self-Directed',
      period: '2023 - 2025',
      type: 'projects',
      description: 'Built multiple full-stack applications including AI trip planner, social media clones, and e-commerce solutions using modern web technologies.',
      achievements: [
        'TripEasy - AI-powered trip planning app with React Native',
        'Instagram Clone - Full MERN stack with user authentication',
        'Pinterest Clone - Responsive design with board management',
        'Smart Trolley System - React frontend with Node.js backend',
        'CrucibleOne - Complete e-commerce platform'
      ],
      color: 'from-purple-400 to-pink-500',
      icon: Rocket
    },
    {
      title: 'Computer Engineering Student',
      company: 'Ganpat University',
      location: 'Gujarat, India',
      period: 'Oct 2021 - 2025',
      type: 'education',
      description: 'Currently pursuing Bachelor of Technology in Computer Engineering with focus on software development, data structures, algorithms, and web technologies.',
      achievements: [
        'Relevant coursework in Software Development & Web Development',
        'Mastered Data Structures and Algorithms',
        'Learned multiple programming languages (C, C++, Java, JavaScript)',
        'Gained expertise in database management (SQL, NoSQL)',
        'Currently in 4th year with strong academic performance'
      ],
      color: 'from-blue-400 to-indigo-500',
      icon: Users
    }
  ];

  const timelineVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { duration: 2, ease: "easeInOut" },
        opacity: { duration: 0.5 }
      }
    }
  };

  return (
    <section id="experience" className="py-20 bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-r from-purple-400/10 to-pink-500/10 rounded-full blur-xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-4">
            My Journey
          </h2>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
            From student to developer - building innovative solutions with modern technologies
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto relative">
          {/* Unique SVG Timeline */}
          <svg
            className="absolute left-0 top-0 h-full w-full pointer-events-none"
            style={{ zIndex: 1 }}
          >
            <motion.path
              d="M 60 100 Q 200 150 60 250 Q 200 300 60 450 Q 200 500 60 650"
              stroke="url(#timelineGradient)"
              strokeWidth="3"
              fill="none"
              variants={timelineVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            />
            <defs>
              <linearGradient id="timelineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#06b6d4" />
                <stop offset="50%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#ec4899" />
              </linearGradient>
            </defs>
          </svg>

          {experiences.map((exp, index) => {
            const IconComponent = exp.icon;
            const isLeft = index % 2 === 0;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isLeft ? -100 : 100, scale: 0.8 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.3,
                  type: "spring",
                  stiffness: 100 
                }}
                viewport={{ once: true }}
                className={`relative mb-20 ${isLeft ? 'ml-0 mr-8' : 'ml-8 mr-0'}`}
                style={{ zIndex: 2 }}
              >
                {/* Floating Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`absolute ${isLeft ? 'left-8' : 'right-8'} top-8 w-16 h-16 bg-gradient-to-r ${exp.color} rounded-2xl shadow-2xl flex items-center justify-center transform -translate-y-2`}
                >
                  <IconComponent className="w-8 h-8 text-white" />
                </motion.div>
                
                {/* Experience Card */}
                <motion.div
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
                  }}
                  className={`${isLeft ? 'ml-24' : 'mr-24'} bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-xl border border-white/[0.1] rounded-3xl p-8 hover:border-white/[0.2] transition-all duration-500 group relative overflow-hidden`}
                >
                  {/* Card Background Pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
                  </div>
                  
                  {/* Type Badge */}
                  <div className={`inline-block px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider mb-4 bg-gradient-to-r ${exp.color} text-white`}>
                    {exp.type}
                  </div>
                  
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 transition-all duration-300">
                        {exp.title}
                      </h3>
                      <p className={`text-xl font-semibold bg-gradient-to-r ${exp.color} bg-clip-text text-transparent mb-2`}>
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex flex-col md:items-end text-neutral-400 mt-4 md:mt-0 space-y-2">
                      <motion.div 
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center bg-white/5 rounded-full px-3 py-1"
                      >
                        <Calendar className="w-4 h-4 mr-2 text-cyan-400" />
                        <span className="text-sm font-medium">{exp.period}</span>
                      </motion.div>
                      <motion.div 
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center bg-white/5 rounded-full px-3 py-1"
                      >
                        <MapPin className="w-4 h-4 mr-2 text-purple-400" />
                        <span className="text-sm font-medium">{exp.location}</span>
                      </motion.div>
                    </div>
                  </div>
                  
                  <p className="text-neutral-300 mb-8 leading-relaxed text-lg">
                    {exp.description}
                  </p>
                  
                  <div>
                    <h4 className="font-bold text-white mb-6 flex items-center text-lg">
                      <Briefcase className="w-5 h-5 mr-3 text-cyan-400" />
                      Key Highlights:
                    </h4>
                    <div className="grid gap-3">
                      {exp.achievements.map((achievement, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          whileHover={{ x: 5 }}
                          className="flex items-start group/item"
                        >
                          <motion.div 
                            whileHover={{ scale: 1.5, rotate: 180 }}
                            className={`w-3 h-3 bg-gradient-to-r ${exp.color} rounded-full mt-2 mr-4 flex-shrink-0 shadow-lg`}
                          />
                          <span className="text-neutral-300 group-hover/item:text-white transition-colors duration-200 leading-relaxed">
                            {achievement}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <div className="bg-gradient-to-r from-cyan-400 to-purple-500 p-1 rounded-2xl">
              <div className="bg-black/80 rounded-2xl px-8 py-4 backdrop-blur-sm">
                <p className="text-white font-semibold text-lg">
                  Ready to build something amazing together? 
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent ml-2">
                    Let's connect!
                  </span>
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'TechCorp Inc.',
      location: 'San Francisco, CA',
      period: '2022 - Present',
      description: 'Leading development of scalable web applications using React, Node.js, and AWS. Mentoring junior developers and architecting solutions for high-traffic applications.',
      achievements: [
        'Improved application performance by 40%',
        'Led team of 5 developers',
        'Implemented CI/CD pipeline reducing deployment time by 60%'
      ],
      color: 'from-cyan-400 to-blue-500'
    },
    {
      title: 'Full Stack Developer',
      company: 'StartupXYZ',
      location: 'New York, NY',
      period: '2020 - 2022',
      description: 'Developed and maintained multiple web applications using modern JavaScript frameworks. Collaborated with designers and product managers to deliver user-centered solutions.',
      achievements: [
        'Built 3 major features from scratch',
        'Reduced bug reports by 35%',
        'Integrated payment systems and third-party APIs'
      ],
      color: 'from-purple-400 to-pink-500'
    },
    {
      title: 'Frontend Developer',
      company: 'WebSolutions Ltd.',
      location: 'Boston, MA',
      period: '2019 - 2020',
      description: 'Focused on creating responsive and accessible user interfaces. Worked closely with UX/UI designers to implement pixel-perfect designs.',
      achievements: [
        'Improved website accessibility score to 98%',
        'Reduced page load time by 50%',
        'Developed reusable component library'
      ],
      color: 'from-green-400 to-teal-500'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-4">
            Experience
          </h2>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
            My professional journey building innovative solutions and leading successful projects
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative mb-12"
            >
              {/* Timeline line */}
              {index < experiences.length - 1 && (
                <div className="absolute left-8 top-16 w-0.5 h-32 bg-gradient-to-b from-cyan-400 to-purple-600"></div>
              )}
              
              {/* Timeline dot */}
              <div className={`absolute left-6 top-8 w-4 h-4 bg-gradient-to-r ${exp.color} rounded-full shadow-lg`}></div>
              
              <div className="ml-16 bg-black/40 backdrop-blur-md border border-white/[0.1] rounded-2xl p-8 hover:border-white/[0.2] transition-all duration-300 group">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors duration-200">
                      {exp.title}
                    </h3>
                    <p className={`text-lg font-semibold bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}>
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex flex-col md:items-end text-neutral-400 mt-2 md:mt-0">
                    <div className="flex items-center mb-1">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span className="text-sm">{exp.location}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-neutral-300 mb-6">
                  {exp.description}
                </p>
                
                <div>
                  <h4 className="font-semibold text-white mb-3 flex items-center">
                    <Briefcase className="w-4 h-4 mr-2 text-cyan-400" />
                    Key Achievements:
                  </h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start">
                        <div className={`w-2 h-2 bg-gradient-to-r ${exp.color} rounded-full mt-2 mr-3 flex-shrink-0`}></div>
                        <span className="text-neutral-300">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
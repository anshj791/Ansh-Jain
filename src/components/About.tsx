import React, { useState, useEffect } from 'react';
import { Code, Database, Globe, Smartphone, Palette, Zap, Server, Layout, Cpu, GitBranch, Cloud, Terminal } from 'lucide-react';

const TechStack = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [animationDelay, setAnimationDelay] = useState(0);

  const skills = [
    {
      category: "Frontend Development",
      description: "Building responsive and interactive user interfaces",
      icon: <Layout className="h-8 w-8" />,
      technologies: [
        { name: "React.js", level: 90, experience: "2+ years", color: "from-cyan-400 to-blue-500" },
        { name: "Next.js", level: 85, experience: "1.5+ years", color: "from-gray-400 to-gray-600" },
        { name: "TypeScript", level: 80, experience: "1+ year", color: "from-blue-400 to-blue-600" },
        { name: "HTML/CSS", level: 95, experience: "3+ years", color: "from-orange-400 to-red-500" },
        { name: "Three.js", level: 70, experience: "6+ months", color: "from-purple-400 to-pink-500" }
      ],
      className: "md:col-span-2",
      bgGradient: "from-cyan-900/20 via-blue-900/20 to-purple-900/20",
      borderColor: "border-cyan-500/30"
    },
    {
      category: "Backend Development",
      description: "Server-side logic and API development",
      icon: <Server className="h-8 w-8" />,
      technologies: [
        { name: "Node.js", level: 85, experience: "2+ years", color: "from-green-400 to-emerald-500" },
        { name: "Express.js", level: 80, experience: "2+ years", color: "from-gray-500 to-gray-700" },
        { name: "Python", level: 75, experience: "1+ year", color: "from-yellow-400 to-orange-500" }
      ],
      className: "md:col-span-1",
      bgGradient: "from-green-900/20 via-emerald-900/20 to-teal-900/20",
      borderColor: "border-green-500/30"
    },
    {
      category: "Database & Storage",
      description: "Data management and storage solutions",
      icon: <Database className="h-8 w-8" />,
      technologies: [
        { name: "MongoDB", level: 85, experience: "2+ years", color: "from-green-500 to-green-700" },
        { name: "Firebase", level: 80, experience: "1.5+ years", color: "from-yellow-500 to-orange-600" },
        { name: "SQL", level: 70, experience: "1+ year", color: "from-blue-500 to-indigo-600" }
      ],
      className: "md:col-span-1",
      bgGradient: "from-purple-900/20 via-pink-900/20 to-rose-900/20",
      borderColor: "border-purple-500/30"
    },
    {
      category: "Mobile Development",
      description: "Cross-platform mobile applications",
      icon: <Smartphone className="h-8 w-8" />,
      technologies: [
        { name: "React Native", level: 80, experience: "1.5+ years", color: "from-cyan-500 to-blue-600" },
        { name: "Mobile UI/UX", level: 85, experience: "2+ years", color: "from-pink-500 to-purple-600" }
      ],
      className: "md:col-span-2",
      bgGradient: "from-orange-900/20 via-red-900/20 to-pink-900/20",
      borderColor: "border-orange-500/30"
    },
    {
      category: "Design & Tools",
      description: "UI/UX design and development tools",
      icon: <Palette className="h-8 w-8" />,
      technologies: [
        { name: "Figma", level: 85, experience: "2+ years", color: "from-purple-500 to-pink-500" },
        { name: "Adobe XD", level: 75, experience: "1+ year", color: "from-pink-500 to-red-500" },
        { name: "Wireframing", level: 90, experience: "2+ years", color: "from-indigo-500 to-purple-600" }
      ],
      className: "md:col-span-1",
      bgGradient: "from-pink-900/20 via-rose-900/20 to-red-900/20",
      borderColor: "border-pink-500/30"
    },
    {
      category: "Development Tools",
      description: "Version control and development workflow",
      icon: <Terminal className="h-8 w-8" />,
      technologies: [
        { name: "Git/GitHub", level: 90, experience: "3+ years", color: "from-gray-400 to-gray-600" },
        { name: "VS Code", level: 95, experience: "3+ years", color: "from-blue-500 to-cyan-500" },
        { name: "Postman", level: 85, experience: "2+ years", color: "from-orange-500 to-red-500" },
        { name: "ESLint", level: 80, experience: "1.5+ years", color: "from-purple-500 to-indigo-500" }
      ],
      className: "md:col-span-2",
      bgGradient: "from-yellow-900/20 via-amber-900/20 to-orange-900/20",
      borderColor: "border-yellow-500/30"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimationDelay(prev => prev + 100);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  const SkillBar = ({ tech, index }) => (
    <div className="mb-3 group">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-medium text-white/90">{tech.name}</span>
        <span className="text-xs text-white/60">{tech.experience}</span>
      </div>
      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
        <div 
          className={`h-full bg-gradient-to-r ${tech.color} rounded-full transition-all duration-1000 ease-out`}
          style={{
            width: `${tech.level}%`,
            animationDelay: `${index * 100}ms`
          }}
        />
      </div>
      <div className="text-xs text-white/50 mt-1">{tech.level}% proficiency</div>
    </div>
  );

  const SkillCard = ({ skill, index }) => (
    <div
      className={`${skill.className} group cursor-pointer transition-all duration-500 hover:scale-[1.02]`}
      onMouseEnter={() => setHoveredSkill(index)}
      onMouseLeave={() => setHoveredSkill(null)}
    >
      <div className={`h-full rounded-2xl bg-gradient-to-br ${skill.bgGradient} border ${skill.borderColor} backdrop-blur-sm overflow-hidden relative`}>
        {/* Animated background effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        
        {/* Header section */}
        <div className="p-6 border-b border-white/10">
          <div className="flex items-center space-x-3 mb-3">
            <div className={`p-2 rounded-lg bg-gradient-to-br ${skill.bgGradient} border ${skill.borderColor}`}>
              {React.cloneElement(skill.icon, { className: "h-6 w-6 text-white" })}
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">{skill.category}</h3>
              <p className="text-sm text-white/70">{skill.description}</p>
            </div>
          </div>
        </div>

        {/* Technologies section */}
        <div className="p-6">
          <div className="space-y-1">
            {skill.technologies.map((tech, techIndex) => (
              <div key={tech.name} className="group/tech">
                <SkillBar tech={tech} index={techIndex} />
              </div>
            ))}
          </div>
          
          {/* Stats footer */}
          <div className="mt-4 pt-4 border-t border-white/10">
            <div className="flex justify-between items-center text-xs text-white/60">
              <span>{skill.technologies.length} Technologies</span>
              <span>Active Development</span>
            </div>
          </div>
        </div>

        {/* Hover effect overlay */}
        {hoveredSkill === index && (
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
        )}
      </div>
    </div>
  );

  return (
    <section className="py-20 bg-black/[0.96] antialiased relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-grid-white/[0.02] mask-gradient" />
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 mb-6">
            <Cpu className="h-5 w-5 text-cyan-400" />
            <span className="text-sm font-medium text-cyan-400">TECHNICAL EXPERTISE</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-4">
            Tech Stack
          </h2>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
            Specialized in modern web technologies with hands-on experience in full-stack development.
            Currently expanding skills in emerging technologies and best practices.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <SkillCard key={skill.category} skill={skill} index={index} />
          ))}
        </div>

        {/* Experience Summary */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-cyan-900/20 to-purple-900/20 border border-cyan-500/20 rounded-2xl p-8 backdrop-blur-md max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">15+</div>
                <div className="text-white/70">Technologies</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">5+</div>
                <div className="text-white/70">Major Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">2+</div>
                <div className="text-white/70">Years Experience</div>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-white/10">
              <h3 className="text-xl font-bold text-white mb-4">Currently Learning</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {["Docker", "AWS", "GraphQL", "Microservices"].map((tech) => (
                  <span key={tech} className="px-3 py-1 rounded-full bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 text-yellow-300 text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .mask-gradient {
          mask-image: radial-gradient(ellipse at center, transparent 20%, black);
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(180deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default TechStack;
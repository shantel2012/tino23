import React from 'react';
import { 
  Code2, 
  Palette, 
  Monitor, 
  Smartphone, 
  Database, 
  GitBranch,
  Search,
  Zap
} from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      icon: <Code2 size={32} />,
      title: "Frontend Development",
      skills: ["HTML", "CSS", "JavaScript", "React.js"],
      description: "Building responsive and interactive user interfaces with modern technologies"
    },
    {
      icon: <Palette size={32} />,
      title: "Styling & Design",
      skills: ["Tailwind CSS", "Bootstrap", "CSS Flexbox/Grid", "Responsive Design"],
      description: "Creating beautiful, mobile-first designs with attention to detail"
    },
    {
      icon: <GitBranch size={32} />,
      title: "Development Tools",
      skills: ["Git", "GitHub", "Vite", "VS Code"],
      description: "Utilizing modern development workflows and version control"
    },
    {
      icon: <Database size={32} />,
      title: "Backend Basics",
      skills: ["Supabase", "REST APIs", "Database Fundamentals"],
      description: "Learning backend technologies and database management"
    },
    {
      icon: <Search size={32} />,
      title: "Digital Marketing",
      skills: ["Google Ads", "SEO Basics", "Analytics"],
      description: "Understanding digital marketing strategies and online presence"
    },
    {
      icon: <Monitor size={32} />,
      title: "UI/UX Design",
      skills: ["Figma", "Design Principles", "User Experience"],
      description: "Exploring design fundamentals and user-centered design"
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            What I <span className="text-cyan-400">Do</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I'm constantly learning and expanding my skill set to become a well-rounded developer
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-cyan-400/10 hover:border-cyan-400/30 transition-all duration-500 hover:transform hover:scale-105"
            >
              <div className="text-cyan-400 group-hover:text-purple-400 transition-colors duration-300 mb-6">
                {category.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-4 text-white group-hover:text-cyan-400 transition-colors">
                {category.title}
              </h3>
              
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                {category.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-white/10 text-gray-300 rounded-full text-sm border border-white/20 hover:border-cyan-400/50 hover:text-cyan-400 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Learning Path */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-400/20 backdrop-blur-sm border border-cyan-400/30 rounded-full">
            <Zap size={20} className="text-cyan-400" />
            <span className="text-white font-medium">Currently focusing on React development and full-stack growth</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
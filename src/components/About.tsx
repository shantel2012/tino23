import React from 'react';
import { Code, Rocket, Target, BookOpen } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: <Code size={24} />,
      title: "Learning Journey",
      description: "Currently mastering React, JavaScript, and modern web development"
    },
    {
      icon: <Rocket size={24} />,
      title: "Project Focus",
      description: "Building real-world applications to strengthen coding skills"
    },
    {
      icon: <Target size={24} />,
      title: "Career Goal",
      description: "Growing from frontend to full-stack development"
    },
    {
      icon: <BookOpen size={24} />,
      title: "Continuous Learning",
      description: "Exploring digital marketing and UI/UX design basics"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Me</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I am a beginner software developer with a passion for creating modern, 
            responsive, and functional web applications.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-cyan-400">My Story</h3>
              <p className="text-gray-300 leading-relaxed">
                I am a beginner software developer learning HTML, CSS, JavaScript, React, 
                and software development fundamentals. My journey in tech is driven by curiosity 
                and a genuine passion for problem-solving through code.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I'm interested in digital marketing, app development, and building user-friendly 
                platforms that make a real difference in people's lives. Every project I work on 
                is an opportunity to learn something new and push my boundaries.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-medium text-purple-400">Currently Working On:</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  Portfolio website (React + CSS)
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  Parking Space Finder app (React + Tailwind, GPS, booking system)
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  Buildlink Construction Service Platform
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  Restaurant Website with interactive features
                </li>
              </ul>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="group p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="text-cyan-400 mb-4 group-hover:text-purple-400 transition-colors">
                  {item.icon}
                </div>
                <h4 className="font-semibold mb-2 text-white">{item.title}</h4>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
import React from 'react';
import { Github, Linkedin, Mail, ChevronDown, Download } from 'lucide-react';

interface HeroProps {
  onNavigate: (section: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center lg:text-left lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-cyan-400 font-medium text-lg">Welcome, I'm</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                Hi I am{' '}
                <span className="text-cyan-400">
                  Tinomudaishe
                </span>
                Kutama
              </h1>
              <h2 className="text-xl sm:text-2xl text-gray-300">
                Aspiring Software Developer | Frontend React Developer
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl">
                Passionate about building modern, responsive, and functional web applications. 
                Currently learning and growing in the world of software development.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 items-center lg:items-start">
              <button
                onClick={() => onNavigate('about')}
                className="group bg-cyan-600 hover:bg-cyan-500 px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
              >
                More About Me
                <ChevronDown size={20} className="group-hover:translate-y-1 transition-transform" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
                <Download size={20} />
                <a href="/resume.pdf" download="Tinomudaishe_Kutama_Resume.pdf">
                  Download CV
                </a>
              </button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-4 pt-4">
              <a
                href="https://github.com/shantel2012"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 hover:bg-cyan-400/20 rounded-full transition-colors hover:text-cyan-400"
              >
                <Github size={20} />
              </a>
              <a
                href="www.linkedin.com/in/tinomudaishe-kutama-162166351"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 hover:bg-cyan-400/20 rounded-full transition-colors hover:text-cyan-400"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:tinomudaishe.kutama@email.com"
                className="p-3 bg-white/10 hover:bg-cyan-400/20 rounded-full transition-colors hover:text-cyan-400"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Profile Image/Illustration */}
          <div className="mt-12 lg:mt-0 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 bg-cyan-400/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/10">
                  <div className="w-72 h-72 bg-gray-800 rounded-full flex items-center justify-center border border-white/20">
                    <div className="text-6xl font-bold text-cyan-400">
                      TK
                    </div>
                </div>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-cyan-400/20 backdrop-blur-sm border border-cyan-400/30 px-3 py-2 rounded-lg">
                <span className="text-cyan-400 font-medium">React.js</span>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-purple-400/20 backdrop-blur-sm border border-purple-400/30 px-3 py-2 rounded-lg">
                <span className="text-purple-400 font-medium">JavaScript</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={24} className="text-gray-400" />
      </div>
    </section>
  );
};

export default Hero;
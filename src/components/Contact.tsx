import React from 'react';
import { Mail, MapPin, Github, Linkedin, Phone, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Get In <span className="text-cyan-400">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about web development
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">Let's Connect</h3>
              <p className="text-gray-300 leading-relaxed mb-8">
                Currently based in Zimbabwe and available for freelance projects, internships, 
                or full-time opportunities. I'd love to hear about your next project and see how I can contribute.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg hover:bg-white/10 transition-colors">
                <div className="p-3 bg-cyan-400/20 rounded-lg">
                  <MapPin size={20} className="text-cyan-400" />
                </div>
                <div>
                  <h4 className="font-medium text-white">Location</h4>
                  <p className="text-gray-400">Zimbabwe</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg hover:bg-white/10 transition-colors">
                <div className="p-3 bg-cyan-400/20 rounded-lg">
                  <Mail size={20} className="text-cyan-400" />
                </div>
                <div>
                  <h4 className="font-medium text-white">Email</h4>
                  <a href="mailto:tinomudaishekutama2004@gmail.com" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    tinomudaishekutama2004@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-medium text-white mb-4">Follow Me</h4>
              <div className="flex gap-4">
                <a
                  href="https://github.com/shantel2012"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 bg-white/5 hover:bg-cyan-400/20 border border-white/10 hover:border-cyan-400/30 rounded-lg transition-all duration-300 hover:transform hover:scale-105"
                >
                  <Github size={24} className="text-gray-400 group-hover:text-cyan-400 transition-colors" />
                </a>
                <a
                  href="https://linkedin.com/in/tinomudaishe-kutama"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 bg-white/5 hover:bg-cyan-400/20 border border-white/10 hover:border-cyan-400/30 rounded-lg transition-all duration-300 hover:transform hover:scale-105"
                >
                  <Linkedin size={24} className="text-gray-400 group-hover:text-cyan-400 transition-colors" />
                </a>
                <a
                  href="mailto:tinomudaishekutama2004@gmail.com"
                  className="group p-4 bg-white/5 hover:bg-cyan-400/20 border border-white/10 hover:border-cyan-400/30 rounded-lg transition-all duration-300 hover:transform hover:scale-105"
                >
                  <Mail size={24} className="text-gray-400 group-hover:text-cyan-400 transition-colors" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-white">Send a Message</h3>
            
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 focus:outline-none transition-colors"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 focus:outline-none transition-colors"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 focus:outline-none transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 focus:outline-none transition-colors"
                  placeholder="Project Discussion"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 focus:outline-none transition-colors resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-2"
                onClick={(e) => {
                  e.preventDefault();
                  alert('Thank you for your message! This is a demo form. In a real implementation, this would send your message.');
                }}
              >
                Send Message
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-white/10 text-center">
          <p className="text-gray-400">
            © 2025 Tinomudaishe Kutama. Built with React & Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
// import React from 'react';
// import { Github, ExternalLink, MapPin, Calendar, CheckCircle, Users } from 'lucide-react';

// const Projects: React.FC = () => {
//   const projects = [
//     {
//       title: "Parking Space Finder App",
//       description: "A comprehensive parking solution inspired by Neighbor.com, featuring search & listing, Google Maps integration, and booking system with dashboards for users, owners, and admins.",
//       technologies: ["React", "Tailwind CSS", "Google Maps API", "JavaScript"],
//       features: ["GPS Integration", "Booking System", "User Dashboard", "Admin Panel"],
//       status: "In Development",
//       icon: <MapPin size={24} />,
//       githubUrl: "https://github.com/shantel2012",
//       liveUrl: "https://ty-r6at.vercel.app/"
//     },
//     {
//       title: "Buildlink - Construction Platform",
//       description: "Multi-page React application based on Figma design, connecting clients with construction professionals through comprehensive service listings and job posting features.",
//       technologies: ["React", "CSS", "Multi-page Navigation", "Figma Design"],
//       features: ["Service Listings", "Professional Profiles", "Job Posting", "Testimonials"],
//       status: "In Development",
//       icon: <Users size={24} />,
//       githubUrl: "https://github.com/shantel2012",
//       liveUrl: "https://github.com/tinomudaishe/buildlink"
//     },
//     // {
//     //   title: "Interactive Restaurant Website",
//     //   description: "Feature-rich restaurant website with dynamic content including carousel sliders, filterable menu, team showcase, and interactive contact forms with map integration.",
//     //   technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
//     //   features: ["Menu Filters", "Image Carousels", "Contact Forms", "Team Section"],
//     //   status: "Completed",
//     //   icon: <Calendar size={24} />,
//     //   githubUrl: "https://github.com/tinomudaishe/restaurant-website",
//     //   liveUrl: "https://tinomudaishe-restaurant.netlify.app"
//     // },
//     {
//       title: "Task Management App",
//       description: "Simple yet effective productivity application for organizing and tracking tasks with deadline management and completion tracking features.",
//       technologies: ["React", "Local Storage", "CSS", "JavaScript"],
//       features: ["Task CRUD", "Deadline Tracking", "Progress Monitoring", "Clean UI"],
//       status: "In Development",
//       icon: <CheckCircle size={24} />,
//       githubUrl: "https://github.com/shantel2012",
//       liveUrl: "https://task-omega-brown-70.vercel.app/"
//     },
//     {
//       title: "E-Commerce Platform",
//       description: "Modern online shopping platform with product catalog, shopping cart, user authentication, and payment integration. Features admin dashboard for inventory management.",
//       technologies: ["React", "Tailwind CSS", "Supabase", "Stripe API"],
//       features: ["Product Catalog", "Shopping Cart", "User Auth", "Payment Gateway"],
//       status: "In Development",
//       icon: <Users size={24} />,
//       githubUrl: "https://github.com/shantel2012",
//       liveUrl: "https://frontend-magic-shop.vercel.app/"
//     },
//     {
//       title: "Online Learning Platform",
//       description: "Educational platform for online courses with video streaming, progress tracking, quizzes, and certificates. Includes instructor dashboard and student management system.",
//       technologies: ["React", "Node.js", "MongoDB", "Video.js"],
//       features: ["Course Management", "Video Streaming", "Progress Tracking", "Certificates"],
//       status: "Planning",
//       icon: <CheckCircle size={24} />,
//       githubUrl: "https://github.com/shantel2012",
//       liveUrl: "https://brave-new-learn.vercel.app/"
//     },
//     {
//       title: "Blog CMS",
//       description: "Content Management System for bloggers with rich text editor, media management, SEO optimization, and multi-author support. Features responsive design and social sharing.",
//       technologies: ["React", "Express.js", "PostgreSQL", "AWS S3"],
//       features: ["Rich Text Editor", "Media Management", "SEO Tools", "Multi-Author"],
//       status: "Planning",
//       icon: <MapPin size={24} />,
//       githubUrl: "https://github.com/shantel2012",
//       liveUrl: "https://blogcms-4xsp.vercel.app/"
//     }
//   ];

//   return (
//     <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold mb-4">
//             My <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Portfolio</span>
//           </h2>
//           <p className="text-xl text-gray-300 max-w-3xl mx-auto">
//             Here are some projects I've been working on to strengthen my coding skills and build real-world applications
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-8">
//           {projects.map((project, index) => (
//             <div
//               key={index}
//               className="group bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:from-cyan-400/5 hover:to-purple-400/5 hover:border-cyan-400/20 transition-all duration-500 hover:transform hover:scale-[1.02]"
//             >
//               {/* Header */}
//               <div className="flex items-start justify-between mb-6">
//                 <div className="flex items-center gap-4">
//                   <div className="p-3 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-lg">
//                     <div className="text-cyan-400">{project.icon}</div>
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
//                       {project.title}
//                     </h3>
//                     <span className={`text-sm px-2 py-1 rounded-full ${
//                       project.status === 'Completed' 
//                         ? 'bg-green-400/20 text-green-400' 
//                         : 'bg-yellow-400/20 text-yellow-400'
//                     }`}>
//                       {project.status}
//                     </span>
//                   </div>
//                 </div>
                
//                 <div className="flex gap-2">
//                   <a 
//                     href={project.githubUrl}
//                     // target="_blank"
//                     rel="noopener noreferrer"
//                     className="p-2 bg-white/10 hover:bg-cyan-400/20 rounded-lg transition-colors hover:text-cyan-400"
//                   >
//                     <Github size={18} />
//                   </a>
//                   <a 
//                     href={project.liveUrl}
//                     target={project.liveUrl === "#" ? "_self" : "_blank"}
//                     rel="noopener noreferrer"
//                     className="p-2 bg-white/10 hover:bg-purple-400/20 rounded-lg transition-colors hover:text-purple-400"
//                   >
//                     <ExternalLink size={18} />
//                   </a>
//                 </div>
//               </div>

//               {/* Description */}
//               <p className="text-gray-300 mb-6 leading-relaxed">
//                 {project.description}
//               </p>

//               {/* Features */}
//               <div className="mb-6">
//                 <h4 className="text-sm font-medium text-purple-400 mb-3">Key Features:</h4>
//                 <div className="grid grid-cols-2 gap-2">
//                   {project.features.map((feature, featureIndex) => (
//                     <div key={featureIndex} className="flex items-center gap-2 text-gray-400 text-sm">
//                       <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
//                       {feature}
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Technologies */}
//               <div>
//                 <h4 className="text-sm font-medium text-cyan-400 mb-3">Technologies:</h4>
//                 <div className="flex flex-wrap gap-2">
//                   {project.technologies.map((tech, techIndex) => (
//                     <span
//                       key={techIndex}
//                       className="px-3 py-1 bg-white/10 text-gray-300 rounded-full text-sm border border-white/20 hover:border-cyan-400/50 hover:text-cyan-400 transition-colors duration-200"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Call to Action */}
//         <div className="text-center mt-16">
//           <a 
//             href="https://github.com/tinomudaishe"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 backdrop-blur-sm border border-cyan-400/30 rounded-full hover:from-cyan-400/30 hover:to-purple-400/30 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105"
//           >
//             <Github size={20} className="text-cyan-400" />
//             <span className="text-white font-medium">View All Projects on GitHub</span>
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;



import React from 'react';
import { Github, ExternalLink, MapPin, CheckCircle, Users } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Parking Space Finder App",
      description:
        "A comprehensive parking solution inspired by Neighbor.com, featuring search & listing, Google Maps integration, and booking system with dashboards for users, owners, and admins.",
      technologies: ["React", "Tailwind CSS", "Google Maps API", "JavaScript"],
      features: ["GPS Integration", "Booking System", "User Dashboard", "Admin Panel"],
      status: "In Development",
      icon: <MapPin size={24} />,
      githubUrl: "https://github.com/shantel2012",
      liveUrl: "https://ty-r6at.vercel.app/",
    },
    {
      title: "Buildlink - Construction Platform",
      description:
        "Multi-page React application based on Figma design, connecting clients with construction professionals through comprehensive service listings and job posting features.",
      technologies: ["React", "CSS", "Multi-page Navigation", "Figma Design"],
      features: ["Service Listings", "Professional Profiles", "Job Posting", "Testimonials"],
      status: "In Development",
      icon: <Users size={24} />,
      githubUrl: "https://github.com/shantel2012",
      liveUrl: "https://github.com/tinomudaishe/buildlink",
    },
    {
      title: "Task Management App",
      description:
        "Simple yet effective productivity application for organizing and tracking tasks with deadline management and completion tracking features.",
      technologies: ["React", "Local Storage", "CSS", "JavaScript"],
      features: ["Task CRUD", "Deadline Tracking", "Progress Monitoring", "Clean UI"],
      status: "In Development",
      icon: <CheckCircle size={24} />,
      githubUrl: "https://github.com/shantel2012",
      liveUrl: "https://task-omega-brown-70.vercel.app/",
    },
    {
      title: "E-Commerce Platform",
      description:
        "Modern online shopping platform with product catalog, shopping cart, user authentication, and payment integration. Features admin dashboard for inventory management.",
      technologies: ["React", "Tailwind CSS", "Supabase", "Stripe API"],
      features: ["Product Catalog", "Shopping Cart", "User Auth", "Payment Gateway"],
      status: "In Development",
      icon: <Users size={24} />,
      githubUrl: "https://github.com/shantel2012",
      liveUrl: "https://frontend-magic-shop.vercel.app/",
    },
    {
      title: "Online Learning Platform",
      description:
        "Educational platform for online courses with video streaming, progress tracking, quizzes, and certificates. Includes instructor dashboard and student management system.",
      technologies: ["React", "Node.js", "MongoDB", "Video.js"],
      features: ["Course Management", "Video Streaming", "Progress Tracking", "Certificates"],
      status: "Planning",
      icon: <CheckCircle size={24} />,
      githubUrl: "https://github.com/shantel2012",
      liveUrl: "https://brave-new-learn.vercel.app/",
    },
    {
      title: "Agrom Farm - Smart Agriculture Platform",
      description:
        "Agrom Farm is a digital agriculture management platform that connects farmers, buyers, and suppliers. It features crop monitoring, marketplace integration, and data-driven insights for sustainable farming.",
      technologies: ["React", "Tailwind CSS", "Firebase", "REST API"],
      features: ["Farm Marketplace", "Smart Dashboard", "Crop Monitoring", "Data Analytics"],
      status: "In Development",
      icon: <Users size={24} />,
      githubUrl: "https://github.com/shantel2012/agrom-farm",
      liveUrl: "https://agrom-farm.vercel.app/",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">My Portfolio</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Here are some projects I've been working on to strengthen my coding skills and build real-world applications.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-cyan-400/30 transition-all duration-500 hover:scale-[1.02]"
            >
              {/* Project Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white/10 rounded-lg text-cyan-400">
                    {project.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <span
                      className={`text-sm px-2 py-1 rounded-full ${
                        project.status === "Completed"
                          ? "bg-green-500/10 text-green-400"
                          : "bg-yellow-500/10 text-yellow-400"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors hover:text-cyan-400"
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors hover:text-cyan-400"
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>

              {/* Features */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-cyan-400 mb-3">Key Features:</h4>
                <div className="grid grid-cols-2 gap-2">
                  {project.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-gray-400 text-sm">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-sm font-medium text-cyan-400 mb-3">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-white/10 text-gray-300 rounded-full text-sm border border-white/20 hover:border-cyan-400/50 hover:text-cyan-400 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <a
            href="https://github.com/shantel2012"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 border border-white/20 rounded-full hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-105"
          >
            <Github size={20} />
            <span className="font-medium">View All Projects on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;


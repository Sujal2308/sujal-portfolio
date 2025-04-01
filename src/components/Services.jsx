import React from "react";

const Services = () => {
  const services = [
    {
      title: "Frontend Development",
      icon: "🎨",
      description:
        "Creating responsive and interactive user interfaces using modern frameworks like React, with a focus on performance and user experience.",
      technologies: ["React.js", "Next.js", "Tailwind CSS", "TypeScript"],
    },
    {
      title: "Backend Development",
      icon: "⚙️",
      description:
        "Building robust and scalable server-side applications with secure APIs and efficient database management.",
      technologies: ["Node.js", "Express.js", "MongoDB", "RESTful APIs"],
    },
    {
      title: "MERN Stack Development",
      icon: "💻",
      description:
        "Full-stack development using MongoDB, Express.js, React, and Node.js to create complete web applications.",
      technologies: ["MongoDB", "Express.js", "React", "Node.js"],
    },
  ];

  return (
    <section className="py-10"> {/* Reduced from py-20 */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 
                hover:transform hover:scale-105 transition-all duration-300 
                border border-white/20 shadow-xl 
                hover:border-amber-500/50 hover:shadow-amber-500/20
                group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3 text-amber-600 font-mono">
                {service.title}
              </h3>
              <p className="text-gray-300 mb-4 font-mono">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-amber-600/20 backdrop-blur-sm text-amber-600 
                      px-3 py-1 rounded-full text-sm font-mono 
                      border border-amber-600/20 hover:bg-amber-600/30 
                      transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

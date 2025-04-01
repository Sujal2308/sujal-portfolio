import React from "react";

const Skills = () => {
  const categoryLogos = {
    "programming languages": "👨‍💻",
    "web frameworks and libraries": "🛠️",
    "database": "🗄️",
    "tools and technologies": "⚙️",
  };

  const skillCategories = {
    "programming languages": [
      {
        name: "JavaScript",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        name: "TypeScript",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      },
      {
        name: "Java",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      },
      {
        name: "HTML",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      },
      {
        name: "CSS",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      },
    ],
    "web frameworks and libraries": [
      {
        name: "React",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "Node.js",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "Express.js",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      },
      {
        name: "Redux",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
      },
      {
        name: "Sass",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
      },
      {
        name: "Socket.io",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg",
      },
      {
        name: "Tailwind",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      },
      {
        name: "Shadcn UI",
        logo: "https://avatars.githubusercontent.com/u/139895814?s=200&v=4",
      },
    ],
    database: [
      {
        name: "MongoDB",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      },
      {
        name: "MySQL",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      },
      {
        name: "Redis",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
      },
    ],
    "tools and technologies": [
      {
        name: "Git",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      },
      {
        name: "Docker",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      },
      {
        name: "Kubernetes",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
      },
      {
        name: "Kafka",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg",
      },
    ],
  };

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        {Object.entries(skillCategories).map(([category, skills]) => (
          <div key={category} className="mb-12">
            <h3 className="text-2xl font-bold text-amber-600 mb-6 capitalize font-mono flex items-center gap-3">
              <span className="text-3xl">{categoryLogos[category]}</span>
              {category}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-opacity-80 bg-white backdrop-blur-sm py-2 px-3 rounded-full shadow-md transform transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-center">
                    <img
                      src={skill.logo}
                      alt={`${skill.name} logo`}
                      className="w-5 h-5 mr-2"
                    />
                    <h3 className="text-base font-semibold text-black">
                      {skill.name}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

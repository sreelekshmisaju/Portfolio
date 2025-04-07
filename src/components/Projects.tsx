import React from 'react';
import { Heart, Home, Notebook as Robot, Calculator } from 'lucide-react';


interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  publicationLink?: string;
  githubLink?: string;
  icon: React.ElementType;
  points: string[];
  year: string;
}

interface ProjectsProps {
  isDarkMode: boolean;
}

const projects: Project[] = [
  {
    title: "Fetal Heart Ultrasound Image Enhancement and Anatomical Feature Recognition via GAN and GradCAM",
    description: "Ultrasound plays a crucial role in prenatal care, providing essential insights into fetal health and development...",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?fit=crop&w=800&q=80",
    technologies: ["GANs", "Grad-CAM", "Deep Learning", "Python", "TensorFlow"],
    publicationLink: "https://doi.org/10.1109/ICCCNT61001.2024.10724165",
    githubLink: "https://github.com/sreelekshmisaju/CLUSTER_ANALYSIS_-_PIX2PIX_GAN-_GRAD_CAM_AI.git",
    icon: Heart,
    points: ["Managed real ultrasound data", "Applied hyperparameter tuning", "Achieved industry-leading accuracy"],
    year: "2024",
  },
  {
    title: "Smart Home with Condition Monitoring",
    description: "Smart homes with advanced condition monitoring systems enhance communication...",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?fit=crop&w=800&q=80",
    technologies: ["Arduino", "IoT", "Sensors", "Embedded Systems", "C++", "Proteus"],
    publicationLink: "https://doi.org/10.1007/978-981-16-5529-6_50",
    icon: Home,
    points: ["Integrated multi-sensor data", "Developed user-friendly UI", "Utilized Arduino with sensors"],
    year: "2021",
  },
  {
    title: "Obstacle Avoiding Robot",
    description: "Created a robot with real-time obstacle detection and Bluetooth control...",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?fit=crop&w=800&q=80",
    technologies: ["Arduino", "Bluetooth", "Sensors", "Motors"],
    icon: Robot,
    points: ["Optimized sensor sensitivity", "Implemented Bluetooth control", "Achieved minimal latency"],
    year: "2019",
  },
  {
    title: "Scientific Calculator",
    description: "Developed a responsive scientific calculator with real-time computations, advanced math functions, and a smooth dark/light mode toggle using HTML, CSS, and JavaScript.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMBi7NRUZKvIwBg1v_r4rJLtR5VObAfYjc0A&s",
    technologies: ["HTML", "CSS", "JavaScript"],
    icon: Calculator,
    points: [
      "Implemented scientific functions (sin, cos, tan, log, sqrt, power)",
      "Designed a responsive and modern UI with CSS grid and variables",
      "Integrated smooth dark/light theme toggle using CSS variables and JS"
    ],
    year: "2025",
  },
  

];

const Projects: React.FC<ProjectsProps> = ({ isDarkMode }) => {
  return (
    <section id="projects" className="pt-20 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-3xl font-bold mb-8 text-center ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
          Projects
        </h2>

        {/* Scrollable Container */}
        <div className="overflow-hidden relative">
          <div className="flex space-x-10 animate-scroll">
            {[...projects, ...projects].map((project, index) => (
              <div
                key={index}
                className={`rounded-lg shadow-lg w-96 min-w-[380px] p-6 transition-all hover:shadow-xl ${
                  isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
                }`}
              >
                <div className="flex items-center mb-4">
                  <project.icon className="w-8 h-8 text-blue-500 mr-3" />
                  <div>
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <span className="text-sm text-gray-500">{project.year}</span>
                  </div>
                </div>

                <img src={project.image} alt={project.title} className="w-full h-56 object-cover rounded-md mb-4" />

                <p className="mb-4">{project.description}</p>

                <div className="mb-4">
                  <strong>Technologies:</strong>
                  <div className="flex flex-wrap mt-1">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="bg-blue-100 text-blue-600 px-2 py-1 rounded-md text-sm mr-2 mb-2">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <ul className="space-y-2">
                  {project.points.map((point, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2"></span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex space-x-4">
                  {project.publicationLink && (
                    <a
                      href={project.publicationLink}
                      className="text-blue-500 hover:underline text-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Publication
                    </a>
                  )}
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      className="text-gray-600 hover:underline text-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Code
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tailwind CSS for Auto Scroll Animation */}
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll {
            display: flex;
            width: max-content;
            animation: scroll 30s linear infinite; /* Adjust speed */
          }
        `}
      </style>
    </section>
  );
};

export default Projects;

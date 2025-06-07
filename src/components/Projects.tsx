import React from 'react';
import { Heart, Home, Notebook as Robot, Calculator,ClipboardList, Newspaper,Password } from 'lucide-react';
import { Bot as Chatbot } from 'lucide-react';



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
    githubLink: "https://github.com/sreelekshmisaju/Calculator-using-HTML-CSS-JavaScript.git",
    icon: Calculator,
    points: [
      "Implemented scientific functions (sin, cos, tan, log, sqrt, power)",
      "Designed a responsive and modern UI with CSS grid and variables",
      "Integrated smooth dark/light theme toggle using CSS variables and JS"
    ],
    year: "2025",
  },
  {
    title: "Advanced To-Do List App",
    description: "Built a feature-rich to-do list application with task due dates, priority levels, editable entries, and a responsive dark/light theme using HTML, CSS, and JavaScript.",
    image: "https://play-lh.googleusercontent.com/VPqK75BwKMtTDFF6UQS6E3GYdYqzvZfddDxoKRH-DSlXIcYLN_EeSy5OXKx0bhBTtLUU",
    technologies: ["HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com/sreelekshmisaju/To-do-List-App.git",
    icon: ClipboardList, 
    points: [
      "Added date picker and priority dropdown with color-coded labels",
      "Enabled inline editing, marking as complete, and smooth deletion animations",
      "Implemented responsive UI and theme toggle with CSS transitions and JS"
    ],
    year: "2025",
  },
  {
    title: "Fake News Detection using NLP",
    description: "Developed a machine learning model that classifies news articles as fake or real using natural language processing techniques. Used TF-IDF vectorization and PassiveAggressiveClassifier to achieve high accuracy.",
    image: "https://miro.medium.com/v2/resize:fit:4800/format:webp/1*OT_N4E4FjLnwoxu58dcOJA.png",
    technologies: ["Python", "Pandas", "Scikit-learn", "NLP", "Matplotlib", "Seaborn"],
    githubLink: "https://github.com/sreelekshmisaju/Fake-News-Detection-NLP.git",   
    icon: Newspaper,
    points: [
      "Cleaned and preprocessed text data from Kaggle's Fake and Real News dataset",
      "Used TF-IDF for feature extraction and trained PassiveAggressiveClassifier",
      "Evaluated model with confusion matrix, classification report, and visualizations"
    ],
    year: "2025"
  },
  {
  "title": "Password Generator",
  "description": "Created a desktop application that generates secure, customizable passwords based on user preferences. Built with Python and PyQt5 to provide an easy-to-use graphical interface.",
  "image": "data:image/jpeg;base64,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",
  "technologies": ["Python", "PyQt5", "Random", "GUI"],
  "githubLink": "https://github.com/sreelekshmisaju/password-generator.git",
  "icon": Password, 
  "points": [
    "Designed a user-friendly GUI for generating passwords of variable length and complexity",
    "Implemented options to include uppercase, lowercase, numbers, and special characters",
    "Packaged the app into a standalone executable using PyInstaller for easy distribution"
  ],
  "year": "2025"
},
{
  "title": "Chatbot with Animated Emoji Reactions",
  "description": "Developed a Python desktop chatbot application using Tkinter that provides interactive conversations with users. Enhanced user experience by adding animated emoji reactions using Pillow for visual feedback.",
  "image": "https://www.dstny.be/sites/default/files/styles/drimage_focal_720_0/public/media/images/2023-03/Chatbot_720x480_header.png",
  "technologies": ["Python", "Tkinter", "Pillow", "GUI"],
  "githubLink": "https://github.com/sreelekshmisaju/ChatBot.git",
  "icon": Chatbot,
  "points": [
    "Built a responsive GUI chatbot interface for real-time user interaction",
    "Integrated animated emoji reactions to enhance conversational feedback",
    "Implemented clear chat functionality for improved user experience"
  ],
  "year": "2025"
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

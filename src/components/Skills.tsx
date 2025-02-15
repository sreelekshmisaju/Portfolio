import React from "react";
import {
  Code,
  Database,
  Cpu,
  Users,
  Braces,
  Server,
  Globe,
  Brain,
  Terminal,
  Laptop,
  Container,
  Archive,
} from "lucide-react";

interface SkillsProps {
  isDarkMode: boolean;
}

const Skills: React.FC<SkillsProps> = ({ isDarkMode }) => {
  const technicalSkills = [
    { name: "Python", icon: Braces },
    { name: "Machine Learning", icon: Brain },
    { name: "Deep Learning", icon: Cpu },
    { name: "React.js", icon: Code },
    { name: "Node.js", icon: Server },
    { name: "MongoDB", icon: Database },
    { name: "Docker", icon: Container },
    { name: "Web Development", icon: Globe },
    { name: "IoT", icon: Laptop },
    { name: "Arduino", icon: Terminal },
    { name: "Raspberry Pi", icon: Cpu },
    { name: "Data Structures", icon: Archive },
  ];

  const softSkills = [
    "Time Management",
    "Teamwork",
    "Adaptability",
    "Critical Thinking",
    "Decision Making",
    "Communication",
    "Results-Oriented",
    "Self-Motivated",
    "Quick Learner",
  ];

  return (
    <section id="skills" className="pt-20">
      <div className="max-w-4xl mx-auto">
        <h2
          className={`text-3xl font-bold mb-8 text-center ${
            isDarkMode ? "text-white" : "text-gray-800"
          }`}
        >
          Skills
        </h2>

        <div className="space-y-12">
          {/* Technical Skills Section */}
          <div
            className={`rounded-lg shadow-lg p-8 overflow-hidden ${
              isDarkMode ? "bg-gray-900" : "bg-white"
            }`}
          >
            <div className="flex items-center mb-6">
              <Code className="w-6 h-6 text-blue-500 mr-2" />
              <h3
                className={`text-xl font-semibold ${
                  isDarkMode ? "text-white" : "text-gray-800"
                }`}
              >
                Technical Skills
              </h3>
            </div>
            <div className="flex space-x-8 animate-scroll">
              <div className="flex space-x-8 min-w-max">
                {[...technicalSkills, ...technicalSkills].map(
                  (skill, index) => (
                    <div
                      key={index}
                      className={`flex flex-col items-center p-4 rounded-lg transition-all duration-300 transform hover:scale-105 w-32 ${
                        isDarkMode
                          ? "bg-gray-800 hover:bg-gray-700"
                          : "bg-gray-50 hover:bg-blue-100"
                      } neon-blue`}
                    >
                      <skill.icon className="w-8 h-8 text-blue-500 mb-2" />
                      <span
                        className={`text-sm font-bold text-center ${
                          isDarkMode ? "text-gray-300" : "text-gray-600"
                        }`}
                      >
                        {skill.name}
                      </span>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Soft Skills Section */}
          <div
            className={`rounded-lg shadow-lg p-8 ${
              isDarkMode ? "bg-gray-900" : "bg-white"
            }`}
          >
            <div className="flex items-center mb-6">
              <Users className="w-6 h-6 text-green-500 mr-2" />
              <h3
                className={`text-xl font-semibold ${
                  isDarkMode ? "text-white" : "text-gray-800"
                }`}
              >
                Soft Skills
              </h3>
            </div>
            <div className="flex space-x-8 animate-scroll-reverse">
              <div className="flex space-x-8 min-w-max">
                {[...softSkills, ...softSkills].map((skill, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-lg text-center transition-all duration-300 transform hover:scale-105 w-40 ${
                      isDarkMode
                        ? "bg-gray-800 hover:bg-gray-700"
                        : "bg-gray-50 hover:bg-green-100"
                    } neon-green`}
                  >
                    <span
                      className={`font-bold ${
                        isDarkMode ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add Neon Glow Effect */}
      <style>
        {`
          .neon-blue {
            box-shadow: 0 0 8px rgba(0, 102, 255, 0.8);
            transition: box-shadow 0.3s ease-in-out;
          }
          .neon-blue:hover {
            box-shadow: 0 0 12px rgba(0, 102, 255, 1);
          }
          .neon-green {
            box-shadow: 0 0 8px rgba(0, 255, 102, 0.8);
            transition: box-shadow 0.3s ease-in-out;
          }
          .neon-green:hover {
            box-shadow: 0 0 12px rgba(0, 255, 102, 1);
          }
        `}
      </style>
    </section>
  );
};

export default Skills;

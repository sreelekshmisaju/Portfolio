import React from "react";
import { GraduationCap, Brain, Code, FileText } from "lucide-react";

interface AboutProps {
  isDarkMode: boolean;
}

const About: React.FC<AboutProps> = ({ isDarkMode }) => {
  return (
    <section
      id="about"
      className={`relative py-20 px-6 lg:px-12 ${
        isDarkMode ? "bg-gray-950 text-white" : "bg-gray-100 text-gray-800"
      } transition-colors duration-500`}
    >
      {/* Background Accent */}
      <div
        className="absolute top-1/2 transform -translate-y-1/2 opacity-20 lg:opacity-30 hidden md:block"
        style={{
          backgroundImage: `url('/laptop.png')`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          width: "400px",
          height: "400px",
          [isDarkMode ? "left" : "right"]: "0",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl font-extrabold text-center mb-12 tracking-wide uppercase">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              Passion for creativity and innovation drives my work. With expertise in Artificial
              Intelligence, Machine Learning, and Full-Stack Development, my journey has been fueled by
              curiosity and a dedication to problem-solving. I specialize in Python, Deep Learning, and
              building interactive applications that blend technology with user-centric design.
            </p>
            <p className="text-lg leading-relaxed">
              My research, featured in IEEE and Springer, reflects my commitment to advancing technology
              through practical solutions. From developing AI-powered image enhancement models to
              integrating IoT-driven automation, I thrive on exploring new dimensions of technology.
            </p>

            {/* Download Resume Button */}
            <a
              href="/Sreelekshmi_Saju__Resume.pdf"
              download="Sreelekshmi_Saju__Resume.pdf"
              className="inline-flex items-center justify-center px-8 py-3 border-2 rounded-lg transition-all duration-300 
              text-blue-600 border-blue-600 hover:bg-blue-50 dark:text-purple-400 dark:border-purple-400 dark:hover:bg-purple-900"
            >
              <FileText className="w-5 h-5 mr-2" />
              Download Resume
            </a>
          </div>

          {/* Information Cards */}
          <div className="grid grid-cols-2 gap-6">
            {[
              {
                Icon: GraduationCap,
                title: "Education",
                text: "M.Tech in CS (AI & ML)",
                color: "from-blue-500 to-blue-300",
                glow: "shadow-blue-400/50",
              },
              {
                Icon: Brain,
                title: "Expertise",
                text: "AI & Machine Learning, IoT",
                color: "from-purple-500 to-purple-300",
                glow: "shadow-purple-400/50",
              },
              {
                Icon: Code,
                title: "Development",
                text: "Full Stack & IoT",
                color: "from-green-500 to-green-300",
                glow: "shadow-green-400/50",
              },
              {
                Icon: FileText,
                title: "Research",
                text: "IEEE & Springer",
                color: "from-yellow-500 to-yellow-300",
                glow: "shadow-yellow-400/50",
              },
            ].map(({ Icon, title, text, color, glow }, index) => (
              <div
                key={index}
                className={`p-6 rounded-lg border border-transparent bg-opacity-80 backdrop-blur-lg relative overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-xl ${glow}`}
                style={{
                  background: `linear-gradient(135deg, var(--tw-gradient-stops))`,
                }}
              >
                <div className="p-3 rounded-full bg-white/20">
                  <Icon className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-semibold mt-4 text-white">{title}</h3>
                <p className="text-white/80 mt-2">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;


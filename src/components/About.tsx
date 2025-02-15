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
        className="absolute top-1/2 transform -translate-y-1/2 opacity-20 lg:opacity-30"
        style={{
          backgroundImage: `url('laptop.png')`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          width: "400px",
          height: "400px",
          right: isDarkMode ? "auto" : "0",
          left: isDarkMode ? "0" : "auto",
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
              Passion for creativity and innovation drives my work. With
              expertise in Artificial Intelligence, Machine Learning, and
              Full-Stack Development, my journey has been fueled by curiosity
              and a dedication to problem-solving. I specialize in Python, Deep
              Learning, and building interactive applications that blend
              technology with user-centric design.
            </p>
            <p className="text-lg leading-relaxed">
              My research, featured in IEEE and Springer, reflects my commitment
              to advancing technology through practical solutions. From
              developing AI-powered image enhancement models to integrating
              IoT-driven automation, I thrive on exploring new dimensions of
              technology.
            </p>

            {/* Download Resume Button */}
            <div className="flex pt-4">
              <a
                href="Sreelekshmi_Saju_Resume.pdf"
                download
                className="relative inline-flex items-center px-8 py-3 rounded-lg text-lg font-semibold bg-blue-600 hover:bg-blue-700 text-white transition-transform transform hover:scale-105 shadow-lg"
              >
                <FileText className="w-5 h-5 mr-2" />
                Download Resume
                <span className="absolute inset-0 bg-blue-500 opacity-30 rounded-lg blur-lg"></span>
              </a>
            </div>
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
                className={`p-6 rounded-lg border border-transparent bg-opacity-80 backdrop-blur-lg relative overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:${glow}`}
                style={{
                  background: `linear-gradient(135deg, ${color})`,
                  boxShadow: `0px 0px 25px rgba(255, 255, 255, 0.2)`,
                }}
              >
                <div className="p-3 rounded-full bg-white/20">
                  <Icon className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-semibold mt-4 text-white">{title}</h3>
                <p className="text-white/80 mt-2">{text}</p>

                {/* Animated Glow */}
                <div
                  className={`absolute inset-0 rounded-lg opacity-10 transition-opacity duration-300 hover:opacity-40`}
                  style={{
                    background: `radial-gradient(circle, rgba(255,255,255,0.4) 0%, rgba(0,0,0,0) 70%)`,
                  }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

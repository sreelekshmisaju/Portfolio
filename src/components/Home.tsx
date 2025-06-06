import React, { useEffect, useState } from "react";
import { FileText } from "lucide-react";
import { motion } from "framer-motion";

interface HomeProps {
  isDarkMode: boolean;
}

const Home: React.FC<HomeProps> = ({ isDarkMode }) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = ["AI/ML Engineer", "Full Stack Developer"];

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const constCoder = `
const coder = {
  name: "Sreelekshmi Saju",
  skills: ["React", "MySQL", "MongoDB", "Docker", "AWS"],
  hardWorker: true,
  quickLearner: true,
  problemSolver: true,
  hireable: function() {
    return (this.hardWorker && this.problemSolver && this.skills.length >= 5);
  }
};
  `;

  return (
    <section
      id="home"
      className={`min-h-screen flex items-center justify-center transition-all duration-500 ${
        isDarkMode
          ? "bg-gradient-to-r from-[#1A1A40] via-[#25255E] to-[#1A1A40]"
          : "bg-gradient-to-r from-[#E0EAFC] via-[#CFDEF3] to-[#E0EAFC]"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Text Section */}
          <div className="space-y-6 text-center md:text-left">
            <p
              className={`font-semibold text-lg animate-fadeIn ${
                isDarkMode ? "text-purple-300" : "text-blue-600"
              }`}
            >
              Hi, I'm
            </p>
            <h1
              className={`text-5xl md:text-6xl font-extrabold animate-slideUp ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Sreelekshmi Saju
            </h1>

            {/* Scrolling Role Text */}
            <h2
              className={`text-2xl md:text-3xl font-semibold animate-fadeIn delay-300 transition-all duration-500 ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}
              key={roleIndex}
            >
              {roles[roleIndex]}
            </h2>

            {/* Snake-like scrolling text */}
            <motion.div
              className="overflow-hidden whitespace-nowrap w-full"
              initial={{ x: "100%" }}
              animate={{ x: "-100%" }}
              transition={{
                repeat: Infinity,
                duration: 8,
                ease: "linear",
              }}
            >
              <p
                className={`text-lg font-semibold ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                MTech CSE (AI-ML) | Software Developer | Researcher
              </p>
            </motion.div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fadeIn delay-500">
              <a
                href="#contact"
                className={`inline-block px-8 py-3 rounded-lg text-center font-medium transition-all duration-300 ${
                  isDarkMode
                    ? "bg-purple-600 hover:bg-purple-700 text-white"
                    : "bg-blue-600 hover:bg-blue-700 text-white"
                }`}
              >
                Contact Me
              </a>

              <a
  href="/Sreelekshmi_Resume_v2.pdf"
  download="/Sreelekshmi_Resume_v2.pdf"
  className="inline-flex items-center justify-center px-8 py-3 border-2 rounded-lg transition-all duration-300 
    text-blue-600 border-blue-600 hover:bg-blue-50 dark:text-purple-400 dark:border-purple-400 dark:hover:bg-purple-900"
>
  <FileText className="w-5 h-5 mr-2" />
  Download Resume
</a>

            </div>
          </div>

          {/* Profile Image Section with Code Background */}
          <div className="relative flex justify-center items-center">
            {/* Faint Background Code Block */}
            <motion.div
              className="absolute top-0 left-0 w-full h-full p-4 text-xs font-mono overflow-hidden rounded-lg"
              style={{
                backgroundColor: "transparent",
                opacity: isDarkMode ? 0.1 : 0.2,
                whiteSpace: "pre-line",
              }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: isDarkMode ? 0.12 : 0.15, y: 0 }}
              transition={{ duration: 1 }}
            >
              <pre className="text-gray-300 md:text-gray-700">{constCoder}</pre>
            </motion.div>

            {/* Profile Image */}
            <div
              className="aspect-square rounded-full overflow-hidden shadow-xl border-4 border-purple-400 p-2 relative z-10"
              style={{
                boxShadow: isDarkMode
                  ? "0 10px 30px rgba(128, 0, 128, 0.3)"
                  : "0 10px 30px rgba(0, 0, 255, 0.2)",
              }}
            >
              <img
                src="/1000504426.png" // Corrected Image Path
                alt="Profile"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;


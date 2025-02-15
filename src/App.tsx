import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark" || 
           (!localStorage.getItem("theme") && new Date().getHours() >= 18);
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDarkMode 
        ? 'bg-gradient-to-br from-gray-900 to-gray-800 text-white' 
        : 'bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900'
    }`}>
      {/* Header */}
      <Header isDark={isDarkMode} toggleTheme={() => setIsDarkMode(prev => !prev)} />

      {/* Main Sections */}
      <main className="container mx-auto px-4 py-8 space-y-20">
        <Home isDarkMode={isDarkMode} />
        <About isDarkMode={isDarkMode} />
        <Education isDarkMode={isDarkMode} />
        <Skills isDarkMode={isDarkMode} />
        <Projects isDarkMode={isDarkMode} />
        <Experience isDarkMode={isDarkMode} />
        <Contact isDarkMode={isDarkMode} />
      </main>

      {/* Footer */}
      <footer className={`py-8 ${
        isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-200 text-gray-900'
      }`}>
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-xl font-bold">Sreelekshmi Saju</h3>
          </div>
          <div className="flex space-x-6">
            <a href="https://www.linkedin.com/in/sreelekshmisaju/" className="hover:text-blue-400 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://github.com/sreelekshmisaju" className="hover:text-gray-400 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="mailto:sreelekshmisajuk@gmail.com" className="hover:text-red-400 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
            <a href="tel:+917012170911" className="hover:text-green-400 transition-colors">
              <Phone className="w-6 h-6" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

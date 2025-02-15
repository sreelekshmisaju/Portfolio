import React from 'react';

interface EducationProps {
  isDarkMode: boolean;
}

const Education: React.FC<EducationProps> = ({ isDarkMode }) => {
  const education = [
    {
      degree: "M.Tech in Computer Science and Engineering (AI & ML)",
      institution: "Amrita Vishwa Vidyapeetham, India",
      year: "2022 – 2024",
      grade: "CGPA: 7.7"
    },
    {
      degree: "B.Tech in Electrical and Electronics Engineering",
      institution: "Amrita Vishwa Vidyapeetham, India",
      year: "2017 – 2021",
      grade: "CGPA: 6.78"
    },
    {
      degree: "Higher Secondary Education",
      institution: "Govt Fisheries Higher Secondary School Kuzhithura, India",
      year: "2016 – 2017",
      grade: "Percentage: 73.58%"
    },
    {
      degree: "High School Education",
      institution: "Govt. High School Azheekal, India",
      year: "2014 – 2015",
      grade: "Percentage: 94%"
    }
  ];

  return (
    <section id="education" className="relative pt-20 pb-20 overflow-hidden">
      {/* Background Image with Fade Effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: "url('/edu.png')" }}
      ></div>

      {/* Gradient Overlay for Better Readability */}
      <div className={`absolute inset-0 ${isDarkMode ? "bg-gray-900/70" : "bg-white/60"}`} />

      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className={`text-4xl font-bold text-center mb-12 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          Education
        </h2>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div 
              key={index}
              className={`p-6 rounded-xl backdrop-blur-md transition-transform hover:scale-105 shadow-lg
                ${isDarkMode ? 'bg-gray-800/50 text-white border border-gray-700' : 'bg-white/40 text-gray-900 border border-gray-300'}`}
            >
              <h3 className="text-2xl font-semibold mb-2">{edu.degree}</h3>
              <p className="mb-1 text-lg">{edu.institution}</p>
              <div className="flex justify-between text-md font-medium">
                <span>{edu.year}</span>
                <span className="text-blue-500">{edu.grade}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

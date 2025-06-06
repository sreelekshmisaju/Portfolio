import React from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';

interface ExperienceProps {
  isDarkMode: boolean;
}

const Experience: React.FC<ExperienceProps> = ({ isDarkMode }) => {
  return (
    <section id="experience" className="pt-20 pb-20">
      <div className="max-w-5xl mx-auto px-6">
        <h2 
          className={`text-4xl font-extrabold mb-12 text-center tracking-wide ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          Experience
        </h2>

        <div className="space-y-10">
          {/* Work Experience */}
          <div className={`rounded-xl shadow-xl p-8 transition duration-300 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
            <div className="flex items-center mb-6">
              <Briefcase className="w-7 h-7 text-blue-500 mr-3" />
              <h3 className="text-2xl font-semibold">Work Experience</h3>
            </div>
            
            <div className="ml-10 border-l-4 border-blue-400 pl-6 space-y-6 relative">
              <div className="absolute -left-[14px] top-0 w-5 h-5 bg-blue-500 rounded-full"></div>
              <h4 className="text-lg font-semibold">Teaching Assistant / AI - IoT Lab in Charge</h4>
              <p className="text-gray-400">Amrita Vishwa Vidyapeetham, India</p>
              <p className="text-sm text-gray-500">Jan 2022 - Oct 2022</p>
              <ul className="mt-3 space-y-2 list-disc list-inside text-gray-300">
                <li>Conducted hands-on sessions in AI and IoT for over 300 students.</li>
                <li>Enhanced lab engagement through practical learning experiences.</li>
                <li>Collaborated on curriculum development and training modules.</li>
              </ul>
            </div>
          </div>

          {/* Internships */}
          <div className={`rounded-xl shadow-xl p-8 transition duration-300 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
            <div className="flex items-center mb-6">
              <GraduationCap className="w-7 h-7 text-green-500 mr-3" />
              <h3 className="text-2xl font-semibold">Internships</h3>
            </div>

            <div className="ml-10 border-l-4 border-green-400 pl-6 space-y-8 relative">
              <div className="absolute -left-[14px] top-0 w-5 h-5 bg-green-500 rounded-full"></div>
              <h4 className="text-lg font-semibold">Centre for Internet Studies & Artificial Intelligence - CISAI</h4>
              <p className="text-sm text-gray-500">2023</p>
            </div>

            <div className="ml-10 border-l-4 border-green-400 pl-6 space-y-6 relative mt-6">
              <div className="absolute -left-[14px] top-0 w-5 h-5 bg-green-500 rounded-full"></div>
              <h4 className="text-lg font-semibold">Kerala State Electricity Board Limited</h4>
              <p className="text-gray-400">Kayamkulam, India</p>
              <p className="text-sm text-gray-500">2019</p>
              <ul className="mt-3 space-y-2 list-disc list-inside text-gray-300">
                <li>Gained insights into electrical equipment and operations.</li>
                <li>Studied transmission, distribution, and generation systems.</li>
                <li>Learned about electrical lines and transformers.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

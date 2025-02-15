import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Github, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

interface ContactProps {
  isDarkMode: boolean;
}

const Contact: React.FC<ContactProps> = ({ isDarkMode }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await emailjs.send(
        'service_8d61a8i',
        'template_88b98pc',
        {
          user_name: formData.name,
          user_email: formData.email,
          message: formData.message,
        },
        'k6kzY-v8FeIilKngJ'
      );

      toast.success('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  return (
    <section id="contact" className="pt-20 pb-16">
      <Toaster position="top-right" />
      <div className="max-w-5xl mx-auto px-6">
        <h2 className={`text-4xl font-extrabold mb-10 text-center transition-colors ${
          isDarkMode ? 'text-white' : 'text-gray-900'
        }`}>
          Get in Touch
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Info Section */}
          <div className={`rounded-xl shadow-xl p-8 transition-all ${
            isDarkMode ? 'bg-gray-900 border border-gray-700' : 'bg-white border border-gray-200'
          }`}>
            <h3 className={`text-2xl font-semibold mb-6 transition-colors ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>Contact Information</h3>
            <div className="space-y-5">
              {[
                { icon: Mail, text: 'sreelekshmisajuk@gmail.com', link: 'mailto:sreelekshmisajuk@gmail.com' },
                { icon: Phone, text: '+91 7012170911', link: 'tel:+917012170911' },
                { icon: Linkedin, text: 'LinkedIn Profile', link: 'https://www.linkedin.com/in/sreelekshmisaju/' },
                { icon: Github, text: 'GitHub Profile', link: 'https://github.com/sreelekshmisaju' },
              ].map(({ icon: Icon, text, link }, index) => (
                <a 
                  key={index}
                  href={link} 
                  className="flex items-center text-lg transition-transform transform hover:scale-105"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Icon className="w-6 h-6 mr-3 text-blue-500" />
                  <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} hover:text-blue-400 transition-colors`}>
                    {text}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="relative p-8 rounded-xl shadow-2xl bg-opacity-80 backdrop-blur-lg border border-gray-200 dark:border-gray-700">
            <h3 className={`text-2xl font-semibold mb-6 transition-colors ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>Send a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {[
                { id: 'name', type: 'text', label: 'Name', value: formData.name },
                { id: 'email', type: 'email', label: 'Email', value: formData.email },
              ].map(({ id, type, label, value }) => (
                <div key={id}>
                  <label htmlFor={id} className={`block text-sm font-medium transition-colors ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    {label}
                  </label>
                  <input
                    type={type}
                    id={id}
                    value={value}
                    onChange={handleChange}
                    required
                    className={`w-full mt-1 px-4 py-3 rounded-lg shadow-sm transition-all border focus:ring-2 focus:ring-blue-500 outline-none ${
                      isDarkMode
                        ? 'bg-gray-800 border-gray-600 text-white'
                        : 'bg-white border-gray-300 text-gray-900'
                    }`}
                  />
                </div>
              ))}

              <div>
                <label htmlFor="message" className={`block text-sm font-medium transition-colors ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className={`w-full mt-1 px-4 py-3 rounded-lg shadow-sm transition-all border focus:ring-2 focus:ring-blue-500 outline-none ${
                    isDarkMode
                      ? 'bg-gray-800 border-gray-600 text-white'
                      : 'bg-white border-gray-300 text-gray-900'
                  }`}
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className={`w-full py-3 px-5 rounded-lg flex items-center justify-center transition-all text-white font-semibold tracking-wide ${
                  isDarkMode 
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600'
                    : 'bg-gradient-to-r from-blue-400 to-purple-400 hover:from-blue-500 hover:to-purple-500'
                } ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Sending...
                  </>
                ) : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

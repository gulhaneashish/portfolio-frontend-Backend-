import React from 'react'
import Myphoto from '../assets/p.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Typed from 'typed.js';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import cvFile from '../assets/Pdf/Ashish_Gulhane_Resume.pdf'; // link to PDF
import { useNavigate } from 'react-router-dom';

export default function Home() {
const typedElement = useRef(null)

  useEffect(() => {
    if (!typedElement.current) return
    const typed = new Typed(typedElement.current, {
      strings: ["Software Engineer", "Frontend Developer", "Database Developer"],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1200,
      loop: true,
    })
    return () => typed.destroy()
  }, [])
   

   const navigate = useNavigate();
  const isMobile = window.innerWidth < 768; // or pass as prop

  const handleConnectClick = () => {
    if (isMobile) {
      // Navigate to the mobile contact page
      navigate("/projects");
    } else {
      // Scroll to contact section on desktop
      const contact = document.getElementById("projects");
      contact?.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section className="w-full min-h-screen bg-gradient-to-b from-[#0f172a] via-[#0f172a] to-[#1e293b] text-white flex items-center">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-center md:text-left"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to My Portfolio</h1>
            <h3 className="text-xl md:text-2xl mb-2">It’s Me</h3>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 text-transparent bg-clip-text">
              Ashish Gulhane
            </h1>
            <h3 className="text-xl md:text-2xl font-semibold mb-6">
              And I’m a <span className="text-cyan-400" ref={typedElement}></span>
            </h3>

            <p className="text-gray-300 mb-4 leading-relaxed">
              Seeking an entry-level role to apply technical knowledge and contribute to innovative
              projects while continuously learning and growing.
            </p>
            <p className="mt-2 text-lg text-gray-400">Explore my projects and skills 🚀</p>

            {/* Social Icons */}
            <div className="mt-6 flex justify-center md:justify-start space-x-6 text-3xl">
              <a href="https://github.com/gulhaneashish" target="_blank" rel="noopener noreferrer" 
                className="hover:text-gray-400 transition transform hover:scale-110">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="https://www.linkedin.com/in/ashish-gulhane-782262252" target="_blank" rel="noopener noreferrer"
                className="hover:text-blue-400 transition transform hover:scale-110">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="https://wa.me/91766419871" target="_blank" rel="noopener noreferrer"
                className="hover:text-green-400 transition transform hover:scale-110">
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
            </div>

            {/* Buttons */}
            <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center md:justify-start">
              <a 
                href={cvFile}               // link to PDF
        target="_blank"             // open in new tab
        rel="noopener noreferrer"   // security best practice
        download 
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-blue-600 hover:to-cyan-500 
                text-white px-8 py-3 rounded-xl shadow-lg transition transform hover:scale-105">
                Download Resume
              </a>
              <a href="#projects"
               onClick={handleConnectClick}
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 
                text-white px-8 py-3 rounded-xl shadow-lg transition transform hover:scale-105">
                View More
              </a>
            </div>
        
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="flex justify-center"
          >
            <motion.img
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ type: "spring", stiffness: 200 }}
              src={Myphoto}
              alt="Ashish Gulhane"
              className="w-80 h-80 md:w-[22rem] md:h-[22rem] rounded-full object-cover shadow-2xl border-4 border-cyan-400"
            />
          </motion.div>

        </div>
      </div>
    </section>
  )
}

import React from 'react'
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';


export default function Nav() {
 const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinkClass =
    "relative block text-lg font-semibold py-2 transition duration-300 cursor-pointer";

  const linkHover =
    "after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-cyan-400 after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full hover:text-cyan-400";

  const handleLinkClick = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-20 backdrop-blur-md bg-gray-900/70 border-b border-gray-700 shadow-lg">
      <div className="flex items-center justify-between mx-auto max-w-[1200px] px-6 py-4">
        {/* Logo */}
        <a
          href="/"
          className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent hover:scale-105 transition"
        >
          Ashish<span className="text-white">.</span>
        </a>

        {/* Desktop Nav */}
        {!isMobile && (
          <nav>
            <ul className="flex space-x-8 text-white">
              {[
                { id: "home", name: "Home" },
                { id: "about", name: "About" },
                { id: "education", name: "Education" },
                { id: "skills", name: "Skills" },
                { id: "projects", name: "Projects" },
                { id: "achievements", name: "Achievements" },
                { id: "contact", name: "Contact" },
              ].map((link, idx) => (
                <li key={idx}>
                  <ScrollLink
                    to={link.id}
                    smooth
                    duration={500}
                    offset={-80}
                    className={`${navLinkClass} ${linkHover}`}
                  >
                    {link.name}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </nav>
        )}

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-gray-900/95 backdrop-blur-md border-t border-gray-700 shadow-lg"
          >
            <ul className="flex flex-col space-y-4 px-6 py-6 text-lg text-white">
              <li>
                <RouterLink to="/" className={navLinkClass} onClick={handleLinkClick}>
                  Home
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/about" className={navLinkClass} onClick={handleLinkClick}>
                  About
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/education" className={navLinkClass} onClick={handleLinkClick}>
                  Education
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/skills" className={navLinkClass} onClick={handleLinkClick}>
                  Skills
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/projects" className={navLinkClass} onClick={handleLinkClick}>
                  Projects
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/achievements" className={navLinkClass} onClick={handleLinkClick}>
                  Achievements
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/contact" className={navLinkClass} onClick={handleLinkClick}>
                  Contact
                </RouterLink>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

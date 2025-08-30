import './App.css'
import React from 'react'
import Nav from './component/Nav.jsx'
import Home from './component/Home.jsx'
import About from './component/About.jsx'
import Contact from './component/Contact.jsx'
import Skills from './component/Skills.jsx'
import Projects from './component/Project.jsx'
import Achivement from './component/Achivement.jsx'
import { useState, useEffect } from 'react'
// Importing ScrollLink from react-scroll for smooth scrolling
import { Link as ScrollLink } from 'react-scroll'
// Importing Link from react-router-dom for routing
import { Link as RouterLink } from 'react-router-dom'
// Importing BrowserRouter, Routes, and Route for routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Education from './component/Education.jsx'
function App() {
 const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <Router>
      <Nav />
      {isMobile ? (
        // ✅ Mobile: use routes (multi-page)
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/achievements" element={<Achivement />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      ) : (
        // ✅ Desktop: all sections on one page
        <div>
          <section id="home" className="min-h-screen">
            <Home />
          </section>
          <section id="about">
            <About />
          </section>
              <section id="education" className="min-h-screen">
            <Education />
          </section>
          <section id="skills">
            <Skills />
          </section>
          <section id="projects" className="min-h-screen">
            <Projects />
          </section>
          <section id="achievements" className="min-h-screen">
            <Achivement />
          </section>
          <section id="contact" className="min-h-screen">
            <Contact />
          </section>
        </div>
      )}
    </Router>
  )
}

export default App

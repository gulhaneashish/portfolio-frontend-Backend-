import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
export default function Skills() {
 const [technicalSkills, setTechnicalSkills] = useState([]);
  const [professionalSkills, setProfessionalSkills] = useState([]);

  // Animation state
  const [animatedTech, setAnimatedTech] = useState([]);
  const [animatedProf, setAnimatedProf] = useState([]);

  const [direction, setDirection] = useState('forward');

  // Fetch skills from backend
  useEffect(() => {
    axios.get("http://localhost:8080/api/v1/skill")
      .then(res => {
        const allSkills = res.data;
        const tech = allSkills.filter(skill => skill.type === "technical");
        const prof = allSkills.filter(skill => skill.type === "professional");

        setTechnicalSkills(tech);
        setProfessionalSkills(prof);

        // Initialize animation arrays
        setAnimatedTech(tech.map(() => 0));
        setAnimatedProf(prof.map(() => 0));
      })
      .catch(err => console.error(err));
  }, []);

  // Animate progress bars
  useEffect(() => {
    if (technicalSkills.length === 0 && professionalSkills.length === 0) return;

    const interval = setInterval(() => {
      setAnimatedTech(prev => prev.map((val, i) =>
        direction === "forward"
          ? val < technicalSkills[i].level ? val + 1 : val
          : val > 0 ? val - 1 : val
      ));

      setAnimatedProf(prev => prev.map((val, i) =>
        direction === "forward"
          ? val < professionalSkills[i].level ? val + 1 : val
          : val > 0 ? val - 1 : val
      ));
    }, 20);

    const toggle = setInterval(() => {
      setDirection(prev => prev === "forward" ? "backward" : "forward");
    }, 4000);

    return () => {
      clearInterval(interval);
      clearInterval(toggle);
    };
  }, [direction, technicalSkills, professionalSkills]);

  return (
    <div
      id="skills"
      className="w-full bg-gradient-to-b from-[#0f172a] via-[#0f172a] to-[#1e293b] text-white flex flex-col items-center py-16 px-6 relative"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(6,182,212,0.15),transparent_60%)] pointer-events-none"></div>

      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-extrabold text-center mb-12 relative"
      >
        My <span className="text-cyan-400 drop-shadow-lg">Skills</span>
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-3 rounded-full"></div>
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-12 w-full max-w-6xl relative z-10">
        {/* Technical Skills */}
        <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          <h3 className="text-2xl font-semibold text-cyan-400 mb-6">Technical Skills</h3>
          <div className="space-y-6">
            {technicalSkills.map((skill, index) => (
              <div key={index} className="group">
                <div className="flex justify-between mb-1 text-gray-300">
                  <span>{skill.name}</span>
                  <span>{animatedTech[index] || 0}%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
                  <motion.div
                    className="h-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                    style={{ width: `${animatedTech[index] || 0}%` }}
                    initial={{ width: 0 }}
                    animate={{ width: `${animatedTech[index] || 0}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Professional Skills */}
        <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          <h3 className="text-2xl font-semibold text-cyan-400 mb-6">Professional Skills</h3>
          <div className="grid grid-cols-2 gap-8">
            {professionalSkills.map((skill, index) => (
              <motion.div key={index} whileHover={{ scale: 1.1 }} className="flex flex-col items-center bg-gray-800/40 p-4 rounded-xl shadow-md hover:shadow-cyan-400/30 transition">
                <div className="w-24 h-24">
                  <CircularProgressbar
                    value={animatedProf[index] || 0}
                    text={`${animatedProf[index] || 0}%`}
                    styles={buildStyles({
                      textColor: "white",
                      pathColor: "url(#gradient)",
                      trailColor: "#1e293b",
                      textSize: "16px",
                    })}
                  />
                  <svg style={{ height: 0 }}>
                    <defs>
                      <linearGradient id="gradient" gradientTransform="rotate(90)">
                        <stop offset="0%" stopColor="#06b6d4" />
                        <stop offset="100%" stopColor="#3b82f6" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <p className="mt-3 text-lg text-gray-300">{skill.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

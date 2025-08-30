import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
export default function Education() {
const [educationData, setEducationData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/v1/education")
      .then(res => setEducationData(res.data))
      .catch(err => console.error("Error fetching education data:", err));
  }, []);

  return (
    <div
      id="education"
      className="w-full min-h-screen bg-gradient-to-b from-[#0f172a] via-[#0f172a] to-[#1e293b] text-white py-12 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          My <span className="text-cyan-400">Education</span>
        </h2>

        <div className="relative border-l-2 border-cyan-400 pl-6">
          {educationData.map((edu, index) => (
            <div key={index} className="mb-12 relative">
              <div className="absolute -left-3 top-2 w-6 h-6 bg-cyan-400 rounded-full border-4 border-[#0f172a]"></div>
              <div className="bg-[#1e293b] p-6 rounded-xl shadow-md hover:shadow-lg transition">
                <h3 className="text-2xl font-semibold text-cyan-400">{edu.degree}</h3>
                <p className="text-gray-300 text-lg">{edu.college}</p>
                <p className="text-sm text-gray-400 mt-1">{edu.year}</p>
                <p className="mt-2 font-medium text-white">{edu.score}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

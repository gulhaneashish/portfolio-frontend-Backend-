// import React from 'react'

// import { FaCertificate, FaAward, FaTrophy, FaMedal, FaBook } from 'react-icons/fa';
// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import { motion } from 'framer-motion';

// export default function Achivement() {
// const iconMap = {
//   FaCertificate: <FaCertificate className="text-yellow-400 text-3xl" />,
//   FaAward: <FaAward className="text-blue-400 text-3xl" />,
//   FaTrophy: <FaTrophy className="text-green-400 text-3xl" />,
//   FaMedal: <FaMedal className="text-pink-400 text-3xl" />,
//   FaBook: <FaBook className="text-purple-400 text-3xl" />,
// };
//  const [achievements, setAchievements] = useState([]);

//   useEffect(() => {
//     axios.get("http://localhost:8080/api/v1/achivment")
//       .then(res => setAchievements(res.data))
//       .catch(err => console.error(err));
//   }, []);
//   return (
//    <div id="achievements" className="bg-gradient-to-b from-[#0f172a] via-[#0f172a] to-[#1e293b] text-white py-16 px-6">
//       <h2 className="text-4xl font-bold text-center mb-12">
//         My <span className="text-cyan-400">Achievements</span>
//       </h2>

//       <div className="relative max-w-4xl mx-auto">
//         {/* Timeline line */}
//         <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-4 border-cyan-400 hidden md:block"></div>

//         <div className="space-y-12">
//           {achievements.map((item, index) => (
//             <div
//               key={index}
//               className={`md:flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
//             >
//               {/* Content */}
//               <div className="md:w-1/2 md:px-6">
//                 <div className="bg-gray-800 rounded-lg shadow-lg p-6 hover:scale-105 transition transform">
//                   <div className="flex items-center gap-4 mb-2">
//                     { iconMap[item.icon] || <FaCertificate className="text-white text-3xl" /> }
//                     <h3 className="text-xl font-semibold">{item.title}</h3>
//                   </div>
//                   <p className="text-gray-400">{item.description}</p>
//                   <p className="text-sm text-gray-500 mt-2">{item.year}</p>
//                 </div>
//               </div>

//               {/* Circle marker */}
//               <div className="hidden md:flex w-6 h-6 bg-cyan-400 rounded-full border-4 border-white mx-auto"></div>

//               {/* Spacer */}
//               <div className="md:w-1/2"></div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }

import React from 'react';
import { FaCertificate, FaAward, FaTrophy, FaMedal, FaBook, FaExternalLinkAlt } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Achievement() {

  const iconMap = {
    FaCertificate: <FaCertificate className="text-yellow-400 text-3xl" />,
    FaAward: <FaAward className="text-blue-400 text-3xl" />,
    FaTrophy: <FaTrophy className="text-green-400 text-3xl" />,
    FaMedal: <FaMedal className="text-pink-400 text-3xl" />,
    FaBook: <FaBook className="text-purple-400 text-3xl" />,
  };

  const [achievements, setAchievements] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/v1/achivment")
      .then(res => setAchievements(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div id="achievements" className="bg-gradient-to-b from-[#0f172a] via-[#0f172a] to-[#1e293b] text-white py-16 px-6">
      <h2 className="text-4xl font-bold text-center mb-12">
        My <span className="text-cyan-400">Achievements</span>
      </h2>

      <div className="relative max-w-4xl mx-auto">
        {/* Timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-4 border-cyan-400 hidden md:block"></div>

        <div className="space-y-12">
          {achievements.map((item, index) => (
            <div
              key={index}
              className={`md:flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
            >
              {/* Content */}
              <div className="md:w-1/2 md:px-6">
                <div className="bg-gray-800 rounded-lg shadow-lg p-6 hover:scale-105 transition transform">
                  
                  <div className="flex items-center gap-4 mb-2">
                    {iconMap[item.icon] || <FaCertificate className="text-white text-3xl" />}
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                  </div>

                  <p className="text-gray-400">{item.description}</p>
                  <p className="text-sm text-gray-500 mt-2">{item.year}</p>

                  {/* 🔗 Link Button */}
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center mt-3 px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg text-sm font-medium transition"
                    >
                      View Certificate <FaExternalLinkAlt className="ml-2 text-sm" />
                    </a>
                  )}

                </div>
              </div>

              {/* Circle Marker */}
              <div className="hidden md:flex w-6 h-6 bg-cyan-400 rounded-full border-4 border-white mx-auto"></div>

              {/* Spacer */}
              <div className="md:w-1/2"></div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
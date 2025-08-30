import React from 'react'
import photo from '../assets/photo.jpg';
import { useNavigate } from 'react-router-dom';
export default function About() {
    const navigate = useNavigate();
  const isMobile = window.innerWidth < 768; // or pass as prop

  const handleConnectClick = () => {
    if (isMobile) {
      // Navigate to the mobile contact page
      navigate("/contact");
    } else {
      // Scroll to contact section on desktop
      const contact = document.getElementById("contact");
      contact?.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (

 <section
      id="about"
      className="bg-gradient-to-b from-[#0f172a] via-[#0f172a] to-[#1e293b] text-white py-16 px-6 md:px-12"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Side - Image */}
        <div className="hidden md:flex justify-center md:justify-start w-full md:w-1/2 pt-10">
          <img
            src={photo}
            alt="Profile"
            className="w-80 h-80 md:w-100 md:h-100 rounded-full object-cover shadow-2xl border-4 border-cyan-400"
          />
        </div>

        {/* Right Side - Content */}
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold">
            About <span className="text-cyan-400">Me</span>
          </h1>

          <p className="text-gray-300 leading-relaxed">
            I’m <span className="font-semibold text-white">Ashish Gulhane</span>, a passionate
            and creative software developer with expertise in{" "}
            <span className="text-cyan-400 font-semibold">Java, MySQL, Oracle SQL, Flutter, Dart, </span>, and
            modern web technologies. With strong problem-solving skills and a love
            for clean, user-focused design, I aim to create impactful digital
            experiences.
          </p>

          <p className="text-gray-300 leading-relaxed">
            I specialize in building  web applications.
            Some of my proud contributions include{" "}
            <span className="font-semibold text-cyan-400">Advocad</span> and{" "}
            <span className="font-semibold text-cyan-400">Nyay Sahayak</span>, AI-powered apps
            simplifying legal processes, as well as active participation in the{" "}
            <span className="font-semibold">Smart India Hackathon</span>.
          </p>

          {/* Highlights Section */}
         
         <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
  <div className="p-4 bg-[#1e293b] rounded-xl shadow-lg transition transform hover:shadow-cyan-500/40 active:shadow-cyan-500/40 hover:scale-105 active:scale-105 focus:scale-105">
    <h2 className="text-2xl font-bold text-cyan-400">400+</h2>
    <p className="text-sm text-gray-400">Problems Solved</p>
  </div>

  <div className="p-4 bg-[#1e293b] rounded-xl shadow-lg transition transform hover:shadow-cyan-500/40 active:shadow-cyan-500/40 hover:scale-105 active:scale-105 focus:scale-105">
    <h2 className="text-2xl font-bold text-cyan-400">3+</h2>
    <p className="text-sm text-gray-400">Major Projects</p>
  </div>

  <div className="p-4 bg-[#1e293b] rounded-xl shadow-lg transition transform hover:shadow-cyan-500/40 active:shadow-cyan-500/40 hover:scale-105 active:scale-105 focus:scale-105">
    <h2 className="text-2xl font-bold text-cyan-400">Leader</h2>
    <p className="text-sm text-gray-400">Fest & Art Club</p>
  </div>
</div>

          <p className="text-gray-300 leading-relaxed">
            Outside of coding, I bring creativity through art & dance as the{" "}
            <span className="font-semibold">Head Coordinator</span> of my college
            committees. I’m always excited to collaborate and explore new
            opportunities.
          </p>

          {/* Button */}
          
   <div className="mt-6">
        <button
          onClick={handleConnectClick}
          className="inline-block px-6 py-3 rounded-lg bg-cyan-500 text-white font-semibold hover:bg-cyan-600 active:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 transition"
        >
          Let’s Connect 🚀
        </button>
      </div>
        </div>
      </div>
    </section>
  // <section
  //     id="about"
  //     className="bg-gradient-to-b from-[#0f172a] via-[#0f172a] to-[#1e293b] text-white py-16 px-6 md:px-12"
  //   >
  //     <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
  //       {/* Left Side - Image */}
  //       <div className="hidden md:flex justify-center md:justify-start w-full md:w-1/2 pt-10">
  //         <img
  //           src={photo}
  //           alt="Profile"
  //           className="w-80 h-80 md:w-100 md:h-100 rounded-full object-cover shadow-2xl border-4 border-cyan-400"
  //         />
  //       </div>

  //       {/* Right Side - Content */}
  //       <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
  //         <h1 className="text-3xl md:text-4xl font-bold">
  //           About <span className="text-cyan-400">Me</span>
  //         </h1>

  //         <p className="text-gray-300 leading-relaxed">
  //           I’m <span className="font-semibold text-white">Ashish Gulhane</span>, a passionate
  //           and creative software developer with expertise in{" "}
  //           <span className="text-cyan-400 font-semibold">Flutter, Dart, Java</span>, and
  //           modern web technologies. With strong problem-solving skills and a love
  //           for clean, user-focused design, I aim to create impactful digital
  //           experiences.
  //         </p>

  //         <p className="text-gray-300 leading-relaxed">
  //           I specialize in building web applications.
  //           Some of my proud contributions include{" "}
  //           <span className="font-semibold text-cyan-400">Advocad</span> and{" "}
  //           <span className="font-semibold text-cyan-400">Nyay Sahayak</span>, AI-powered apps
  //           simplifying legal processes, as well as active participation in the{" "}
  //           <span className="font-semibold">Smart India Hackathon</span>.
  //         </p>

  //         {/* Highlights Section */}
  //         <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
  //           <div className="p-4 bg-[#1e293b] rounded-xl shadow-lg transition transform hover:shadow-cyan-500/40 active:shadow-cyan-500/40 hover:scale-105 active:scale-105 focus:scale-105">
  //             <h2 className="text-2xl font-bold text-cyan-400">400+</h2>
  //             <p className="text-sm text-gray-400">Problems Solved</p>
  //           </div>

  //           <div className="p-4 bg-[#1e293b] rounded-xl shadow-lg transition transform hover:shadow-cyan-500/40 active:shadow-cyan-500/40 hover:scale-105 active:scale-105 focus:scale-105">
  //             <h2 className="text-2xl font-bold text-cyan-400">3+</h2>
  //             <p className="text-sm text-gray-400">Major Projects</p>
  //           </div>

  //           <div className="p-4 bg-[#1e293b] rounded-xl shadow-lg transition transform hover:shadow-cyan-500/40 active:shadow-cyan-500/40 hover:scale-105 active:scale-105 focus:scale-105">
  //             <h2 className="text-2xl font-bold text-cyan-400">Leader</h2>
  //             <p className="text-sm text-gray-400">Fest & Art Club</p>
  //           </div>
  //         </div>

  //         <p className="text-gray-300 leading-relaxed">
  //           Outside of coding, I bring creativity through art & dance as the{" "}
  //           <span className="font-semibold">Head Coordinator</span> of my college
  //           committees. I’m always excited to collaborate and explore new
  //           opportunities.
  //         </p>

  //         {/* Button - Fixed for mobile & desktop */}
  //         <div className="mt-6">
  //           <button
  //             onClick={() => {
  //               const contact = document.getElementById("contact");
  //               contact?.scrollIntoView({ behavior: "smooth" });
  //             }}
  //             className="inline-block px-6 py-3 rounded-lg bg-cyan-500 text-white font-semibold hover:bg-cyan-600 active:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 transition"
  //           >
  //             Let’s Connect 🚀
  //           </button>
  //         </div>
  //       </div>
  //     </div>
  //   </section>
  )
}

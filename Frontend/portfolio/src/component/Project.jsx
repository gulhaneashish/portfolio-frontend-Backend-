
import React, { useState, useMemo } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
const TAGS = ["All", "React", "Tailwind", "Flutter", "Java", "Spring", "TypeScript", "MySQL", "HTML", "CSS", "JavaScript", "Dart"];

export default function Projects() {  
const [projects, setProjects] = useState([]);
  const [activeTag, setActiveTag] = useState("All");
  const [query, setQuery] = useState("");
  const [modalProject, setModalProject] = useState(null);

  // Fetch projects from backend
  useEffect(() => {
    axios.get("http://localhost:8080/api/v1/projects") // Correct endpoint
      .then((response) => {
        // Convert tags string to array
        const data = response.data.map(project => ({
          ...project,
          tags: project.tags ? project.tags.split(',').map(tag => tag.trim()) : []
        }));
        setProjects(data);
      })
      .catch((error) => {
        console.error("Error fetching projects:", error);
      });
  }, []);

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchesTag =
        activeTag === "All" ? true : p.tags.includes(activeTag);
      const matchesSearch =
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.description.toLowerCase().includes(query.toLowerCase());
      return matchesTag && matchesSearch;
    });
  }, [projects, activeTag, query]);

  return (
    <section className="w-full min-h-screen bg-[#0b1120] text-white" id="projects">
      {/* Header */}
      <div className="max-w-6xl mx-auto px-6 pt-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4">
          My <span className="text-cyan-400">Projects</span>
        </h2>
        <p className="text-center text-gray-300 mb-8">
          A selection of things I’ve built — filter by stack or search by name.
        </p>
      </div>

      {/* Controls */}
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <input
          type="text"
          placeholder="Search projects..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full md:w-80 px-4 py-2 rounded-xl bg-[#0a0f1c] border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-400"
        />
        <div className="flex flex-wrap gap-2">
          {TAGS.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`px-3 py-1 rounded-full border transition
                ${activeTag === tag
                  ? "bg-cyan-400 text-black border-cyan-400"
                  : "bg-[#0a0f1c] text-gray-300 border-gray-700 hover:border-cyan-400"
                }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto px-6 py-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project) => (
          <article
            key={project.id}
            className="group rounded-2xl overflow-hidden bg-[#0a0f1c] border border-gray-800 hover:border-cyan-400/60 transition shadow-lg"
          >
            <div className="relative h-44 md:h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1120] via-transparent to-transparent opacity-60"></div>
            </div>

            <div className="p-5 flex flex-col gap-3">
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p className="text-gray-400 text-sm line-clamp-3">{project.description}</p>

              <div className="flex flex-wrap gap-2 pt-1">
                {project.tags.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded-full bg-[#0e1726] border border-gray-700">{t}</span>
                ))}
              </div>

              <div className="mt-3 flex items-center gap-3">
                {project.demo ? (
                  <a href={project.demo} target="_blank" rel="noreferrer" className="flex-1 text-center px-3 py-2 rounded-lg bg-cyan-400 text-black font-semibold hover:bg-cyan-500 transition">Live Demo</a>
                ) : (
                  <button disabled className="flex-1 text-center px-3 py-2 rounded-lg bg-gray-700/50 text-gray-400 cursor-not-allowed">No Demo</button>
                )}
                <a href={project.code} target="_blank" rel="noreferrer" className="flex-1 text-center px-3 py-2 rounded-lg border border-gray-700 hover:border-cyan-400 transition">Source</a>
              </div>

              <button onClick={() => setModalProject(project)} className="text-left text-cyan-400 hover:underline text-sm mt-1">
                Quick view →
              </button>
            </div>
          </article>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="max-w-6xl mx-auto px-6 pb-20 text-center text-gray-400">
          No projects match your search/filter.
        </div>
      )}

      {/* Modal */}
      {modalProject && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center px-4" onClick={() => setModalProject(null)}>
          <div className="max-w-3xl w-full bg-[#0a0f1c] border border-gray-700 rounded-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="relative h-56">
              <img src={modalProject.image} alt={modalProject.title} className="w-full h-full object-cover" />
              <button onClick={() => setModalProject(null)} className="absolute top-3 right-3 px-3 py-1 rounded-lg bg-black/50 hover:bg-black/70">✕</button>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">{modalProject.title}</h3>
              <p className="text-gray-300 mb-4">{modalProject.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {modalProject.tags.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded-full bg-[#0e1726] border border-gray-700">{t}</span>
                ))}
              </div>
              <div className="flex gap-3">
                {modalProject.demo && (
                  <a href={modalProject.demo} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-lg bg-cyan-400 text-black font-semibold hover:bg-cyan-500 transition">Live Demo</a>
                )}
                <a href={modalProject.code} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-lg border border-gray-700 hover:border-cyan-400 transition">View Code</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

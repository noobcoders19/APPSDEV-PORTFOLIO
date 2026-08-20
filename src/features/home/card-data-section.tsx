import React from 'react';

interface Project {
  id: string;
  category: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  imageSrc: string;
}

const PROJECTS: Project[] = [
  {
    id: 'attendance-system',
    category: 'FULL STACK WEB APP',
    title: 'Attendance System',
    description: 'Attendance tracking system built with comprehensive record management and real-time monitoring workflows.',
    tags: ['PHP', 'MySQL', 'CSS', 'JavaScript'],
    githubUrl: 'https://github.com/noobcoders19/AttendanceSystem/tree/main/AttendanceSystem/AttendanceSystem',
    imageSrc: '/bg12.jpg',
  },
  {
    id: 'student-online-application',
    category: 'CRUD APPLICATION',
    title: 'Student Online Application',
    description: 'Complete student portal with database integration and application processing workflows.',
    tags: ['PHP', 'MySQL', 'CSS'],
    githubUrl: 'https://github.com/noobcoders19/WorkingPhp2/commit/2cb51c3f6d56b3ff0737dafa33cfbd7c6670faf4',
    imageSrc: '/bg12.jpg',
  },
];

export const CardDataSection: React.FC = () => {
  return (
    <section className="py-12 px-6 max-w-6xl mx-auto">
      <div className="text-left mb-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-2xl text-cyan-400">😎</span>
          <h2 className="text-4xl font-extrabold text-white tracking-tight">Main Project Hub</h2>
        </div>
        <p className="text-sm font-mono text-slate-400">
          $ system.core_project_modules --verified
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS.map((project) => (
          <div
            key={project.id}
            className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 flex flex-col justify-between hover:border-slate-700 transition-all text-left"
          >
            <div>
              
              <div className="w-full h-52 rounded-xl bg-slate-950 border border-slate-800/80 overflow-hidden mb-6 relative group">
                <img
                  src={project.imageSrc}
                  alt={project.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors" />
              </div>

              <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                {project.category}
              </span>
              <h3 className="text-2xl font-bold text-white mt-1 mb-3">{project.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                {project.description}
              </p>
            </div>

            <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-800/60">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono px-2.5 py-1 rounded bg-slate-950 text-slate-300 border border-slate-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="View Source Code"
                  className="p-2.5 rounded-lg border border-slate-800 hover:border-cyan-500 bg-slate-950 text-slate-400 hover:text-cyan-400 transition-all cursor-pointer"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </a>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Open Repository"
                  className="p-2.5 rounded-lg border border-slate-800 hover:border-cyan-500 bg-slate-950 text-slate-400 hover:text-cyan-400 transition-all cursor-pointer"
                >
                  <svg className="w-4 h-4 fill-none stroke-current stroke-2 stroke-linecap-round stroke-linejoin-round" viewBox="0 0 24 24">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
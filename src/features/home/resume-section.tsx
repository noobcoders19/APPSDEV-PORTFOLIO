import React from 'react';

export const ResumeSection: React.FC = () => {
  return (
    <section id="resume" className="py-16 px-6 max-w-5xl mx-auto text-left">
      <div className="mb-10">
        <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
          // CREDENTIALS
        </span>
        <h2 className="text-4xl font-extrabold text-white tracking-tight mt-1">
          Resume & Background
        </h2>
      </div>

      <div className="space-y-6">
        <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-slate-700 transition-all">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
            <div>
              <h3 className="text-xl font-bold text-white">BS Information Technology</h3>
              <p className="text-sm font-mono text-slate-400">Cordova Public College</p>
            </div>
            <span className="text-xs font-mono px-3 py-1 rounded bg-slate-950 text-cyan-400 border border-slate-800 w-fit">
              2026 - 2027
            </span>
          </div>

          <p className="text-slate-300 text-sm leading-relaxed mb-4">
            Currently mastering web development, database management, and modern frontend frameworks. Focusing on building real-world software applications that solve everyday user problems through clean structure and efficient code.
          </p>

          <div className="flex flex-wrap gap-2">
            {['React', 'TypeScript', 'Tailwind CSS', 'PHP', 'MySQL', 'CSS'].map((tech) => (
              <span 
                key={tech} 
                className="text-xs font-mono px-2.5 py-1 rounded bg-slate-950 text-slate-400 border border-slate-800"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-slate-700 transition-all">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
            <div>
              <h3 className="text-xl font-bold text-white">Web Application Projects</h3>
              <p className="text-sm font-mono text-slate-400">Junior Web Developer</p>
            </div>
            <span className="text-xs font-mono px-3 py-1 rounded bg-slate-950 text-cyan-400 border border-slate-800 w-fit">
              2026 - 2027
            </span>
          </div>

          <p className="text-slate-300 text-sm leading-relaxed mb-4">
            Designed and built complete functional web systems from scratch, including custom attendance trackers and online student application portals. Handled everything from front-end styling and page layout to database tables and backend logic.
          </p>

          <div className="flex flex-wrap gap-2">
            {['CRUD Workflows', 'Database Design', 'Backend Logic', 'Git Version Control'].map((tech) => (
              <span 
                key={tech} 
                className="text-xs font-mono px-2.5 py-1 rounded bg-slate-950 text-slate-400 border border-slate-800"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
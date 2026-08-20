import React from 'react';

export const HomepageBannerSection: React.FC = () => {
  const scrollTo = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="pt-20 pb-16 px-6 max-w-5xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10">
      
      <div className="flex-1 text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 mb-8">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="text-xs font-mono text-cyan-400">
            system.status: Online_Available_For_Hire
          </span>
        </div>

        <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight mb-4 text-white">
          Hi, I'm <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-purple-500 bg-clip-text text-transparent">John Clyde</span>
        </h1>

        <p className="text-xl font-mono text-slate-400 mb-6">
          $ web_developer // building_clean_code.exe
        </p>

        <p className="text-slate-300 max-w-2xl text-base leading-relaxed mb-8">
          Passionate about building fast, reliable, and user-friendly web applications. Experienced in creating complete web systems, managing database workflows, and crafting responsive designs that look great on any device.
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <button 
            type="button"
            onClick={() => scrollTo('contact')}
            className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-mono font-bold text-sm rounded shadow-lg shadow-cyan-500/20 transition-all cursor-pointer"
          >
            initial_contact
          </button>

          <button 
            type="button"
            onClick={() => scrollTo('projects')}
            className="px-6 py-3 border border-slate-700 bg-slate-900/50 hover:bg-slate-800 text-slate-300 font-mono text-sm rounded transition-all cursor-pointer"
          >
            review_projects
          </button>
        </div>
      </div>

      {/* Profile Pic */}
      <div className="relative group w-48 h-48 sm:w-64 sm:h-64 shrink-0">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl blur opacity-50 group-hover:opacity-100 transition duration-500"></div>
        <div className="relative w-full h-full rounded-2xl overflow-hidden border border-slate-800 bg-slate-900">
          <img 
            src="/profile.jpg" 
            alt="John Clyde" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>

    </section>
  );
};
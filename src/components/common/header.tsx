import React, { useState } from 'react';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  // CENTER BUTTON
  const toggleHeader = () => {
    setIsOpen(!isOpen);
  };

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="sticky top-0 z-50 w-full">
      {/* Main Header */}
      {isOpen && (
        <header className="w-full bg-slate-950 border-b border-slate-800 py-3 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-0">
            
            {/* APPSDEV */}
            <div 
              onClick={() => scrollTo('about')}
              className="text-cyan-400 font-mono font-bold text-lg sm:text-xl cursor-pointer"
            >
              &lt;APPSDEV /&gt;
            </div>

            {/* Navigation Button in Top */}
            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-xs sm:text-sm font-mono text-slate-300">
              <button onClick={() => scrollTo('about')} className="hover:text-cyan-400 cursor-pointer">
                ABOUT
              </button>
              <button onClick={() => scrollTo('projects')} className="hover:text-cyan-400 cursor-pointer">
                PROJECTS
              </button>
              <button onClick={() => scrollTo('resume')} className="hover:text-cyan-400 cursor-pointer">
                RESUME
              </button>
              <button onClick={() => scrollTo('contact')} className="hover:text-cyan-400 cursor-pointer">
                CONTACT
              </button>
            </div>

            {/* Upper right side access resume button*/}
            <button 
              onClick={() => scrollTo('resume')}
              className="hidden sm:block px-4 py-2 border border-slate-700 rounded text-xs font-mono text-slate-300 hover:border-cyan-400 cursor-pointer"
            >
              access_resume
            </button>

          </div>
        </header>
      )}

      {/* Arrow Effect Part */}
      <div className="flex justify-center">
        <button
          type="button"
          onClick={toggleHeader}
          className="px-4 py-1 bg-slate-950 border border-slate-800 border-t-0 rounded-b-md text-cyan-400 text-xs hover:bg-slate-900 cursor-pointer"
          title={isOpen ? "Collapse Header" : "Expand Header"}
        >
          {isOpen ? '▲' : '▼'}
        </button>
      </div>
    </div>
  );
};
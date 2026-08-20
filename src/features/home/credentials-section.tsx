import React from 'react';

export function CredentialsSection(): React.JSX.Element {
  const educationList = [
    {
      level: 'ELEMENTARY SCHOOL',
      school: 'Cogon Elementary School',
      logo: '/cordovalogo.png',
    },
    {
      level: 'JUNIOR HIGH SCHOOL',
      school: 'Cordova Catholic Cooperative School',
      logo: '/cccs1.jpeg',
    },
    {
      level: 'SENIOR HIGH SCHOOL',
      school: 'Cordova Catholic Cooperative School',
      logo: '/cccs1.jpeg',
    },
    {
      level: 'COLLEGE',
      school: 'Cordova Public College',
      logo: '/cpc.png',
    },
  ];

  const skillsList = ['React', 'JavaScript', 'MySQL', 'Tailwind CSS', 'Node.js', 'PHP', 'CSS'];

  return (
    <section id="credentials" className="py-16 border-t border-slate-900">
      <div className="max-w-5xl mx-auto px-4">
       
        <h2 className="text-2xl sm:text-3xl font-mono text-cyan-400 font-bold mb-8 text-center">
          &lt; Education /&gt;
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
          {educationList.map((item, index) => (
            <div
              key={index}
              className="p-5 border border-slate-800 bg-slate-900/50 rounded-lg hover:border-cyan-500/50 transition-colors flex items-center justify-between gap-4"
            >
              <div>
                <h3 className="font-mono text-sm font-bold text-slate-200">{item.level}</h3>
                <p className="font-mono text-xs text-slate-400 mt-1">{item.school}</p>
              </div>

             
              <div className="w-12 h-12 rounded-full border border-slate-700 bg-slate-800/80 flex-shrink-0 flex items-center justify-center overflow-hidden">
                {item.logo ? (
                  <img
                    src={item.logo}
                    alt={`${item.school} Logo`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  /* Placeholder when no logo path is supplied */
                  <span className="text-[10px] font-mono text-slate-500">LOGO</span>
                )}
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-2xl sm:text-3xl font-mono text-cyan-400 font-bold mb-8 text-center">
          &lt; Skills /&gt;
        </h2>
        <div className="flex flex-wrap justify-center gap-3">
          {skillsList.map((skill, index) => (
            <span
              key={index}
              className="px-4 py-2 border border-slate-800 bg-slate-900/60 font-mono text-xs text-cyan-300 rounded hover:border-cyan-500 transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
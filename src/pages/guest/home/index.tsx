import React from 'react';
import { Header } from '../../../components/common/header';
import { HomepageBannerSection } from '../../../features/home/homepage-banner-section';
import { CardDataSection } from '../../../features/home/card-data-section';
import { ResumeSection } from '../../../features/home/resume-section';
import { CredentialsSection } from '../../../features/home/credentials-section';

export default function HomePage(): React.JSX.Element {
  const handleEmailClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // To access mobile devices
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (!isMobile) {
      e.preventDefault();
      // For gmail direct logic
      window.open(
        'https://mail.google.com/mail/?view=cm&fs=1&to=nunezjohnclydee@gmail.com&su=Portfolio%20Inquiry',
        '_blank',
        'noopener,noreferrer'
      );
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between">
      <Header />
      <main>
        <HomepageBannerSection />

        <div id="projects">
          <CardDataSection />
        </div>

        {/* Education & Skills Section */}
        <CredentialsSection />

        <ResumeSection />

        {/* Hadles Send message to email logic */}
        <section id="contact" className="py-20 text-center border-t border-slate-900">
          <h2 className="text-2xl sm:text-3xl font-mono text-cyan-400 font-bold mb-2">
            &lt; Get_In_Touch /&gt;
          </h2>
          <p className="text-slate-400 text-sm font-mono mb-2">
            Have a project or opportunity? Let's connect.
          </p>
          <p className="text-xs font-mono text-slate-300 mb-6">
            nunezjohnclydee@gmail.com
          </p>

          <a
            href="mailto:nunezjohnclydee@gmail.com?subject=Portfolio%20Inquiry"
            onClick={handleEmailClick}
            className="px-6 py-3 border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 rounded font-mono text-sm inline-block cursor-pointer transition-colors"
          >
            send_message
          </a>
        </section>
      </main>

      {/* --- FOOTER SECTION --- */}
      <footer className="py-6 border-t border-slate-900 bg-slate-950/80 text-xs font-mono text-slate-400">
        <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p>
            Copyright &copy; 2026 John Clyde Nunez. All rights reserved.
          </p>
          <p className="text-cyan-400/80">
            Application Development
          </p>
        </div>
      </footer>
    </div>
  );
}
import React from 'react';
import { Link } from 'react-router-dom';
import { Play } from 'lucide-react';
import { sessions } from '../data/sessions';

function Home() {
  return (
    <div className="min-h-screen flex flex-col container mx-auto px-4 py-8">
      {/* Header with Logo */}
      <header className="flex flex-col items-center justify-center pt-8 pb-16 border-b border-white/10 mb-12">
        <div className="w-48 md:w-64 mb-6">
          <img src="/vertical%20white-01.svg" alt="CAT Logo" className="w-full h-auto drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]" />
        </div>
        <h1 className="text-3xl md:text-5xl font-bold tracking-wider uppercase text-center mt-4">
          <span className="text-brand-red drop-shadow-[0_0_10px_rgba(185,32,37,0.5)]">CAT</span> Sessions Hub
        </h1>
        <p className="text-brand-cream/70 text-lg md:text-xl mt-4 text-center max-w-2xl">
          A scalable, open platform for CAT Frontend Engineering technical presentations and workshops.
        </p>
      </header>
      
      {/* Sessions Grid */}
      <main className="flex-1">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sessions.map((session) => (
            <article key={session.id} className="glass-card glow-red flex flex-col h-full group">
              <div className="text-xs text-brand-red font-bold uppercase tracking-widest mb-3">
                {session.id.replace('-', ' ')} • {session.date}
              </div>
              <h2 className="text-2xl font-bold mb-4 leading-tight group-hover:text-brand-cream transition-colors">
                {session.title}
              </h2>
              <p className="text-brand-cream/60 mb-8 flex-1 leading-relaxed">
                {session.description}
              </p>
              
              <Link 
                to={session.link} 
                className="flex items-center justify-center gap-2 bg-transparent text-brand-red border-2 border-brand-red px-6 py-3 rounded-lg font-bold uppercase text-sm tracking-wider hover:bg-brand-red hover:text-white transition-all duration-300 w-full"
              >
                <Play size={18} />
                Start Presentation
              </Link>
            </article>
          ))}
        </div>
      </main>
      
      {/* Footer */}
      <footer className="mt-20 py-8 text-center border-t border-white/10 text-brand-cream/40 text-sm flex items-center justify-center gap-4">
        <span>© 2026 CAT Frontend Engineering</span>
        <img src="/icon%20red-01.svg" alt="CAT Icon" className="w-6 h-6 opacity-50" />
      </footer>
    </div>
  );
}

export default Home;

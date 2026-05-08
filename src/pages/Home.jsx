import React from 'react';
import { Link } from 'react-router-dom';
import { PlayCircle, Clock, BarChart, User, Search, BookOpen, ChevronRight } from 'lucide-react';
import { sessions } from '../data/sessions';

function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#002033] font-cairo">
      {/* Top Navigation */}
      <nav className="w-full bg-[#001826] border-b border-brand-cream/10 sticky top-0 z-50">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-12">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <img src="/icon%20red-01.svg" alt="CAT Logo" className="h-10 w-auto" />
              <span className="text-2xl font-black tracking-wider text-white uppercase">
                <span className="text-brand-red">CAT</span> Platform
              </span>
            </Link>
            
            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-8 text-brand-cream/80 font-semibold text-sm uppercase tracking-wider">
              <Link to="/" className="hover:text-white transition-colors border-b-2 border-brand-red py-7">Browse Courses</Link>
              <a href="#" className="hover:text-white transition-colors py-7 border-b-2 border-transparent hover:border-white/30">Paths</a>
              <a href="#" className="hover:text-white transition-colors py-7 border-b-2 border-transparent hover:border-white/30">Workshops</a>
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-6">
            <div className="hidden lg:flex items-center bg-white/5 rounded-full px-4 py-2 border border-white/10 focus-within:border-brand-red/50 focus-within:bg-white/10 transition-colors w-64">
              <Search size={18} className="text-brand-cream/50 mr-2" />
              <input 
                type="text" 
                placeholder="Search sessions..." 
                className="bg-transparent border-none outline-none text-sm text-white placeholder:text-brand-cream/40 w-full"
              />
            </div>
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-brand-red to-[#FF4D4D] flex items-center justify-center font-bold shadow-lg shadow-brand-red/20 cursor-pointer border-2 border-transparent hover:border-white transition-colors">
              AB
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-b from-[#001826] to-[#002033] pt-16 pb-24 border-b border-brand-cream/5">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>
        <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red/10 border border-brand-red/20 text-brand-red text-xs font-bold uppercase tracking-widest mb-6">
              <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse"></span>
              Featured Session
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
              Master the Web's <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-[#FF8C8C]">Underlying Architecture</span>
            </h1>
            <p className="text-xl text-brand-cream/70 mb-10 max-w-2xl leading-relaxed">
              Dive deep into how browsers, DNS, and HTTP work together to render modern web applications. The essential foundation for senior frontend engineers.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
              <Link to="/sessions/session-1" className="flex items-center gap-2 bg-brand-red text-white px-8 py-4 rounded-lg font-bold uppercase tracking-wider hover:bg-[#D1252B] transition-colors shadow-lg shadow-brand-red/20">
                <PlayCircle size={20} />
                Start Learning Now
              </Link>
              <button className="flex items-center gap-2 bg-white/5 border border-white/10 text-white px-8 py-4 rounded-lg font-bold uppercase tracking-wider hover:bg-white/10 transition-colors">
                View Curriculum
              </button>
            </div>
          </div>
          <div className="flex-1 hidden lg:flex justify-end">
            <div className="w-full max-w-lg aspect-video rounded-2xl bg-[#00121D] border border-white/10 shadow-2xl overflow-hidden relative group cursor-pointer flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue to-brand-red/20 opacity-50 group-hover:opacity-70 transition-opacity"></div>
              <img src="/vertical%20white-01.svg" alt="CAT Logo" className="h-32 opacity-20 group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-brand-red/90 flex items-center justify-center text-white shadow-[0_0_30px_rgba(185,32,37,0.5)] group-hover:scale-110 transition-transform">
                  <PlayCircle size={40} className="ml-1" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="flex-1 container mx-auto px-6 py-16">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-extrabold text-white flex items-center gap-3">
            <BookOpen className="text-brand-red" size={28} />
            Available Courses
          </h2>
          <div className="flex gap-2">
            <button className="px-4 py-2 rounded bg-white/10 text-white font-semibold text-sm hover:bg-brand-red transition-colors">All</button>
            <button className="px-4 py-2 rounded bg-white/5 text-brand-cream/60 font-semibold text-sm hover:bg-white/10 transition-colors">Frontend</button>
            <button className="px-4 py-2 rounded bg-white/5 text-brand-cream/60 font-semibold text-sm hover:bg-white/10 transition-colors">Architecture</button>
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sessions.map((session) => (
            <Link to={session.link} key={session.id} className="flex flex-col bg-[#001826] border border-white/5 rounded-xl overflow-hidden group hover:border-brand-red/50 hover:shadow-2xl hover:shadow-brand-red/5 transition-all duration-300 transform hover:-translate-y-1">
              {/* Course Thumbnail */}
              <div className="h-48 w-full bg-[#00121D] relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-[#003049] to-brand-red/20 opacity-80 group-hover:opacity-100 transition-opacity"></div>
                <img src="/icon%20white-01.svg" className="h-20 opacity-20 group-hover:scale-110 transition-transform duration-500" alt="Course Graphic" />
                <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm text-white text-xs font-bold px-2 py-1 rounded flex items-center gap-1">
                  <PlayCircle size={12} /> {session.duration}
                </div>
              </div>

              {/* Course Info */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex flex-wrap gap-2 mb-4">
                  {session.tags?.map((tag, idx) => (
                    <span key={idx} className="text-[10px] font-bold uppercase tracking-wider text-brand-red bg-brand-red/10 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 leading-tight group-hover:text-brand-red transition-colors line-clamp-2">
                  {session.title}
                </h3>
                
                <p className="text-sm text-brand-cream/60 mb-6 flex-1 line-clamp-3 leading-relaxed">
                  {session.description}
                </p>
                
                {/* Course Metadata Footer */}
                <div className="pt-4 border-t border-white/5 mt-auto flex items-center justify-between text-xs font-semibold text-brand-cream/50">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1.5"><User size={14} className="text-brand-cream/40" /> {session.instructor}</span>
                    <span className="flex items-center gap-1.5"><BarChart size={14} className="text-brand-cream/40" /> {session.level}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full bg-[#00121D] py-12 border-t border-white/5 mt-12">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src="/icon%20red-01.svg" alt="CAT Icon" className="h-8" />
            <span className="text-brand-cream/40 text-sm font-semibold uppercase tracking-widest">© 2026 CAT Frontend Platform</span>
          </div>
          <div className="flex gap-6 text-sm text-brand-cream/50 font-semibold">
            <a href="#" className="hover:text-brand-red transition-colors">Terms</a>
            <a href="#" className="hover:text-brand-red transition-colors">Privacy</a>
            <a href="#" className="hover:text-brand-red transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;

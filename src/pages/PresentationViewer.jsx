import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, X, List } from 'lucide-react';
import { SlideRenderer } from '../components/slides/SlideRenderer';

// We dynamically import the session data based on the ID.
// In a real app with many sessions, you might fetch this from an API.
import { session1Slides } from '../data/session-1';

const sessionDataMap = {
  'session-1': session1Slides,
};

function PresentationViewer() {
  const { sessionId, slideIndex } = useParams();
  const navigate = useNavigate();
  
  const slides = sessionDataMap[sessionId] || [];
  const currentIndex = slideIndex ? parseInt(slideIndex, 10) : 0;
  
  const goToSlide = useCallback((index) => {
    if (index >= 0 && index < slides.length) {
      navigate(`/sessions/${sessionId}/${index}`);
    }
  }, [navigate, sessionId, slides.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        goToSlide(currentIndex + 1);
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        goToSlide(currentIndex - 1);
      } else if (e.key === 'Escape') {
        navigate('/');
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, goToSlide, navigate]);

  // Touch swipe support
  const [touchStart, setTouchStart] = useState(0);
  const handleTouchStart = (e) => setTouchStart(e.touches[0].clientX);
  const handleTouchEnd = (e) => {
    const touchEnd = e.changedTouches[0].clientX;
    if (touchStart - touchEnd > 50) goToSlide(currentIndex + 1);
    if (touchStart - touchEnd < -50) goToSlide(currentIndex - 1);
  };

  if (!slides || slides.length === 0) {
    return (
      <div className="h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">Session Not Found</h1>
        <button onClick={() => navigate('/')} className="text-brand-red border border-brand-red px-4 py-2 rounded">Return Home</button>
      </div>
    );
  }

  const currentSlide = slides[currentIndex];
  const progressPercent = ((currentIndex + 1) / slides.length) * 100;

  return (
    <div 
      className="fixed inset-0 bg-brand-blue overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Progress Bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-white/10 z-50">
        <div 
          className="h-full bg-gradient-to-r from-brand-red to-blue-500 transition-all duration-300 ease-out"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* Header controls */}
      <div className="absolute top-4 right-4 z-50 flex gap-2">
        <button 
          onClick={() => navigate('/')}
          className="p-2 bg-white/5 hover:bg-white/10 rounded-full border border-white/10 transition-colors"
          title="Exit Presentation (Esc)"
        >
          <X size={20} />
        </button>
      </div>

      {/* Slide Rendering */}
      <div className="w-full h-full relative">
        <SlideRenderer slide={currentSlide} index={currentIndex} total={slides.length} />
      </div>

      {/* Canva-style Scrubber - Bottom Center */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4 bg-black/40 backdrop-blur-xl border border-white/10 px-6 py-3 rounded-full shadow-2xl transition-all hover:bg-black/60">
        <span className="text-xs font-bold text-brand-cream/70 whitespace-nowrap w-12 text-right">
          {currentIndex + 1} / {slides.length}
        </span>
        
        <div className="w-48 md:w-72 flex items-center group relative">
          <input 
            type="range" 
            min="0" 
            max={slides.length - 1} 
            value={currentIndex}
            onChange={(e) => goToSlide(Number(e.target.value))}
            className="w-full h-1 bg-white/20 rounded-full appearance-none cursor-pointer accent-white hover:accent-brand-red outline-none transition-all duration-300 ease-in-out"
            title="Scrub slides"
            style={{ 
              background: `linear-gradient(to right, white 0%, white ${((currentIndex) / (slides.length - 1)) * 100}%, rgba(255,255,255,0.2) ${((currentIndex) / (slides.length - 1)) * 100}%, rgba(255,255,255,0.2) 100%)` 
            }}
          />
          {/* Floating Tooltip previewing slide */}
          <div className="absolute -top-14 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:-translate-y-2 bg-[#001018] border border-white/20 text-white text-xs font-bold py-2 px-4 rounded-xl pointer-events-none shadow-[0_10px_30px_rgba(0,0,0,0.8)] whitespace-nowrap z-50">
            {slides[currentIndex]?.title ? slides[currentIndex].title.replace(/<[^>]*>?/gm, '') : `Slide ${currentIndex + 1}`}
          </div>
        </div>
      </div>

      {/* Navigation Controls - Bottom Right */}
      <div className="absolute bottom-8 right-8 z-50 flex gap-4">
        <button 
          onClick={() => goToSlide(currentIndex - 1)}
          disabled={currentIndex === 0}
          className="p-3 bg-white/5 hover:bg-white/10 disabled:opacity-30 disabled:hover:bg-white/5 rounded-full border border-white/10 transition-colors backdrop-blur-md"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={() => goToSlide(currentIndex + 1)}
          disabled={currentIndex === slides.length - 1}
          className="p-3 bg-white/5 hover:bg-white/10 disabled:opacity-30 disabled:hover:bg-white/5 rounded-full border border-white/10 transition-colors backdrop-blur-md"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}

export default PresentationViewer;

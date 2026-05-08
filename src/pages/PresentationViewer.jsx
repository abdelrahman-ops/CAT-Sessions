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

      {/* Navigation Controls */}
      <div className="absolute bottom-8 right-8 z-50 flex gap-3">
        <button 
          onClick={() => goToSlide(currentIndex - 1)}
          disabled={currentIndex === 0}
          className="p-3 bg-white/5 hover:bg-white/10 disabled:opacity-30 disabled:hover:bg-white/5 rounded-full border border-white/10 transition-colors backdrop-blur-md"
          title="Previous Slide"
        >
          <ChevronLeft size={24} className="text-white" />
        </button>
        
        {/* Slide Selector */}
        <div className="relative flex items-center bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-5 hover:bg-white/10 transition-colors" title="Jump to Slide">
          <select 
            value={currentIndex}
            onChange={(e) => goToSlide(Number(e.target.value))}
            className="appearance-none bg-transparent text-white font-bold text-sm outline-none cursor-pointer pr-6 w-full max-w-[150px] truncate"
          >
            {slides.map((s, i) => {
              // Create a short label for the option
              let label = s.title || s.part || `Slide ${i + 1}`;
              // Strip HTML tags if the title has spans (like gradient text)
              label = label.replace(/<[^>]*>?/gm, '');
              
              return (
                <option key={i} value={i} className="bg-[#001018] text-white">
                  {String(i + 1).padStart(2, '0')} - {label}
                </option>
              );
            })}
          </select>
          <div className="absolute right-4 pointer-events-none text-brand-red">
            <List size={16} />
          </div>
        </div>

        <button 
          onClick={() => goToSlide(currentIndex + 1)}
          disabled={currentIndex === slides.length - 1}
          className="p-3 bg-white/5 hover:bg-white/10 disabled:opacity-30 disabled:hover:bg-white/5 rounded-full border border-white/10 transition-colors backdrop-blur-md"
          title="Next Slide"
        >
          <ChevronRight size={24} className="text-white" />
        </button>
      </div>
    </div>
  );
}

export default PresentationViewer;

import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
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

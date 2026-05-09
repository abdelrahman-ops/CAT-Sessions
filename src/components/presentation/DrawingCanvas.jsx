import React from 'react';
import { Tldraw } from 'tldraw';
import 'tldraw/tldraw.css';

export const DrawingCanvas = ({ isDrawingMode }) => {
  return (
    <div 
      className={`absolute inset-0 z-40 transition-opacity duration-300 ${
        isDrawingMode ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
      style={{
        '--color-background': 'transparent',
      }}
    >
      <Tldraw 
        inferDarkMode
        className="w-full h-full"
      />
    </div>
  );
};

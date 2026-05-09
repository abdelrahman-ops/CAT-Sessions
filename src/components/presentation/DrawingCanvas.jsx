import React, { forwardRef, useImperativeHandle, useRef, useEffect } from 'react';
import { ReactSketchCanvas } from 'react-sketch-canvas';

export const DrawingCanvas = forwardRef(({ isDrawingMode, color, isEraser }, ref) => {
  const canvasRef = useRef(null);

  useImperativeHandle(ref, () => ({
    clearCanvas: () => {
      canvasRef.current?.clearCanvas();
    }
  }));

  useEffect(() => {
    if (canvasRef.current) {
      canvasRef.current.eraseMode(isEraser);
    }
  }, [isEraser]);

  return (
    <div 
      className={`absolute inset-0 z-40 transition-colors duration-300 ${
        isDrawingMode ? 'pointer-events-auto cursor-crosshair shadow-[inset_0_0_50px_rgba(185,32,37,0.1)]' : 'pointer-events-none'
      }`}
    >
      <ReactSketchCanvas
        ref={canvasRef}
        strokeWidth={isEraser ? 30 : 5}
        strokeColor={color}
        canvasColor="transparent"
        className="w-full h-full border-none"
        style={{ border: 'none', background: 'transparent' }}
      />
    </div>
  );
});

DrawingCanvas.displayName = 'DrawingCanvas';

import React, { useRef, useEffect, useState, forwardRef, useImperativeHandle } from 'react';

export const DrawingCanvas = forwardRef(({ isDrawingMode, color, isEraser }, ref) => {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const contextRef = useRef(null);

  useImperativeHandle(ref, () => ({
    clearCanvas: () => {
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');
      context.clearRect(0, 0, canvas.width, canvas.height);
    }
  }));

  useEffect(() => {
    const canvas = canvasRef.current;
    
    // Set actual size in memory (scaled to account for high DPI devices)
    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      canvas.width = window.innerWidth * 2;
      canvas.height = window.innerHeight * 2;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;

      const context = canvas.getContext('2d');
      context.scale(2, 2);
      context.lineCap = 'round';
      context.lineJoin = 'round';
      contextRef.current = context;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    return () => window.removeEventListener('resize', resizeCanvas);
  }, []);

  useEffect(() => {
    if (!contextRef.current) return;
    
    if (isEraser) {
      contextRef.current.globalCompositeOperation = 'destination-out';
      contextRef.current.lineWidth = 40; // Thicker line for eraser
    } else {
      contextRef.current.globalCompositeOperation = 'source-over';
      contextRef.current.strokeStyle = color;
      contextRef.current.lineWidth = 4;
    }
  }, [color, isEraser]);

  const startDrawing = ({ nativeEvent }) => {
    if (!isDrawingMode) return;
    
    // Support both mouse and touch events
    let clientX, clientY;
    if (nativeEvent.touches) {
      clientX = nativeEvent.touches[0].clientX;
      clientY = nativeEvent.touches[0].clientY;
    } else {
      clientX = nativeEvent.clientX;
      clientY = nativeEvent.clientY;
    }

    contextRef.current.beginPath();
    contextRef.current.moveTo(clientX, clientY);
    setIsDrawing(true);
  };

  const finishDrawing = () => {
    if (!isDrawingMode) return;
    contextRef.current.closePath();
    setIsDrawing(false);
  };

  const draw = ({ nativeEvent }) => {
    if (!isDrawing || !isDrawingMode) return;
    
    let clientX, clientY;
    if (nativeEvent.touches) {
      clientX = nativeEvent.touches[0].clientX;
      clientY = nativeEvent.touches[0].clientY;
      // Prevent scrolling when drawing on touch
      nativeEvent.preventDefault();
    } else {
      clientX = nativeEvent.clientX;
      clientY = nativeEvent.clientY;
    }

    contextRef.current.lineTo(clientX, clientY);
    contextRef.current.stroke();
  };

  return (
    <canvas
      ref={canvasRef}
      onPointerDown={startDrawing}
      onPointerUp={finishDrawing}
      onPointerMove={draw}
      onPointerLeave={finishDrawing}
      className={`absolute inset-0 z-40 transition-colors duration-300 ${
        isDrawingMode ? 'pointer-events-auto cursor-crosshair shadow-[inset_0_0_50px_rgba(185,32,37,0.1)]' : 'pointer-events-none'
      }`}
      style={{ touchAction: 'none' }}
    />
  );
});

DrawingCanvas.displayName = 'DrawingCanvas';

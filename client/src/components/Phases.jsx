import React, { useEffect, useRef } from 'react';

const CanvasComponent = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    // Draw half-circle bar
    ctx.beginPath();
    ctx.arc(width / 2, height, width / 2, Math.PI, 0, false);
    ctx.fillStyle = '#212f3c';
    ctx.fill();

    // Add emojis
    ctx.font = '30px Arial';
    ctx.fillText('😊', width / 4 - 15, height - 15);
    ctx.fillText('🌜', (3 * width) / 4 - 15, height - 15);
  }, []);

  return <canvas ref={canvasRef} width={450} height={225} />;
};

export default CanvasComponent;

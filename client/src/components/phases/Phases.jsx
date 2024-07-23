import { useEffect, useRef, useState } from 'react';
import { getCurrentTheme } from '../TimeTheme';

const CanvasComponent = ({ width = 550, height = 325 }) => {
    const theme = useState(getCurrentTheme());
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        canvas.width = width;
        canvas.height = height;

        const drawScene = () => {
            // Fill the canvas with the base color
            ctx.fillStyle = '#1f2937';
            ctx.fillRect(0, 0, width, height);

            const radius = (width / 2) * 0.9; // Reduce the radius by 10%
            ctx.beginPath();
            ctx.arc(width / 2, height, radius, Math.PI, 0, false);
            ctx.closePath();
            ctx.fillStyle = '#1f2937'; // Base color for the half-circle
            ctx.fill();

            // Outline the half-circle with a gradient or solid color
            ctx.lineWidth = 5; // Adjust the thickness of the border
            const edgeGradient = ctx.createLinearGradient(0, 0, width, 0);
            edgeGradient.addColorStop(0, 'rgba(255,255,255,0)'); // Start with transparent
            edgeGradient.addColorStop(0.5, '#ffffff'); // Solid color at the middle
            edgeGradient.addColorStop(1, 'rgba(255,255,255,0)'); // End with transparent
            ctx.strokeStyle = edgeGradient;
            ctx.stroke();

            // Get the current time
            const now = new Date();
            const hours = now.getHours();
            const minutes = now.getMinutes();
            const seconds = now.getSeconds();

            // Calculate the sun's position based on the time
            const totalMinutes = hours * 60 + minutes + seconds / 60;
            const sunX = (totalMinutes / 1440) * width; // 1440 = 24 * 60, total minutes in a day
            const sunY = height - 215; // Fixed vertical position

            // Calculate sun color based on its position
            let sunColor = 'yellow'; // Default sun color
            if (sunX <= width / 2) {
                // Morning to noon: Brighter yellow
                const brightness = Math.min(255, 200 + (sunX / (width / 2)) * 55);
                sunColor = `rgb(255, ${brightness}, 0)`;
            } else {
                // Noon to evening: Transition to orange
                const orangeShade = Math.min(255, ((sunX - width / 2) / (width / 2)) * 255);
                sunColor = `rgb(255, ${200 - orangeShade}, 0)`;
            }

            // Draw the sun with dynamic color
            ctx.beginPath();
            ctx.arc(sunX, sunY, 20, 0, 2 * Math.PI, false);
            ctx.fillStyle = sunColor;
            ctx.fill();
        };

        const animate = () => {
            drawScene();
            requestAnimationFrame(animate);
        };

        animate();
    }, [width, height]);

    return <canvas ref={canvasRef} width={450} height={225} style={{ border: '1px solid #1f2937', boxShadow: '5px 5px 15px rgba(0, 0, 0, 0.5)' }} />;
};

export default CanvasComponent;

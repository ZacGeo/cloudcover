import { useEffect, useRef, useState } from 'react';
import { getCurrentTheme } from '../usefulFunctions/TimeTheme';

const CanvasComponent = ({ width = 380, height = 200 }) => {
    const [theme] = useState(getCurrentTheme());
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        canvas.width = width;
        canvas.height = height;

        const drawScene = () => {
            // Fill the canvas with the base color
            ctx.fillStyle = theme.background;
            ctx.fillRect(0, 0, width, height);

            const radius = (width / 2) * 0.9; // Reduce the radius by 10%
            const centerX = width / 2;
            const centerY = height;

            // Draw the half-circle
            ctx.beginPath();
            ctx.arc(centerX, centerY, radius, Math.PI, 2 * Math.PI, false);
            ctx.closePath();
            ctx.fillStyle = theme.background; // Base color for the half-circle
            ctx.fill();

            // Outline the half-circle with a gradient or solid color
            ctx.lineWidth = 5; // Adjust the thickness of the border
            const edgeGradient = ctx.createLinearGradient(0, 0, width, 0);
            if(theme.background === 'beige') {
                edgeGradient.addColorStop(0, 'rgba(255,0,0,0)'); // Start with transparent
                edgeGradient.addColorStop(0.5, '#f0e68c'); // Solid color at the middle
                edgeGradient.addColorStop(1, 'rgba(255,0,0,0)'); // End with transparent
            }else{
                 edgeGradient.addColorStop(0, 'rgba(255,255,255,0)'); // Start with transparent
                 edgeGradient.addColorStop(0.5, '#ffffff'); // Solid color at the middle
                 edgeGradient.addColorStop(1, 'rgba(255,255,255,0)'); // End with transparent
            }
           
            ctx.strokeStyle = edgeGradient;
            ctx.stroke();

            // Get the current time
            const now = new Date();
            const hours = now.getHours();
            const minutes = now.getMinutes();
            const seconds = now.getSeconds();
            const totalMinutes = hours * 60 + minutes + seconds / 60;

            const drawSunOrMoon = (isSun, startHour, endHour) => {
                const totalStartMinutes = startHour * 60;
                const totalEndMinutes = endHour >= startHour ? endHour * 60 : (endHour + 24) * 60;

                // Calculate the fraction of time elapsed within the range
                const elapsedMinutes = totalMinutes - totalStartMinutes;
                const totalRangeMinutes = totalEndMinutes - totalStartMinutes;
                const timeFraction = (elapsedMinutes / totalRangeMinutes + 1) % 1;

                // Calculate the current angle
                const startAngle = -Math.PI ;
                const endAngle = 0;
                const currentAngle = startAngle + timeFraction * (endAngle - startAngle);

                // Calculate the coordinates
                const x = centerX + radius * Math.cos(currentAngle);
                const y = centerY + radius * Math.sin(currentAngle);

                return { x, y, timeFraction };
            };

            let isSunTime = hours >= 8 && hours < 21;
            let isMoonTime =  hours >= 21 || hours < 8;

            if (isSunTime) {
                // Draw the sun
                const { x: sunX, y: sunY, timeFraction } = drawSunOrMoon(true, 20, 9);

                // Calculate sun color transition from orange to yellow and back to orange
                let sunColor;
                if (timeFraction < 0.5) {
                    // From 8:00 PM to halfway to 9:00 AM
                    const rValue = 255;
                    const gValue = Math.floor(165 + timeFraction * 2 * 90);
                    const bValue = 0;
                    sunColor = `rgb(${rValue}, ${gValue}, ${bValue})`;
                } else {
                    const rValue = 255;
                    const gValue = Math.floor(255 - (timeFraction - 0.5) * 2 * 90);
                    const bValue = 0;
                    sunColor = `rgb(${rValue}, ${gValue}, ${bValue})`;
                }

                ctx.beginPath();
                ctx.arc(sunX, sunY, 20, 0, 2 * Math.PI, false);
                ctx.fillStyle = sunColor;
                ctx.fill();
            } else if (isMoonTime) {
                // Draw the moon
                const { x: moonX, y: moonY, timeFraction } = drawSunOrMoon(false, 9, 20);

                // Calculate moon color transition from grey to white and back to grey
                let moonColor;
                if (timeFraction < 0.5) {
                    // From 9:00 AM to halfway to 8:00 PM
                    const colorValue = Math.floor(128 + timeFraction * 2 * 127);
                    moonColor = `rgb(${colorValue}, ${colorValue}, ${colorValue})`;
                } else {
                    // From halfway to 8:00 PM to 8:00 PM
                    const colorValue = Math.floor(255 - (timeFraction - 0.5) * 2 * 127);
                    moonColor = `rgb(${colorValue}, ${colorValue}, ${colorValue})`;
                }

                ctx.beginPath();
                ctx.arc(moonX, moonY, 20, 0, 2 * Math.PI, false);
                ctx.fillStyle = moonColor;
                ctx.fill();
            }
        };
        drawScene();
        const interval = setInterval(drawScene, 1000);
        return () => clearInterval(interval);
    }, [canvasRef, width, height]);

    return (
        <div className="mt-5">
            <canvas
            ref={canvasRef}
            width={width}
            height={height}
            style={{ border: 'none', borderRadius: '10px' }}
        />
        </div>
        
    );
};

export default CanvasComponent;

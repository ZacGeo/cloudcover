// AnimationComponent.js
import React, { useEffect } from 'react';

 export default Animation = ({ onEnd }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onEnd();
        }, 2000); // Match the duration of the CSS animation
        return () => clearTimeout(timer);
    }, [onEnd]);

    return (
        <div className="flex items-center justify-center min-h-screen">
            <h1 className="text-8xl fade-in">Loading...</h1>
        </div>
    );
};


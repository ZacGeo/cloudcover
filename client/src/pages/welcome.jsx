import Animation from '../components/Eve';
import Sun from '../components/Sun';
import React, { useState, useEffect } from 'react';

export const Welcome = () => {
    const [showWelcome, setShowWelcome] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowWelcome(true);
        }, 2000); // Match the duration of the animation
        return () => clearTimeout(timer);
    }, []);


    return (
        <>
           {showWelcome ? (
             <div className="flex flex-col items-center justify-start min-h-screen pt-32  bg-blue-200">
                <Sun className="absolute top-0 left-0 w-full h-full" />
                <div className="relative z-10">
                    <h1 className="text-8xl mb-12 font-bold">CLOUCOVER</h1>
                    <p className="mt-12 font-semibold ml-12">Enter the location that you wish to see the weather</p>
                    <input type="text" className="mt-6 ml-12 p-2 border border-gray-300 rounded w-1/2" placeholder="Enter some text" />
                </div>
             </div>
            ) : (
                <Animation onEnd={() => setShowWelcome(true)} />
            )}
        </>
    );    
}

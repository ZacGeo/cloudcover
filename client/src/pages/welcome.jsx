import {Animation} from '../components/eve/Eve';
import { getCurrentTheme, welcomeTimeTheme } from '../components/TimeTheme';
import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from "react-router-dom";




export const Welcome = () => {
    const [showWelcome, setShowWelcome] = useState(false);
    const [location, setLocation] = useState('');
    const [theme] = useState(getCurrentTheme());
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowWelcome(true);
        }, 4000); // Match the duration of the animation
        return () => clearTimeout(timer);
    }, []);

    const handleLocationChange = (event) => {
        setLocation(event.target.value);
    };

    
    return (
        <>
           {showWelcome ? (
             <div style={{ backgroundColor: theme.background, color: theme.color }} className="flex flex-col items-center justify-start min-h-screen pt-32 h-screen">
                 {welcomeTimeTheme()}
                <div className="relative z-10">
                    <h1 className="text-8xl mb-12 font-bold">CLOUDCOVER</h1>
                    <p className="mt-12 font-semibold ml-12">Enter the location that you wish to see the weather</p>
                    <input 
                        type="text" 
                        className="mt-6 ml-12 p-2 border border-gray-300 rounded w-1/2" 
                        placeholder="Enter some text" 
                        value={location} 
                        onChange={handleLocationChange} 
                    />
                    <RouterLink to="/information"> Submit </RouterLink>
                </div>
             </div>
            ) : (
                <Animation onEnd={() => setShowWelcome(true)} />
            )}
        </>
    );    
}
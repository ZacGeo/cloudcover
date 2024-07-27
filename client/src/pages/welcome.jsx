import {Animation} from '../components/eve/Eve';
import { getCurrentTheme, welcomeTimeTheme } from '../components/usefulFunctions/TimeTheme';
import React, { useState, useEffect } from 'react';
import { Link as RouterLink, useNavigate } from "react-router-dom";




export const Welcome = () => {
    const [showWelcome, setShowWelcome] = useState(false);
    const [location, setLocation] = useState('');
    const [theme] = useState(getCurrentTheme());


    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowWelcome(true);
        }, 4000); // Match the duration of the animation
        return () => clearTimeout(timer);
    }, []);

    const handleLocationChange = (event) => {
        setLocation(event.target.value);
    };

    const handleSubmit = async () => {
        try {
            const response = await fetch(`http://localhost:5000/api/weather?location=${location}`);
            const data = await response.json();
            setWeatherData(data);
            navigate('/information');
        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
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
                        className="mt-6 ml-12 p-2 border text-black rounded w-1/2" 
                        placeholder="Enter some text" 
                        value={location} 
                        onChange={handleLocationChange} 
                    />
                     <button onClick={handleSubmit}>Submit</button>
                </div>
             </div>
            ) : (
                <Animation onEnd={() => setShowWelcome(true)} />
            )}
        </>
    );    
}
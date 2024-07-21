import {Animation} from '../components/Eve';
import Sun from '../components/Sun';
import React, { useState, useEffect } from 'react';
import { Information } from './information';





export const Welcome = () => {
    const [showWelcome, setShowWelcome] = useState(false);
    const [location, setLocation] = useState('');
    const [goToInfoPage, setGoToInfoPage] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowWelcome(true);
        }, 4000); // Match the duration of the animation
        return () => clearTimeout(timer);
    }, []);

    const handleLocationChange = (event) => {
        setLocation(event.target.value);
    };

    const handleLocationSubmit = () => {
        setGoToInfoPage(true);
    };

    if (goToInfoPage) {
        return <Information location={location} />; // Pass the location to the InformationPage component
    }

    return (
        <>
           {showWelcome ? (
             <div className="flex flex-col items-center justify-start min-h-screen pt-32  bg-blue-200">
                <Sun className="absolute top-0 left-0 w-full h-full" />
                <div className="relative z-10">
                    <h1 className="text-8xl mb-12 font-bold">CLOUCOVER</h1>
                    <p className="mt-12 font-semibold ml-12">Enter the location that you wish to see the weather</p>
                    <input 
                        type="text" 
                        className="mt-6 ml-12 p-2 border border-gray-300 rounded w-1/2" 
                        placeholder="Enter some text" 
                        value={location} 
                        onChange={handleLocationChange} 
                    />
                    <button onClick={handleLocationSubmit} className='text-white ml-5'>Submit</button>
                </div>
             </div>
            ) : (
                <Animation onEnd={() => setShowWelcome(true)} />
            )}
        </>
    );    
}
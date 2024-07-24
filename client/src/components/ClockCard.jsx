import { useState, useEffect } from 'react';
import { getCurrentTheme } from './TimeTheme';

export default function ClockCard() {
    const [theme] = useState(getCurrentTheme());
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000); // Update time every second

        return () => clearInterval(intervalId); // Cleanup interval on component unmount
    }, []);

    return (
        <div style={{ backgroundColor: theme.background, color: theme.color }} >
            <div class="flex items-center justify-center ">
                <div className= "flex flex-col justify-center items-center bg-gray-800 text-white  p-10 w-150 " >
                  <h1 className='text-4xl font-extrabold ' style={{fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif"}}>{time.toLocaleTimeString()}</h1>
                  <h4 className='text-xl font-extrabold' style={{ fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif" }}>
                     {time.toLocaleDateString('en-US', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}
                  </h4>
                </div>    
            </div>
        </div>
    );
}
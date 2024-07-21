import { getCurrentTheme } from '../components/TimeTheme';
import  { useState, useEffect } from 'react';



export  function Information() {
    const [theme, setTheme] = useState(getCurrentTheme());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTheme(getCurrentTheme());
        }, 60000); // Update theme every minute

        return () => clearInterval(intervalId); // Cleanup interval on component unmount
    }, []);
    
    return (
        <div style={{ backgroundColor: theme.background, color: theme.color }} className="text-xl">
            <p>INFORMATION</p>
        </div>
    );
}
import { getCurrentTheme } from '../components/TimeTheme';
import  { useState, useEffect } from 'react';
import   CanvasComponent  from '../components/phases/Phases';


export  function Information() {
    const [theme, setTheme] = useState(getCurrentTheme());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTheme(getCurrentTheme());
        }, 60000); // Update theme every minute

        return () => clearInterval(intervalId); // Cleanup interval on component unmount
    }, []);
    
    return (
        <div style={{ backgroundColor: theme.background, color: theme.color }} className="h-screen text-2xl">
            <div class="flex items-center justify-center">
              <div className= "flex flex-col justify-center items-center bg-gray-800 text-white rounded-lg shadow-lg p-10 w-150" >
                  <CanvasComponent />
                  <p>INFORMATION</p>
              </div>
            </div>
            
        </div>
    );
}
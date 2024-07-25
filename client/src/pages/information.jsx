import { getCurrentTheme , getInformationTheme} from '../components/TimeTheme';
import  { useState, useEffect } from 'react';
import   CanvasComponent  from '../components/phases/Phases';
import ClockCard from '../components/ClockCard';
import {Hot, HotNight} from '../components/instructions/TooHot';
import {Cold, ColdNight} from '../components/instructions/TooCold';


export  function Information() {
    const [theme, setTheme] = useState(getCurrentTheme());
    const [infoTheme, setInfoTheme] = useState(getInformationTheme());
    
    

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTheme(getCurrentTheme());
            setInfoTheme(getInformationTheme());
        }, 60000); // Update theme every minute
         
        return () => clearInterval(intervalId); // Cleanup interval on component unmount
    }, []);
    
    return (
        <div style={{ backgroundColor: theme.background, color: theme.color }} className="h-screen text-2xl">
            <div class="flex items-center justify-center">
              <div className= "flex flex-col justify-center items-center rounded-lg shadow-lg p-10 w-150" style={{ backgroundColor: infoTheme.background, color: infoTheme.color}}>
                  <CanvasComponent />
                  <div style={{
                    position: 'absolute',
                    top: '30%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)'
                   }}><ClockCard />
                   
                   </div>
                   {/*<HotNight />*/}
                   {/*<Cold />*/}
              </div>
            </div>
            
        </div>
    );
}
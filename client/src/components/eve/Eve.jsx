// AnimationComponent.js
import { useEffect, useState } from 'react';
import './style.css';
import { getCurrentTheme } from '../usefulFunctions/TimeTheme'

 export const Animation = ({ onEnd }) => {
  const [theme] = useState(getCurrentTheme());

    useEffect(() => {
        const timer = setTimeout(() => {
            onEnd();
        }, 8000); // Match the duration of the CSS animation
        return () => clearTimeout(timer);
    }, [onEnd]);

    return (
       <div style={{ backgroundColor: theme.background, color: theme.color }} className='flex flex-col items-center justify-start min-h-screen pt-32 h-screen'>

         <div className="loader mt-5">
          <div className="modelViewPort">
            <div className="eva">
             <div className="head">
               <div className="eyeChamber">
                <div className="eye"></div>
                <div className="eye"></div>
               </div>
             </div>
             <div className="body">
             <div className="hand"></div>
             <div className="hand"></div>
             <div className="scannerThing"></div>
             <div className="scannerOrigin"></div>
            </div>
          </div>
         </div>
         <p className='text-3xl mt-12 text-{color} font-bold ml-12'>Hello Human</p>
        </div>

       </div>
       

    );
};


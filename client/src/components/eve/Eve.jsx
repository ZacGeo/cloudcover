// AnimationComponent.js
import React, { useEffect, useState } from 'react';
import './style.css';
import { getCurrentTheme } from '../TimeTheme'

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

         <div class="loader" className='mr-5'>
          <div class="modelViewPort">
            <div class="eva">
             <div class="head">
               <div class="eyeChamber">
                <div class="eye"></div>
                <div class="eye"></div>
               </div>
             </div>
             <div class="body">
             <div class="hand"></div>
             <div class="hand"></div>
             <div class="scannerThing"></div>
             <div class="scannerOrigin"></div>
            </div>
          </div>
         </div>
         <p className='text-3xl mt-12 text-black font-bold ml-12'>Hello Human</p>
        </div>

       </div>
       

    );
};


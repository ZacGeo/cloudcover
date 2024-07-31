import {getCurrentTheme, getInformationTheme,} from "../components/usefulFunctions/TimeTheme";
import { useState, useEffect, useContext } from "react";
import CanvasComponent from "../components/phases/Phases";
import ClockCard from "../components/usefulFunctions/ClockCard";
import { Hot, HotNight } from "../components/instructions/TooHot";
import { Cold, ColdNight } from "../components/instructions/TooCold";
import { WeatherContext } from "../components/context/Context";
import WeatherCard from "../components/other/other";
import { fetchData } from "./welcome";
import { DataStore } from "../api";
import SideBar from "../components/usefulFunctions/SideBar";
import Weather_Overview from "../components/phases/Weather_Overview";


export function Information() {
  const [theme, setTheme] = useState(getCurrentTheme());
  const [infoTheme, setInfoTheme] = useState(getInformationTheme());
  const [loaded, setLoaded] = useState(false);
  const { weatherData, setWeatherData } = useContext(WeatherContext);
  console.log(weatherData);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTheme(getCurrentTheme());
      setInfoTheme(getInformationTheme());
    }, 600000); // Update theme every 10 minutes

    async function load() {
      if(!weatherData || !weatherData.hourly) {
        fetchData(await DataStore.get("location") || "Athens").then(weatherJSON => {
          setWeatherData(weatherJSON);
          console.log(weatherJSON);
          setLoaded(true);
        });
      } else {
        setLoaded(true);
      }
    };

    load();

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  return loaded ? <div
  style={{ backgroundColor: theme.background, color: theme.color }}
  className="h-screen text-2xl"
>
  <div className=" font-roboto m-0 p-0 ">
   
      <div className="container mx-auto p-4 h-screen flex"> 
        <SideBar /> 
       
        <div className="flex-col justify-between "> 
           
             {/* <ClockCard /> */}
             <Weather_Overview />
             <WeatherCard weatherData={weatherData} />
        </div> 
       
      {/* <CanvasComponent /> */}
      </div>
      {/*<HotNight />*/}
      {/*<Cold />*/}
      
    </div>
  
</div> : <></>;
}

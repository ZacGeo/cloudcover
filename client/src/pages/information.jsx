import {
  getCurrentTheme,
  getInformationTheme,
} from "../components/usefulFunctions/TimeTheme";
import { useState, useEffect, useContext } from "react";
import CanvasComponent from "../components/phases/Phases";
import ClockCard from "../components/usefulFunctions/ClockCard";
import { Hot, HotNight } from "../components/instructions/TooHot";
import { Cold, ColdNight } from "../components/instructions/TooCold";
import { WeatherContext } from "../components/context/Context";
import WeatherCard from "../components/other/other";
import { fetchData } from "./welcome";
import { DataStore } from "../api";

export function Information() {
  const [theme, setTheme] = useState(getCurrentTheme());
  const [infoTheme, setInfoTheme] = useState(getInformationTheme());
  const [loaded, setLoaded] = useState(false);
  const { weatherData, setWeatherData } = useContext(WeatherContext);

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
  <div className="flex items-center justify-center">
    <div
      className="flex flex-row justify-between items-center rounded-lg shadow-lg p-10 w-[100%]"
      style={{
        backgroundColor: infoTheme.background,
        color: infoTheme.color,
      }}
    >
      <div className="flex flex-col gap-32">
        <div className="flex justify-between">
        <h1 className='text-4xl font-extrabold ' style={{fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif"}}>{weatherData.locationData}</h1>
          <ClockCard />
        </div>
      <CanvasComponent />
      </div>
      <div
        style={{
          position: "absolute",
          top: "30%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
      </div>
      {/*<HotNight />*/}
      {/*<Cold />*/}
      <WeatherCard weatherData={weatherData}/>
    </div>
  </div>
</div> : <></>;
}

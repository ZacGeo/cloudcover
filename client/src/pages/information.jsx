import { getCurrentTheme} from "../components/usefulFunctions/TimeTheme";
import { useState, useEffect, useContext } from "react";
import CanvasComponent from "../components/phases/Phases";
import { WeatherContext } from "../components/context/Context";
import WeatherCard from "../components/other/other";
import { fetchData } from "./welcome";
import { DataStore } from "../api";
import SideBar from "../components/usefulFunctions/SideBar";
import SearchBar from "../components/usefulFunctions/searchBar";
import Weather_Overview from "../components/phases/Weather_Overview";
import Forecast from "../components/phases/Forecast";
import Instruction from "../components/instructions/instruction";


export function Information() {
  const [theme, setTheme] = useState(getCurrentTheme());
  const [loaded, setLoaded] = useState(false);
  const { weatherData, setWeatherData } = useContext(WeatherContext);
  console.log(weatherData);

  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTheme(getCurrentTheme());
    }, 600000); // Update theme every 10 minutes

    async function load() {
      if (!weatherData || !weatherData.hourly) {
        fetchData((await DataStore.get("location")) || "Athens").then(
          (weatherJSON) => {
            setWeatherData(weatherJSON);
            console.log(weatherJSON);
            setLoaded(true);
          }
        );
      } else {
        setLoaded(true);
      }
    }

    load();

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  return loaded ? (
    <div
      style={{ backgroundColor: theme.background, color: theme.color }}
      className="h-screen text-2xl "
    >
      <div className=" font-roboto m-0 p-0 gap-4 ">
        <div className="container mx-auto p-4 h-screen flex ">
          
          <SideBar />
          
          <div className="flex-col justify-between gap-2 self-start ">
            <SearchBar onLocation={({ data, location }) => {
              DataStore.set("location", location);
              setWeatherData(data);
            }} />
            <Weather_Overview /> 
              <Instruction weatherData={weatherData}/>
            <WeatherCard weatherData={weatherData} className="mt-12 " />
          </div>
          <div className="flex-col self-start ml-12">
            <Forecast weatherData={weatherData} />
            <CanvasComponent />  
          </div>
        </div>
       
      </div>
    </div>
  ) : (
    <></>
  );
}

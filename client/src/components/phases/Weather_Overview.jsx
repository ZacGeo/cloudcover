import ClockCard from "../usefulFunctions/ClockCard";
import { WeatherContext } from '../context/Context';
import { useContext } from 'react';
import { getCurrentTheme } from "../usefulFunctions/TimeTheme";
export default function Weather_Overview() {
  const theme = getCurrentTheme();
  const { weatherData } = useContext(WeatherContext);

  return (
    <div className="rounded-lg p-4 flex gap-4 " style={{ color: theme.color2}}> 
      <div className="flex-col items-center justify-between">
        <h1 className="text-4xl font-bold">{weatherData.locationData}</h1>
        <div className="text-8xl font-bold">31°</div>
        <div>Chance of rain: 0%</div>
      </div>
      <ClockCard />
      {/* <div className="relative rounded-full w-32 h-32 bg-gradient-to-r from-yellow-500 to-orange-300 m-auto"></div>  */}
      <div className="mt-4 relative h-28 ">
          <span className="sun sunshine"></span>
          <span className="sun"></span>
      </div>
      {/* <div className="relative w-32 h-32 rounded-full bg-gray-400 z-1 left-8 top-4 shadow-md">
        <div className="absolute w-5 h-5 rounded-full bg-gray-500 z-1 left-5 top-8 shadow-md"></div>
        <div className="absolute w-8 h-8 rounded-full bg-gray-500 z-1 left-10 top-16 shadow-md"></div>
      </div> */}

    </div>
  );
}

import { WeatherContext } from '../context/Context';
import { useContext } from 'react';
import { getCurrentTheme } from "../usefulFunctions/TimeTheme";

export default function Weather_Overview() {
  const theme = getCurrentTheme();
  const { weatherData } = useContext(WeatherContext);

  // Get the current date and time
  const currentTime = new Date();
  const currentHour = currentTime.getHours();

  // Find the closest time index in the hourly data
  const currentHourIndex = weatherData.hourly.time.findIndex(time => time.startsWith(currentTime.toISOString().slice(0, 13)));

  // Determine if it is day (6 AM to 9 PM) or night (9 PM to 6 AM)
  const isDayTime = currentHour >= 6 && currentHour < 21;

  return (
    <div className="rounded-lg p-4 flex" style={{ color: theme.color2 }}>
      <div className="flex-col items-center justify-between">
        <h1 className="text-4xl font-bold">{weatherData.locationData}</h1>
        <div className="text-8xl font-bold">{weatherData.hourly.temperature_2m[currentHourIndex]}°</div>
        <div>Chance of rain: 0%</div>
      </div>
      <div className="mt-4 relative h-28 left-12">
        {isDayTime ? (
          <>
            <span className="sun sunshine"></span>
            <span className="sun"></span>
          </>
        ) : (
          <div className="relative w-32 h-32 rounded-full bg-gray-400 z-1 top-4 shadow-md">
            <div className="absolute w-5 h-5 rounded-full bg-gray-500 z-1 left-5 top-8 shadow-md"></div>
            <div className="absolute w-8 h-8 rounded-full bg-gray-500 z-1 left-10 top-16 shadow-md"></div>
          </div>
        )}
      </div>
    </div>
  );
}

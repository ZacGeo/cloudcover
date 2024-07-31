import ClockCard from "../usefulFunctions/ClockCard";
import { WeatherContext } from '../context/Context';
import { useContext } from 'react';

export default function Weather_Overview() {
  const { weatherData } = useContext(WeatherContext);

  return (
    <div className="rounded-lg p-6 flex gap-4 ">
      <div className="flex-col items-center justify-between">
        <h1 className="text-4xl font-bold">{weatherData.locationData}</h1>
        <div className="text-8xl font-bold">31°</div>
        <div>Chance of rain: 0%</div>
      </div>
      <ClockCard />
    </div>
  );
}

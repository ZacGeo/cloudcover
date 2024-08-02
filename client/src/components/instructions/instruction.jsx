import {Hot, HotNight} from './TooHot.jsx';
import {Cold, ColdNight} from './TooCold.jsx';
import  {Rain, RainNight} from './Rain.jsx';
import {Snow, SnowNight} from './Snow.jsx';
import  {Thunderstorm, ThunderstormNight} from './Thunderstorm.jsx'; 

export default function Instruction({weatherData}) {

    // Get the current date and time
  const currentTime = new Date().toISOString();
  // Find the closest time index in the hourly data
  const currentHourIndex = weatherData.hourly.time.findIndex(time => time.startsWith(currentTime.slice(0, 13)));
  // Extract the current hourly data
  const currentHourlyData = {
    temperature2m: weatherData.hourly.temperature_2m[currentHourIndex],
    windSpeed10m: weatherData.hourly.wind_speed_10m[currentHourIndex],
    cloudCover: weatherData.hourly.cloud_cover[currentHourIndex],
    visibility: weatherData.hourly.visibility[currentHourIndex],
  };
};
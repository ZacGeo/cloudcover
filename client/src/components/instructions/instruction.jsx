import {Hot, HotNight} from './TooHot.jsx';
import {Cold, ColdNight} from './TooCold.jsx';
import {Rain, RainNight} from './Rain.jsx';
import {Snow, SnowNight} from './Snow.jsx';
import {Thunderstorm, ThunderstormNight} from './Thunderstorm.jsx'; 
import {Fog, FogNight} from './Fog.jsx';
import {Good, GoodNight} from './Good.jsx';

export default function Instruction({weatherData}) {

  // Get the current date and time
  const currentTime = new Date();
  const currentHour = currentTime.getHours();
  const isNight = currentHour >= 18 || currentHour < 6;

  // Find the closest time index in the hourly data
  const currentHourIndex = weatherData.hourly.time.findIndex(time => time.startsWith(currentTime.toISOString().slice(0, 13)));
  
  if (currentHourIndex === -1) {
    return <div>No weather data available for the current hour.</div>;
  }

  // Extract the current hourly data
  const currentHourlyData = {
    temperature2m: weatherData.hourly.temperature_2m[currentHourIndex],
    
    windSpeed10m: weatherData.hourly.wind_speed_10m[currentHourIndex],
    cloudCover: weatherData.hourly.cloud_cover[currentHourIndex],
    visibility: weatherData.hourly.visibility[currentHourIndex],
    uv_Index: weatherData.daily.uv_index_max[0],
    rain_sum: weatherData.daily.rain_sum[0],
    snowfall_sum: weatherData.daily.snowfall_sum[0]
  };
  
  // Determine the appropriate instruction based on the weather data
  if (currentHourlyData.temperature2m > 30) {
    return isNight ? <HotNight /> : <Hot />;
  } else if (currentHourlyData.temperature2m < 0) {
    return isNight ? <ColdNight /> : <Cold />;
  } else if (currentHourlyData.rain_sum > 0) {
    return isNight ? <RainNight /> : <Rain />;
  } else if (currentHourlyData.snowfall_sum > 0) {
    return isNight ? <SnowNight /> : <Snow />;
  } else if (currentHourlyData.windSpeed10m > 15) {
    return isNight ? <ThunderstormNight /> : <Thunderstorm />;
  } else if (currentHourlyData.visibility < 500) {
    return isNight ? <FogNight /> : <Fog />;
  } else {
    return isNight ? <GoodNight /> : <Good />;;
  }
};

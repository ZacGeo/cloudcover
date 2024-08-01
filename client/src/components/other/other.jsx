import { getCurrentTheme } from "../usefulFunctions/TimeTheme";


const WeatherCard = ({ weatherData }) => {
  const theme = getCurrentTheme();


  if (!weatherData) {
    return <div>Loading...</div>;
  }

  
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

  // Extract the daily data for today
  const currentDayIndex = weatherData.daily.time.findIndex(time => time.startsWith(currentTime.slice(0, 10)));
  const currentDailyData = {
    uvIndexMax: weatherData.daily.uv_index_max[currentDayIndex],
  };

  return (
    <div className=" rounded-lg shadow-lg p-6 flex justify-between gap-4 mt-3 " style={{background: theme.secondary, color: theme.color}}>
      <div className="text-center">
        <div className="text-xl font-semibold">Real Feel</div>
        <div className="text-2xl font-bold">{currentHourlyData.temperature2m}°C</div>
      </div>
      
      <div className="text-center">
        <div className="text-xl font-semibold">Wind</div>
        <div className="text-2xl font-bold">{currentHourlyData.windSpeed10m} km/h</div>
      </div>
      <div className="text-center">
        <div className="text-xl font-semibold">Chance of rain</div>
        <div className="text-2xl font-bold">0%</div> {/* Assuming no rain chance data provided */}
      </div>
      <div className="text-center">
        <div className="text-xl font-semibold">UV Index</div>
        <div className="text-2xl font-bold">{currentDailyData.uvIndexMax}</div>
      </div>
    </div>
  );
};

export default WeatherCard;

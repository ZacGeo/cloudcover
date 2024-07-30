const WeatherCard = ({ weatherData }) => {
  if (!weatherData) {
      return <div>Loading...</div>;
  }

  // Get the current date and time
  const currentTime = new Date().toISOString();

  // Find the closest time index in the hourly data
  const currentHourIndex = weatherData.hourly.time.findIndex(time => time.startsWith(currentTime.slice(0, 13)));

  // Extract the current hourly data
  const currentHourlyData = {
      time: weatherData.hourly.time[currentHourIndex],
      temperature2m: weatherData.hourly.temperature_2m[currentHourIndex],
      relativeHumidity2m: weatherData.hourly.relative_humidity_2m[currentHourIndex],
      dewPoint2m: weatherData.hourly.dew_point_2m[currentHourIndex],
      cloudCover: weatherData.hourly.cloud_cover[currentHourIndex],
      visibility: weatherData.hourly.visibility[currentHourIndex],
      windSpeed10m: weatherData.hourly.wind_speed_10m[currentHourIndex],
      windDirection10m: weatherData.hourly.wind_direction_10m[currentHourIndex],
  };

  // Extract the daily data for today
  const currentDayIndex = weatherData.daily.time.findIndex(time => time.startsWith(currentTime.slice(0, 10)));
  const currentDailyData = {
      time: weatherData.daily.time[currentDayIndex],
      uvIndexMax: weatherData.daily.uv_index_max[currentDayIndex],
  };

  return (
      <div className="weather-card  mt-5">
          <h2>Current Weather</h2>
          {currentHourIndex !== -1 && (
              <>
                  
                  <p>Temperature: {currentHourlyData.temperature2m}°C</p>
                  <p>Relative Humidity: {currentHourlyData.relativeHumidity2m}%</p>
                  <p>Dew Point: {currentHourlyData.dewPoint2m}°C</p>
                  <p>Cloud Cover: {currentHourlyData.cloudCover}%</p>
                  <p>Visibility: {(currentHourlyData.visibility / 1000).toFixed(2)} km</p>
                  <p>Wind Speed: {currentHourlyData.windSpeed10m} km/h</p>
                  <p>Wind Direction: {currentHourlyData.windDirection10m}°</p>
              </>
          )}
          <h2>Today's Weather</h2>
          {currentDayIndex !== -1 && (
              <div>
                  
                  <p>UV Index Max: {currentDailyData.uvIndexMax}</p>
              </div>
          )}
      </div>
  );
};

export default WeatherCard;

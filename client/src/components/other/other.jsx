const WeatherCard = ({ weatherData }) => {
    if (!weatherData) {
        return <div>Loading...</div>;
    }

    // Destructuring data for easier access
    const { 
        hourly, 
        daily, 
        hourly_units: { time: hourlyTimeUnit }, 
        daily_units: { time: dailyTimeUnit } 
    } = weatherData;

    return (
        <div className="weather-card">
            <h2>Current Weather</h2>
            {hourly.time.length > 0 ? (
                <>
                    <p>Time: {new Date(hourly.time[0]).toISOString()}</p>
                    <p>Temperature: {hourly.temperature_2m[0]}°C</p>
                    <p>Relative Humidity: {hourly.relative_humidity_2m[0]}%</p>
                    <p>Dew Point: {hourly.dew_point_2m[0]}°C</p>
                    <p>Cloud Cover: {hourly.cloud_cover[0]}%</p>
                    <p>Visibility: {(hourly.visibility[0] / 1000).toFixed(2)} km</p>
                    <p>Wind Speed: {hourly.wind_speed_10m[0]} km/h</p>
                    <p>Wind Direction: {hourly.wind_direction_10m[0]}°</p>
                </>
            ) : (
                <p>No current weather data available.</p>
            )}
            <h2>Hourly Weather</h2>
            {hourly.time.map((time, index) => (
                <div key={index}>
                    <p>Time: {new Date(time).toISOString()}</p>
                    <p>Temperature: {hourly.temperature_2m[index]}°C</p>
                    <p>Relative Humidity: {hourly.relative_humidity_2m[index]}%</p>
                    <p>Dew Point: {hourly.dew_point_2m[index]}°C</p>
                    <p>Cloud Cover: {hourly.cloud_cover[index]}%</p>
                    <p>Visibility: {(hourly.visibility[index] / 1000).toFixed(2)} km</p>
                    <p>Wind Speed: {hourly.wind_speed_10m[index]} km/h</p>
                    <p>Wind Direction: {hourly.wind_direction_10m[index]}°</p>
                </div>
            ))}
            <h2>Daily Weather</h2>
            {daily.time.map((time, index) => (
                <div key={index}>
                    <p>Time: {new Date(time).toISOString()}</p>
                    <p>UV Index: {daily.uv_index_max[index]}</p>
                </div>
            ))}
        </div>
    );
};

export default WeatherCard;

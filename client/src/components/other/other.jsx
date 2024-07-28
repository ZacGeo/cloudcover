
const WeatherCard = ({ weatherData }) => {
    if (!weatherData) {
        return <div>Loading...</div>;
    }

    return (
        <div className="weather-card">
            <h2>Current Weather</h2>
            <p>Time: {weatherData.current.time.toISOString()}</p>
            <p>Temperature: {weatherData.current.temperature2m}°C</p>
            <p>Wind Speed: {weatherData.current.windSpeed10m} m/s</p>
            <p>Wind Direction: {weatherData.current.windDirection10m}°</p>
            <h2>Hourly Weather</h2>
            {weatherData.hourly.time.map((time, index) => (
                <div key={index}>
                    <p>Time: {time.toISOString()}</p>
                    <p>Relative Humidity: {weatherData.hourly.relativeHumidity2m[index]}%</p>
                    <p>Dew Point: {weatherData.hourly.dewPoint2m[index]}°C</p>
                    <p>Rain: {weatherData.hourly.rain[index]} mm</p>
                    <p>Visibility: {weatherData.hourly.visibility[index]} km</p>
                </div>
            ))}
            <h2>Daily Weather</h2>
            {weatherData.daily.time.map((time, index) => (
                <div key={index}>
                    <p>Time: {time.toISOString()}</p>
                    <p>Max Temperature: {weatherData.daily.temperature2mMax[index]}°C</p>
                    <p>Min Temperature: {weatherData.daily.temperature2mMin[index]}°C</p>
                    <p>Daylight Duration: {weatherData.daily.daylightDuration[index]} hours</p>
                    <p>UV Index: {weatherData.daily.uvIndexMax[index]}</p>
                    <p>Max Wind Speed: {weatherData.daily.windSpeed10mMax[index]} m/s</p>
                    <p>Dominant Wind Direction: {weatherData.daily.windDirection10mDominant[index]}°</p>
                </div>
            ))}
        </div>
    );
};

export default WeatherCard;
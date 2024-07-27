const axios = require('axios');
const locationService = require('./locationService');

exports.fetchWeatherData = async (location) => {
    const { latitude, longitude } = await locationService.getCoordinates(location);
    const response = await axios.get(`https://api.open-meteo.com/v1/forecast`, {
        params: {
            latitude,
            longitude,
            current: ["temperature_2m", "wind_speed_10m", "wind_direction_10m"],
            hourly: ["relative_humidity_2m", "dew_point_2m", "rain", "visibility"],
            daily: ["temperature_2m_max", "temperature_2m_min", "daylight_duration", "uv_index_max", "wind_speed_10m_max", "wind_direction_10m_dominant"],
            timezone: "GMT"
        }
    });
    return response.data;
};
const weatherService = require('../services/weatherService');

exports.getWeather = async (req, res) => {
    const { location } = req.query;
    try {
        const weatherData = await weatherService.fetchWeatherData(location);
        res.json(weatherData);
    } catch (error) {
        res.status(500).send('Error fetching weather data');
    }
};
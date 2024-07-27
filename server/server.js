require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const path = require('path');
const { getCoordinates } = require('./services/locationService');

const app = express();
const port =  5000; 
app.use(cors());
app.use(express.json());

app.post('/api/weather', async (req, res) => {
    const { city } = req.body;
    try {
        const { latitude, longitude } = await getCoordinates(city);

    
        const weatherResponse = await axios.get(`https://api.open-meteo.com/v1/forecast`, {
            params: {
                latitude: latitude,
                longitude: longitude,
                current_weather: true,
                timezone: 'GMT',
                hourly: ['temperature_2m', 'relative_humidity_2m', 'dew_point_2m', 'rain', 'visibility'],
                daily: ['temperature_2m_max', 'temperature_2m_min', 'daylight_duration', 'uv_index_max', 'wind_speed_10m_max', 'wind_direction_10m_dominant']
            }
        });

        res.json(weatherResponse.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../client/build')));

// The "catchall" handler: for any request that doesn't match the API routes above, send back React's index.html file.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
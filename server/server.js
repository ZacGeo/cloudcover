const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = 3000;

// Use CORS to allow requests from the frontend
app.use(cors());

// AccuWeather API configuration
const apiKey = process.env.ACCUWEATHER_API_KEY;
const baseUrl = 'http://dataservice.accuweather.com';

// Endpoint to get location key
app.get('/location/:city', async (req, res) => {
    try {
        const city = req.params.city;
        const response = await axios.get(`${baseUrl}/locations/v1/cities/search`, {
            params: {
                apikey: apiKey,
                q: city,
            },
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error fetching location data');
    }
});

// Endpoint to get weather data
app.get('/weather/:locationKey', async (req, res) => {
    try {
        const locationKey = req.params.locationKey;
        const response = await axios.get(`${baseUrl}/currentconditions/v1/${locationKey}`, {
            params: {
                apikey: apiKey,
            },
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error fetching weather data');
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
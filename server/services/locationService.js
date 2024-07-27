const axios = require('axios');

async function getCoordinates(city) {
    try {
        const geoResponse = await axios.get(`https://geocoding-api.open-meteo.com/v1/search?name=${city}`);
        if (geoResponse.data.results && geoResponse.data.results.length > 0) {
            const { latitude, longitude } = geoResponse.data.results[0];
            return { latitude, longitude };
        } else {
            throw new Error('Location not found');
        }
    } catch (error) {
        throw new Error('Error fetching coordinates: ' + error.message);
    }
}

module.exports = {
    getCoordinates,
};
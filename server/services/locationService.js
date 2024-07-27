const axios = require('axios');

exports.getCoordinates = async (location) => {
    const response = await axios.get(`http://api.positionstack.com/v1/forward`, {
        params: {
            access_key: 'your_access_key',
            query: location
        }
    });
    const data = response.data.data[0];
    return {
        latitude: data.latitude,
        longitude: data.longitude
    };
};
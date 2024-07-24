const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Weather App Server');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});


require("dotenv").config();

const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Home route
app.get("/", (req, res) => {
    res.json({
        message: "Weather App API Proxy is running!"
    });
});

// Weather route
app.get("/api/weather", async (req, res) => {
    const city = req.query.city;

    if (!city || !city.trim()) {
        return res.status(400).json({
            error: "Please provide a city name."
        });
    }

    if (!process.env.OPENWEATHER_API_KEY) {
        return res.status(500).json({
            error: "Weather API key is not configured."
        });
    }

    try {
        const response = await axios.get(
            "https://api.openweathermap.org/data/2.5/weather",
            {
                params: {
                    q: city.trim(),
                    appid: process.env.OPENWEATHER_API_KEY,
                    units: "metric"
                },
                timeout: 10000
            }
        );

        const weather = response.data;

        res.json({
            city: weather.name,
            country: weather.sys.country,
            temperature: weather.main.temp,
            feelsLike: weather.main.feels_like,
            humidity: weather.main.humidity,
            description: weather.weather[0].description,
            windSpeed: weather.wind.speed
        });

    } catch (error) {
        if (error.response?.status === 404) {
            return res.status(404).json({
                error: "City not found. Please check the city name."
            });
        }

        if (
            error.response?.status === 401 ||
            error.response?.status === 403
        ) {
            return res.status(502).json({
                error: "Weather service rejected the API key. Check your key and API access."
            });
        }

        console.error("Weather API error:", error.message);

        return res.status(502).json({
            error: "Unable to retrieve weather data. Please try again later."
        });
    }
});

// Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
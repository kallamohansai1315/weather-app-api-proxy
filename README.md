<<<<<<< HEAD
# Weather App API Proxy

## Project Overview

The Weather App API Proxy is a backend application developed using Node.js and Express.js. It retrieves current weather information from the OpenWeatherMap API and returns the processed data in JSON format.

## Technologies Used

* Node.js
* Express.js
* Axios
* OpenWeatherMap API
* dotenv
* CORS

## Features

* Search weather information by city name
* Retrieve temperature in Celsius
* Display feels-like temperature and humidity
* Retrieve weather description and wind speed
* Validate city name input
* Handle invalid city names and API errors
* Securely store the API key in an environment file

## Installation

1. Install Node.js.

2. Clone or download the project.

3. Open the project folder in VS Code.

4. Install dependencies:

   `npm install`

5. Create a `.env` file in the project root and add:

   `PORT=5000`

   `OPENWEATHER_API_KEY=your_api_key`

6. Start the server:

   `node server.js`

## API Endpoints

### Home

* Method: GET
* URL: `http://localhost:5000/`

### Get Weather

* Method: GET
* URL: `http://localhost:5000/api/weather?city=London`

Replace `London` with any supported city name.

## Example Response

```json
{
  "city": "London",
  "country": "GB",
  "temperature": 13.22,
  "feelsLike": 12.63,
  "humidity": 78,
  "description": "overcast clouds",
  "windSpeed": 2.81
}
```

*Example values only; actual weather data changes.*

## Error Handling

The API validates missing city names, handles unknown cities, and returns appropriate error messages when the external weather service fails.

## Security

The API key is stored in `.env`. The `.env` file and `node_modules` folder should not be uploaded to GitHub.

## Author

Mohan Sai
=======
# weather-app-api-proxy
Weather App API Proxy built using Node.js, Express.js, Axios and OpenWeatherMap API.
>>>>>>> 6882c4e7b9087eb6a3b19d6644fac07fd108fd08

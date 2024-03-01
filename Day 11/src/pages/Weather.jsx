import { useState } from "react";

function WeatherDashboard() {
  // instead of requesting data from an API, use this mock data
  const mockWeatherData = {
    "New York": {
      temperature: "22°C",
      humidity: "56%",
      windSpeed: "15 km/h",
    },
    "Los Angeles": {
      temperature: "27°C",
      humidity: "45%",
      windSpeed: "10 km/h",
    },
    London: {
      temperature: "15°C",
      humidity: "70%",
      windSpeed: "20 km/h",
    },
  };

  // eslint-disable-next-line no-unused-vars
  const [selectedCity, setSelectedCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [previousSearches, setPreviousSearches] = useState([]);

  console.log(previousSearches);

  const handleSearch = () => {
    const inputCity = document.getElementById("citySearch").value;
    const foundCityData = mockWeatherData[inputCity];

    setWeatherData(foundCityData || null);
    setSelectedCity(inputCity);

    if (!previousSearches.includes(inputCity)) {
      setPreviousSearches((prevSearch) => [...prevSearch, inputCity]);
    }
  };

  return (
    <div>
      <input type="text" id="citySearch" placeholder="Search for a city..." />
      <button id="searchButton" onClick={handleSearch}>
        Search
      </button>
      <div id="weatherData">
        {weatherData ? (
          <>
            <div>Temperature: {weatherData.temperature} </div>
            <div>Humidity: {weatherData.humidity} </div>
            <div>Wind Speed: {weatherData.windSpeed}</div>
          </>
        ) : (
          <div>City not found.</div>
        )}
      </div>
      <div id="previousSearches">
        {previousSearches.map((city) => (
          <button
            key={city}
            onClick={() => {
              setWeatherData(mockWeatherData[city]);
              setSelectedCity(city);
            }}
          >
            {city}
          </button>
        ))}
      </div>
    </div>
  );
}

export default WeatherDashboard;

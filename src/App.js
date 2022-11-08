import "./App.css";
import CurrentWeather from "./components/current-weather/CurrentWeather";
import Search from "./components/search/Search";
import { WEATHER_API_KEY, WEATHER_API_URL } from "./Api";
import { useState } from "react";
import ForecastWeather from "./components/forecast-weather/ForecastWeather";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecastWeather, setForecastWeather] = useState(null);

  const onSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    const forecastFetch = fetch(
      `${WEATHER_API_URL}forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (res) => {
        const weatherResponse = await res[0].json();
        const forecastResponse = await res[1].json();
        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecastWeather({ city: searchData.label, ...forecastResponse });
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="App">
      <Search onSearchChange={onSearchChange} />
      {currentWeather && <CurrentWeather currentWeather={currentWeather} />}
      {forecastWeather && <ForecastWeather forecastWeather={forecastWeather} />}
    </div>
  );
}

export default App;

import "./CurrentWeather.css";
import React from "react";

const CurrentWeather = ({ currentWeather, forecastWeather }) => {
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">{currentWeather.city}</p>
          <p className="weather-desc">
            {currentWeather.weather[0].description}
          </p>
        </div>
        <img
          src={`icons/${currentWeather.weather[0].icon}.png`}
          alt="weather"
          className="weather-icon"
        />
      </div>
      <div className="bottom">
        <p className="temperature">{Math.round(currentWeather.main.temp)}°C</p>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label">Details</span>
          </div>
          <hr />
          <div className="parameter-row">
            <span className="parameter-label">Feels Like</span>
            <span className="parameter-value">
              {Math.round(currentWeather.main.feels_like)}°C
            </span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind</span>
            <span className="parameter-value">
              {currentWeather.wind.speed}m/s
            </span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value">
              {currentWeather.main.humidity}%
            </span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Pressure</span>
            <span className="parameter-value">
              {currentWeather.main.pressure} hPa
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;

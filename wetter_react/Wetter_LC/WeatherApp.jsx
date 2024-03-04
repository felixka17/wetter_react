import React, { useState, useEffect } from "react";
import "./WeatherApp.css";
import Clock from "./Clock.jsx";
import logo from "../images/ledcon_logo_weiß.png";
import water from "../images/water.svg";
import wind from "../images/wind.svg";
import clear from "../images/clear.png";
import clouds from "../images/clouds.png";
import fog from "../images/fog.png";
import thunderstorm from "../images/thunderstorm.png";
import rain from "../images/rain.png";
import snow from "../images/snow.png";
import storm from "../images/storm.png";

const Weather = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [icon, setIcon] = useState(clouds); // Standardwert: clouds

    useEffect(() => {
        const getWeather = async () => {
            const apiKey = "dc61f5bfdfba74f2015e9488dabaa3c6";
            const city = "Rheine";
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

            const response = await fetch(url);
            const data = await response.json();
            setWeatherData(data);

            if (data.weather && data.weather.length > 0) {
                const weatherCondition = data.weather[0].main;
                switch (weatherCondition) {
                    case "clear":
                        setIcon(clear);
                        break;
                    case "clouds":
                        setIcon(clouds);
                        break;
                    case "rain":
                        setIcon(rain);
                        break;
                    case "snow":
                        setIcon(snow);
                        break;
                    case "thunderstorm":
                        setIcon(thunderstorm);
                        break;
                    case "fog":
                        setIcon(fog);
                        break;
                    default:
                        setIcon(clouds);
                        break;
                }
            }
        };

        // Funktion, um das Wetter zu aktualisieren
        const updateWeather = () => {
            getWeather();
        };

        // Wetter bei der Montage der Komponente abrufen
        getWeather();

        // Wetter alle 3600 Sekunden (1 Stunde) aktualisieren
        const intervalId = setInterval(updateWeather, 3600 * 1000);

        // Aufräumen, wenn die Komponente unmontiert wird
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="container">
            <div className="header">
                <div className="logo-clock">
                    <img src={logo} alt="Logo" />
                    <Clock />
                </div>
            </div>
            <div className="weather">
                <div className="weather-image">
                    <img src={icon} alt="Weather" />
                </div>
                <div className="temperature">
                    {weatherData && <p>{Math.round(weatherData.main.temp)}°C</p>}
                </div>
            </div>
            <div className="data-container">
                <div className="element">
                    <img src={water} alt="Water" className="icon" />
                    <div className="data">
                        {weatherData && (
                            <div className="humidity-percentage">{Math.round(weatherData.main.humidity)}%</div>
                        )}
                        <div className="text">Luftfeuchtigkeit</div>
                    </div>
                </div>
                <div className="element">
                    <img src={wind} alt="Wind" className="icon" />
                    <div className="data">
                        {weatherData && <div className="wind">{Math.round(weatherData.wind.speed)} km/h</div>}
                        <div className="text">Wind</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Weather;

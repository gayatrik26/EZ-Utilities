import React, { useEffect, useState } from 'react';
import Buttons from './Buttons';
import loadingGif from '../assets/loading.gif';
import '../styles/weatherWise.css'; // Example: Import CSS file for styling

const WeatherWise = ({ goBackClick }) => {
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(false); // Start with loading as false
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchWeatherData = async () => {
            try {
                setLoading(true); // Set loading to true before fetching data
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(async (position) => {
                        const { latitude, longitude } = position.coords;
                        const apiKey = 'eeddfee17d092a7372275a826878458e';
                        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;
                        const response = await fetch(apiUrl);
                        if (!response.ok) {
                            throw new Error('Failed to fetch weather data');
                        }
                        const data = await response.json();
                        setWeatherData(data);
                    });
                } else {
                    throw new Error('Geolocation is not supported by this browser');
                }
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false); // Set loading to false after fetching data or encountering an error
            }
        };

        fetchWeatherData();
    }, []);

    if (error) {
        return <div className="error-message">Error: {error}</div>;
    }

    return (
        <div className="weather-wise-container">
            <h1 className="weather-wise-heading">Weather Wise</h1>
            <div className="weather-info">
                {loading ? (
                    <img src={loadingGif} alt="Loading" className="loading-icon" />
                ) : (
                    weatherData && (
                        <div className="weather-data">
                            <h2 className="city-name">{weatherData.name}</h2>
                            <p className="temperature">{weatherData.main.temp} <sup>°C</sup></p>
                            <p className="feels-like">Feels like: {weatherData.main.feels_like} <sup>°C</sup></p>
                            <p className="description">{weatherData.weather[0].description}</p>
                            {weatherData.weather && weatherData.weather[0] && (
                                <img
                                    src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
                                    alt="Weather Icon"
                                    className="weather-icon"
                                />
                            )}
                        </div>
                    )
                )}
            </div>
            <div className='btn-container'>
                <Buttons text="Go Home" onClick={goBackClick} />
            </div>
        </div>
    );
};

export default WeatherWise;

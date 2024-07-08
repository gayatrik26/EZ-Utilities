import React, { useEffect, useState } from 'react';
import Buttons from './Buttons';
import loadingGif from '../assets/loading.gif';

const WeatherWise = ({ goBackClick }) => {
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchWeatherData = async () => {
            try {
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
                        setLoading(false);
                    });
                } else {
                    throw new Error('Geolocation is not supported by this browser');
                }
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };

        fetchWeatherData();
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <>
            <h1 style={{ fontSize: '1.2rem', fontWeight: '600', margin: '0.4rem', color: '#ffbf69' }}>WeatherWise</h1>
            <div style={{ padding: '0.8rem', display: "flex", flexDirection: "column", alignItems: "center" }}>


                {loading ? (
                    <img src={loadingGif} alt="Loading" style={{ width: '50px', height: '50px', marginTop: '1rem' }} />) : (
                    weatherData && (
                        <div style={{ marginTop: '1rem' }}>
                            <h2 style={{ color: '#ff9f1c', fontSize: "1.2rem", fontWeight: "500" }}>{weatherData.name}</h2>
                            <p style={{ color: '#2ec4b6', fontSize: "3rem" }}>{weatherData.main.temp} <sup>°C</sup></p>
                            <p style={{ color: '#8BCCC6' }}>Feels like: {weatherData.main.feels_like} <sup>°C</sup></p>
                            <p style={{ color: '#2ec4b6' , fontWeight:"500" }}>{weatherData.weather[0].description}</p>
                            {weatherData.weather && weatherData.weather[0] && (
                                <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`} alt="Weather Icon" style={{marginLeft:"2.2rem"}} />
                            )}
                        </div>
                    )
                )}
            </div>
            <Buttons text="Go Home" onClick={goBackClick} />
        </>
    );
};

export default WeatherWise;

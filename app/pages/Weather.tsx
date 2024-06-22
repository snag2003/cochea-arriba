"use client"
import React, { useState, useEffect } from 'react';
import WeatherForecast from '../components/WeatherForecast';
import WeatherChart from '../components/WeatherChart';

const Weather: React.FC = () => {
  const [key, setKey] = useState('Pronóstico'); // Cambiado a 'Pronóstico' para que coincida con el eventKey
  const [forecastData, setForecastData] = useState<any[]>([]);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(
          'https://api.openweathermap.org/data/2.5/forecast?lat=8.543228&lon=-82.377906&appid=b883185c0028fdce463b2ae169c54879'
        );
        const data = await response.json();
        setForecastData(data.list);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeatherData();
  }, []);

  return (
    <section id="Weather" className="py-6 bg-white text-gray-900 mb-[40px]">
      <div className="container mx-auto text-center">
        <h2 className="text-7xl font-bold mb-8">Clima</h2>
      </div>
      <div className="container mx-auto mt-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center">
            <div className="flex">
              <button
                className={`${
                  key === 'Pronóstico'
                    ? 'bg-green-700 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-green-700 hover:text-white'
                } py-2 px-6 rounded-l-lg`}
                onClick={() => setKey('Pronóstico')}
              >
                Pronóstico
              </button>
              <button
                className={`${
                  key === 'Gráfico'
                    ? 'bg-green-700 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-green-700 hover:text-white'
                } py-2 px-6 rounded-r-lg`}
                onClick={() => setKey('Gráfico')}
              >
                Gráfico
              </button>
            </div>
          </div>
          <div className="mt-8">
            {key === 'Pronóstico' && (
              <div>
                <WeatherForecast />
              </div>
            )}
            {key === 'Gráfico' && (
              <div>
                <WeatherChart data={forecastData} />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Weather;

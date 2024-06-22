import React, { useState, useEffect } from 'react';
import { Forecast } from './types';

const WeatherForecast: React.FC = () => {
  const [forecast, setForecast] = useState<Forecast[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0); // Estado para controlar el índice de los datos mostrados
  const itemsPerPage = 6;

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(
          'https://api.openweathermap.org/data/2.5/forecast?lat=8.543228&lon=-82.377906&appid=b883185c0028fdce463b2ae169c54879'
        );
        const data = await response.json();
        setForecast(data.list);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeatherData();
  }, []);

  // Función para traducir la descripción del clima con emojis
  const translateWeatherDescription = (description: string): string => {
    const translations: { [key: string]: string } = {
      'thunderstorm with light rain': '⛈️ Tormenta con lluvia ligera',
      'thunderstorm with rain': '⛈️ Tormenta con lluvia',
      'thunderstorm with heavy rain': '⛈️ Tormenta con lluvia intensa',
      'light thunderstorm': '⛈️ Tormenta ligera',
      'thunderstorm': '⛈️ Tormenta',
      'heavy thunderstorm': '⛈️ Tormenta intensa',
      'ragged thunderstorm': '⛈️ Tormenta irregular',
      'thunderstorm with light drizzle': '⛈️ Tormenta con llovizna ligera',
      'thunderstorm with drizzle': '⛈️ Tormenta con llovizna',
      'thunderstorm with heavy drizzle': '⛈️ Tormenta con llovizna intensa',
      'light intensity drizzle': '🌧️ Llovizna de intensidad ligera',
      'drizzle': '🌧️ Llovizna',
      'heavy intensity drizzle': '🌧️ Llovizna de intensidad fuerte',
      'light intensity drizzle rain': '🌧️ Llovizna de intensidad ligera con lluvia',
      'drizzle rain': '🌧️ Llovizna con lluvia',
      'heavy intensity drizzle rain': '🌧️ Llovizna intensa con lluvia',
      'shower rain and drizzle': '🌧️ Lluvia y llovizna',
      'heavy shower rain and drizzle': '🌧️ Lluvia intensa y llovizna',
      'shower drizzle': '🌧️ Llovizna de aguacero',
      'light rain': '🌧️ Lluvia ligera',
      'moderate rain': '🌧️ Lluvia moderada',
      'heavy intensity rain': '🌧️ Lluvia intensa',
      'very heavy rain': '🌧️ Lluvia muy intensa',
      'extreme rain': '🌧️ Lluvia extrema',
      'freezing rain': '🌧️ Lluvia helada',
      'light intensity shower rain': '🌧️ Lluvia de intensidad ligera con aguacero',
      'shower rain': '🌧️ Aguacero',
      'heavy intensity shower rain': '🌧️ Aguacero de intensidad fuerte',
      'ragged shower rain': '🌧️ Aguacero irregular',
      'light snow': '❄️ Nieve ligera',
      'snow': '❄️ Nieve',
      'heavy snow': '❄️ Nieve intensa',
      'sleet': '❄️ Aguanieve',
      'light shower sleet': '❄️ Aguacero ligero de aguanieve',
      'shower sleet': '❄️ Aguacero de aguanieve',
      'light rain and snow': '🌨️ Lluvia ligera y nieve',
      'rain and snow': '🌨️ Lluvia y nieve',
      'light shower snow': '🌨️ Nevadas ligeras',
      'shower snow': '🌨️ Nevadas',
      'heavy shower snow': '🌨️ Nevadas intensas',
      'mist': '🌫️ Niebla',
      'smoke': '🌫️ Humo',
      'haze': '🌫️ Neblina',
      'sand/dust whirls': '🌫️ Remolinos de arena/polvo',
      'fog': '🌫️ Niebla',
      'sand': '🌫️ Arena',
      'dust': '🌫️ Polvo',
      'volcanic ash': '🌫️ Ceniza volcánica',
      'squalls': '💨 Ráfagas',
      'tornado': '🌪️ Tornado',
      'clear sky': '☀️ Cielo despejado',
      'few clouds': '🌤️ Algunas nubes',
      'scattered clouds': '🌥️ Nubes dispersas',
      'broken clouds': '🌥️ Nubes rotas',
      'overcast clouds': '☁️ Nubes cubiertas',
    };

    return translations[description] || description; // Devuelve la traducción o la descripción original si no hay traducción
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => prevIndex + itemsPerPage);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => prevIndex - itemsPerPage);
  };

  return (
    <div className="container mx-auto px-2 mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {forecast.slice(currentIndex, currentIndex + itemsPerPage).map((item) => (
          <div key={item.dt} className="bg-white p-6 rounded-lg shadow-lg text-gray-900">
            <h3 className="text-xl font-semibold text-green-600 mb-4">
              {new Date(item.dt * 1000).toLocaleString()}
            </h3>
            <p className="text-base text-gray-700">
              Temperatura: {(item.main.temp - 273.15).toFixed(2)}°C
            </p>
            <p className="text-base text-gray-700">
              Sensación Térmica: {(item.main.feels_like - 273.15).toFixed(2)}°C
            </p>
            <p className="text-base text-gray-700">
              Clima: {translateWeatherDescription(item.weather[0].description)}
            </p>
            <p className="text-base text-gray-700">
              Humedad: {item.main.humidity}%
            </p>
            <p className="text-base text-gray-700">
              Velocidad del viento: {item.wind.speed} m/s
            </p>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-6">
        {currentIndex > 0 && (
          <button
            onClick={handlePrevious}
            className="bg-green-700 text-white px-4 py-2 rounded-lg shadow-lg focus:outline-none hover:bg-green-600 mr-4"
          >
            Anterior
          </button>
        )}
        {currentIndex < forecast.length - itemsPerPage && (
          <button
            onClick={handleNext}
            className="bg-green-700 text-white px-4 py-2 rounded-lg shadow-lg focus:outline-none hover:bg-green-600"
          >
            Siguiente
          </button>
        )}
      </div>
    </div>
  );
};

export default WeatherForecast;

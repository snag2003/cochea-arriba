import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const WeatherChart: React.FC<{ data: any }> = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0); // Estado para controlar el índice de los datos mostrados

  // Función para avanzar hacia adelante en los datos del gráfico
  const handleNext = () => {
    if (currentIndex < data.length - 6) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  // Función para retroceder hacia atrás en los datos del gráfico
  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  // Crear etiquetas y datos para el gráfico basado en el índice actual
  const labels = data.slice(currentIndex, currentIndex + 6).map((item: any) => {
    const date = new Date(item.dt * 1000);
    return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
  });

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: 'Temperatura (°C)',
        data: data.slice(currentIndex, currentIndex + 6).map((item: any) => (item.main.temp - 273.15).toFixed(2)),
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        yAxisID: 'y-axis-1',
      },
      {
        label: 'Humedad (%)',
        data: data.slice(currentIndex, currentIndex + 6).map((item: any) => item.main.humidity),
        borderColor: 'rgba(153, 102, 255, 1)',
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        yAxisID: 'y-axis-2',
      },
    ],
  };

  const options = {
    responsive: true,
    interaction: {
      mode: 'index' as const,
      intersect: false,
    },
    stacked: false,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Temperatura y Humedad a lo Largo del Tiempo',
      },
    },
    scales: {
      'y-axis-1': {
        type: 'linear' as const,
        position: 'left' as const,
      },
      'y-axis-2': {
        type: 'linear' as const,
        position: 'right' as const,
        grid: {
          drawOnChartArea: false,
        },
      },
    },
  };

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-full">
        <Line data={chartData} options={options} />
      </div>
      <div className="flex mt-4">
        {currentIndex > 0 && (
          <button
            onClick={handlePrevious}
            className="bg-green-700 text-white px-4 py-2 rounded-lg shadow-lg focus:outline-none hover:bg-green-600 mr-4"
          >
            Anterior
          </button>
        )}
        {currentIndex < data.length - 6 && (
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

export default WeatherChart;

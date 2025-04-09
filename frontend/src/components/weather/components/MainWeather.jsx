import React from "react";
import { useSelector } from "react-redux";
import { Droplets, Wind, Sun } from "lucide-react";

const WeatherDetailItem = ({ icon, value, label }) => (
  <div className="flex flex-col">
    <div className="flex items-center mb-2">
      {icon}
      <span className="text-lg">{value}</span>
    </div>
    <span className="text-gray-400 text-sm">{label}</span>
  </div>
);

function MainWeather() {
  const { currentlyForecast } = useSelector((state) => state.weatherStore);

  const weatherData = {
    location: "London, United Kingdom",
    current: {
      temp: currentlyForecast.temperature,
      feelsLike: currentlyForecast?.feels_like,
      condition: currentlyForecast?.summary,
      iconPath: `/weather_icons/set01/big/${currentlyForecast?.icon_num}.png`,
      details: [
        {
          label: "Precipitation",
          value: currentlyForecast?.precipitation?.total,
          icon: <Droplets className="text-blue-400 mr-2" size={16} />,
        },
        {
          label: "Wind",
          value: currentlyForecast?.wind?.speed,
          icon: <Wind className="text-blue-400 mr-2" size={16} />,
        },
        {
          label: "Humidity",
          value: currentlyForecast?.humidity,
          icon: <Droplets className="text-blue-400 mr-2" size={16} />,
        },
        {
          label: "UV Index",
          value: currentlyForecast?.uv_index,
          icon: <Sun className="text-blue-400 mr-2" size={16} />,
        },
        {
          label: "Clouds cover",
          value: currentlyForecast?.summary,
          icon: (
            <img
              src="/weather_icons/set01/big/5.png"
              alt="Cloud"
              className="mr-2 w-4 h-4"
            />
          ),
        },
        {
          label: "Visibility",
          value: currentlyForecast?.visibility,
          icon: (
            <img
              src="/weather_icons/set01/big/9.png"
              alt="Visibility"
              className="mr-2 w-4 h-4"
            />
          ),
        },
      ],
    },
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
      {/* Current Weather */}
      <div className="bg-gray-800 rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <img
            src={weatherData.current.iconPath}
            alt={weatherData.current.condition}
            className="w-16 h-16"
          />
        </div>
        <div className="mt-2">
          <h1 className="text-5xl font-bold">{weatherData.current.temp} °C</h1>
          <p className="text-gray-400 mt-1">
            feels like {weatherData.current.feelsLike} °C
          </p>
          <p className="text-xl mt-4">{weatherData.current.condition}</p>
        </div>
      </div>

      {/* Weather Details */}
      <div className="bg-gray-800 rounded-lg p-6">
        <div className="grid grid-cols-2 gap-6">
          {weatherData.current.details.map((detail, index) => (
            <WeatherDetailItem
              key={index}
              icon={detail.icon}
              value={detail.value}
              label={detail.label}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MainWeather;

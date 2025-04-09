import React from "react";
import { Droplets } from "lucide-react";
import { useSelector } from "react-redux";

// Reusable component for daily forecast items
const DailyForecastItem = ({ day, high, low, precipitation, iconPath }) => (
  <div className="bg-gray-800 rounded-lg p-4 text-center">
    <p className="mb-2 text-sm">{day}</p>
    <img src={iconPath} alt="Weather" className="mx-auto mb-2 w-10 h-10" />
    <p className="font-medium">{high} °C</p>
    <p className="text-gray-400 text-sm">{low} °C</p>
    <div className="flex justify-center mt-2">
      <Droplets className="text-blue-400 mr-1" size={12} />
      <span className="text-xs">{precipitation}</span>
    </div>
  </div>
);

function DailyForecast() {
  const { dailyForecast } = useSelector((state) => state.weatherStore);
  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">21 DAYS FORECAST</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
        {dailyForecast.map((day, index) => (
          <DailyForecastItem
            key={index}
            day={day.day}
            high={day.temperature_max}
            low={day.temperature_min}
            precipitation={day.precipitation?.total}
            iconPath={`/weather_icons/set01/big/${day?.icon}.png`}
          />
        ))}
      </div>
    </div>
  );
}

export default DailyForecast;

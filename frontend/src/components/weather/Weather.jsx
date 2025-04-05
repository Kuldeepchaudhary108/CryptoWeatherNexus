import React from "react";
import {
  MapPin,
  Search,
  Droplets,
  Wind,
  Sun,
  Moon,
  Settings,
} from "lucide-react";

// Weather data (would normally come from an API)
const weatherData = {
  location: "London, United Kingdom",
  current: {
    temp: 26,
    feelsLike: 26,
    condition: "Overcast",
    iconPath: "/weather_icons/set01/big/7.png",
    details: [
      {
        label: "Precipitation",
        value: "0 mm/h",
        icon: <Droplets className="text-blue-400 mr-2" size={16} />,
      },
      {
        label: "Wind",
        value: "5 mph",
        icon: <Wind className="text-blue-400 mr-2" size={16} />,
      },
      {
        label: "Humidity",
        value: "50 %",
        icon: <Droplets className="text-blue-400 mr-2" size={16} />,
      },
      {
        label: "UV Index",
        value: "2",
        icon: <Sun className="text-blue-400 mr-2" size={16} />,
      },
      {
        label: "Clouds cover",
        value: "90 %",
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
        value: "19 mi",
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
  hourly: [
    {
      time: "17:00",
      temp: 26,
      precipitation: "0 mm/h",
      wind: "5 mph",
      iconPath: "/weather_icons/set01/big/5.png",
    },
    {
      time: "Now",
      temp: 26,
      precipitation: "0 mm/h",
      wind: "5 mph",
      iconPath: "/weather_icons/set01/big/5.png",
    },
    {
      time: "19:00",
      temp: 25,
      precipitation: "0 mm/h",
      wind: "5 mph",
      iconPath: "/weather_icons/set01/big/6.png",
    },
    {
      time: "20:00",
      temp: 24,
      precipitation: "0 mm/h",
      wind: "7 mph",
      iconPath: "/weather_icons/set01/big/4.png",
    },
    {
      time: "21:00",
      temp: 22,
      precipitation: "0 mm/h",
      wind: "6 mph",
      iconPath: "/weather_icons/set01/big/4.png",
    },
    {
      time: "22:00",
      temp: 21,
      precipitation: "0 mm/h",
      wind: "5 mph",
      isMoon: true,
    },
  ],
  daily: [
    {
      day: "Today",
      high: 26,
      low: 15,
      precipitation: "0 mm/h",
      iconPath: "/weather_icons/set01/big/3.png",
    },
    {
      day: "Tuesday",
      high: 29,
      low: 16,
      precipitation: "0 mm/h",
      iconPath: "/weather_icons/set01/big/3.png",
    },
    {
      day: "Wednesday",
      high: 28,
      low: 17,
      precipitation: "0 mm/h",
      iconPath: "/weather_icons/set01/big/3.png",
    },
    {
      day: "Thursday",
      high: 24,
      low: 15,
      precipitation: "0 mm/h",
      iconPath: "/weather_icons/set01/big/3.png",
    },
    {
      day: "Friday",
      high: 22,
      low: 12,
      precipitation: "0 mm/h",
      iconPath: "/weather_icons/set01/big/3.png",
    },
    {
      day: "Saturday",
      high: 21,
      low: 14,
      precipitation: "0 mm/h",
      iconPath: "/weather_icons/set01/big/3.png",
    },
  ],
};

// Reusable component for weather detail items
const WeatherDetailItem = ({ icon, value, label }) => (
  <div className="flex flex-col">
    <div className="flex items-center mb-2">
      {icon}
      <span className="text-lg">{value}</span>
    </div>
    <span className="text-gray-400 text-sm">{label}</span>
  </div>
);

// Reusable component for hourly forecast items
const HourlyForecastItem = ({
  time,
  temp,
  precipitation,
  wind,
  iconPath,
  isMoon,
}) => (
  <div className="bg-gray-800 rounded-lg p-4 text-center">
    <p className="mb-2">{time}</p>
    {isMoon ? (
      <Moon className="mx-auto mb-2 text-yellow-300" size={24} />
    ) : (
      <img src={iconPath} alt="Weather" className="mx-auto mb-2 w-10 h-10" />
    )}
    <p className="font-medium">{temp} °C</p>
    <div className="flex justify-center mt-2">
      <Droplets className="text-blue-400 mr-1" size={12} />
      <span className="text-xs">{precipitation}</span>
    </div>
    <div className="flex justify-center mt-1">
      <Wind className="text-blue-400 mr-1" size={12} />
      <span className="text-xs">{wind}</span>
    </div>
  </div>
);

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

// Header component with location and search
const Header = ({ location }) => (
  <div className="flex items-center justify-between mb-6">
    <div className="flex items-center space-x-2">
      <MapPin className="text-white" size={20} />
      <p className="text-lg font-medium">{location}</p>
    </div>

    <div className="relative">
      <div className="flex items-center bg-gray-800 rounded-full w-96 px-4 py-2">
        <Search className="text-gray-400 mr-2" size={18} />
        <input
          type="text"
          placeholder="Search city"
          className="bg-transparent outline-none text-sm w-36"
        />
      </div>
    </div>

    <Settings className="text-gray-400" size={20} />
  </div>
);

// Main weather component
export default function WeatherPage() {
  const { location, current, hourly, daily } = weatherData;

  return (
    <div className="bg-gray-900 min-h-screen text-white p-4  mx-auto">
      {/* Header with location and search */}
      <Header location={location} />

      {/* Main Weather Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {/* Current Weather */}
        <div className="bg-gray-800 rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <img
              src={current.iconPath}
              alt={current.condition}
              className="w-16 h-16"
            />
          </div>
          <div className="mt-2">
            <h1 className="text-5xl font-bold">{current.temp} °C</h1>
            <p className="text-gray-400 mt-1">
              feels like {current.feelsLike} °C
            </p>
            <p className="text-xl mt-4">{current.condition}</p>
          </div>
        </div>

        {/* Weather Details */}
        <div className="bg-gray-800 rounded-lg p-6">
          <div className="grid grid-cols-2 gap-6">
            {current.details.map((detail, index) => (
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

      {/* Hourly Forecast */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-4">HOURLY FORECAST</h2>
        <div className="flex space-x-2 mb-2">
          <span className="text-gray-400">Today</span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
          {hourly.map((hour, index) => (
            <HourlyForecastItem
              key={index}
              time={hour.time}
              temp={hour.temp}
              precipitation={hour.precipitation}
              wind={hour.wind}
              iconPath={hour.iconPath}
              isMoon={hour.isMoon}
            />
          ))}
        </div>
      </div>

      {/* 21 Days Forecast */}
      <div>
        <h2 className="text-lg font-semibold mb-4">21 DAYS FORECAST</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
          {daily.map((day, index) => (
            <DailyForecastItem
              key={index}
              day={day.day}
              high={day.high}
              low={day.low}
              precipitation={day.precipitation}
              iconPath={day.iconPath}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

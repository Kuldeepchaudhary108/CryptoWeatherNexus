import React, { useState, useEffect, useRef } from "react";
import { Search } from "lucide-react";
import {
  searchPlaces,
  currentWeather,
  hourlyWeather,
  dailyWeather,
} from "../../config/weatherApi";
import {
  dailyWeatherInfo,
  hourlyWeatherInfo,
  currentWeatherInfo,
} from "../../store/weatherSlice";
import Header from "./components/Header";
import HourlyForecast from "./components/HourlyForecast";
import DailyForecast from "./components/DailyForecast";
import MainWeather from "./components/MainWeather";
import { useDispatch, useSelector } from "react-redux";

export default function WeatherHomePage() {
  const [text, setText] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [haveLocation, setHaveLocation] = useState(true);
  const [locationName, setLocationName] = useState(null);

  const { dailyForecast, currentlyForecast, hourlyForecast } = useSelector(
    (state) => state.weatherStore
  );

  const dispatch = useDispatch();
  const handleSearch = async (e) => {
    setText(e.target.value);
    const data = await searchPlaces(e.target.value);
    setSearchResult(data);
  };

  const handleSelect = async (place) => {
    setLocationName(place);
    const weatherData = await currentWeather(place.lat, place.lon);
    const hourlyData = await hourlyWeather(place.lat, place.lon);
    const dailyData = await dailyWeather(place.lat, place.lon);
    dispatch(currentWeatherInfo(weatherData.current));
    dispatch(hourlyWeatherInfo(hourlyData.hourly.data));
    dispatch(dailyWeatherInfo(dailyData.daily.data));
    // setCurrentWeatherData(weatherData);
    setSearchResult([]);
    setText(""); // clear search
  };

  useEffect(() => {
    // Check if the data arrays are empty and the object is empty
    if (
      dailyForecast.length === 0 &&
      hourlyForecast.length === 0 &&
      Object.keys(currentlyForecast).length === 0
    ) {
      setHaveLocation(false);
    } else {
      setHaveLocation(true);
    }
  }, [dailyForecast, hourlyForecast, currentlyForecast]);

  return haveLocation ? (
    <div className="bg-gray-900 min-h-screen text-white p-4 mx-auto">
      <Header location={locationName} />
      <MainWeather />
      <HourlyForecast />
      <DailyForecast />

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  ) : (
    <div className="bg-gray-900 min-h-screen text-white p-4 mx-auto flex justify-center items-center">
      <div className=" bg-transparent flex justify-center items-center w-[80%] h-48 relative">
        <h2 className="text-2xl font-bold text-gray-400 absolute top-[30%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          Please choose a city first
        </h2>
        <div className="flex  bg-gray-800 w-[70%] rounded-full px-4 py-2 shadow-md">
          <Search className="text-gray-400 mr-2" size={20} />
          <input
            type="text"
            placeholder="Search city"
            className="bg-transparent outline-none text-white placeholder-gray-400 text-sm flex-1"
            value={text}
            onChange={(e) => handleSearch(e)}
          />
        </div>
        <div className="absolute z-10 mt-2 w-full bg-gray-300 rounded-lg shadow-lg overflow-hidden">
          {searchResult?.map((place) => (
            <div
              key={place.place_id}
              onClick={() => handleSelect(place)}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm text-gray-700"
            >
              {place.name}, {place.adm_area1}, {place.country}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

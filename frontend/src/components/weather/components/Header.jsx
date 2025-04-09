import React, { useState } from "react";
import { MapPin, Search, Settings } from "lucide-react";
import {
  searchPlaces,
  currentWeather,
  hourlyWeather,
  dailyWeather,
} from "../../../config/weatherApi";
import {
  dailyWeatherInfo,
  hourlyWeatherInfo,
  currentWeatherInfo,
} from "../../../store/weatherSlice";
import { useDispatch } from "react-redux";

const Header = ({ location }) => {
  console.log(location);

  const dispatch = useDispatch();

  const [text, setText] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  // const [currentWeatherData, setCurrentWeatherData] = useState(null);
  const [locationName, setLocationName] = useState(null);

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
  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center space-x-2">
        <MapPin className="text-white" size={20} />
        <p className="text-lg font-medium">
          {location?.name},{location?.country}
        </p>
      </div>

      <div className="relative w-full max-w-md">
        <div className="flex items-center bg-gray-800 rounded-full px-4 py-2 shadow-md">
          <Search className="text-gray-400 mr-2" size={18} />
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

      <Settings className="text-gray-400" size={20} />
    </div>
  );
};
export default Header;

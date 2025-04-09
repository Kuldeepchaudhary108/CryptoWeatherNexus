import axios from "axios";

const currentWeather = async (lat, lon) => {
  const options = {
    method: "GET",
    url: "https://ai-weather-by-meteosource.p.rapidapi.com/current",
    params: {
      lat: lat,
      lon: lon,
      timezone: "auto",
      language: "en",
      units: "auto",
    },
    headers: {
      "x-rapidapi-key": "6aadc8fbe9mshb108d77c521a3c4p1224fbjsn93f6205b1320",
      "x-rapidapi-host": "ai-weather-by-meteosource.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
const searchPlaces = async (text) => {
  console.log("not reaching to searchplace");

  const options = {
    method: "GET",
    url: "https://ai-weather-by-meteosource.p.rapidapi.com/find_places",
    params: {
      text,
      language: "en",
    },
    headers: {
      "x-rapidapi-key": "6aadc8fbe9mshb108d77c521a3c4p1224fbjsn93f6205b1320",
      "x-rapidapi-host": "ai-weather-by-meteosource.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const hourlyWeather = async (lat, lon) => {
  const options = {
    method: "GET",
    url: "https://ai-weather-by-meteosource.p.rapidapi.com/hourly",
    params: {
      lat,
      lon,
      timezone: "auto",
      language: "en",
      units: "auto",
    },
    headers: {
      "x-rapidapi-key": "6aadc8fbe9mshb108d77c521a3c4p1224fbjsn93f6205b1320",
      "x-rapidapi-host": "ai-weather-by-meteosource.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
const dailyWeather = async (lat, lon) => {
  const options = {
    method: "GET",
    url: "https://ai-weather-by-meteosource.p.rapidapi.com/daily",
    params: {
      lat,
      lon,
      language: "en",
      units: "auto",
    },
    headers: {
      "x-rapidapi-key": "6aadc8fbe9mshb108d77c521a3c4p1224fbjsn93f6205b1320",
      "x-rapidapi-host": "ai-weather-by-meteosource.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
    // console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};
export { currentWeather, searchPlaces, hourlyWeather, dailyWeather };

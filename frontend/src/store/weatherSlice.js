import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { getWeatherData } from "../config/weatherApi";

const initialState = {
  // place,
  loading: true,
  currentlyForecast: {},
  hourlyForecast: [],
  dailyForecast: [],
  units: {},
};
const weatherSlice = createSlice({
  name: "weatherStore",
  initialState,
  reducers: {
    setPlace: (state, action) => {
      state.place = action.payload;
    },
    currentWeatherInfo: (state, action) => {
      state.currentlyForecast = action.payload;
    },
    hourlyWeatherInfo: (state, action) => {
      state.hourlyForecast = action.payload;
    },
    dailyWeatherInfo: (state, action) => {
      state.dailyForecast = action.payload;
    },
  },
});

export const {
  setPlace,
  currentWeatherInfo,
  hourlyWeatherInfo,
  dailyWeatherInfo,
} = weatherSlice.actions;

export default weatherSlice.reducer;

import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice.js";
import weatherReducer from "./weatherSlice.js";

const store = configureStore({
  reducer: {
    // auth: authSlice,
    weatherStore: weatherReducer,
  },
});

export default store;

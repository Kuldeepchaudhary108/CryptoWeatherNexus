import React from "react";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import WeatherPage from "./components/weather/index.jsx";
import { CoinPage, CryptoHome } from "./components/crypto/index.js";
import Home from "./App.jsx";
import CryptoContext from "./context/CryptoContext.jsx";
import { Provider } from "react-redux";
import store from "./store/store.js";

function Main() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="/weather" element={<WeatherPage />} />
          <Route path="/crypto" element={<CryptoHome />} />
          <Route path="/coin/:id" element={<CoinPage />} />
        </Route>
      </>
    )
  );
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

createRoot(document.getElementById("root")).render(
  <>
    <CryptoContext>
      <Main />
    </CryptoContext>
  </>
);

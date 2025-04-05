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
import WeatherPage from "./components/weather/Weather.jsx";
import { CoinPage, CryptoHome } from "./components/crypto/index.js";
import Home from "./App.jsx";
import CryptoContext from "./context/CryptoContext.jsx";

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
  return <RouterProvider router={router} />;
}

createRoot(document.getElementById("root")).render(
  <>
    <CryptoContext>
      <Main />
    </CryptoContext>
  </>
);

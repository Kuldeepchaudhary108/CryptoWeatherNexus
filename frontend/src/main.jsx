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
import Crypto from "./components/crypto/index.jsx";
import App from "./App.jsx";

function Main() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<App />} />
          <Route path="/weather" element={<WeatherPage />} />
          <Route path="/crypto" element={<Crypto />} />
        </Route>
      </>
    )
  );
  return <RouterProvider router={router} />;
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Main />
  </StrictMode>
);

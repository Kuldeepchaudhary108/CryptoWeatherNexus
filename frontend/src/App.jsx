import React, { useState } from "react";
import { Bell, TrendingUp, Menu, X } from "lucide-react";

//weather card 
const WeatherCard = ({
  city,
  temperature,
  condition,
  subtext,
  showOnMobile = true,
  src,
}) => {

  const mobileClass = showOnMobile ? "" : "hidden md:block";

  return (
    <div
      className={`${mobileClass} bg-blue-500/60 rounded-lg overflow-hidden relative h-48`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
      <img src={src} alt={city} className="w-full h-full object-cover" />
      <div className="absolute top-3 left-3">
        <h3 className="text-xl font-bold">{city}</h3>
      </div>
      <div className="absolute bottom-3 left-3">
        <p className="text-3xl font-bold">{temperature}</p>
        <p className="text-sm">{subtext}</p>
      </div>
    </div>
  );
};

//  Crypto Card 
const CryptoCard = ({ name, price, trend, percentage }) => {
  const trendColor = trend === "up" ? "text-green-500" : "text-red-500";
  const percentageSign = trend === "up" ? "+" : "-";

  return (
    <div className="bg-[#072749] p-4 rounded-lg mb-4">
      <div className="flex justify-between items-center">
        <h3 className="text-xl">{name}</h3>
        <p className="text-xl font-bold">{price}</p>
      </div>
      <div className="flex justify-between items-center mt-2">
        <div className="w-24">
          <svg viewBox="0 0 100 20" className={trendColor}>
            <path
              d={
                trend === "up"
                  ? "M0,10 Q25,5 50,10 T100,10"
                  : "M0,10 Q25,15 50,10 T100,10"
              }
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
        </div>
        <p className={trendColor + " font-bold"}>
          {percentageSign}
          {percentage}%
        </p>
      </div>
    </div>
  );
};

//  Alert Component
const SidebarAlert = ({ icon, title, message }) => {
  const Icon = icon;

  return (
    <div className="bg-[#0E335A] p-4 rounded-lg flex items-center">
      <div className="bg-yellow-500 rounded-full p-2 mr-3">
        <Icon size={18} className="text-gray-900" />
      </div>
      <div>
        <p className="text-sm">{title}</p>
        <p className="text-sm font-bold">{message}</p>
      </div>
    </div>
  );
};

// News Item Component
const NewsItem = ({ headline }) => <li className="p-3 text-sm">{headline}</li>;

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Weather data
  const weatherData = [
    {
      city: "Delhi",
      temperature: "72°F",
      condition: "Sunny",
      subtext: "65% 5mi",
      showOnMobile: true,
      src: "/delhi.jpg",
    },
    {
      city: "Noida",
      temperature: "68%",
      condition: "Cloudy",
      subtext: "Partly cloudy",
      showOnMobile: true,
      src: "noida.jpg",
    },
    {
      city: "London",
      temperature: "68%",
      condition: "Humid",
      subtext: "72% humid",
      showOnMobile: true,
      src: "london.jpg",
    },
    {
      city: "New York",
      temperature: "80%",
      condition: "Rainy",
      subtext: "Market cap",
      showOnMobile: true,
      src: "new york.jpg",
    },
    {
      city: "Delhi",
      temperature: "72°F",
      condition: "Sunny",
      subtext: "65% 5mi",
      showOnMobile: false,
      src: "/delhi.jpg",
    },
    {
      city: "London",
      temperature: "68%",
      condition: "Humid",
      subtext: "72% humid",
      showOnMobile: false,
      src: "london.jpg",
    },
    {
      city: "New York",
      temperature: "80%",
      condition: "Rainy",
      subtext: "Market cap",
      showOnMobile: false,
      showOnLarge: true,
      src: "new york.jpg",
    },
    {
      city: "Noida",
      temperature: "68%",
      condition: "Cloudy",
      subtext: "Partly cloudy",
      showOnMobile: false,
      showOnLarge: true,
      src: "noida.jpg",
    },
  ];

  // Crypto data
  const cryptoData = [
    { name: "Bitcoin", price: "$45,327.81", trend: "up", percentage: "2.3" },
    { name: "Ethereum", price: "$3,221.56", trend: "up", percentage: "1.8" },
    { name: "Cardano", price: "$1.24", trend: "down", percentage: "0.5" },
  ];

  // News data
  const newsData = [
    "Bitcoin hits new all-time high amid market rally",
    "Ethereum 2.0 upgrade gains momentum",
    "Cardano partners with Ethiopian government",
    "Crypto market shows signs of recovery",
  ];

  return (
    <div className="flex flex-col lg:flex-row h-screen w-full overflow-hidden shadow-lg">
      {/* Mobile Menu Button */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="bg-blue-800 text-white p-2 rounded-md"
        >
          {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 transition-transform duration-300 fixed lg:relative z-40 w-64 lg:w-1/5 bg-[#0b2643] text-white p-6 flex flex-col h-full`}
      >
        <div className="mb-10 pt-8 lg:pt-0">
          <h1 className="text-2xl font-bold">Crypto</h1>
          <h1 className="text-2xl font-bold">Weather</h1>
          <h1 className="text-2xl font-bold">Nexus</h1>
        </div>

        <nav className="flex-1">
          <ul className="space-y-4">
            <li className="bg-[#0E335A] p-3 rounded-lg font-medium">
              Dashboard
            </li>
            <li className="p-3 text-gray-400">Weather</li>
            <li className="p-3 text-gray-400">Crypto</li>
            <li className="p-3 text-gray-400">News</li>
          </ul>
        </nav>

        <div className="mt-auto space-y-4">
          <SidebarAlert
            icon={Bell}
            title="Weather alert"
            message="for New York!"
          />

          <SidebarAlert
            icon={TrendingUp}
            title="Bitcoin price"
            message="up 5%"
          />
        </div>
      </div>

      {/* Overlay to close sidebar on mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Main Content */}
      <div className="w-full lg:w-4/5 bg-[#01162d] text-white p-4 lg:p-6 overflow-y-auto">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 pt-12 lg:pt-0">
          {/* Weather Section */}
          <div className="col-span-1">
            <h2 className="text-xl mb-4">Weather Overview</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {weatherData.map((weather, index) => (
                <WeatherCard
                  key={index}
                  city={weather.city}
                  temperature={weather.temperature}
                  condition={weather.condition}
                  subtext={weather.subtext}
                  showOnMobile={weather.showOnMobile}
                  src={weather.src}
                />
              ))}
            </div>
          </div>

          {/* Crypto Section */}
          <div className="col-span-1 mt-8 xl:mt-0">
            <h2 className="text-xl mb-4">Crypto Overview</h2>

            {cryptoData.map((crypto, index) => (
              <CryptoCard
                key={index}
                name={crypto.name}
                price={crypto.price}
                trend={crypto.trend}
                percentage={crypto.percentage}
              />
            ))}

            <h2 className="text-xl mb-4">Latest Crypto News</h2>
            <div className="bg-[#072749] rounded-lg overflow-hidden">
              <ul className="divide-y divide-gray-700">
                {newsData.map((news, index) => (
                  <NewsItem key={index} headline={news} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import { Bell, TrendingUp, Menu, X } from "lucide-react";

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

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

      {/* Sidebar - Hidden on mobile unless toggled */}
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
          <div className="bg-[#0E335A] p-4 rounded-lg flex items-center">
            <div className="bg-yellow-500 rounded-full p-2 mr-3">
              <Bell size={18} className="text-gray-900" />
            </div>
            <div>
              <p className="text-sm">Weather alert</p>
              <p className="text-sm font-bold">for New York!</p>
            </div>
          </div>

          <div className="bg-[#0E335A] p-4 rounded-lg flex items-center">
            <div className="bg-yellow-500 rounded-full p-2 mr-3">
              <TrendingUp size={18} className="text-gray-900" />
            </div>
            <div>
              <p className="text-sm">Bitcoin price</p>
              <p className="text-sm font-bold">up 5%</p>
            </div>
          </div>
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
              {/* Delhi */}
              <div className="bg-blue-500/60 rounded-lg overflow-hidden relative h-48">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
                <img
                  src="/api/placeholder/400/300"
                  alt="Delhi"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3">
                  <h3 className="text-xl font-bold">Delhi</h3>
                </div>
                <div className="absolute bottom-3 left-3">
                  <p className="text-3xl font-bold">72°F</p>
                  <p className="text-sm">65% 5mi</p>
                </div>
              </div>

              {/* Noida */}
              <div className="bg-blue-500/60 rounded-lg overflow-hidden relative h-48">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
                <img
                  src="/api/placeholder/400/300"
                  alt="Noida"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3">
                  <h3 className="text-xl font-bold">Noida</h3>
                </div>
                <div className="absolute bottom-3 left-3">
                  <p className="text-3xl font-bold">68%</p>
                  <p className="text-sm">Partly cloudy</p>
                </div>
              </div>

              {/* London */}
              <div className="bg-blue-500/60 rounded-lg overflow-hidden relative h-48">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
                <img
                  src="/api/placeholder/400/300"
                  alt="London"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3">
                  <h3 className="text-xl font-bold">London</h3>
                </div>
                <div className="absolute bottom-3 left-3">
                  <p className="text-3xl font-bold">68%</p>
                  <p className="text-sm">72% humid</p>
                </div>
              </div>

              {/* New York */}
              <div className="bg-blue-500/60 rounded-lg overflow-hidden relative h-48">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
                <img
                  src="/api/placeholder/400/300"
                  alt="New York"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3">
                  <h3 className="text-xl font-bold">New York</h3>
                </div>
                <div className="absolute bottom-3 left-3">
                  <p className="text-3xl font-bold">80%</p>
                  <p className="text-sm">Market cap</p>
                </div>
              </div>

              {/* Hidden on small screens */}
              <div className="hidden md:block bg-blue-500/60 rounded-lg overflow-hidden relative h-48">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
                <img
                  src="/api/placeholder/400/300"
                  alt="Delhi"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3">
                  <h3 className="text-xl font-bold">Delhi</h3>
                </div>
                <div className="absolute bottom-3 left-3">
                  <p className="text-3xl font-bold">72°F</p>
                  <p className="text-sm">65% 5mi</p>
                </div>
              </div>

              {/* Hidden on small screens */}
              <div className="hidden md:block bg-blue-500/60 rounded-lg overflow-hidden relative h-48">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
                <img
                  src="/api/placeholder/400/300"
                  alt="London"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3">
                  <h3 className="text-xl font-bold">London</h3>
                </div>
                <div className="absolute bottom-3 left-3">
                  <p className="text-3xl font-bold">68%</p>
                  <p className="text-sm">72% humid</p>
                </div>
              </div>

              {/* Hidden on mobile and small screens */}
              <div className="hidden lg:block bg-blue-500/60 rounded-lg overflow-hidden relative h-48">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
                <img
                  src="/api/placeholder/400/300"
                  alt="New York"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3">
                  <h3 className="text-xl font-bold">New York</h3>
                </div>
                <div className="absolute bottom-3 left-3">
                  <p className="text-3xl font-bold">80%</p>
                  <p className="text-sm">Market cap</p>
                </div>
              </div>

              {/* Hidden on mobile and small screens */}
              <div className="hidden lg:block bg-blue-500/60 rounded-lg overflow-hidden relative h-48">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
                <img
                  src="/api/placeholder/400/300"
                  alt="Noida"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3">
                  <h3 className="text-xl font-bold">Noida</h3>
                </div>
                <div className="absolute bottom-3 left-3">
                  <p className="text-3xl font-bold">68%</p>
                  <p className="text-sm">Partly cloudy</p>
                </div>
              </div>
            </div>
          </div>

          {/* Crypto Section */}
          <div className="col-span-1 mt-8 xl:mt-0">
            <h2 className="text-xl mb-4">Crypto Overview</h2>

            {/* Bitcoin */}
            <div className="bg-[#072749] p-4 rounded-lg mb-4">
              <div className="flex justify-between items-center">
                <h3 className="text-xl">Bitcoin</h3>
                <p className="text-xl font-bold">$45,327.81</p>
              </div>
              <div className="flex justify-between items-center mt-2">
                <div className="w-24">
                  <svg viewBox="0 0 100 20" className="text-green-500">
                    <path
                      d="M0,10 Q25,5 50,10 T100,10"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <p className="text-green-500 font-bold">+2.3%</p>
              </div>
            </div>

            {/* Ethereum */}
            <div className="bg-[#072749] p-4 rounded-lg mb-4">
              <div className="flex justify-between items-center">
                <h3 className="text-xl">Ethereum</h3>
                <p className="text-xl font-bold">$3,221.56</p>
              </div>
              <div className="flex justify-between items-center mt-2">
                <div className="w-24">
                  <svg viewBox="0 0 100 20" className="text-green-500">
                    <path
                      d="M0,10 Q25,5 50,10 T100,10"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <p className="text-green-500 font-bold">+1.8%</p>
              </div>
            </div>

            {/* Cardano */}
            <div className="bg-[#072749] p-4 rounded-lg mb-4">
              <div className="flex justify-between items-center">
                <h3 className="text-xl">Cardano</h3>
                <p className="text-xl font-bold">$1.24</p>
              </div>
              <div className="flex justify-between items-center mt-2">
                <div className="w-24">
                  <svg viewBox="0 0 100 20" className="text-red-500">
                    <path
                      d="M0,10 Q25,15 50,10 T100,10"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <p className="text-red-500 font-bold">-0.5%</p>
              </div>
            </div>

            <h2 className="text-xl mb-4">Latest Crypto News</h2>
            <div className="bg-[#072749] rounded-lg overflow-hidden">
              <ul className="divide-y divide-gray-700">
                <li className="p-3 text-sm">
                  Bitcoin hits new all-time high amid market rally
                </li>
                <li className="p-3 text-sm">
                  Ethereum 2.0 upgrade gains momentum
                </li>
                <li className="p-3 text-sm">
                  Cardano partners with Ethiopian government
                </li>
                <li className="p-3 text-sm">
                  Crypto market shows signs of recovery
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

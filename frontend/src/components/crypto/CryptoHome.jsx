import React from "react";
import Header from "./cryptoComponents/Header";
import { Search } from "lucide-react";
import AnimatedCoin from "./cryptoComponents/AnimatedCoin";
import CoinsTable from "./cryptoComponents/CoinTable";
export default function index() {
  const cryptoData = [
    {
      name: "Bitcoin",
      symbol: "BTC",
      price: "₹ 7,082,848.00",
      change: "-1.99%",
      marketCap: "₹ 140,675,235M",
      logo: "🟠",
    },
    {
      name: "Ethereum",
      symbol: "ETH",
      price: "₹ 152,812.00",
      change: "-2.04%",
      marketCap: "₹ 18,454,429M",
      logo: "🔷",
    },
    {
      name: "Tether",
      symbol: "USDT",
      price: "₹ 85.49",
      change: "-0.08%",
      marketCap: "₹ 12,318,623M",
      logo: "🟢",
    },
    {
      name: "XRP",
      symbol: "XRP",
      price: "₹ 181.68",
      change: "-0.83%",
      marketCap: "₹ 10,599,686M",
      logo: "⚫",
    },
    {
      name: "BNB",
      symbol: "BNB",
      price: "₹ 181.68",
      change: "-0.83%",
      marketCap: "₹ 181.68",
      logo: "🟡",
    },
  ];

  return (
    <div>
      <div>
        <Header />
      </div>
      <div className=" bg-[url('/banner2.jpg')] bg-cover h-96 w-full text-center text-white">
        <div>
          <h1 className="text-5xl font-bold m-2"> crypto</h1>
          <h4>Get all the Info regarding your favorite Crypto Currency</h4>
        </div>
        <div className="mt-16 ">
          <AnimatedCoin />
        </div>
      </div>
      {/* search option and more about coins  */}
      {/* <div className="w-[94%] m-auto box-border">
        <h1>Cryptocurrency Price by Market Cap</h1>

        <div className="flex m-auto rounded-full items-center  w-[80%] border px-4 py-2">
          <Search className="text-gray-400 mr-2" size={20} />
          <input
            type="text"
            placeholder="Search city"
            className="bg-transparent  outline-none text-sm w-full h-10"
          />
        </div> */}
      {/* showing table  */}
      {/* <div className=" mx-auto mt-8 rounded-sm">
          <div className="bg-yellow-500 text-black font-bold rounded-t-xl p-4 grid grid-cols-4">
            <div>Coin</div>
            <div>Price</div>
            <div>24h Change</div>
            <div>Market Cap</div>
          </div>
          <div className="bg-gray-900 text-white rounded-b-xl divide-y divide-gray-700">
            {cryptoData.map((coin, index) => (
              <div key={index} className="grid grid-cols-4 p-4 items-center">
                <div className="flex items-center gap-3">
                  <div className="text-2xl">{coin.logo}</div>
                  <div>
                    <div className="font-semibold">{coin.symbol}</div>
                    <div className="text-sm text-gray-400">{coin.name}</div>
                  </div>
                </div>
                <div>{coin.price}</div>
                <div
                  className={`font-medium ${
                    coin.change.includes("-")
                      ? "text-red-500"
                      : "text-green-500"
                  }`}
                >
                  {coin.change}
                </div>
                <div>{coin.marketCap}</div>
              </div>
            ))}
          </div>
        </div>
      </div> */}

      <CoinsTable />
    </div>
  );
}

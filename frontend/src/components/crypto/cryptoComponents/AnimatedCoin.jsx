import React, { useRef, useEffect, useState } from "react";
import axios from "axios";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css"; // Important: Add this import
import { CryptoState } from "../../../context/CryptoContext";
import { TrendingCoins } from "../../../config/api";
import { Link } from "react-router-dom"; // Fix: Use react-router-dom instead of react-router

function AnimatedCoin() {
  const { currency, symbol } = CryptoState();
  const [trending, setTrending] = useState([]);
  const [loading, setLoading] = useState(true);

  // Render counter using useRef
  const renderCount = useRef(0);
  renderCount.current++;

  // Fetch only when currency changes
  useEffect(() => {
    const fetchTrendingCoins = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(TrendingCoins(currency));
        setTrending(data);
        console.log("Fetched Trending Coins:", data);
      } catch (err) {
        console.error("Failed to fetch coins:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchTrendingCoins();
  }, [currency]);

  console.log("Render count:", renderCount.current);

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const items = trending.map((coin) => {
    const profit = coin?.price_change_percentage_24h >= 0;

    return (
      <Link
        className="flex flex-col items-center cursor-pointer p-2"
        to={`/coins/${coin.id}`}
        key={coin.id}
      >
        <img
          src={coin?.image}
          alt={coin.name}
          height="80"
          className="h-32 mb-2"
        />
        <div className="flex flex-col items-center">
          <span className="uppercase font-medium">
            {coin?.symbol}
            &nbsp;
            <span
              className={`${
                profit ? "text-green-500" : "text-red-500"
              } font-medium`}
            >
              {profit && "+"}
              {coin?.price_change_percentage_24h?.toFixed(2)}%
            </span>
          </span>
          <span className="text-xl font-medium mt-1">
            {symbol} {numberWithCommas(coin?.current_price.toFixed(2))}
          </span>
        </div>
      </Link>
    );
  });

  const responsive = {
    0: {
      items: 2,
    },
    512: {
      items: 4,
    },
  };

  if (loading) {
    return <div className="text-center py-4 text-white">Loading coins...</div>;
  }

  return (
    <div className="pt-5 w-full">
      <AliceCarousel
        mouseTracking
        infinite
        autoPlayInterval={1000}
        animationDuration={1500}
        disableDotsControls
        disableButtonsControls
        responsive={responsive}
        items={items}
        autoPlay
      />
    </div>
  );
}

export default AnimatedCoin;

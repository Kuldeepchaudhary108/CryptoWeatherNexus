import React, { useRef, useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { Droplets, Wind, Moon, ChevronLeft, ChevronRight } from "lucide-react";

const HourlyForecastItem = ({
  date,
  temp,
  precipitation,
  wind,
  iconPath,
  isMoon,
  isNow,
}) => {
  // Format the date string to display only the time
  const formatTime = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  return (
    <div
      className={`bg-gray-800 rounded-lg p-4 text-center min-w-[100px] transition-all duration-300 ${
        isNow ? "ring-2 ring-blue-400 bg-gray-700" : ""
      }`}
    >
      {isNow && (
        <div className="text-blue-400 text-xs font-medium mb-1">NOW</div>
      )}
      <p className="mb-2">{formatTime(date)}</p>
      {isMoon ? (
        <Moon className="mx-auto mb-2 text-yellow-300" size={24} />
      ) : (
        <img src={iconPath} alt="Weather" className="mx-auto mb-2 w-10 h-10" />
      )}
      <p className="font-medium">{temp} °C</p>
      <div className="flex justify-center mt-2">
        <Droplets className="text-blue-400 mr-1" size={12} />
        <span className="text-xs">{precipitation}</span>
      </div>
      <div className="flex justify-center mt-1">
        <Wind className="text-blue-400 mr-1" size={12} />
        <span className="text-xs">{wind}</span>
      </div>
    </div>
  );
};

export default function HourlyForecast() {
  const { hourlyForecast } = useSelector((state) => state.weatherStore);
  const scrollContainerRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const now = new Date();

  // Filter to show only 24 hours of forecast data
  const next24HoursForecast =
    hourlyForecast?.filter((hour) => {
      const hourDate = new Date(hour.date);
      const hoursDiff = (hourDate - now) / (1000 * 60 * 60);
      return hoursDiff >= 0 && hoursDiff <= 24;
    }) || [];

  // Find the "now" forecast item (closest to current time)
  const findNowIndex = () => {
    if (!next24HoursForecast?.length) return -1;

    let closestIndex = 0;
    let closestDiff = Infinity;

    next24HoursForecast.forEach((hour, index) => {
      const hourDate = new Date(hour.date);
      const diff = Math.abs(hourDate - now);
      if (diff < closestDiff) {
        closestDiff = diff;
        closestIndex = index;
      }
    });

    return closestIndex;
  };

  const nowIndex = findNowIndex();

  // Scroll handling functions
  const handleScroll = () => {
    if (!scrollContainerRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setShowLeftArrow(scrollLeft > 0);
    setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
  };

  const scrollLeft = () => {
    if (!scrollContainerRef.current) return;
    scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    if (!scrollContainerRef.current) return;
    scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  // Set up scroll event listener
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
      // Initial check
      handleScroll();

      // Scroll to the "now" item
      if (nowIndex >= 0) {
        const itemWidth = 104; // 100px width + 4px margin
        const targetScroll = Math.max(
          0,
          nowIndex * itemWidth - scrollContainer.clientWidth / 2 + itemWidth / 2
        );
        scrollContainer.scrollLeft = targetScroll;
      }

      return () => scrollContainer.removeEventListener("scroll", handleScroll);
    }
  }, [nowIndex]);

  return (
    <>
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-4">24-HOUR FORECAST</h2>
        <div className="relative">
          {/* Left scroll button */}
          {showLeftArrow && (
            <button
              onClick={scrollLeft}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-800 p-2 rounded-full shadow-lg opacity-80 hover:opacity-100 transition-opacity"
              aria-label="Scroll left"
            >
              <ChevronLeft size={20} />
            </button>
          )}

          {/* Scrollable container with custom scrollbar */}
          <div
            ref={scrollContainerRef}
            className="flex space-x-1 py-4 overflow-x-auto scrollbar-hide scroll-smooth"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {next24HoursForecast.map((hour, index) => (
              <HourlyForecastItem
                key={index}
                date={hour.date}
                temp={hour.temperature}
                precipitation={hour.precipitation?.total}
                wind={hour.wind?.speed}
                iconPath={`/weather_icons/set01/big/${hour?.icon}.png`}
                isMoon={hour.weather?.includes("night")}
                isNow={index === nowIndex}
              />
            ))}
          </div>

          {/* Right scroll button */}
          {showRightArrow && (
            <button
              onClick={scrollRight}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-800 p-2 rounded-full shadow-lg opacity-80 hover:opacity-100 transition-opacity"
              aria-label="Scroll right"
            >
              <ChevronRight size={20} />
            </button>
          )}

          {/* Custom scroll indicator */}
          <div className="mt-4 flex justify-center">
            <div className="w-24 h-1 bg-gray-700 rounded-full">
              <div
                className="h-full bg-blue-400 rounded-full"
                style={{
                  width: scrollContainerRef.current
                    ? `${
                        (scrollContainerRef.current.scrollLeft /
                          (scrollContainerRef.current.scrollWidth -
                            scrollContainerRef.current.clientWidth)) *
                        100
                      }%`
                    : "0%",
                  transition: "width 0.1s",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

"use-client";
import React, { useEffect, useState } from "react";

const Loader = () => {
  const [barHeights, setBarHeights] = useState([16, 16, 16]); // Initial heights in pixels

  useEffect(() => {
    const interval = setInterval(() => {
      setBarHeights((prev) => [
        Math.random() * 32 + 16, // Random height between 16px and 48px
        Math.random() * 32 + 16,
        Math.random() * 32 + 16,
      ]);
    }, 400); // Change every 400ms

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="flex space-x-2">
        {barHeights.map((height, index) => (
          <div
            key={index}
            className="w-2 bg-blue-500 rounded transition-all duration-500"
            style={{ height: `${height}px` }}
          />
        ))}
      </div>
    </div>
  );
};

export default Loader;

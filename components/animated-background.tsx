"use client";

import { useEffect, useState } from "react";

export default function AnimatedBackground() {
  const [circles, setCircles] = useState<number[]>(Array.from({ length: 13 }, (_, i) => i));

  useEffect(() => {
    const handleResize = () => setCircles(Array.from({ length: 13 }, (_, i) => i));
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden -z-10">
      {/* Moved from 'top-20' to 'bottom-0' */}
      <ul className="absolute -mt-96 bottom-0 left-0 w-full h-1/2">
        {circles.map((_, index) => {
          const size = [30, 90, 20, 40, 20, 50, 20, 25, 54, 100, 100, 100, 50][index];
          const delay = [0, 2, 4, 0, 0, 3, 3, 15, 2, 0, 0, 0, 0][index];
          const duration = [10, 12, 9, 9, 9, 11, 11, 11, 20, 11, 11, 11, 11][index];
          const bottom = ["25%", "10%", "70%", "5%", "65%", "75%", "25%", "1.4%", "20%", "85%", "5%", "2%", "78%"][index];
          const left = ["25%", "10%", "70%", "5%", "65%", "75%", "25%", "1.4%", "20%", "85%", "5%", "2%", "78%"][index];

          return (
            <li
              key={index}
              className="absolute bg-green-400 opacity-50 animate-floating"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left,
                borderRadius: `${size / 2}px`,
                animationDelay: `${delay}s`,
                animationDuration: `${duration}s`,
                zIndex: -10, 
                bottom: "10px",
              }}
            />
          );
        })}
      </ul>
    </div>
  );
}

"use client";

import React from "react";

interface SectionDividerProps {
  variant?: "wave" | "angle" | "curve" | "triangle" | "dots";
  color?: "white" | "silver-50" | "silver-100" | "ukblue";
  height?: "sm" | "md" | "lg";
  flip?: boolean;
  className?: string;
}

export function SectionDivider({
  variant = "wave",
  color = "white",
  height = "md",
  flip = false,
  className = "",
}: SectionDividerProps) {
  // Height classes
  const heightClass = {
    sm: "h-8 md:h-12",
    md: "h-12 md:h-16",
    lg: "h-16 md:h-24",
  };

  // Color classes
  const colorClass = {
    "white": "text-white",
    "silver-50": "text-silver-50",
    "silver-100": "text-silver-100",
    "ukblue": "text-ukblue",
  };

  // Define SVG paths for each variant
  const paths = {
    wave: "M0 50L48 43.3C96 36.7 192 23.3 288 16.7C384 10 480 10 576 23.3C672 36.7 768 63.3 864 63.3C960 63.3 1056 36.7 1152 26.7C1248 16.7 1344 23.3 1392 26.7L1440 30V100H0V50Z",
    angle: "M0 100L1440 0V100H0Z",
    curve: "M0 100C240 100 480 0 720 0C960 0 1200 100 1440 100V100H0V100Z",
    triangle: "M720 0L1440 100H0L720 0Z",
    dots: "",
  };

  // If dots, render a div with dotted pattern
  if (variant === "dots") {
    return (
      <div 
        className={`w-full ${heightClass[height]} flex items-center justify-center ${className}`}
      >
        <div className="w-full flex items-center">
          <div className="flex-grow h-px bg-ukblue/20"></div>
          {[...Array(7)].map((_, i) => (
            <div 
              key={i} 
              className={`h-1.5 w-1.5 rounded-full mx-1 ${
                colorClass[color].replace("text-", "bg-")
              }`}
            ></div>
          ))}
          <div className="flex-grow h-px bg-ukblue/20"></div>
        </div>
      </div>
    );
  }

  return (
    <div 
      className={`w-full ${heightClass[height]} overflow-hidden ${className}`}
    >
      <svg
        className={`w-full h-full ${colorClass[color]} ${
          flip ? "transform rotate-180" : ""
        }`}
        viewBox="0 0 1440 100"
        fill="currentColor"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={paths[variant]} />
      </svg>
    </div>
  );
} 
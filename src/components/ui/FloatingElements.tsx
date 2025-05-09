"use client";

import React from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

interface FloatingElementsProps {
  className?: string;
  variant?: "default" | "royal" | "subtle";
  density?: "low" | "medium" | "high";
  animated?: boolean;
}

export function FloatingElements({
  className,
  variant = "default",
  density = "medium",
  animated = true,
}: FloatingElementsProps) {
  // Determine colors based on variant
  const colors = {
    default: ["bg-ukblue/10", "bg-ukred/10", "bg-gold-300/20"],
    royal: ["bg-gold-400/20", "bg-ukblue/15", "bg-silver-300/20"],
    subtle: ["bg-gray-100", "bg-gray-200/50", "bg-silver-100/50"],
  };

  // Determine number of elements based on density
  const elementCount = {
    low: 3,
    medium: 5,
    high: 8,
  };

  // Generate random positions
  const elements = Array.from({ length: elementCount[density] }, (_, i) => {
    const size = Math.floor(Math.random() * 60) + 40; // Random size between 40-100px
    const color = colors[variant][i % colors[variant].length];
    
    // Random positions
    const top = `${Math.floor(Math.random() * 80)}%`;
    const left = `${Math.floor(Math.random() * 80)}%`;
    
    // Animation properties
    const duration = Math.random() * 20 + 10; // 10-30s
    const delay = Math.random() * 5;
    
    return { size, color, top, left, duration, delay };
  });

  return (
    <div className={twMerge(clsx("absolute inset-0 -z-10 overflow-hidden", className))}>
      {elements.map((element, index) => (
        <motion.div
          key={index}
          className={clsx("absolute rounded-full blur-3xl", element.color)}
          style={{
            width: element.size,
            height: element.size,
            top: element.top,
            left: element.left,
          }}
          animate={
            animated
              ? {
                  y: [0, -20, 0, 20, 0],
                  x: [0, 15, 0, -15, 0],
                  scale: [1, 1.05, 1, 0.95, 1],
                }
              : {}
          }
          transition={{
            duration: element.duration,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
            delay: element.delay,
          }}
        />
      ))}
    </div>
  );
} 
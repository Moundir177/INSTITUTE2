"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

interface AnimatedTooltipProps {
  children: React.ReactNode;
  content: React.ReactNode;
  position?: "top" | "bottom" | "left" | "right";
  width?: "auto" | "xs" | "sm" | "md" | "lg";
  variant?: "light" | "dark" | "royal";
  delay?: number;
  className?: string;
}

export function AnimatedTooltip({
  children,
  content,
  position = "top",
  width = "md",
  variant = "dark",
  delay = 0.2,
  className,
}: AnimatedTooltipProps) {
  const [isVisible, setIsVisible] = useState(false);

  // Width classes based on size
  const widthClasses = {
    auto: "w-auto",
    xs: "w-40",
    sm: "w-48",
    md: "w-64",
    lg: "w-80",
  };

  // Styling based on variant
  const variantClasses = {
    light: "bg-white text-gray-800 border border-silver-200 shadow-lg",
    dark: "bg-gray-800 text-white shadow-lg",
    royal: "bg-gradient-to-r from-ukblue to-ukblue/90 text-white shadow-lg", 
  };

  // Position offsets and animations
  const positionStyles = {
    top: {
      tooltip: "bottom-full left-1/2 transform -translate-x-1/2 mb-2",
      animation: {
        initial: { opacity: 0, y: -5 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -5 },
      },
      arrow: "top-full left-1/2 transform -translate-x-1/2 border-t-8 border-l-8 border-r-8 border-transparent",
      arrowColor: {
        light: "border-t-white",
        dark: "border-t-gray-800",
        royal: "border-t-ukblue",
      },
    },
    bottom: {
      tooltip: "top-full left-1/2 transform -translate-x-1/2 mt-2",
      animation: {
        initial: { opacity: 0, y: 5 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 5 },
      },
      arrow: "bottom-full left-1/2 transform -translate-x-1/2 border-b-8 border-l-8 border-r-8 border-transparent",
      arrowColor: {
        light: "border-b-white",
        dark: "border-b-gray-800",
        royal: "border-b-ukblue",
      },
    },
    left: {
      tooltip: "right-full top-1/2 transform -translate-y-1/2 mr-2",
      animation: {
        initial: { opacity: 0, x: -5 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -5 },
      },
      arrow: "left-full top-1/2 transform -translate-y-1/2 border-l-8 border-t-8 border-b-8 border-transparent",
      arrowColor: {
        light: "border-l-white",
        dark: "border-l-gray-800",
        royal: "border-l-ukblue",
      },
    },
    right: {
      tooltip: "left-full top-1/2 transform -translate-y-1/2 ml-2",
      animation: {
        initial: { opacity: 0, x: 5 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: 5 },
      },
      arrow: "right-full top-1/2 transform -translate-y-1/2 border-r-8 border-t-8 border-b-8 border-transparent",
      arrowColor: {
        light: "border-r-white",
        dark: "border-r-gray-800",
        royal: "border-r-ukblue",
      },
    },
  };

  return (
    <div 
      className={twMerge(clsx("relative inline-block", className))}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      onFocus={() => setIsVisible(true)}
      onBlur={() => setIsVisible(false)}
    >
      {children}
      
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className={clsx(
              "absolute z-50 p-3 rounded-lg",
              positionStyles[position].tooltip,
              variantClasses[variant],
              widthClasses[width]
            )}
            initial={positionStyles[position].animation.initial}
            animate={positionStyles[position].animation.animate}
            exit={positionStyles[position].animation.exit}
            transition={{ duration: 0.2, delay: delay }}
          >
            {/* Arrow */}
            <div
              className={clsx(
                "absolute h-0 w-0",
                positionStyles[position].arrow,
                positionStyles[position].arrowColor[variant]
              )}
            />
            
            {/* Content */}
            <div className="text-sm">{content}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 
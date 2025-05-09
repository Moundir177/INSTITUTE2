"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

interface ShinyTextProps {
  text: string;
  tagName?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";
  className?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl";
  weight?: "normal" | "medium" | "semibold" | "bold" | "extrabold";
  gradient?: "royal" | "gold" | "silver" | "university";
  animated?: boolean;
  direction?: "horizontal" | "diagonal" | "radial";
  speed?: "slow" | "normal" | "fast";
  highlight?: boolean;
  highlightColor?: string;
  letterSpacing?: "tight" | "normal" | "wide";
  lineHeight?: "none" | "tight" | "normal" | "relaxed" | "loose";
}

export function ShinyText({
  text,
  tagName = "h2",
  className,
  size = "3xl",
  weight = "bold",
  gradient = "royal",
  animated = true,
  direction = "horizontal",
  speed = "normal",
  highlight = false,
  highlightColor = "rgba(255, 192, 0, 0.2)",
  letterSpacing = "normal",
  lineHeight = "normal",
}: ShinyTextProps) {
  const [mounted, setMounted] = useState(false);

  // Size classes
  const sizeClasses = {
    xs: "text-xs",
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl",
    "3xl": "text-3xl md:text-4xl",
    "4xl": "text-4xl md:text-5xl",
    "5xl": "text-5xl md:text-6xl",
  };

  // Font weight classes
  const weightClasses = {
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
    extrabold: "font-extrabold",
  };

  // Gradient classes
  const gradientClasses = {
    royal: "bg-gradient-to-r from-ukblue via-ukred to-ukblue",
    gold: "bg-gradient-to-r from-gold-600 via-gold-300 to-gold-600",
    silver: "bg-gradient-to-r from-silver-700 via-silver-300 to-silver-700",
    university: "bg-gradient-to-r from-ukblue via-gold-500 to-ukred",
  };

  // Direction classes
  const directionClasses = {
    horizontal: "bg-gradient-to-r",
    diagonal: "bg-gradient-to-br",
    radial: "bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))]",
  };

  // Animation speed
  const speedClasses = {
    slow: "animate-shimmer-slow",
    normal: "animate-shimmer",
    fast: "animate-shimmer-fast",
  };

  // Letter spacing
  const letterSpacingClasses = {
    tight: "tracking-tight",
    normal: "tracking-normal",
    wide: "tracking-wide",
  };

  // Line height
  const lineHeightClasses = {
    none: "leading-none",
    tight: "leading-tight",
    normal: "leading-normal",
    relaxed: "leading-relaxed",
    loose: "leading-loose",
  };

  // Custom animation classes to add to the stylesheet
  useEffect(() => {
    if (typeof document !== "undefined" && !mounted) {
      const style = document.createElement("style");
      style.innerHTML = `
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
        .animate-shimmer {
          animation: shimmer 5s linear infinite;
          background-size: 200% auto;
        }
        .animate-shimmer-slow {
          animation: shimmer 8s linear infinite;
          background-size: 200% auto;
        }
        .animate-shimmer-fast {
          animation: shimmer 3s linear infinite;
          background-size: 200% auto;
        }
      `;
      document.head.appendChild(style);
      setMounted(true);
    }
  }, [mounted]);

  // Wrapper for text with highlight effect
  const HighlightWrapper = ({ children }: { children: React.ReactNode }) => {
    if (!highlight) return <>{children}</>;
    
    const highlightStyle = {
      position: "relative" as const,
      display: "inline-block",
      zIndex: 1,
    };
    
    const highlightBeforeStyle = {
      content: '""',
      position: "absolute" as const,
      bottom: 0,
      left: 0,
      width: "100%",
      height: "40%",
      backgroundColor: highlightColor,
      zIndex: -1,
      transform: "skewX(-15deg) rotate(-2deg)",
    };
    
    return (
      <span style={highlightStyle}>
        <span style={highlightBeforeStyle} />
        {children}
      </span>
    );
  };

  // Base classes for the text
  const baseClasses = clsx(
    "inline-block",
    sizeClasses[size],
    weightClasses[weight],
    letterSpacingClasses[letterSpacing],
    lineHeightClasses[lineHeight],
    animated && "text-transparent bg-clip-text",
    animated && gradientClasses[gradient],
    animated && directionClasses[direction],
    animated && speedClasses[speed]
  );

  // Use switch statement to render the appropriate tag
  const renderTextElement = () => {
    const props = { className: twMerge(baseClasses, className) };
    
    switch (tagName) {
      case "h1": return <h1 {...props}>{text}</h1>;
      case "h2": return <h2 {...props}>{text}</h2>;
      case "h3": return <h3 {...props}>{text}</h3>;
      case "h4": return <h4 {...props}>{text}</h4>;
      case "h5": return <h5 {...props}>{text}</h5>;
      case "h6": return <h6 {...props}>{text}</h6>;
      case "p": return <p {...props}>{text}</p>;
      case "span": return <span {...props}>{text}</span>;
      case "div": return <div {...props}>{text}</div>;
      default: return <div {...props}>{text}</div>;
    }
  };
  
  return (
    <HighlightWrapper>
      {renderTextElement()}
    </HighlightWrapper>
  );
} 
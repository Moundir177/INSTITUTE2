"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

interface ParallaxBackgroundProps {
  children?: React.ReactNode;
  backgroundImage?: string;
  backgroundOpacity?: number;
  backgroundBlur?: "none" | "sm" | "md" | "lg" | "xl";
  overlay?: "none" | "light" | "dark" | "gradient" | "royal";
  height?: string;
  speed?: number; 
  className?: string;
}

export function ParallaxBackground({
  children,
  backgroundImage,
  backgroundOpacity = 0.7,
  backgroundBlur = "none",
  overlay = "none",
  height = "min-h-[500px]",
  speed = 0.3,
  className,
}: ParallaxBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax effect with transform
  const yPos = useTransform(scrollYProgress, [0, 1], ["0%", `${speed * 100}%`]);

  // Blur classes
  const blurClasses = {
    none: "",
    sm: "backdrop-blur-sm",
    md: "backdrop-blur-md",
    lg: "backdrop-blur-lg",
    xl: "backdrop-blur-xl"
  };

  // Overlay classes
  const overlayClasses = {
    none: "",
    light: "bg-white/30",
    dark: "bg-black/50",
    gradient: "bg-gradient-to-b from-black/60 to-black/20",
    royal: "bg-gradient-to-br from-ukblue/60 to-ukred/30"
  };

  return (
    <div 
      ref={containerRef}
      className={twMerge(
        clsx(
          "relative overflow-hidden",
          height,
          className
        )
      )}
    >
      {/* Parallax Background */}
      {backgroundImage && (
        <motion.div 
          className="absolute inset-0 w-full h-full z-0"
          style={{ y: yPos }}
        >
          <Image
            src={backgroundImage}
            alt="Background"
            fill
            style={{ opacity: backgroundOpacity }}
            className="object-cover"
            priority
          />
        </motion.div>
      )}

      {/* Overlay Layer */}
      {overlay !== "none" && (
        <div className={clsx("absolute inset-0 z-10", overlayClasses[overlay], blurClasses[backgroundBlur])} />
      )}

      {/* Content Layer */}
      <div className="relative z-20 h-full">{children}</div>
    </div>
  );
}

// Alternative version with multiple parallax layers for depth effect
interface ParallaxLayerProps {
  imageSrc: string;
  speed?: number;
  opacity?: number;
  zIndex?: number;
}

interface ParallaxSceneProps {
  children?: React.ReactNode;
  layers: ParallaxLayerProps[];
  height?: string;
  overlay?: "none" | "light" | "dark" | "gradient" | "royal";
  className?: string;
}

export function ParallaxScene({
  children,
  layers,
  height = "min-h-[600px]",
  overlay = "none",
  className,
}: ParallaxSceneProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Overlay classes
  const overlayClasses = {
    none: "",
    light: "bg-white/30",
    dark: "bg-black/50",
    gradient: "bg-gradient-to-b from-black/60 to-black/20",
    royal: "bg-gradient-to-br from-ukblue/60 to-ukred/30"
  };

  return (
    <div 
      ref={containerRef}
      className={twMerge(
        clsx(
          "relative overflow-hidden",
          height,
          className
        )
      )}
    >
      {/* Multiple Parallax Layers */}
      {layers.map((layer, index) => {
        const yPos = useTransform(
          scrollYProgress, 
          [0, 1], 
          ["0%", `${(layer.speed || 0.2) * 100}%`]
        );

        return (
          <motion.div 
            key={index}
            className="absolute inset-0 w-full h-full"
            style={{ 
              y: yPos,
              zIndex: layer.zIndex || 0
            }}
          >
            <Image
              src={layer.imageSrc}
              alt={`Parallax layer ${index}`}
              fill
              style={{ opacity: layer.opacity || 1 }}
              className="object-cover"
              priority={index === 0}
            />
          </motion.div>
        );
      })}

      {/* Overlay Layer */}
      {overlay !== "none" && (
        <div className={clsx("absolute inset-0 z-10", overlayClasses[overlay])} />
      )}

      {/* Content Layer */}
      <div className="relative z-20 h-full">{children}</div>
    </div>
  );
} 
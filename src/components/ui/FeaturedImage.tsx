"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

interface FeaturedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
  effect?: "zoom" | "fade" | "slide" | "none";
  overlay?: "none" | "light" | "dark" | "gradient" | "branded";
  rounded?: "none" | "sm" | "md" | "lg" | "full";
  aspectRatio?: "auto" | "square" | "video" | "portrait" | "landscape";
  caption?: React.ReactNode;
  captionPosition?: "inside" | "outside";
}

export function FeaturedImage({
  src,
  alt,
  width,
  height,
  priority = false,
  className,
  effect = "zoom",
  overlay = "none",
  rounded = "md",
  aspectRatio = "auto",
  caption,
  captionPosition = "outside",
}: FeaturedImageProps) {
  // Aspect ratio classes
  const aspectRatioClasses = {
    auto: "",
    square: "aspect-square",
    video: "aspect-video",
    portrait: "aspect-[3/4]",
    landscape: "aspect-[4/3]",
  };

  // Rounded corner classes
  const roundedClasses = {
    none: "",
    sm: "rounded-sm",
    md: "rounded-md overflow-hidden",
    lg: "rounded-lg overflow-hidden",
    full: "rounded-full overflow-hidden",
  };

  // Overlay gradients
  const overlayClasses = {
    none: "",
    light: "after:absolute after:inset-0 after:bg-white/10 after:z-10",
    dark: "after:absolute after:inset-0 after:bg-black/20 after:z-10",
    gradient: "after:absolute after:inset-0 after:bg-gradient-to-t after:from-black/60 after:to-transparent after:z-10",
    branded: "after:absolute after:inset-0 after:bg-gradient-to-br after:from-ukblue/30 after:to-ukred/20 after:z-10",
  };

  // Animation variants
  const imageAnimations = {
    zoom: {
      scale: 1.1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
    fade: {
      opacity: 0.8,
      transition: { duration: 0.3 },
    },
    slide: {
      x: 10,
      transition: { duration: 0.3 },
    },
    none: {},
  };

  return (
    <div className={twMerge(clsx("relative", className))}>
      <div
        className={clsx(
          "relative overflow-hidden",
          aspectRatioClasses[aspectRatio],
          roundedClasses[rounded],
          overlayClasses[overlay],
          "group"
        )}
      >
        <motion.div
          className="h-full w-full"
          whileHover={effect !== "none" ? imageAnimations[effect] : undefined}
        >
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            priority={priority}
            fill={!width || !height}
            className={clsx(
              "object-cover w-full h-full transition-all duration-500",
              rounded === "full" ? "rounded-full" : ""
            )}
          />
        </motion.div>

        {/* Caption inside image */}
        {caption && captionPosition === "inside" && (
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-white z-20">
            <div className="text-sm">{caption}</div>
          </div>
        )}
      </div>

      {/* Caption outside image */}
      {caption && captionPosition === "outside" && (
        <div className="mt-2 text-sm text-gray-600">{caption}</div>
      )}
    </div>
  );
} 
"use client";

import React from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

interface GradientBorderProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  borderWidth?: number;
  animated?: boolean;
  variant?: "primary" | "gold" | "royal" | "subtle";
  rounded?: "sm" | "md" | "lg" | "full";
}

export function GradientBorder({
  children,
  className,
  containerClassName,
  borderWidth = 2,
  animated = true,
  variant = "primary",
  rounded = "md",
}: GradientBorderProps) {
  // Gradient colors for different variants
  const gradients = {
    primary: "from-ukblue via-ukred to-ukblue",
    gold: "from-gold-500 via-gold-300 to-gold-500",
    royal: "from-ukblue via-gold-500 to-ukred",
    subtle: "from-silver-300 via-white to-silver-300",
  };

  // Border radius
  const roundedClasses = {
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    full: "rounded-full",
  };

  return (
    <motion.div
      className={twMerge(
        clsx(
          "p-[2px]",
          roundedClasses[rounded],
          `bg-gradient-to-br ${gradients[variant]}`,
          "bg-[length:200%_200%]",
          containerClassName
        )
      )}
      animate={animated ? {
        backgroundPosition: ["0% 0%", "100% 100%"],
      } : undefined}
      transition={animated ? {
        duration: 3,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse"
      } : undefined}
    >
      <div
        className={twMerge(
          clsx(
            "h-full w-full bg-white",
            roundedClasses[rounded],
            className
          )
        )}
      >
        {children}
      </div>
    </motion.div>
  );
} 
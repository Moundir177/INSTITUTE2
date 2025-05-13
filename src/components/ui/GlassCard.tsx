"use client";

import React from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";
import Link from "next/link";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  padding?: "none" | "sm" | "md" | "lg";
  radius?: "none" | "sm" | "md" | "lg" | "full";
  intensity?: "light" | "medium" | "heavy";
  border?: boolean;
  borderColor?: string;
  hoverEffect?: "lift" | "scale" | "glow" | "none";
  animated?: boolean;
}

export function GlassCard({
  children,
  className,
  href,
  onClick,
  padding = "md",
  radius = "md",
  intensity = "medium",
  border = true,
  borderColor,
  hoverEffect = "lift",
  animated = true,
}: GlassCardProps) {
  // Padding options
  const paddingClasses = {
    none: "p-0",
    sm: "p-3",
    md: "p-5",
    lg: "p-8",
  };

  // Border radius options
  const radiusClasses = {
    none: "rounded-none",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    full: "rounded-full",
  };

  // Backdrop intensity options
  const intensityClasses = {
    light: "bg-white/30 backdrop-blur-sm",
    medium: "bg-white/40 backdrop-blur-md",
    heavy: "bg-white/50 backdrop-blur-lg",
  };

  // Hover effect options
  const hoverClasses = {
    lift: "hover:-translate-y-1 hover:shadow-lg",
    scale: "hover:scale-[1.02]",
    glow: "hover:shadow-[0_0_15px_rgba(255,255,255,0.5)]",
    none: "",
  };

  const baseClasses = clsx(
    "relative overflow-hidden transition-all duration-300",
    paddingClasses[padding],
    radiusClasses[radius],
    intensityClasses[intensity],
    hoverEffect !== "none" && hoverClasses[hoverEffect],
    border && (borderColor ? `border border-${borderColor}` : "border border-white/20"),
  );

  // Animation variants
  const cardVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1]
      }
    },
  };

  const content = (
    <>
      {/* Optional decorative elements */}
      <div className="absolute -top-10 -right-10 w-20 h-20 rounded-full bg-darkblue/10 blur-xl"></div>
      <div className="absolute -bottom-10 -left-10 w-20 h-20 rounded-full bg-brand-gold-300/10 blur-xl"></div>
      
      {/* Main content */}
      <div className="relative z-10">{children}</div>
    </>
  );

  // Determine what component to render based on props
  const Component = animated ? motion.div : "div";
  const animationProps = animated
    ? {
        variants: cardVariants,
        initial: "initial",
        animate: "animate",
      }
    : {};

  // Helper function to apply correct props based on element type
  const getElementProps = () => {
    const commonProps = {
      className: twMerge(baseClasses, className),
      onClick,
      ...animationProps,
    };

    if (href) {
      return {
        href,
        ...commonProps,
      };
    }

    return commonProps;
  };

  // Return the appropriate element
  if (href) {
    // For Link components, explicitly set the required props
    return animated ? (
      <motion.div {...animationProps}>
        <Link 
          href={href} 
          className={twMerge(baseClasses, className)}
          onClick={onClick}
        >
          {content}
        </Link>
      </motion.div>
    ) : (
      <Link 
        href={href} 
        className={twMerge(baseClasses, className)}
        onClick={onClick}
      >
        {content}
      </Link>
    );
  }

  return <Component {...getElementProps()}>{content}</Component>;
} 
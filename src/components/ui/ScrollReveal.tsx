"use client";

import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number;
  delay?: number;
  distance?: number;
  once?: boolean;
  staggerChildren?: boolean;
  staggerDelay?: number;
  viewportAmount?: number;
  resetWhenInvisible?: boolean;
}

export function ScrollReveal({
  children,
  className,
  direction = "up",
  duration = 0.6,
  delay = 0,
  distance = 30,
  once = true,
  staggerChildren = false,
  staggerDelay = 0.1,
  viewportAmount = 0.2,
  resetWhenInvisible = false,
}: ScrollRevealProps) {
  // Calculate initial state based on direction
  const getInitialState = () => {
    switch (direction) {
      case "up":
        return { y: distance, opacity: 0 };
      case "down":
        return { y: -distance, opacity: 0 };
      case "left":
        return { x: distance, opacity: 0 };
      case "right":
        return { x: -distance, opacity: 0 };
      case "none":
        return { opacity: 0 };
      default:
        return { y: distance, opacity: 0 };
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: getInitialState(),
    visible: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        duration: duration,
        delay: delay,
        ease: [0.25, 0.1, 0.25, 1], // cubic-bezier easing
        when: staggerChildren ? "beforeChildren" : "afterChildren",
        staggerChildren: staggerChildren ? staggerDelay : 0,
      },
    },
  };

  // Child animation variants (used only when staggerChildren is true)
  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  // Wrap immediate children with motion.div when staggering
  const renderChildren = () => {
    if (!staggerChildren) return children;

    return React.Children.map(children, (child) => {
      if (!React.isValidElement(child)) return child;
      
      // Extract className if available
      const childClassName = child.props && 
        typeof child.props === 'object' ? 
        (child.props as {className?: string}).className : 
        undefined;
      
      return (
        <motion.div
          variants={childVariants}
          className={childClassName}
        >
          {child}
        </motion.div>
      );
    });
  };

  return (
    <motion.div
      className={twMerge(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: viewportAmount }}
      variants={containerVariants}
      animate={resetWhenInvisible ? undefined : "visible"}
    >
      {renderChildren()}
    </motion.div>
  );
}

// Additional export for a grid of staggered items
interface ScrollRevealGridProps {
  children: ReactNode[];
  className?: string;
  itemClassName?: string;
  columns?: number | { sm?: number; md?: number; lg?: number; xl?: number };
  gap?: string;
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number;
  staggerDelay?: number;
  once?: boolean;
}

export function ScrollRevealGrid({
  children,
  className,
  itemClassName,
  columns = { sm: 1, md: 2, lg: 3 },
  gap = "gap-6",
  direction = "up",
  duration = 0.5,
  staggerDelay = 0.1,
  once = true,
}: ScrollRevealGridProps) {
  // Build responsive column classes
  const getColumnClasses = () => {
    if (typeof columns === "number") {
      return `grid-cols-1 md:grid-cols-${columns}`;
    }

    const { sm = 1, md, lg, xl } = columns;
    return clsx(
      `grid-cols-${sm}`,
      md && `md:grid-cols-${md}`,
      lg && `lg:grid-cols-${lg}`,
      xl && `xl:grid-cols-${xl}`
    );
  };

  return (
    <div className={twMerge(clsx("grid", getColumnClasses(), gap, className))}>
      {children.map((child, index) => (
        <ScrollReveal
          key={index}
          direction={direction}
          delay={index * staggerDelay}
          duration={duration}
          once={once}
          className={itemClassName}
        >
          {child}
        </ScrollReveal>
      ))}
    </div>
  );
} 
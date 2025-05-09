"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

interface AnimatedCounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  delay?: number;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  decimalPlaces?: number;
  threshold?: number;
}

export function AnimatedCounter({
  value,
  prefix = "",
  suffix = "",
  duration = 1.5,
  delay = 0,
  className,
  size = "md",
  decimalPlaces = 0,
  threshold = 0.5,
}: AnimatedCounterProps) {
  const counterRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(counterRef, { once: true, amount: threshold });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: duration * 1000 });
  const [displayValue, setDisplayValue] = useState(0);

  // Font size classes based on size
  const sizeClasses = {
    sm: "text-xl md:text-2xl",
    md: "text-2xl md:text-3xl",
    lg: "text-3xl md:text-4xl",
    xl: "text-4xl md:text-5xl",
  };

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);

  useEffect(() => {
    const unsubscribe = springValue.onChange((latest: number) => {
      setDisplayValue(parseFloat(latest.toFixed(decimalPlaces)));
    });

    return unsubscribe;
  }, [springValue, decimalPlaces]);

  return (
    <motion.div
      ref={counterRef}
      className={twMerge(
        clsx(
          "font-bold",
          sizeClasses[size],
          className
        )
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      {prefix}
      {displayValue.toLocaleString()}
      {suffix}
    </motion.div>
  );
}

// Combined stat component with label
interface StatItemProps {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
  duration?: number;
  delay?: number;
  className?: string;
  valueClassName?: string;
  labelClassName?: string;
  size?: "sm" | "md" | "lg" | "xl";
  labelSize?: "xs" | "sm" | "md" | "lg";
  decimalPlaces?: number;
  threshold?: number;
}

export function StatItem({
  value,
  label,
  prefix,
  suffix,
  duration,
  delay,
  className,
  valueClassName,
  labelClassName,
  size = "lg",
  labelSize = "sm",
  decimalPlaces,
  threshold,
}: StatItemProps) {
  const labelSizeClasses = {
    xs: "text-xs",
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
  };

  return (
    <div className={twMerge(clsx("flex flex-col items-center", className))}>
      <AnimatedCounter
        value={value}
        prefix={prefix}
        suffix={suffix}
        duration={duration}
        delay={delay}
        size={size}
        decimalPlaces={decimalPlaces}
        threshold={threshold}
        className={valueClassName}
      />
      <motion.div 
        className={twMerge(clsx(
          "mt-2 text-center uppercase tracking-wider",
          labelSizeClasses[labelSize],
          labelClassName
        ))}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: (delay || 0) + 0.3 }}
      >
        {label}
      </motion.div>
    </div>
  );
} 
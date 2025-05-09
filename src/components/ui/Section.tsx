"use client";

import React from "react";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";
import { motion } from "framer-motion";
import { FloatingElements } from "./FloatingElements";

interface SectionProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  className?: string;
  containerClassName?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  contentClassName?: string;
  background?: "white" | "light" | "dark" | "primary" | "gradient" | "gray" | "ukblue" | "gold" | "silver-50";
  fullWidth?: boolean;
  id?: string;
  container?: boolean;
  pattern?: boolean;
  animate?: boolean;
  padding?: "none" | "sm" | "md" | "lg";
}

export function Section({
  children,
  title,
  subtitle,
  className,
  containerClassName,
  titleClassName,
  subtitleClassName,
  contentClassName,
  background = "white",
  fullWidth = false,
  id,
  container = true,
  pattern = false,
  animate = false,
  padding = "md",
}: SectionProps) {
  const backgroundClasses = {
    white: "bg-white",
    light: "bg-silver-50",
    dark: "bg-ukblue text-white",
    primary: "bg-ukblue/95 text-white",
    gradient: "bg-gradient-to-br from-ukblue via-ukblue/90 to-ukred/80 text-white",
    gray: "bg-silver-100",
    ukblue: "bg-ukblue text-white",
    gold: "bg-gold-500 text-white",
    "silver-50": "bg-silver-50",
  };

  const paddingClasses = {
    none: "",
    sm: "py-8 md:py-12",
    md: "py-12 md:py-16",
    lg: "py-16 md:py-24",
  };

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.6,
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const sectionClasses = twMerge(
    clsx(
      "relative overflow-hidden",
      backgroundClasses[background],
      paddingClasses[padding],
      className
    )
  );

  const containerClasses = twMerge(
    clsx(fullWidth ? "w-full" : "container-custom", containerClassName)
  );

  const titleClasses = twMerge(
    clsx(
      "text-3xl font-bold mb-4 text-center",
      background === "dark" || background === "primary" || background === "gradient" ? "text-white" : "text-gray-900", 
      titleClassName
    )
  );

  const subtitleClasses = twMerge(
    clsx(
      "text-lg mb-10 text-center max-w-3xl mx-auto",
      background === "dark" ? "text-silver-300" : 
      background === "primary" ? "text-silver-200" : "text-gray-600",
      subtitleClassName
    )
  );

  const contentClasses = twMerge(clsx(contentClassName));

  const content = container ? (
    <div className={containerClasses}>
      {title && <h2 className={titleClasses}>{title}</h2>}
      {subtitle && <p className={subtitleClasses}>{subtitle}</p>}
      <div className={contentClasses}>
        {animate ? (
          <motion.div
            variants={childVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {children}
          </motion.div>
        ) : (
          children
        )}
      </div>
    </div>
  ) : (
    animate ? (
      <motion.div
        variants={childVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {children}
      </motion.div>
    ) : (
      children
    )
  );

  return (
    <motion.section
      id={id}
      className={sectionClasses}
      variants={animate ? sectionVariants : undefined}
      initial={animate ? "hidden" : undefined}
      whileInView={animate ? "visible" : undefined}
      viewport={{ once: true, margin: "-100px" }}
    >
      {pattern && <FloatingElements variant={background === "dark" || background === "primary" || background === "gradient" ? "royal" : "default"} />}
      {content}
    </motion.section>
  );
} 
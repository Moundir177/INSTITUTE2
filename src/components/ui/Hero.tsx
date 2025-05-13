"use client";

import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";
import { Button } from "./Button";
import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  imageSrc: string;
  imageAlt?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  className?: string;
  imagePosition?: "right" | "left";
  size?: "sm" | "md" | "lg";
  overlay?: boolean;
  pattern?: boolean;
}

export function Hero({
  title,
  subtitle,
  description,
  imageSrc,
  imageAlt = "Hero image",
  primaryButtonText,
  primaryButtonHref,
  secondaryButtonText,
  secondaryButtonHref,
  className,
  imagePosition = "right",
  size = "lg",
  overlay = false,
  pattern = false,
}: HeroProps) {
  const { isRTL } = useTheme();
  const sizeClasses = {
    sm: "py-10 md:py-16",
    md: "py-16 md:py-24",
    lg: "py-20 md:py-32",
  };

  const containerClasses = twMerge(
    clsx(
      "container-custom flex flex-col items-center",
      imagePosition === "right" ? "md:flex-row" : "md:flex-row-reverse",
      overlay ? "relative z-10" : "",
      className
    )
  );

  // Animations
  const titleAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };
  
  const descriptionAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.2,
        ease: "easeOut"
      }
    }
  };
  
  const buttonAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.4,
        ease: "easeOut"
      }
    }
  };

  const contentContainer = (
    <div className={clsx(
      "w-full md:w-1/2 text-center md:text-left relative",
      overlay ? "text-white" : ""
    )}>
      {subtitle && (
        <motion.span 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase rounded-full bg-brand-gold-100 text-brand-gold-800 mb-4 shadow-sm"
        >
          {subtitle}
        </motion.span>
      )}
      <motion.h1 
        variants={titleAnimation}
        initial="hidden"
        animate="visible"
        className={clsx(
          "text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight",
          overlay ? "text-white" : "text-gray-900",
          isRTL ? 'rtl' : ''
        )}
      >
        {title}
      </motion.h1>
      {description && (
        <motion.p 
          variants={descriptionAnimation}
          initial="hidden"
          animate="visible"
          className={clsx(
            "text-lg mb-8 max-w-lg",
            overlay ? "text-lightgray" : "text-gray-600",
            isRTL ? 'rtl' : ''
          )}
        >
          {description}
        </motion.p>
      )}
      {(primaryButtonText || secondaryButtonText) && (
        <motion.div 
          variants={buttonAnimation}
          initial="hidden"
          animate="visible"
          className={clsx(
            "flex flex-col sm:flex-row gap-4 justify-center md:justify-start",
            isRTL ? 'flex-row-reverse' : ''
          )}
        >
          {primaryButtonText && primaryButtonHref && (
            <Button href={primaryButtonHref} variant="gradient" size="lg">
              {primaryButtonText}
            </Button>
          )}
          {secondaryButtonText && secondaryButtonHref && (
            <Button href={secondaryButtonHref} variant="outline" size="lg">
              {secondaryButtonText}
            </Button>
          )}
        </motion.div>
      )}
      
      {pattern && !overlay && (
        <div className="absolute -z-10 -top-10 -left-10 w-72 h-72 bg-darkblue/5 rounded-full blur-3xl" />
      )}
    </div>
  );

  const imageContainer = (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="w-full md:w-1/2 mt-8 md:mt-0 relative"
    >
      <div className="relative w-full overflow-hidden rounded-2xl aspect-[4/3] shadow-xl">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      
      {pattern && (
        <>
          <div className="absolute -z-10 -bottom-10 right-10 w-40 h-40 bg-brand-gold-300/30 rounded-full blur-2xl" />
          <div className="absolute -z-10 -top-10 -right-10 w-60 h-60 bg-gray/10 rounded-full blur-3xl" />
        </>
      )}
    </motion.div>
  );

  if (overlay) {
    return (
      <section className={clsx("relative", sizeClasses[size])}>
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-darkblue/90 to-darkblue/70" />
        </div>
        <div className={containerClasses}>
          {contentContainer}
        </div>
      </section>
    );
  }

  return (
    <section className={clsx("overflow-hidden relative", sizeClasses[size])}>
      {pattern && (
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-darkblue/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-gold-300/20 rounded-full blur-3xl" />
        </div>
      )}
      <div className={containerClasses}>
        {contentContainer}
        {imageContainer}
      </div>
    </section>
  );
} 
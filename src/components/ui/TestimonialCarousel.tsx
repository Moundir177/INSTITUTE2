"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaQuoteLeft, FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface Testimonial {
  name: string;
  program?: string;
  year?: string;
  image: string;
  quote: string;
  role?: string;
  company?: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
  autoPlay?: boolean;
  interval?: number;
  variant?: "light" | "dark";
  className?: string;
}

export function TestimonialCarousel({
  testimonials,
  autoPlay = true,
  interval = 5000,
  variant = "light",
  className = "",
}: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [isPaused, setIsPaused] = useState(false);

  // Validate testimonials array
  const validTestimonials = Array.isArray(testimonials) && testimonials.length > 0 ? testimonials : [
    {
      name: "Sample Testimonial",
      image: "/images/testimonial-default.jpg",
      quote: "This is a placeholder testimonial. Add real testimonials to see them displayed here.",
      program: "Sample Program",
      year: "2023"
    }
  ];

  // Reset index when testimonials change
  useEffect(() => {
    setCurrentIndex(0);
  }, [testimonials]);

  // Auto-play logic
  useEffect(() => {
    if (!autoPlay || isPaused || validTestimonials.length <= 1) return;

    const timer = setTimeout(() => {
      setDirection("right");
      setCurrentIndex((prevIndex) => (prevIndex + 1) % validTestimonials.length);
    }, interval);

    return () => clearTimeout(timer);
  }, [currentIndex, autoPlay, interval, isPaused, validTestimonials.length]);

  const handlePrevious = () => {
    setDirection("left");
    setCurrentIndex((prevIndex) => (prevIndex - 1 + validTestimonials.length) % validTestimonials.length);
  };

  const handleNext = () => {
    setDirection("right");
    setCurrentIndex((prevIndex) => (prevIndex + 1) % validTestimonials.length);
  };

  const variants = {
    enter: (direction: "left" | "right") => ({
      x: direction === "right" ? 200 : -200,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: "left" | "right") => ({
      x: direction === "right" ? -200 : 200,
      opacity: 0,
    }),
  };

  const bgColor = variant === "light" ? "bg-white" : "bg-darkblue";
  const textColor = variant === "light" ? "text-gray-800" : "text-white";
  const quoteColor = variant === "light" ? "text-darkblue/10" : "text-white/10";
  const buttonBgColor = variant === "light" ? "bg-lightgray hover:bg-brand-gray-200" : "bg-white/10 hover:bg-white/20";
  const buttonTextColor = variant === "light" ? "text-gray-600" : "text-white";
  const secondaryTextColor = variant === "light" ? "text-gray-500" : "text-lightgray";

  return (
    <div 
      className={`relative ${bgColor} rounded-xl shadow-md overflow-hidden ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="p-8 md:p-12">
        <div className="absolute top-8 left-8">
          <FaQuoteLeft className={`text-5xl ${quoteColor}`} />
        </div>
        
        <div className="relative min-h-[200px] flex items-center justify-center">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: "tween", duration: 0.5 }}
              className="absolute w-full text-center"
            >
              <blockquote className={`${textColor} text-lg md:text-xl italic mb-8 max-w-2xl mx-auto`}>
                {validTestimonials[currentIndex].quote}
              </blockquote>
              <div className="flex items-center justify-center">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-gold">
                  <Image
                    src={validTestimonials[currentIndex].image}
                    alt={validTestimonials[currentIndex].name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="ml-4 text-left">
                  <h4 className={`font-semibold ${textColor}`}>{validTestimonials[currentIndex].name}</h4>
                  {validTestimonials[currentIndex].program && validTestimonials[currentIndex].year && (
                    <p className={secondaryTextColor}>{validTestimonials[currentIndex].program}, Class of {validTestimonials[currentIndex].year}</p>
                  )}
                  {validTestimonials[currentIndex].role && (
                    <p className={secondaryTextColor}>{validTestimonials[currentIndex].role}</p>
                  )}
                  {validTestimonials[currentIndex].company && (
                    <p className="text-gold text-sm">{validTestimonials[currentIndex].company}</p>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {validTestimonials.length > 1 && (
          <div className="flex justify-center gap-2 mt-8">
            <button
              onClick={handlePrevious}
              className={`w-10 h-10 rounded-full ${buttonBgColor} ${buttonTextColor} flex items-center justify-center transition-colors`}
              aria-label="Previous testimonial"
            >
              <FaArrowLeft size={14} />
            </button>
            <div className="flex items-center gap-2">
              {validTestimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > currentIndex ? "right" : "left");
                    setCurrentIndex(i);
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === currentIndex
                      ? "bg-gold w-4"
                      : variant === "light"
                      ? "bg-brand-gray-300"
                      : "bg-white/30"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={handleNext}
              className={`w-10 h-10 rounded-full ${buttonBgColor} ${buttonTextColor} flex items-center justify-center transition-colors`}
              aria-label="Next testimonial"
            >
              <FaArrowRight size={14} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
} 
"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface TestimonialCardProps {
  name: string;
  program: string;
  year: string;
  image: string;
  quote: string;
  className?: string;
}

export function TestimonialCard({
  name,
  program,
  year,
  image,
  quote,
  className,
}: TestimonialCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={`bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow ${className}`}
    >
      <div className="flex items-start mb-6">
        <div className="relative w-14 h-14 rounded-full overflow-hidden mr-4 flex-shrink-0 border-2 border-ukblue">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h3 className="font-bold text-lg">{name}</h3>
          <p className="text-sm text-gray-600">{program}, Class of {year}</p>
        </div>
      </div>
      
      <div className="relative">
        <div className="text-5xl text-ukblue/10 absolute top-0 left-0">"</div>
        <p className="text-gray-600 italic pl-6 pr-6 relative z-10">{quote}</p>
        <div className="text-5xl text-ukblue/10 absolute bottom-0 right-0">"</div>
      </div>
      
      <div className="mt-4 pt-4 border-t border-silver-200">
        <div className="flex space-x-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <svg 
              key={star} 
              className="w-4 h-4 text-gold-500" 
              fill="currentColor" 
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
      </div>
    </motion.div>
  );
} 
"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface StatCardProps {
  value: number;
  label: string;
  symbol?: string;
  duration?: number;
  icon?: React.ReactNode;
  className?: string;
}

export function StatCard({
  value,
  label,
  symbol = "",
  duration = 2,
  icon,
  className,
}: StatCardProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = Math.min(value, 9999);
      const incrementTime = Math.floor(duration * 1000 / end);
      
      // Don't want to increment every single number for large values
      const step = end > 50 ? Math.floor(end / 50) : 1;
      
      const timer = setInterval(() => {
        start += step;
        if (start > end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, incrementTime);
      
      return () => clearInterval(timer);
    }
  }, [isInView, value, duration]);
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
      className={`bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow ${className}`}
    >
      <div className="flex items-start">
        {icon && (
          <div className="w-12 h-12 rounded-full bg-ukblue/10 flex items-center justify-center text-ukblue text-xl mr-4">
            {icon}
          </div>
        )}
        <div>
          <div className="flex items-end">
            <span className="text-3xl md:text-4xl font-bold text-ukblue">
              {count}
            </span>
            {symbol && <span className="text-xl text-ukblue ml-1">{symbol}</span>}
          </div>
          <p className="text-gray-600 mt-1">{label}</p>
        </div>
      </div>
    </motion.div>
  );
} 
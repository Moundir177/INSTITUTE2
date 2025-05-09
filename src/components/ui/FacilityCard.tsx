"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";

interface FacilityCardProps {
  name: string;
  description: string;
  features: string[];
  image: string;
  icon?: React.ReactNode;
  className?: string;
}

export function FacilityCard({
  name,
  description,
  features,
  image,
  icon,
  className,
}: FacilityCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className={`bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all ${className}`}
    >
      <div className="relative h-52">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />
        <div 
          className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"
        />
        <div className="absolute bottom-0 left-0 p-5 text-white">
          {icon && (
            <div className="w-10 h-10 bg-ukblue/80 rounded-full flex items-center justify-center mb-2">
              {icon}
            </div>
          )}
          <h3 className="font-bold text-xl">{name}</h3>
        </div>
      </div>
      
      <div className="p-5">
        <p className="text-gray-600 text-sm mb-5">{description}</p>
        
        <h4 className="font-semibold text-sm uppercase tracking-wider text-ukblue mb-3">Key Features</h4>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex text-sm">
              <span className="text-green-500 mr-2 mt-0.5">
                <FaCheck />
              </span>
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
} 
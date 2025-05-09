"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaCalendarAlt, FaClock } from "react-icons/fa";
import { Button } from "./Button";

interface EventCardProps {
  title: string;
  description: string;
  date: string;
  time?: string;
  location: string;
  image: string;
  href?: string;
  className?: string;
}

export function EventCard({
  title,
  description,
  date,
  time,
  location,
  image,
  href,
  className,
}: EventCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className={`bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow ${className}`}
    >
      <div className="relative h-48">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
        <div className="absolute top-0 left-0 bg-ukblue text-white text-xs font-medium px-3 py-1 m-3 rounded">
          {date}
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-bold text-lg mb-2 line-clamp-1">{title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{description}</p>
        
        <div className="space-y-2 text-sm text-gray-600 mb-4">
          {time && (
            <div className="flex items-center">
              <FaClock className="mr-2 text-ukblue" />
              <span>{time}</span>
            </div>
          )}
          <div className="flex items-center">
            <FaMapMarkerAlt className="mr-2 text-ukblue" />
            <span>{location}</span>
          </div>
        </div>
        
        {href && (
          <Button
            variant="outline"
            href={href}
            className="w-full justify-center text-sm hover:bg-ukblue hover:text-white"
          >
            View Details
          </Button>
        )}
      </div>
    </motion.div>
  );
} 